import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Manage Trip Parameters and Rules - EuroRace Guides",
  description: "Learn how trip organisers edit overall trip parameters, write formatted rules, and handle event deletion.",
};

export default function HowToManageTripPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            How to Manage Trip Parameters and Rules
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Manage Trip dashboard provides trip organisers with a centralised control panel to refine an existing event’s details, update scoring limits, write detailed event rules, and customise the parameters used by the AI photo judging engine.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 1: Access the Management Dashboard</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Select the trip you wish to manage from the global Trip Selector dropdown in the navigation header.</li>
              <li>Open the sidebar navigation menu and select <strong>Manage Trip</strong> under the Trip Setup section.</li>
              <li>The dashboard consolidates your operational settings across a clean, tabbed layout.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 2: Edit General Details and Branding</h3>
            <p className="leading-relaxed">On the primary details form, you can update baseline trip identifiers:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Trip Name:</strong> Modify the public title of your race event if necessary.</li>
              <li><strong className="text-foreground">Trip Avatar:</strong> Click the premium MediaUpload block to upload or change the main trip logo. The application will seamlessly handle processing, and files are stored in a structured directory under your cloud storage bucket.</li>
              <li><strong className="text-foreground">Base Currency:</strong> View your trip's anchor currency. (Note: Changing the base currency can alter existing normalized expense entries, so ensure this matches your agreed-upon event parameters).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 3: Refine Scoring Point Caps</h3>
            <p className="leading-relaxed">You can dynamically alter how your race is scored on the leaderboard by adjusting the relative point weightings (ranging from 1–100):</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Maximum Time Score:</strong> Adjust the point cap allocated for speed. Teams are scored relative to the fastest team on each leg.</li>
              <li><strong className="text-foreground">Maximum Photos Score:</strong> Adjust the point cap allocated for the creative challenges.</li>
              <li><strong className="text-foreground">Maximum Cost Score:</strong> Adjust the point cap allocated for budget efficiency.</li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2 mb-2">
                <span>💡</span> TIP: Disabling Categories
              </h4>
              <p className="leading-relaxed">
                You can completely disable cost or photo scoring for your race by setting their maximum points to zero. The leaderboard will automatically adapt to exclude disabled categories.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 4: Write Formatted Trip Rules</h3>
            <p className="leading-relaxed">To establish a clear rulebook for your participants, click on the dedicated <strong>Trip Rules</strong> sub-page:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Rich Markdown Editor:</strong> Use the integrated formatting toolbar to compose your rules using structured lists, bold text, links, and blockquotes.</li>
              <li><strong className="text-foreground">Strict Hierarchy:</strong> The system uses specific typography overrides to ensure deep three-level lists (e.g., 1. First Rule -{">"} a. Sub-rule -{">"} i. Clause) align with perfect hanging indents on both desktop and mobile screens.</li>
              <li><strong className="text-foreground">Live Preview:</strong> Click the Preview button in the editor header at any time to inspect exactly how your formatted rules will render on the main participant Race Hub.</li>
              <li>Click <strong>Save</strong> in the dashboard header to commit your rulebook.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 5: Update AI Judge Instructions</h3>
            <p className="leading-relaxed">If your trip's photography scoring mode is set to use the automated AI judge, use the <strong>AI Judge Rules Template</strong> text area to update the specific criteria Gemini uses:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Detail the precise themed tasks required for each leg (e.g., "Teams must capture a clear photo of a landmark train station clock on Leg 1").</li>
              <li>These localized rules are dynamically merged with global platform guidelines and team captions whenever a user triggers a scoring execution.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 6: Save Your Modifications</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>When you make changes to any input field, an amber <strong>Unsaved Changes</strong> badge will flash as a reminder.</li>
              <li>Move your cursor to the global dashboard navigation header at the top right and click <strong>Save</strong>. This sticky header integration guarantees that your primary action button is always accessible without scrolling down long forms.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-destructive/20">
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-destructive flex items-center gap-2 mb-4">
                <span>⚠️</span> The Danger Zone: Deleting a Trip
              </h3>
              <p className="leading-relaxed mb-4 text-foreground">
                If an event was created in error or must be permanently retired, trip organisers can execute a total purge from the bottom of the management console.
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-foreground mb-4">
                <li>Scroll to the bottom of the Manage Trip page and click the <strong>Delete Trip</strong> button.</li>
                <li>A multi-step confirmation dialogue box will appear, detailing the severe structural impact of the deletion.</li>
              </ul>
              <p className="leading-relaxed mb-2 font-bold text-foreground">Cascading Erasure: Confirming this action initiates an atomic database operation that permanently deletes:</p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-foreground mb-4">
                <li>The primary trips document.</li>
                <li>All associated itinerary legs and granular legAssignments.</li>
                <li>All compiled team documents inside the teams collection.</li>
                <li>All join-table entries within user_roles, stripping participant and guest associations from the trip entirely.</li>
              </ul>
              <p className="leading-relaxed text-foreground">
                Once the database commit succeeds, the system automatically redirects you back to a safe dashboard landing page.
              </p>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
