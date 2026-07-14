import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchasing a Trip Licence - EuroRace Guides",
  description: "Learn how to upgrade a trip from the standard Free Tier to a Premium Licence using our integrated payment system.",
};

export default function PurchaseLicenceGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">

        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            Guide for Purchasing a Trip Licence
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            This guide explains how to upgrade a trip from the standard Free Tier to a Premium Licence using the platform's integrated Stripe payment system.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">1. Understanding Licence Tiers and Quotas</h3>
            <p className="leading-relaxed">By default, newly created trips start on the standard Free Tier to ensure platform sustainability. However, if the user creating the trip holds an active annual subscription, the trip will automatically be granted Premium status from the start.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Free Tier Limitations</h4>
            <p className="leading-relaxed">Trips on the Free Tier are subject to usage quotas. There are no ads, no reminders, and no trial period limits. You will be informed when your quota has been used, but there are no irritating popups.</p>
            <p>A single trip on the free tier is limited to a maximum of:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>10 photo challenge uploads across all teams.</li>
              <li>10 expense logs across all teams.</li>
              <li>10 shared itinerary documents or bookings across all teams.</li>
            </ul>

            <h4 className="text-xl font-semibold text-foreground pt-2">Premium Tier Benefits</h4>
            <p className="leading-relaxed">Upgrading a trip to a Premium Licence entirely removes the quotas. A Premium trip unlocks:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Unlimited photo submissions for creative challenges.</li>
              <li>Unlimited expense tracking with receipt scanning.</li>
              <li>Unlimited shared document storage (such as hotel vouchers and reservations).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">2. Licensing Models</h3>
            <p className="leading-relaxed">The platform offers two flexible pathways to secure a Premium upgrade, depending on whether you are a one-time racer or a frequent event organiser.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">One-Off Single Trip Licence</h4>
            <p className="leading-relaxed">Perfect for standalone events. You purchase a single-use licence dedicated entirely to one specific trip. This unlocks unlimited features for the entire duration of that event without any recurring commitments.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Recurring Annual User Subscription</h4>
            <p className="leading-relaxed">Designed for frequent travellers and event coordinators. Users can choose to purchase an annual subscription tied directly to their personal account profile.</p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-4">
              <h4 className="text-lg font-bold text-primary flex items-center gap-2 mb-2">
                <span>⚠️</span> IMPORTANT: The Participant Upgrade Rule
              </h4>
              <p className="text-foreground leading-relaxed">
                To upgrade a trip to Premium, individual trip licences do not need to be purchased by everyone. If any single active participant listed on a trip's roster—whether they are a Trip Organiser or a regular Team Member—holds an active annual subscription, the entire trip is immediately granted a rolling upgrade to Premium status.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">3. How to Purchase and Manage Your Licence</h3>
            <p className="leading-relaxed">All financial transactions are handled seamlessly through a secure portal.</p>

            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li><strong className="text-foreground">Step 1: Access the Pricing Workspace</strong><br />Navigate to your My Profile dashboard and locate the subscription configuration area. Click on the option to view available upgrades, which will display the active pricing table.</li>
              <li><strong className="text-foreground">Step 2: Complete the Secure Checkout</strong><br />Select either the one-off trip licence or the recurring annual subscription. The platform will safely redirect you to a secure checkout screen. Enter your payment details; once confirmed, the system will instantly process your upgrade.</li>
              <li><strong className="text-foreground">Step 3: Automated Activation and Background Syncing</strong><br />The moment your payment finishes successfully, an automated data synchronisation process updates the platform. Your account profile and any associated trips will immediately display their new Premium status.</li>
              <li><strong className="text-foreground">Step 4: Managing or Cancelling Your Subscription</strong><br />If you opted for a recurring annual subscription, you can modify your billing details at any time. From your profile, click to open the customer billing portal. This portal allows you to update your card details, download historical payment receipts, or cancel your subscription.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">4. What Happens If a Licence Expires?</h3>
            <p className="leading-relaxed">Your recorded competitive data is never deleted if a subscription terminates or is cancelled.</p>
            <p className="leading-relaxed">If your annual subscription lapses, any associated trip that relied on your subscription for its premium status will simply revert to standard Free Tier parameters. All existing expenses, photo challenge scores, and cached route itineraries will remain fully visible on your dashboards. However, teams will be blocked from submitting new photos, expenses, or bookings if the trip has already crossed the cumulative 10-item Free Tier quota threshold. You can restore immediate write access at any point by renewing your subscription or purchasing a one-off licence.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
