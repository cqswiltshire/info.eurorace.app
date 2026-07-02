import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - EuroRace",
  description: "Discover the features that make EuroRace the ultimate platform for racing enthusiasts.",
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            EuroRace Features
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to plan, track, and dominate your next European racing adventure.
          </p>
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">Overview</h2>
          <div className="prose prose-blue max-w-none text-muted-foreground text-lg leading-relaxed space-y-4">
            <p>
              <strong>Euro Race</strong> is the ultimate cross-platform application for managing and tracking race events across European destinations. 
              Whether you're an organiser planning the perfect route, or a team racing to the finish line, we've built the tools to make your journey seamless.
            </p>
            <p>
              Best of all, EuroRace is built to travel with you. With deep offline support, you can continue to log expenses, check your itinerary, and prepare photo submissions even while riding a train through a cellular dead zone.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Box 1 */}
          <div className="p-8 rounded-2xl bg-card border shadow-sm space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="text-xl font-bold">Effortless Route Logging</h3>
            <p className="text-muted-foreground">
              Easily record the exact journey your team has taken. Our intelligent system matches your entered checkpoints against European train, bus, and flight timetables to keep your itinerary and maps perfectly synced.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-8 rounded-2xl bg-card border shadow-sm space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="text-xl font-bold">Automated Photo Challenges</h3>
            <p className="text-muted-foreground">
              Complete daily or leg-based photo challenges to earn points. Our advanced AI instantly judges submissions based on creativity and the rules set by your organiser, keeping the competition fast and fun.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-8 rounded-2xl bg-card border shadow-sm space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💸</span>
            </div>
            <h3 className="text-xl font-bold">Effortless Expense Tracking</h3>
            <p className="text-muted-foreground">
              Log your receipts on the go. EuroRace automatically converts foreign currencies into your base currency using real-time exchange rates, ensuring your team's budget is always accurate and audit-ready.
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-8 rounded-2xl bg-card border shadow-sm space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌫️</span>
            </div>
            <h3 className="text-xl font-bold">Fog of War</h3>
            <p className="text-muted-foreground">
              Keep your strategies secret! Your checkpoints, expenses, and photos are completely hidden from rival teams until everyone has completed the current leg of the race.
            </p>
          </div>

        </div>

        {/* Security & Access */}
        <section className="space-y-4 pt-8 border-t border-border">
          <h2 className="text-3xl font-bold text-primary">Security & Access</h2>
          <div className="prose prose-blue max-w-none text-muted-foreground text-lg leading-relaxed space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Passwordless Login:</strong> Sign in instantly and securely using your phone's built-in biometric passkeys (FaceID/Fingerprint) or your Google account.</li>
              <li><strong>Shared Booking Documents:</strong> Upload and share PDF tickets or accommodation confirmations directly within the app so your whole team has access.</li>
              <li><strong>Install Anywhere:</strong> No App Store required. Install EuroRace directly to your iPhone or Android home screen for a full-screen, native experience.</li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
}
