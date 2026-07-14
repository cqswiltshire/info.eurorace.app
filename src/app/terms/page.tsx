import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the Euro Race application.',
  robots: { index: true, follow: false },
};

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-extrabold text-primary drop-shadow-sm">Terms of Service</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Euro Race
              application (&ldquo;the Service&rdquo;). By accessing or using the Service, you agree to be
              bound by these Terms.
            </p>
            <p>
              Euro Race is a private platform — access is by invitation only. Unauthorised access is
              strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">1. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may use the Service only if you have been invited by a race organiser and have
              completed the account registration process, including email verification. You must
              be at least 16 years old to use this Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">2. Accounts</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 leading-relaxed">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must notify us immediately of any unauthorised use of your account.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">3. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 leading-relaxed">
              <li>Submit false, misleading, or fraudulent expense records or race data.</li>
              <li>Upload content that is offensive, defamatory, or infringes the rights of others.</li>
              <li>Attempt to circumvent the application&rsquo;s security, access controls, or Fog of War privacy rules.</li>
              <li>Use the Service for any unlawful purpose.</li>
              <li>Attempt to access another user&rsquo;s account or data without authorisation.</li>
              <li>Reverse-engineer, scrape, or otherwise abuse the platform&rsquo;s APIs.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">4. User Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of content you upload (photos, documents, expense records). By
              uploading content, you grant us a limited licence to store, display, and process it
              solely for the purpose of providing the Service to you and your race group.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are solely responsible for any content you submit. Do not upload content that
              contains personal data of third parties without their consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">5. Subscriptions & Payments</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5 leading-relaxed">
              <li>Premium features are available via an annual subscription, processed by Stripe.</li>
              <li>Subscriptions auto-renew unless cancelled before the renewal date.</li>
              <li>All payments are non-refundable unless required by applicable law.</li>
              <li>If a subscription lapses, access to premium features will be restricted, but your data will be retained.</li>
              <li>We reserve the right to change pricing with reasonable notice.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">6. Race Rules & Fair Play</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Fog of War system is designed to ensure competitive fairness. Deliberately
              exploiting data leakage, submitting false checkpoint records, or coordinating with
              opposing teams to manipulate scores constitutes a violation of these Terms and may
              result in disqualification and account suspension.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">7. AI-Powered Features</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service uses AI (Google Gemini) for receipt scanning, photo scoring, and transit
              research. AI-generated results are provided for convenience and may not always be
              accurate. Expense amounts and scores may be reviewed and corrected by race organisers.
              AI outputs do not constitute financial or legal advice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">8. Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to maintain high availability but do not guarantee uninterrupted access to
              the Service. We may perform maintenance, updates, or suspend the Service temporarily
              without notice. We are not liable for any loss arising from service interruptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Euro Race shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of the Service,
              including loss of data, race disputes, or financial discrepancies. Our total liability
              shall not exceed the subscription fees you paid in the 12 months prior to the claim.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or terminate your access to the Service at any time if you violate
              these Terms. You may request account deletion at any time by contacting us. Upon
              termination, your data will be handled in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">11. Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. We will notify active users of material
              changes. Continued use of the Service after changes constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of England and
              Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of
              England and Wales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">13. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at{' '}
              <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
