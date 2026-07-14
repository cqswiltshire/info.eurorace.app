import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - EuroRace",
  description: "Everything you need to plan, track, and dominate your next European racing adventure.",
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            EuroRace Features
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to plan, track, and dominate your next European racing adventure.
          </p>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">Overview</h2>
          <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-4">
            <p>
              EuroRace is the ultimate platform for managing, tracking, and executing competitive races across Europe by public transport. Whether you're an organiser mapping out an epic sequence of checkpoints, or a racer battling your friends to the finish line, we’ve built the ecosystem to bring your adventure to life.
            </p>
            <p>
              Best of all, EuroRace is built for the open road. It is entirely free of banner ads, completely unrestricted by time limits, and offers a generous free tier that gives you 100% functionality straight out of the box. With deep offline persistence, you can seamlessly plot your next move, log costs, and queue your photo proofs even while standard networks cut out on international trains.
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
            <h3 className="text-xl font-bold text-foreground">Custom Route Tracking</h3>
            <p className="font-medium text-foreground text-sm">Your race, your rules. Plot your own path between the checkpoints.</p>
            <p className="text-muted-foreground text-sm leading-relaxed pt-2">
              There is no fixed track here. Once the starting grid clears, it's up to your team to navigate the open public transport network. Log your journeys on the go, and watch your custom route dynamically snap to high-fidelity European rail and road networks.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-8 rounded-2xl bg-card border shadow-sm space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💸</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Fast Expense Logging & Currency Normalisation</h3>
            <p className="font-medium text-foreground text-sm">Keep your budget audit-ready without touching a calculator.</p>
            <p className="text-muted-foreground text-sm leading-relaxed pt-2">
              Whip out your phone, snap a picture of your receipt, and let our intelligent processing automatically detect the amount, date, and category (Accommodation, Travel, or Food). To keep the competition perfectly fair, every foreign cost is locked and converted using precision historical exchange rates from the exact day you spent it—protecting your standing from future market fluctuations.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-8 rounded-2xl bg-card border shadow-sm space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Automated AI Judging & Photo Challenges</h3>
            <p className="font-medium text-foreground text-sm">Instant, balanced scoring for your creative discoveries.</p>
            <p className="text-muted-foreground text-sm leading-relaxed pt-2">
              Compete in daily or leg-based photo prompts designed by your organiser. Eliminate biased group arguments: our advanced AI judge evaluates team captions and imagery against the unique rules of your trip, generating a score out of 10 alongside written critiques delivered straight to the dashboard.
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-8 rounded-2xl bg-card border shadow-sm space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌫️</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Competitive Fog of War</h3>
            <p className="font-medium text-foreground text-sm">Keep your transit strategies and hidden costs completely secret.</p>
            <p className="text-muted-foreground text-sm leading-relaxed pt-2">
              To maintain absolute suspense, your team's logged routes, checkpoints, creative photos, and financial spending are entirely invisible to your friends. Gated data only unmasks itself to reveal rival paths on the leaderboard once every active participatory team safely crosses the final checkpoint of that leg.
            </p>
          </div>

        </div>

        {/* Race-Day Essentials */}
        <section className="space-y-6 pt-8 border-t border-border">
          <h2 className="text-3xl font-bold text-primary">Race-Day Essentials</h2>
          <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-4">
            <ul className="list-disc pl-6 space-y-4">
              <li><strong className="text-foreground">Passwordless Biometric Sign-In:</strong> Forget struggling with forgotten passwords on a frantic platform connection. Log in instantly using your device’s native biometrics (FaceID/Fingerprint) or your Google account.</li>
              <li><strong className="text-foreground">Shared Booking Vault:</strong> Keep your entire team aligned. Upload accommodation vouchers or PDF rail tickets directly to individual itinerary legs so anyone can access them instantly via an internal document viewer.</li>
              <li><strong className="text-foreground">Install Everywhere as a PWA:</strong> Skip the App Store clutter. Install EuroRace directly from your mobile browser to your home screen for a full-screen, responsive, offline-first experience.</li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
}
