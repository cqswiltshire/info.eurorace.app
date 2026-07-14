import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Submit Photos for a Daily Challenge - EuroRace Guides",
  description: "Learn how to capture and submit photos for daily challenges in EuroRace.",
};

export default function HowToSubmitPhotosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            How to Submit Photos for a Daily Challenge
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Capturing your journey is a core part of the competition. Teams upload creative photos to earn points, which are then evaluated by either your trip organiser or an autonomous AI judge.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 1: Navigate to the Upload Grid</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Tap the <strong>Photos</strong> option on your mobile bottom navigation bar or sidebar menu.</li>
              <li>You will land on the read-only Photo Gallery.</li>
              <li>Tap the <strong>Submit / Manage Photos</strong> button at the top of the gallery to open your team's active submission grid.</li>
              <li><em>(Note for Admins: Global Admins will see a prompt to select a target team first, while participants and organisers are locked to their own team automatically).</em></li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 2: Select a Photo Slot</h3>
            <p className="leading-relaxed">Your upload grid is dynamically structured based on your trip's specific configuration:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Per-Day Mode:</strong> Photos are grouped into rows for each sequential day of the race (Day 1, Day 2, etc.).</li>
              <li><strong className="text-foreground">Per-Leg Mode:</strong> Photos are grouped by the specific itinerary leg your team is navigating.</li>
            </ul>
            <p className="leading-relaxed">Find the active period, choose an empty slot in the grid (up to your trip's defined limit, usually 8 slots), and tap <strong>Upload Photo</strong>.</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 3: Choose and Process Your Image</h3>
            <p className="leading-relaxed">Select a photo from your device's camera roll or take a live picture.</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Client-Side Optimization:</strong> The application will automatically compress your image to a web-optimized format, stripping down resolution to a maximum of 1920px. This guarantees a lightning-fast upload even on weak roaming networks and stays safely within server request limits.</li>
              <li><strong className="text-foreground">HEIC Conversion:</strong> If you are shooting on an iPhone, raw .heic formats are natively converted to standard JPEGs right on your device.</li>
              <li><strong className="text-foreground">EXIF Metadata Preservation:</strong> The system automatically extracts the exact time the photo was taken along with its global GPS coordinates from the file metadata.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 4: Add Context and Captions</h3>
            <p className="leading-relaxed">Once your image preview appears in the slot, you can add descriptive context to maximise your scoring potential:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Public Caption:</strong> Add a public caption for the day or leg to describe the story behind your track (e.g., "Racing to catch the last connecting train out of Munich!").</li>
              <li><strong className="text-foreground">AI Judge Prompt (Optional):</strong> If your trip utilises the automated AI judging engine, you can provide an optional private prompt detailing how your photos satisfy specific hidden criteria or event themes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 5: Submit and Score</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Tap <strong>Save Changes</strong> in the dashboard header to commit your uploads securely to Firebase Storage.</li>
              <li>If your trip is running in AI Judging Mode, tap the <strong>Score with AI</strong> button next to your daily caption.</li>
              <li>The Gemini AI engine will instantly evaluate all of your uploaded photos against global system rules, trip-specific custom themes, and your team's captions.</li>
              <li>Within seconds, a creative score out of 10 and a written critique will be generated and saved automatically to your dashboard.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <span>🌫️</span> A Reminder on the Fog of War
            </h3>
            <p className="leading-relaxed">
              Your creative submissions, captions, and AI critiques are completely hidden from rival teams while a leg is active. Your gallery rows will automatically unmask themselves to your competitors only when every active team has safely crossed the arrival checkpoint for that stage of the race. Once the overall trip is marked complete by organisers, all photo data is fully unlocked for post-race celebration and review.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
