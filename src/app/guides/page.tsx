import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Guides - EuroRace",
  description: "Learn how to use EuroRace with our comprehensive step-by-step guides.",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            How to Guides
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Step-by-step instructions to help you get the most out of your EuroRace adventure.
          </p>
        </div>

        {/* Guides Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Link href="/guides/how-to-sign-up" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                👋
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Signing Up and Profile Management
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to create an account, verify your details, complete your profile, and securely log out.
              </p>
            </div>
          </Link>

          <Link href="/guides/how-to-create-a-trip" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🗺️
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                How to Create a New Trip
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to set up a new cross-European race event using the administrative onboarding wizard.
              </p>
            </div>
          </Link>

          <Link href="/guides/how-to-manage-trip" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                ⚙️
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                How to Manage a Trip
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn how trip organisers edit overall parameters, write formatted rules, and handle event deletion.
              </p>
            </div>
          </Link>

          <Link href="/guides/how-to-plan-itinerary" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                📍
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                How to Plan an Itinerary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to define the physical path of your race, configure individual legs, and set up checkpoint coordinates.
              </p>
            </div>
          </Link>

          <Link href="/guides/how-to-manage-teams" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                👥
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                How to Manage Teams
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to establish competing team structures, invite participants via secure email, and manage guest access.
              </p>
            </div>
          </Link>

          <Link href="/guides/trip-organiser-management" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                👑
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Trip Organiser Management
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn about the core privileges, dashboards, and responsibilities of a trip organiser.
              </p>
            </div>
          </Link>

          <Link href="/guides/how-to-record-journeys" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🚆
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Recording and Logging Journeys
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to use the intelligent transit discovery assistant to record transport segments and map tracks across Europe.
              </p>
            </div>
          </Link>

          <Link href="/guides/how-to-enter-an-expense" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                💸
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                How to Enter an Expense
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to quickly log travel costs, use the AI receipt scanner, and keep your team's budget automatically synchronised.
              </p>
            </div>
          </Link>

          <Link href="/guides/how-to-submit-photos" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                📸
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                How to Submit Photos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Step-by-step instructions on navigating the upload grid, compressing images, adding captions, and using the AI judging engine.
              </p>
            </div>
          </Link>

          <Link href="/guides/how-to-purchase-licence" className="block group">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30 h-full space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                💳
              </div>
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                Purchasing a Trip Licence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to upgrade your trip from the standard Free Tier to a Premium Licence using our integrated payment system.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
