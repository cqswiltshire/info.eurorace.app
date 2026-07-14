import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Enter an Expense - EuroRace Guides",
  description: "Learn how to log and submit expenses in EuroRace.",
};

export default function HowToEnterAnExpensePage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            How to Enter an Expense
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you are paying for a high-speed train, grabbing lunch on a platform, or checking into your accommodation, keeping your team's budget updated is effortless. EuroRace features an intelligent, automated receipt-scanning pipeline. You can choose to let our AI scan and fill out your expense details automatically, or type them in manually.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 1: Open the Submission Form</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Tap the <strong>Log Expense</strong> option on your mobile bottom navigation bar or sidebar menu.</li>
              <li>You will be taken directly to the Expense Log dashboard.</li>
              <li>Tap the <strong>Submit New Expense</strong> button at the top of the page.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 2: Choose Your Auto-Fill Method (Optional)</h3>
            <p className="leading-relaxed">If you have a physical paper receipt, a digital invoice, or a PDF booking confirmation:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Tap the <strong>Upload Receipt</strong> area at the top of the form.</li>
              <li>Select an image (.jpeg, .png) or a .pdf file from your device. (If you're on an iPhone, raw .heic photos are automatically converted for you on the fly).</li>
              <li>Our system will immediately run an intelligent text extraction pass. <strong>Do not close the page while the progress bar reads "Processing Receipt...".</strong></li>
              <li>Once completed, the AI will pre-populate the amount, date, currency, and description fields based on what it found on the receipt.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 3: Verify and Finalise the Details</h3>
            <p className="leading-relaxed">Review the populated fields (or fill them out manually if you didn't upload a receipt):</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Team:</strong> Your assigned team is strictly locked automatically to prevent cross-team entry errors.</li>
              <li><strong className="text-foreground">Category:</strong> Select whether this spend is for Accommodation, Travel, or Food.</li>
              <li><strong className="text-foreground">Amount & Currency:</strong> Type the exact amount using standard two-decimal precision (e.g., 12.50) and select the local currency code (e.g., HUF, GBP, EUR).</li>
              <li><strong className="text-foreground">Date:</strong> Select the calendar date the cost occurred. Our system will automatically predict and link the correct Itinerary Leg of your race based on this date.</li>
              <li><strong className="text-foreground">Description:</strong> Add a brief note detailing what was purchased (e.g., "Dinner at Budapest Keleti Station").</li>
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2 mb-2">
                <span>💱</span> Note on Dynamic Conversions:
              </h4>
              <p className="leading-relaxed">
                Below your input, you will see a live preview showing what this cost is worth in your trip's official base currency (e.g., Euros). The exchange rate is permanently locked to the exact calendar date of the receipt, keeping the competition entirely fair regardless of future currency market shifts.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 4: Submit</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Double-check your details and tap <strong>Submit Expense</strong>.</li>
              <li>Your expense is instantly logged, your team's active budget metrics are recalculated, and the form resets cleanly so you can snap your next receipt.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h3 className="text-xl font-bold text-foreground">A Note on Privacy (Fog of War)</h3>
            <p className="leading-relaxed">
              To maintain competitive integrity, your logged expenses and receipt images are completely hidden from rival teams. They will only be unmasked and made visible to other competitors on the global dashboard once every active team has safely completed the current leg of the race.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
