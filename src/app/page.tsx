"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [installOS, setInstallOS] = useState<"ios" | "android" | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 relative">
      <div className="max-w-4xl w-full text-center space-y-12 animate-in fade-in zoom-in duration-700">

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-40 h-40 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <Image
              src="/icon-512.png"
              alt="EuroRace App Icon"
              fill
              sizes="160px"
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-primary drop-shadow-sm">
            EuroRace
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Race your friends across the European transport network: out-plan them on the budget, out-run them to the checkpoints, and capture the unscripted stories along the way.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-6 pt-4">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a
              href="https://eurorace.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-card text-card-foreground border-2 border-border font-bold text-lg rounded-xl shadow-sm hover:bg-accent hover:border-primary/50 transition-all active:scale-95"
            >
              Enter Race Hub
            </a>
            <button
              onClick={() => setInstallOS("ios")}
              className="w-full sm:w-auto px-6 py-4 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl shadow-sm hover:bg-secondary/80 hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              🍏 Install iOS
            </button>
            <button
              onClick={() => setInstallOS("android")}
              className="w-full sm:w-auto px-6 py-4 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl shadow-sm hover:bg-secondary/80 hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              🤖 Install Android
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <Link
              href="/docs"
              className="flex-1 sm:flex-none px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl shadow-lg hover:bg-primary/90 hover:scale-105 transition-all active:scale-95 text-center"
            >
              Features
            </Link>
            <Link
              href="/guides"
              className="flex-1 sm:flex-none px-8 py-4 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl shadow-sm hover:bg-secondary/80 hover:scale-105 transition-all active:scale-95 text-center"
            >
              Guides
            </Link>
            <Link
              href="/faq"
              className="flex-1 sm:flex-none px-8 py-4 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl shadow-sm hover:bg-secondary/80 hover:scale-105 transition-all active:scale-95 text-center"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Core Concept */}
        <div className="pt-16 max-w-3xl mx-auto text-left">
          <div className="p-8 rounded-3xl bg-card border shadow-md space-y-6">
            <h2 className="text-3xl font-extrabold text-foreground">The Ultimate Trans-European Adventure—Without the Overhead</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Organising a multi-day race across the continent shouldn't require a spreadsheet degree. We believe the thrill of the adventure lives in the split-second decisions at train stations, the tight budget maneuvering, and the unscripted chaos of the open road.
              </p>
              <p>
                While you and your friends retain 100% of the fun, tactics, and glory of planning your routes across Europe, EuroRace exists to completely handle the administrative drudgery.
              </p>
              <p>
                From logging expenses and OCR-scanning foreign receipts, to snapping GPS tracks to the rail network and autonomously scoring your daily photo challenges, we automate the heavy lifting so you can focus purely on the race.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-muted-foreground animate-in fade-in duration-1000 delay-300">
        <p>© 2026 EuroRace. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </div>
      </footer>

      {/* Installation Modal Overlay */}
      {installOS && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-card border shadow-2xl rounded-2xl max-w-lg w-full p-8 relative animate-in zoom-in-95 duration-300">

            <button
              onClick={() => setInstallOS(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-primary mb-2">
              Install {installOS === "ios" ? "🍏 iPhone (iOS)" : "🤖 Android"}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              EuroRace is a Progressive Web App (PWA). Follow these steps to install it directly to your home screen for a full native experience.
            </p>

            {installOS === "ios" ? (
              <ol className="list-decimal pl-5 space-y-4 text-foreground text-left">
                <li>Open <strong>Safari</strong> and navigate to <a href="https://eurorace.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">eurorace.app</a>. <br /><span className="text-sm text-muted-foreground">(Note: This must be done in Safari, not Chrome.)</span></li>
                <li>Tap the <strong>Share</strong> icon at the bottom of the screen (the square with an arrow pointing up).</li>
                <li>Scroll down the share menu and tap <strong>"Add to Home Screen"</strong>.</li>
                <li>Confirm the app name and tap <strong>"Add"</strong> in the top right corner.</li>
              </ol>
            ) : (
              <ol className="list-decimal pl-5 space-y-4 text-foreground text-left">
                <li>Open <strong>Chrome</strong> and navigate to <a href="https://eurorace.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">eurorace.app</a>.</li>
                <li>Look for an "Install App" banner at the bottom of the screen, or tap the <strong>Menu</strong> icon (three dots in the top right corner).</li>
                <li>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong> from the menu.</li>
                <li>Confirm by tapping <strong>"Install"</strong> or <strong>"Add"</strong> on the prompt.</li>
              </ol>
            )}

            <button
              onClick={() => setInstallOS(null)}
              className="w-full mt-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
