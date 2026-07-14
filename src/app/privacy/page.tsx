import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Euro Race collects, uses, and protects your personal data.',
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'July 2026';
  const contactEmail = 'support@eurorace.app';

  return (
    <div className="min-h-screen bg-background py-12 px-4 flex justify-center">
      <div className="max-w-3xl w-full animate-in fade-in zoom-in duration-700">
        <div className="mb-8">
          <Link href="/" className="text-sm text-primary hover:underline font-medium">← Back to Home</Link>
        </div>
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8">
          <header>
            <h1 className="text-4xl font-extrabold text-primary drop-shadow-sm">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Euro Race (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a private application for managing
              race events across Europe. This Privacy Policy explains how we collect, use, store, and
              protect your personal data when you use this application.
            </p>
            <p>
              This application is operated as a private service and is not a general consumer product.
              Access is by invitation only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">1. What Data We Collect</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 leading-relaxed">
              <li><strong className="text-foreground">Account information:</strong> Your name, email address, and optionally a phone number and profile photo, provided when you register or are invited.</li>
              <li><strong className="text-foreground">Authentication data:</strong> Login timestamps, session tokens, and WebAuthn (passkey) credential identifiers for biometric login.</li>
              <li><strong className="text-foreground">Race activity:</strong> Expenses (amounts, currencies, categories, receipt images), photo challenge submissions, checkpoint arrival and departure records, and journey details you log during the race.</li>
              <li><strong className="text-foreground">Uploaded media:</strong> Receipt photos, booking documents, and challenge photos uploaded to the platform.</li>
              <li><strong className="text-foreground">Payment data:</strong> Subscription status and billing history via Stripe. We do not store full card details — these are processed and held by Stripe.</li>
              <li><strong className="text-foreground">Technical data:</strong> Browser type, IP address, and usage logs collected automatically by our hosting provider (Vercel) and Firebase.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Data</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 leading-relaxed">
              <li>To authenticate you and manage your account.</li>
              <li>To display your race progress, expenses, and photos to your team and race organisers.</li>
              <li>To process expense records, calculate scores, and display leaderboard standings.</li>
              <li>To process subscription payments via Stripe.</li>
              <li>To send you account setup and invitation emails (via Nodemailer).</li>
              <li>To monitor platform health and security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">3. Cookies & Local Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              This application uses the following cookies, all of which are strictly necessary for the application to function:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 leading-relaxed">
              <li><strong className="text-foreground">idToken:</strong> Stores your Firebase authentication token to maintain your logged-in session.</li>
              <li><strong className="text-foreground">sidebar_state:</strong> Remembers whether the navigation sidebar is open or closed.</li>
              <li><strong className="text-foreground">auth-challenge / reg-challenge:</strong> Temporary, short-lived cookies used during WebAuthn (passkey) registration and authentication flows. Deleted immediately after use.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We also use <strong className="text-foreground">reCAPTCHA v3</strong> (via Firebase App Check) on authenticated routes
              to protect against automated abuse. This is provided by Google and is subject to{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google&rsquo;s Privacy Policy
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal data. We share data only with the following service providers
              who process it on our behalf:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 leading-relaxed">
              <li><strong className="text-foreground">Google Firebase / Google Cloud</strong> — Authentication, database, file storage, and backend functions.</li>
              <li><strong className="text-foreground">Vercel</strong> — Frontend hosting and edge delivery.</li>
              <li><strong className="text-foreground">Stripe</strong> — Subscription billing and payment processing.</li>
              <li><strong className="text-foreground">Cloudflare</strong> — Media CDN caching (via cdn.eurorace.app).</li>
              <li><strong className="text-foreground">Google (reCAPTCHA / Vertex AI)</strong> — Bot protection and AI-powered features (receipt scanning, photo scoring).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Your race data (expenses, photos, checkpoints) is visible to other members of your team
              and to trip organisers, subject to the application&rsquo;s &ldquo;Fog of War&rdquo; privacy
              rules. Global administrators have full visibility for support and dispute resolution purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your account data is retained for as long as your account is active. Race data (expenses,
              photos, journeys) is retained for the duration of the race event and for a reasonable
              period thereafter for historical review. You may request deletion of your account and
              associated data at any time by contacting us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">6. Your Rights (UK & EU)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Under the UK GDPR and EU GDPR, you have the right to:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 leading-relaxed">
              <li><strong className="text-foreground">Access</strong> the personal data we hold about you.</li>
              <li><strong className="text-foreground">Rectify</strong> inaccurate data via your profile settings.</li>
              <li><strong className="text-foreground">Erase</strong> your data (&ldquo;right to be forgotten&rdquo;) — contact us to request deletion.</li>
              <li><strong className="text-foreground">Portability</strong> — request a copy of your data in a portable format.</li>
              <li><strong className="text-foreground">Object</strong> to processing for legitimate interests.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">7. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organisational measures to protect your data,
              including Firebase App Check enforcement, email verification, account lockout policies,
              role-based access control, and encrypted transit (TLS) for all data transfers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please
              contact us at{' '}
              <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
