import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create a New Trip - EuroRace Guides",
  description: "Learn how to set up a new cross-European race event using the onboarding wizard.",
};

export default function HowToCreateATripPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            How to Create a New Trip
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Setting up a new cross-European race event is managed entirely through an administrative onboarding wizard. The wizard scaffolds your itinerary legs, establishes your starting points, and initialises the first participating team in a single, atomic operation.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 1: Open the Creation Wizard</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Open the sidebar navigation menu and look under the <strong>Actions</strong> section at the bottom.</li>
              <li>Click the <strong>Create New Trip</strong> action link.</li>
              <li>The global dashboard trip selector and avatars will automatically hide to keep your setup context focused.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 2: Configure Basic Event Details</h3>
            <p className="leading-relaxed">Fill out the identity and core parameters for your race:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Trip Name:</strong> Provide a clear, identifiable name for your event (e.g., "Summer Sprint 2026").</li>
              <li><strong className="text-foreground">Start Date:</strong> Select the official launch date and time for the event.</li>
              <li><strong className="text-foreground">Base Currency:</strong> Choose the central currency that will be used to anchor all team cost evaluations and leaderboard scoring (typically EUR).</li>
              <li><strong className="text-foreground">Initial Team Name:</strong> Define the name of the first competing team on the grid. Your own user account will automatically be added to this team as both an organiser and a starting participant.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 3: Scaffold Your Itinerary Legs</h3>
            <p className="leading-relaxed">Before picking exact checkpoints, tell the system how many primary intervals your race will contain:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Number of Legs:</strong> Input the total number of legs for the event.</li>
              <li><strong className="text-foreground">Leg Duration:</strong> Specify how many days are allocated to each individual leg. The system will use this information alongside your start date to map out your initial race timeline.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 4: Map Your Starting Grid and Finish Line</h3>
            <p className="leading-relaxed">To prevent location mismatches and broken map tracks, the wizard enforces a strict Country-First cascading geographic filter:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Select the Start Country:</strong> Choose the country where the race begins from the dropdown list. The dropdown only displays countries that contain valid, seeded cities in our database.</li>
              <li><strong className="text-foreground">Select the Start City/Town:</strong> Once the country is selected, the city selection will unlock. Use the search box to find and lock your exact starting city.</li>
              <li><strong className="text-foreground">Select the Final Destination:</strong> Follow the exact same Country-First workflow to select your agreed final destination city.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 5: Initialise the Race</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Review your parameters. Once satisfied, click the <strong>Create Trip</strong> button.</li>
              <li><strong className="text-foreground">Atomic Database Initialisation:</strong> The system executes a high-privilege Firestore transaction to create the Trip configuration, write the scaffolding for your requested Leg documents, and initialise your starting Team simultaneously.</li>
              <li>Upon successful creation, the wizard will immediately redirect you to the <Link href="/guides/how-to-plan-itinerary" className="text-primary hover:underline">Plan Itinerary</Link> dashboard, where you can begin pinpointing specific checkpoint addresses, adding reference imagery, and locking down exact coordinates.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span>🔍</span> Making Further Refinements
            </h3>
            <p className="leading-relaxed">
              The initial creation form automatically pulls platform-wide parameters from your global defaults to pre-populate game rules. If you need to make changes to your specific event after creation, you can do so in the following areas:
            </p>
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li><strong className="text-foreground">Adjusting Scoring Thresholds & Prompts:</strong> To change the maximum point caps for Time, Photos, and Cost scoring, or to alter your photography instructions, head to the <Link href="/guides/how-to-manage-trip" className="text-primary hover:underline">Manage Trip</Link> tab within the Race Hub.</li>
              <li><strong className="text-foreground">Refining Checkpoints & Dates:</strong> To adjust specific checkpoint coordinates, add accommodation locations, or modify individual leg dates, go to the <Link href="/guides/how-to-plan-itinerary" className="text-primary hover:underline">Plan Itinerary</Link> dashboard.</li>
            </ul>
          </section>
        </div>

      </div>
    </main>
  );
}
