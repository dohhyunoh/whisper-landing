import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Whisper",
};

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, #B8D9E8 0%, #D4E8F0 40%, #EEF4F7 75%, #F5F5F0 100%)",
      }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-4xl mx-auto">
        <Link href="/" className="text-xl font-semibold text-whisper-primary-dark tracking-tight">
          Whisper
        </Link>
        <Link href="/" className="text-sm text-whisper-secondary hover:text-whisper-primary-dark transition-colors">
          ← Back
        </Link>
      </nav>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 pb-24 pt-8">
        <h1 className="text-4xl font-bold text-whisper-primary-dark">Privacy Policy</h1>
        <p className="text-whisper-secondary mt-2 text-sm">Last updated: February 2026</p>

        <Section title="What information we collect">
          <p>
            Whisper collects only what is necessary to deliver a personalised experience:
          </p>
          <ul>
            <li><strong>Onboarding data</strong> — the name, preferences, and interest categories you choose during setup. This is stored locally on your device.</li>
            <li><strong>Liked &amp; saved quotes</strong> — stored locally via AsyncStorage so your favourites persist across sessions.</li>
            <li><strong>Premium status</strong> — a flag indicating whether you have unlocked Premium, stored locally.</li>
            <li><strong>Device identifiers</strong> — only if required by the app store platform for analytics; we do not collect these independently.</li>
          </ul>
        </Section>

        <Section title="How we use your information">
          <p>
            All personal data you provide during onboarding is used solely to customise which quotes appear in your feed. We do not use it for advertising, profiling, or any other purpose.
          </p>
        </Section>

        <Section title="Data stored on your device">
          <p>
            By default, Whisper stores all user data on your device using local storage (AsyncStorage). No data is transmitted to our servers unless you explicitly opt in to a feature that requires it (e.g. cloud sync, if introduced in a future version).
          </p>
        </Section>

        <Section title="Cookies and tracking">
          <p>
            The Whisper mobile app does not use cookies or web tracking technologies. This website (the landing page) may use basic analytics provided by our hosting provider (Vercel) to understand traffic patterns. No personal identifiers are collected or shared.
          </p>
        </Section>

        <Section title="Third-party services">
          <p>
            We use the following third-party services:
          </p>
          <ul>
            <li><strong>Google Fonts</strong> — to load premium typefaces. Google may log font requests; see their privacy policy at google.com/privacy.</li>
            <li><strong>Vercel</strong> — to host this landing page. See their privacy policy at vercel.com/legal/privacy-policy.</li>
            <li><strong>Apple App Store / Google Play</strong> — distribution platforms governed by their own privacy policies.</li>
          </ul>
        </Section>

        <Section title="How long we keep your data">
          <p>
            Data stored locally on your device persists until you delete the app or manually clear app data. We do not retain copies of this data on any server.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            You can delete all locally stored data at any time by uninstalling the app. If you have questions about specific data rights under your jurisdiction (e.g. GDPR, CCPA), please contact us at the address below.
          </p>
        </Section>

        <Section title="Children's privacy">
          <p>
            Whisper is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us so we can remove it.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the app after a change constitutes acceptance.
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            If you have questions or concerns about your privacy, reach out via the Contact link in the footer of this site.
          </p>
        </Section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
        <span className="text-white font-semibold">Whisper</span> © 2026 &middot;{" "}
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link> &middot;{" "}
        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-whisper-primary-dark">{title}</h2>
      <div className="mt-2 text-whisper-secondary leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
