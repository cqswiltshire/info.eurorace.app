import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trip Organiser Management and Privileges - EuroRace Guides",
  description: "Learn about the core privileges, dashboards, and responsibilities of a trip organiser.",
};

export default function TripOrganiserManagementPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            Trip Organiser Management and Privileges
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            As a trip organiser, you possess an administrative layer that allows you to structure, manage, and score a race event. While regular team members are restricted to logging their own progress, your permissions allow you to orchestrate the entire lifecycle of the trip across several dedicated dashboards.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Core Organiser Privileges and Dashboard Workspaces</h3>
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li><strong className="text-foreground">Configuring Trip Parameters and Rules:</strong> Via the Manage Trip tab, you have exclusive control over the event's baseline parameters. Here, you can change the trip's master avatar icon using the premium upload block, review the base transaction currency, and set the relative scoring point caps (ranging from 1–100) for time, photos, and cost efficiency. If you want to customise how your daily photo submissions are graded, this dashboard allows you to define specific instructions for the photography panel or switch to manual scoring modes. For a complete walkthrough of configuring these settings, modifying rules using the integrated rich Markdown editor, or safely executing a permanent event deletion, please consult the standalone guide on <Link href="/guides/how-to-manage-trip" className="text-primary hover:underline">How to Manage Trip Parameters and Rules</Link>.</li>
              <li><strong className="text-foreground">Itinerary Design and Date Recalculation:</strong> The Plan Itinerary workspace lets you build and adapt the physical path of the race. You can edit the trip's launch date directly in the workspace header, which automatically triggers a real-time, reactive recalculation of all subsequent leg date ranges across the interface. Within each leg card, you can enter durations, map checkpoints to exact latitude and longitude coordinates using server-side geocoding lookups, and copy destination stop names seamlessly to the start of the next leg using built-in sync logic. To learn how to plot these map pins, upload checkpoint reference images, or safely remove a leg without losing associated team data, follow the step-by-step instructions in <Link href="/guides/how-to-plan-itinerary" className="text-primary hover:underline">How to Plan a Trip Itinerary</Link>.</li>
              <li><strong className="text-foreground">Team Rosters and Leg-Specific Participation:</strong> Through the Manage Teams panel, you can add new teams inline, upload custom team logos, and adjust participant rosters. You also have the flexibility to switch your event from a uniform race (the same teams for every leg) to a granular race (different teams per leg), which activates a leg assignment validation engine to ensure no participants are unassigned or double-booked. Complete details on inviting participants via automated email workflows or creating read-only guest passes can be found in the guide on <Link href="/guides/how-to-manage-teams" className="text-primary hover:underline">How to Manage Teams and Invite Participants</Link>.</li>
              <li><strong className="text-foreground">Shared Document Oversight:</strong> To help coordinate shared logistics, regular participants can upload booking confirmations and hotel vouchers directly to individual legs. As an organiser, you maintain full oversight of this repository and hold the administrative privilege to delete any shared document or reservation attached to the leg timeline.</li>
              <li><strong className="text-foreground">Manual Photo Grading and Score Recalculation:</strong> If you opt out of automated photo scoring, you can grade daily submissions manually out of 5 directly within the photo grid. Once data updates are complete, you can use the manual calculation triggers on the leaderboard page to push aggregated cost, photo, and time points out to the public tables.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Managing and Transferring Organiser Status</h3>
            <p className="leading-relaxed">Promoting a participant to a trip organiser or transferring management rights is handled directly within the participant directory of the Manage Teams dashboard.</p>
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li>To assign a new organiser, locate the participant's row, change their administrative status dropdown to <strong>Organiser</strong>, and click <strong>Save</strong> in the top-right navigation header. Because the platform strictly enforces the Triple-Sync Law, this single header action fires an atomic database transaction that updates the trip's canonical owner list, writes a relationship record to the join tables, and updates the user's personal profile index simultaneously—ensuring they instantly gain access to the setup menus without security desynchronisation.</li>
              <li>When removing or demoting an organiser, the database enforces a rigid safety safeguard: the system will automatically block the removal of the last remaining organiser. A trip must always retain at least one active manager to prevent the event infrastructure from becoming entirely unmanageable. Committing an organiser removal automatically triggers a "Total Scrub" routine, safely removing that user's specific administrative credentials from all underlying trip configurations.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                <span>🌫️</span> The Enforcement of the Fog of War
              </h3>
              <p className="leading-relaxed mb-4 text-foreground">
                Although trip organisers have deep operational access to setup menus, you are subject to the exact same Fog of War privacy constraints as regular racers during active legs. This design rule ensures competitive integrity by preventing organisers who are actively playing or closely involved from gaining an unfair strategic advantage.
              </p>
              <ul className="list-disc pl-6 space-y-4 leading-relaxed text-foreground">
                <li><strong className="text-foreground">Dropdown Form Hardening:</strong> When you record checkpoints, submit daily photos, or log travel expenses, the application automatically locks your forms to your assigned team. The team selector dropdown is completely disabled, preventing you from accidentally or intentionally viewing, creating, or editing entries on behalf of rival teams.</li>
                <li><strong className="text-foreground">Real-Time Data Blindspots:</strong> You cannot see the active, intermediate journey logs, live map tracks, granular expenditure receipts, or creative photo submissions of other teams while a leg is underway.</li>
                <li><strong className="text-foreground">Unmasking Thresholds:</strong> Gated competitive data is only unmasked on the public leaderboard, logs, and galleries once a leg passes the Completed by All threshold. This means that data is hidden until every active participatory team (any team that has submitted at least one checkpoint, photo, or expense) has logged their arrival at the leg's final checkpoint. All privacy blocks are lifted permanently once the entire race is over and the trip is marked complete, opening up the full historical record for post-race review.</li>
              </ul>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
