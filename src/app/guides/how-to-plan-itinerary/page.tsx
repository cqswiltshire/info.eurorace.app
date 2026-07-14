import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Plan a Trip Itinerary - EuroRace Guides",
  description: "Learn how to define the physical path of your race, configure legs, and set up checkpoint coordinates.",
};

export default function HowToPlanItineraryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            How to Plan a Trip Itinerary
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Plan Itinerary workspace allows trip organisers to define the physical path of the race, configure individual legs, and set up checkpoint coordinates for the interactive maps.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 1: Access the Itinerary Planner</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Ensure your target trip is selected in the global Trip Selector dropdown in the header.</li>
              <li>Open the sidebar navigation menu and click <strong>Plan Itinerary</strong> under the Trip Setup section.</li>
              <li>The page displays your scheduled timeline as a vertical sequence of expandable Leg Cards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 2: Configure the Event Launch Date</h3>
            <p className="leading-relaxed">Your race schedule calculates all upcoming milestones from a single temporal anchor point:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Locate the <strong>Start Date</strong> input selector situated directly within the workspace header.</li>
              <li>Adjust the calendar date and clock time to when the starting flags drop.</li>
              <li><strong className="text-foreground">Reactive Timeline:</strong> Modifying this single header parameter instantly recalculates the operational date ranges for every single downstream leg in the UI.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 3: Define Leg Stops and Durations</h3>
            <p className="leading-relaxed">Each leg card represents a continuous multi-day sprint between two checkpoints. Expand a card to fill out its core route details:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Leg Duration:</strong> Enter the total number of days allocated for this segment of the race.</li>
              <li><strong className="text-foreground">Start Checkpoint (Town/Country):</strong> Input the name of your starting point for this leg.</li>
              <li><strong className="text-foreground">End Checkpoint (Town/Country):</strong> Input the target destination where teams must log their final arrival for this stage.</li>
              <li><strong className="text-foreground">Accommodation / Night Stop:</strong> Specify the town or location where teams are expected to stay during the multi-day interval.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 4: Geocode Your Checkpoint Pins</h3>
            <p className="leading-relaxed">To ensure that positions plot accurately on the participant maps, you must map your text-based stop names to physical coordinates:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Next to a checkpoint field, click the <strong>Map Icon</strong> button to launch the Checkpoint Map Modal.</li>
              <li>Type a specific landmark, station name, or address into the search field and press Search.</li>
              <li>The system executes a server-side lookup via Google Maps to find the location.</li>
              <li>Verify the temporary pin placement on the preview map, then click confirm to lock the precise Latitude and Longitude coordinates to that checkpoint.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 5: Save Your Planned Route</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>As you edit your itinerary, any unsaved field changes will flag an amber reminder badge.</li>
              <li>Once your grid locations are locked, move your cursor to the top right of the screen and click <strong>Save Itinerary</strong> in the navigation header.</li>
              <li>This centralized header shortcut keeps the primary save action locked to the screen, allowing you to commit your route without scrolling through long timelines.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                <span>🛠️</span> Automated Planner Mechanics (Background Refinements)
              </h3>
              <p className="leading-relaxed mb-4 text-foreground">
                While you manage the core layout, the application runs several background synchronisations automatically to maintain data integrity and speed up your workflow:
              </p>
              <ul className="list-disc pl-6 space-y-4 leading-relaxed text-foreground">
                <li><strong className="text-foreground">Smart Sync Cascade:</strong> When you modify the destination endpoint or accommodation of a leg, the planner automatically copies that data into the start field of the immediately following leg. This creates a perfectly contiguous travel path across your map grids without manual data duplication.</li>
                <li><strong className="text-foreground">Media Evidence Uploads:</strong> Organisers can optionally attach reference photos or blueprint images to checkpoints by clicking the MediaUpload trigger on the cards, allowing teams to cross-reference targets during active race legs.</li>
                <li><strong className="text-foreground">Leg Deletion Safety Check:</strong> If you attempt to delete a leg from your race timeline, the system automatically crawls your backend databases. It will issue an administrative warning dialogue if active checkpoint submissions, daily photos, or team expenses are already tied to that leg, preventing accidental data loss.</li>
              </ul>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
