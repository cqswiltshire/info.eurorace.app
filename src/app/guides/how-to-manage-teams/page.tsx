import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Manage Teams - EuroRace Guides",
  description: "Learn how to manage teams and invite participants via secure email workflows.",
};

export default function HowToManageTeamsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            How to Manage Teams and Invite Participants
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Manage Teams control panel allows trip organisers to establish competing team structures, invite participants via secure email workflows, configure organiser statuses, and manage read-only guest access for a specific race event.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 1: Open the Team Management Dashboard</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Select your active trip context from the global Trip Selector dropdown in the navigation header.</li>
              <li>Open the sidebar navigation menu and select <strong>Manage Teams</strong> under the Trip Setup section.</li>
              <li>To protect active workflows, entering this console locks the global trip selector to prevent accidental data desynchronisation while edits are in progress.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 2: Customise the Leg Participation Mode</h3>
            <p className="leading-relaxed">Trips feature a flexible parameter to control how teams compete across different stages of the itinerary:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Uniform Mode (Same teams for each leg):</strong> Teams remain unchanged throughout the entire event. This is the default option and hides unnecessary complexity.</li>
              <li><strong className="text-foreground">Granular Mode (Different teams per leg):</strong> Toggle this option on if you require leg-by-leg control over team compositions, allowing participants to dynamically join, switch, or leave teams at different checkpoints.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 3: Manage Competing Teams</h3>
            <p className="leading-relaxed">Organisers can manage the team grid natively inline within the dashboard view:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Add a New Team:</strong> Click the <strong>Add New Team</strong> action link to inject an empty team card into your active trip grid.</li>
              <li><strong className="text-foreground">Team Names & Branding:</strong> Type your chosen team title directly into the solid black input field. Click the integrated MediaUpload block on the card to assign a custom team avatar or logo, which will be saved securely to the cloud directory.</li>
              <li><strong className="text-foreground">Delete a Team:</strong> Click the <strong>Delete Team</strong> button inside any team card to remove it from the active lineup.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 4: Invite Team Participants via Email</h3>
            <p className="leading-relaxed">To add members to a specific team card:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Locate the participant list area on the target team card and click to add an entry.</li>
              <li>Input the participant's Email Address along with an optional Display Name.</li>
              <li><strong className="text-foreground">Identity Resolution Engine:</strong> When you add an email, the system automatically runs a server-side lookup:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>If the email matches an existing registered user, their canonical profile metadata (UID, display name, and avatar) is instantly linked.</li>
                  <li>If the email is unregistered, the system automatically creates an unauthenticated Placeholder Profile with a unique inviteToken.</li>
                </ul>
              </li>
              <li>An automated, branded email containing a secure setup link will be dispatched via the platform's SMTP relay, allowing the invited user to claim their placeholder profile seamlessly upon first sign-up.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 5: Configure Guest Access (Read-Only)</h3>
            <p className="leading-relaxed">If you want to grant third-party observers (such as friends, family, or sponsors) real-time visibility without write permissions:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Locate the Trip Guests log section on the dashboard.</li>
              <li>Open the Add Guest dialogue form and enter the guest's email address.</li>
              <li>The system will issue a dedicated server action to assign a read-only 'guest' role to that email string for this trip. Guests can see overall dashboards and logs but are securely blocked from modifying race data.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Step 6: Commit Your Grid Changes</h3>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Once you have completed your inline team creations, edits, or removals, click the <strong>Save</strong> button located in the global dashboard navigation header at the top right.</li>
              <li><strong className="text-foreground">Atomic Master Save:</strong> The system executes a high-privilege Firestore batch operation to recursively sanitise your payloads, strip out any malformed data, and atomically synchronise all roles and team rosters across the database collections.</li>
              <li>Exiting Master Edit Mode automatically unlocks your global trip selector header.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                <span>💡</span> Data Integrity Notes
              </h3>
              <ul className="list-disc pl-6 space-y-4 leading-relaxed text-foreground">
                <li><strong className="text-foreground">Roster Self-Healing:</strong> The platform enforces strict type-safety boundaries. If a team list experiences malformed array data, UI components automatically fall back to reading the raw keys of your team membership maps, ensuring that participant rosters remain visible and accessible to organisers under all network conditions.</li>
                <li><strong className="text-foreground">Zombie Account Pruning:</strong> To keep the user directory immaculate, deleting an unverified participant from their final team layout automatically triggers a background cleanup action that prunes and deletes the orphaned placeholder document entirely.</li>
              </ul>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
