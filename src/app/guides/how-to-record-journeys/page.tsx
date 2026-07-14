import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recording and Logging Journeys - EuroRace Guides",
  description: "Learn how to use the intelligent transit discovery assistant to record transport segments across Europe.",
};

export default function RecordJourneysGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            Guide to Recording and Logging Journeys
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            When managing your team's route through the Europe itinerary, the Record Journey screen is where you log each transport segment. The platform features an intelligent transit discovery assistant powered by Gemini AI. If your entry details are precise, the system can automatically find official timetables and map your route. If official data is unavailable, the smart assistant will figure out your route based on your description.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Follow the guidelines below to get the fastest, most accurate results from the journey form.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">One-Time Baseline Setup</h3>
            
            <h4 className="text-xl font-semibold text-foreground pt-2">The Immutable Team Selection</h4>
            <p className="leading-relaxed">To preserve competitive integrity under our privacy rules, you are automatically locked to your assigned team. The team selection dropdown menu on the form is locked and set automatically, ensuring your journey entries are correctly logged to your own roster.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Minimum Required for an AI Lookup</h4>
            <p className="leading-relaxed">To successfully trigger an automated timetable lookup, your journey entry must include these baseline selections before you format your description:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Transit Mode:</strong> Select the exact category matching your travel (train, bus, flight, ferry, car, or other).</li>
              <li><strong className="text-foreground">Journey Date:</strong> Pick the correct calendar day for the departure.</li>
              <li><strong className="text-foreground">Time Focus:</strong> When entering date and time fields, the form will automatically default inputs to your selected Journey Date when focused to help speed up manual adjustments.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Transport Modes and System Behaviour</h3>
            <p className="leading-relaxed">The application handles a variety of transit modes across the core logging forms. The platform automatically adapts how it finds your journey based on the transport type selected:</p>
            
            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li><strong className="text-foreground">Rail (train, subway, metro, tram):</strong> The app searches national transit databases to find your exact train. It handles local accents seamlessly. For journeys within Great Britain or Austria, it connects directly to live national rail systems to fetch exact timetables and platform stops.</li>
              <li><strong className="text-foreground">Road Transit (bus, coach, taxi, car):</strong> The app checks regional timetables like Flixbus or local bus networks. If an exact match isn't found locally, it uses a global transit database to map your journey between stops.</li>
              <li><strong className="text-foreground">Aviation (flight) & Maritime (ferry):</strong> The app uses smart web searches to map airport and ferry terminal locations and extract flight or ferry schedules automatically.</li>
              <li><strong className="text-foreground">Pedestrian (walk):</strong> Walking routes don't require timetables or tickets. Instead, just specify a time window, and the app will automatically trace your walking path by using the GPS locations saved inside the photos your team took during that time.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Optimising Descriptions for Best AI Performance</h3>
            <p className="leading-relaxed">The AI transit discovery engine matches your human-readable descriptions against millions of official schedule pairs and European transit networks. Providing vague or ambiguous descriptions causes lookups to fail or drop down to basic straight-line map vectors.</p>
            <p className="leading-relaxed">To achieve high-fidelity tracking, structure your journey descriptions using the following three performance-boosting rules:</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Rule 1: Specify the Official Operator</h4>
            <p className="leading-relaxed">Always include the name of the operating transit company (e.g., write &quot;SNCF&quot;, &quot;Deutsche Bahn&quot;, &quot;Eurostar&quot;, &quot;FlixBus&quot;, or &quot;ÖBB&quot;).</p>
            <p className="leading-relaxed"><strong className="text-foreground">Why this helps:</strong> Specifying the operator allows the search engine to bypass global lookups and query localised national rail and coach data directly, vastly speeding up execution times and ensuring precise timetable correlation.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Rule 2: Name the Exact Departure and Arrival Stations</h4>
            <p className="leading-relaxed">If a town has multiple transport hubs or terminal stations, do not simply write the city name. State the precise station names clearly (e.g., write &quot;London St Pancras International&quot; instead of just &quot;London&quot;, or &quot;Paris Gare de Lyon&quot; instead of &quot;Paris&quot;).</p>
            <p className="leading-relaxed"><strong className="text-foreground">Why this helps:</strong> The mapping system converts station text into physical coordinates. Clear station names prevent the system from accidentally dropping coordinates into generic city centres or selecting the wrong platform layout.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Rule 3: Provide Exact Times and Service Numbers</h4>
            <p className="leading-relaxed">Include your official scheduled departure time and your train or bus service number if it is printed on your ticket (e.g., &quot;Train 9022 departing at 09:28&quot;).</p>
            <p className="leading-relaxed"><strong className="text-foreground">Why this helps:</strong> If your logged time closely matches an official schedule, the index engine aggressively short-circuits evaluation loops to return a perfect match instantly. It also helps the system anchor regional timezones accurately across international borders.</p>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
                <span>💡</span> Pro-Tip for Walk Journeys
              </h3>
              <p className="leading-relaxed text-foreground">
                If you select the Walk transit type, the automated AI schedule assistant will switch off entirely. Instead, you can specify a time range in your description (such as 07:00 to 09:00). The app will then autonomously scan the geocoded photos and Points of Interest (POIs) captured by your team during that window and automatically trace an exact geographic walking path for you, down-sampling to a maximum of 25 nodes to adhere to Mapbox walking profiles.
              </p>
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground">How We Map Your Route</h3>
            <p className="leading-relaxed">The app draws your journey on the map using a smart three-step process:</p>

            <ul className="list-disc pl-6 space-y-4 leading-relaxed">
              <li><strong className="text-foreground">Tier 1: Official Transit Maps</strong><br/>If your journey matches an official timetable, the system uses the exact track shape provided by the transit operator. It automatically trims the line so it starts and ends exactly at your stations.</li>
              <li>
                <strong className="text-foreground">Tier 2: Smart Routing</strong><br/>If official track shapes are missing, the app uses intelligent routing to snap your journey to the actual rail network, roads, or footpaths.
              </li>
              <li><strong className="text-foreground">Tier 3: Connecting the Dots</strong><br/>If the route goes over water or unmapped areas, the map will draw a logical path connecting your start and end points, including any intermediate stations or photo stops along the way.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Locking Intermediate Stops</h3>
            <p className="leading-relaxed">You have the option to manually "lock" intermediate stations or stops on your journey.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">What Happens When a Stop is Locked</h4>
            <p className="leading-relaxed">When you lock a stop, it prevents the automated systems from moving, renaming, or overriding the exact location you have set.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Why You Might Use It</h4>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Protecting Manual Map Pins:</strong> If you manually drop a pin on an exact address or train platform, locking it ensures the system won't accidentally reset it to the middle of the city.</li>
              <li><strong className="text-foreground">Securing International Station Names:</strong> When dealing with tricky local accents or international station names, locking the stop ensures it stays correctly matched.</li>
              <li><strong className="text-foreground">Keeping Important Photo Stops:</strong> For walking routes, the map sometimes simplifies the path. Locking a stop ensures a specific point of interest or photo location is always kept visible on the map.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground">After You Submit</h3>
            <p className="leading-relaxed">Once you successfully save a new journey, the application will automatically redirect you to that journey's editing page rather than wiping the form. This keeps you perfectly in-context so you can instantly attach photographs of your paper tickets or reference receipts to your log.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
