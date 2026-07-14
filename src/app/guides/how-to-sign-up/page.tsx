import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signing Up and Profile Management - EuroRace Guides",
  description: "Learn how to create an account, verify your details, complete your profile, and securely log out.",
};

export default function SignUpGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-700">
        
        {/* Header */}
        <div className="space-y-4 border-b border-border pb-8">
          <Link href="/guides" className="text-primary hover:underline font-semibold flex items-center gap-2">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            Guide for Signing Up and Profile Management
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            This guide covers the entry point to the platform, explaining how to create an account, verify your details, complete your profile, and securely log out.
          </p>
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 space-y-8 text-muted-foreground">
          
          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">1. Creating an Account</h3>
            <p className="leading-relaxed">The platform supports two distinct account creation paths depending on whether you are joining independently or have been pre-invited to a trip.</p>
            
            <h4 className="text-xl font-semibold text-foreground pt-2">Independent Registration</h4>
            <p className="leading-relaxed">If you are joining the platform as a new user without a prior invitation, navigate to the signup screen. You can create an account using your email address and a password, or authenticate instantly with Google Sign-In. Upon your first login, your user profile is automatically provisioned in the database with your basic details.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Invited Participants (Claiming an Invitation)</h4>
            <p className="leading-relaxed">If a trip organiser has already added you to a trip or a specific team using your email address, a temporary &quot;placeholder&quot; profile will be waiting for you in the system.</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">The Setup Link:</strong> You will receive an automated email invitation containing a secure link. Clicking this link takes you directly to the signup screen with your invitation context intact.</li>
              <li><strong className="text-foreground">Automatic Data Merging:</strong> When you complete registration using that specific email address, the system runs an automated data-merging sequence. It seamlessly transfers your pre-assigned team positions, leg assignments, and organiser roles from the temporary placeholder to your permanent account.</li>
              <li><strong className="text-foreground">Consolidating Identity:</strong> Once your active race history is securely linked, the temporary placeholder profile is automatically deleted to ensure you have a single, clean identity across the platform.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">2. Verifying Your Details</h3>
            <p className="leading-relaxed">To maintain competitive integrity and fair play, all participants must verify their contact details before full platform access is granted.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Email Verification</h4>
            <p className="leading-relaxed">Verifying your email address is essential to unlock full submission permissions, such as logging expenses or submitting checkpoints.</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Email and Password Users:</strong> A verification link is dispatched to your inbox automatically upon signup.</li>
              <li><strong className="text-foreground">Social Sign-In:</strong> Users authenticating directly via Google Sign-In bypass manual email verification links, as their verification status is inherited implicitly from their identity provider.</li>
            </ul>

            <h4 className="text-xl font-semibold text-foreground pt-2">Phone Number Verification</h4>
            <p className="leading-relaxed">Registering and validating a contact number is a critical onboarding step used to verify your identity before race departure.</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Formatting:</strong> When entering your phone number on your profile, the input field automatically formats it to meet strict international standards.</li>
              <li><strong className="text-foreground">SMS Verification:</strong> You will receive an SMS containing a One-Time Password (OTP) on your mobile device. Entering this code securely flags your phone number as verified in the system.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">3. The Onboarding Banner and Profile Completeness</h3>
            <p className="leading-relaxed">Upon logging into the race dashboard, your profile completeness is continuously assessed. If you are missing vital details, a prominent notification banner locks itself to the top of your screen.</p>
            
            <div className="bg-destructive/10 border border-destructive/20 text-destructive font-bold p-4 rounded-lg my-4 text-center">
              ⚠️ Profile Incomplete: Please upload a profile photo and verify your phone.
            </div>

            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Tailored Guidance:</strong> The banner reads your profile status to tell you exactly what is missing, specifying if you still need to upload a profile photo, provide a phone number, or complete your outstanding SMS verification.</li>
              <li><strong className="text-foreground">Instant Dismissal:</strong> The moment you fulfil the last requirement, the banner vanishes from your dashboard automatically.</li>
              <li><strong className="text-foreground">Automatic Restoration:</strong> The banner will automatically restore itself if you make a retroactive change that invalidates your completeness (such as switching to a new, unverified phone number).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">4. My Profile and Security Management</h3>
            <p className="leading-relaxed">You can access and audit your personal details at any time by navigating to the <strong>My Profile</strong> menu option.</p>

            <h4 className="text-xl font-semibold text-foreground pt-2">Profile Information and Image Processing</h4>
            <p className="leading-relaxed">Your display name and contact numbers can be adjusted inline. When updating your avatar, the profile card features a premium drag-and-drop upload zone.</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Data-Saving Compression:</strong> Because you will frequently upload photos from train platforms or remote areas over mobile data, the app automatically compresses and resizes all uploaded images directly on your device before sending them, protecting your data allowance.</li>
            </ul>

            <h4 className="text-xl font-semibold text-foreground pt-2">Sensitive Account Modifications</h4>
            <p className="leading-relaxed">If you use an email and password login, a dedicated security section becomes visible on your profile page.</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Re-authentication:</strong> Performing critical modifications—such as updating your email address or changing your password—requires you to enter your current password as a protective guard before the change is processed.</li>
              <li><strong className="text-foreground">Email Verification Reset:</strong> If you successfully change your registered email address, the system will instantly reset your email verification status to unverified, locking your write permissions until you validate the new address.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">5. Logging Out</h3>
            <p className="leading-relaxed">To maintain local device security and secure your competitive data, locate the user profile navigation block at the bottom of your sidebar menu.</p>
            <p className="leading-relaxed">Clicking the <strong>Sign Out</strong> option initiates a hardened session termination routine designed to protect your account across shared mobile viewports:</p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong className="text-foreground">Token Purging:</strong> The logout sequence executes an immediate clearance routine, aggressively purging all active authentication data, tokens, and temporary files from your browser's memory.</li>
              <li><strong className="text-foreground">Full Context Reset:</strong> Rather than a standard page transition, the sign-out pipeline triggers a native, full-page browser redirection. This forces a clean page reload and complete context reset, guaranteeing that no residual team data or cached race dashboards remain visible on a shared device.</li>
            </ul>
          </section>
        </div>

      </div>
    </main>
  );
}
