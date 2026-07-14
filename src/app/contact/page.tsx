"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const category = formData.get("category") as string;
    const message = formData.get("message") as string;
    const file = formData.get("screenshot") as File;

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setStatus("error");
      setErrorMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    let attachmentBase64 = null;
    let attachmentName = null;

    if (file && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        setStatus("error");
        setErrorMessage("File must be less than 5MB.");
        recaptchaRef.current?.reset();
        return;
      }
      attachmentName = file.name;
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = "";
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      attachmentBase64 = btoa(binary);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          category,
          message,
          token,
          attachmentBase64,
          attachmentName,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
      recaptchaRef.current?.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message.");
      recaptchaRef.current?.reset();
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8 text-center">
          <Link href="/" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a suggestion, found a bug, or just want to chat? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
          {status === "success" ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                ✓
              </div>
              <h2 className="text-3xl font-bold text-foreground">Message Sent!</h2>
              <p className="text-muted-foreground text-lg">
                Thank you for reaching out. We've received your message and will get back to you shortly.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-semibold text-foreground">How can we help?</label>
                <select 
                  id="category" 
                  name="category"
                  required
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50"
                  defaultValue=""
                >
                  <option value="" disabled>Select a category...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Enhancement Request">Enhancement Request</option>
                  <option value="Report a Defect">Report a Defect</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  required 
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50 resize-y"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <div className="space-y-2">
                <label htmlFor="screenshot" className="text-sm font-semibold text-foreground">Attach a Screenshot (Optional)</label>
                <input 
                  type="file" 
                  id="screenshot" 
                  name="screenshot" 
                  accept="image/png, image/jpeg, image/webp"
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow disabled:opacity-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                />
                <p className="text-xs text-muted-foreground mt-1">Max file size: 5MB. Supported formats: JPG, PNG, WEBP.</p>
              </div>

              {/* ReCAPTCHA */}
              <div className="pt-2 flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                  theme="light"
                />
              </div>

              {status === "error" && (
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-xl text-sm font-semibold">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
