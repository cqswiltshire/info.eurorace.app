import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, category, message, token, attachmentBase64, attachmentName } = body;

    if (!name || !email || !category || !message || !token) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // 1. Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"; // Test secret key
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${recaptchaSecret}&response=${token}`,
    });

    const recaptchaData = await recaptchaRes.json();
    
    if (!recaptchaData.success) {
      return NextResponse.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
    }

    // 2. Dispatch email via Brevo SMTP
    const smtpUser = process.env.BREVO_SMTP_USER;
    const smtpKey = process.env.BREVO_SMTP_KEY;
    const emailFrom = process.env.EMAIL_FROM || "noreply@eurorace.app";
    
    if (!smtpUser || !smtpKey) {
      console.warn("No BREVO_SMTP_USER or BREVO_SMTP_KEY configured. Logging submission instead.");
      console.log("Contact Submission:", { name, email, category, message, hasAttachment: !!attachmentBase64 });
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: smtpUser,
        pass: smtpKey,
      },
    });

    const mailOptions: any = {
      from: `"EuroRace Info Site" <${emailFrom}>`,
      to: "support@eurorace.app",
      replyTo: `"${name}" <${email}>`,
      subject: `[${category}] New message from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Category:</strong> ${category}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    if (attachmentBase64 && attachmentName) {
      mailOptions.attachments = [
        {
          filename: attachmentName,
          content: attachmentBase64,
          encoding: 'base64'
        }
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
