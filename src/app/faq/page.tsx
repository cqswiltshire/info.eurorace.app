import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - EuroRace",
  description: "Answers to common questions about tracking, expenses, offline mode, and premium subscriptions on EuroRace.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8 text-center">
          <Link href="/" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Technical & Setup FAQs */}
        <details open className="group space-y-6">
          <summary className="list-none cursor-pointer flex items-center justify-between text-2xl font-bold text-primary border-b border-border pb-2 outline-none [&::-webkit-details-marker]:hidden">
            Technical & Setup FAQs
            <span className="transition-transform group-open:rotate-180 text-muted-foreground text-xl">▼</span>
          </summary>
          
          <div className="space-y-4 pt-4">
            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                How does the app track my journey automatically?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  When you log a travel segment, our transit discovery engine attempts a high-fidelity "Zero AI" lookup against official public transport databases, such as Great Britain’s Realtime Trains API or the Austrian Data Business Platform. If official timetables are missing, the system uses an intelligent search assistant to find the closest matches. Once a journey is logged, the app works in the background to automatically map out high-fidelity geometric track lines across your map interface.
                </p>
              </div>
            </details>

            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                Can I log entries or check data when I am offline?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  Yes. The app is built as a Progressive Web App (PWA) with built-in offline synchronisation. If you lose your mobile signal while travelling through remote areas or tunnels, you can still view your cached itinerary, teams, and logs. You can also queue new expenses or checkpoint times; the app will safely hold them on your device and upload them automatically the moment your network connection is restored.
                </p>
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mt-4">
                  <h4 className="text-lg font-bold text-destructive flex items-center gap-2 mb-2">
                    <span>⚠️</span> WARNING: Bypassed Offline Features
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    Certain features require an active connection and cannot be queued offline. These include uploading raw media files (photos or receipts), running live exchange rate calculations, and executing AI timetable lookups.
                  </p>
                </div>
              </div>
            </details>

            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                Why is the team dropdown menu disabled when I try to submit data?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  To protect competitive integrity under our strict privacy protocols, participants and trip organisers are automatically locked to their assigned team when logging expenses, checkpoints, journeys, or photos. This completely rules out accidental data entry or tampering on a rival team’s logs.
                </p>
              </div>
            </details>

            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                Why can't I see the active photos or expenses of rival teams?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  The race operates under a competitive "Fog of War" privacy policy. To keep strategies fair, a specific itinerary leg remains strictly hidden from rival teams until an unmasking threshold is crossed. All data for a leg is automatically revealed only when every active participatory team has safely logged their arrival checkpoint at the end of that stage, or when the overall trip is marked complete by the organisers.
                </p>
              </div>
            </details>
          </div>
        </details>

        {/* Financial & Expense FAQs */}
        <details open className="group space-y-6 pt-4">
          <summary className="list-none cursor-pointer flex items-center justify-between text-2xl font-bold text-primary border-b border-border pb-2 outline-none [&::-webkit-details-marker]:hidden">
            Financial & Expense FAQs
            <span className="transition-transform group-open:rotate-180 text-muted-foreground text-xl">▼</span>
          </summary>
          
          <div className="space-y-4 pt-4">
            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                How are different currencies handled on international legs?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  All spending is normalised automatically using a self-healing exchange rate registry. When you enter an expense in a local currency (e.g. Hungarian Forint), the app pulls the official historical exchange rate from the Frankfurter API matching the exact date on your receipt. It then converts and locks a fixed value in your trip's base currency (e.g. Euros) at the point of submission. This ensures your team's budget score is never impacted by future exchange rate fluctuations.
                </p>
              </div>
            </details>

            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                How does the automated receipt scanner work?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  When you upload a receipt photo or PDF, the app triggers a two-stage digital pipeline. First, it runs Optical Character Recognition (OCR) via the Google Cloud Vision API to extract raw text lines. Then, it passes the text to our Gemini AI engine, which intelligently filters out the receipt date, total amount, currency, and description, and maps it to a fixed category (Accommodation, Travel, or Food).
                </p>
              </div>
            </details>
          </div>
        </details>

        {/* Licensing & Subscription FAQs */}
        <details open className="group space-y-6 pt-4">
          <summary className="list-none cursor-pointer flex items-center justify-between text-2xl font-bold text-primary border-b border-border pb-2 outline-none [&::-webkit-details-marker]:hidden">
            Licensing & Subscription FAQs
            <span className="transition-transform group-open:rotate-180 text-muted-foreground text-xl">▼</span>
          </summary>
          
          <div className="space-y-4 pt-4">
            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                What is the difference between a Free Trip and a Premium Trip?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  Every newly created trip starts on our standard Free Tier. Free trips are subject to strict platform usage quotas to ensure infrastructure sustainability. If a trip remains on the Free Tier, the entire event is collectively limited to a maximum of 10 photo challenge uploads, 10 expense logs, and 10 shared documents across all participating teams combined. Upgrading a trip to Premium entirely removes these upload limits, granting unlimited submissions for the duration of the event.
                </p>
              </div>
            </details>

            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                How do I upgrade my trip to a Premium license?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  Upgrades are managed seamlessly via a secure Stripe integration linked directly to user profiles. You can access a tailored pricing table to select between a one-off single trip license or a recurring annual subscription. If any active participant listed on an event (either a Trip Organiser or a Team Member) holds an active premium user subscription, the associated trip document is automatically granted an immediate, rolling upgrade to Premium status.
                </p>
              </div>
            </details>

            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                What happens to our data if our Premium license or subscription expires?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  Your recorded data remains safe. If a subscription expires or is cancelled via the Stripe Customer Portal, the associated trip reverts to standard Free Tier parameters. While you will retain full visibility of all existing submissions and scores on your dashboards, teams will be blocked from uploading new items if the cumulative counters have already crossed the Free Tier quota threshold. You can restore full write access at any time by renewing a subscription or purchasing a one-off license.
                </p>
              </div>
            </details>

            <details className="group/q border border-border rounded-xl p-6 bg-card shadow-sm">
              <summary className="list-none cursor-pointer flex items-center justify-between text-xl font-bold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                If a team member leaves or our trip is deleted, does it affect my subscription?
                <span className="transition-transform group-open/q:rotate-180 text-muted-foreground text-lg ml-4 flex-shrink-0">▼</span>
              </summary>
              <div className="pt-4 text-muted-foreground leading-relaxed">
                <p>
                  No. User subscriptions are scoped to individual accounts, whereas licenses are scoped to the trip itself. If an organiser deletes a trip, an atomic database cleanup purges all legs, teams, and data associated with that specific event, but it has no impact on your personal account billing. You can seamlessly use your active subscription to unlock premium parameters on any other current or future trip where you are a participant.
                </p>
              </div>
            </details>
          </div>
        </details>

      </div>
    </main>
  );
}
