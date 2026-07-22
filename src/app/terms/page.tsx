import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Whisper",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-whisper-primary-dark">Terms of Service</h1>
        <p className="text-whisper-secondary mt-2 text-sm">Last updated: July 2026</p>

        <Section title="Acceptance of terms">
          <p>
            By downloading, installing, or using Whisper in any way, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.
          </p>
        </Section>

        <Section title="What Whisper is">
          <p>
            Whisper is a mobile application that delivers a tightly curated batch of 10 personalised quotes each day. As you swipe through your daily deck, Whisper learns from your preferences and refines the quotes it shows you over time.
          </p>
          <p>
            Whisper is currently free to download and use. We reserve the right to introduce optional paid features or subscriptions in the future; any such change would be clearly disclosed in the app before you are charged.
          </p>
        </Section>

        <Section title="Legacy subscriptions">
          <p>
            Earlier versions of Whisper required a paid subscription. Those subscription plans have been discontinued and are no longer available for purchase.
          </p>
          <ul>
            <li><strong>If you subscribed previously</strong> — your subscription will not renew again. You retain access to any paid features you had until the end of your last billing period, at no further charge.</li>
            <li><strong>Cancelling early</strong> — if you wish to cancel before your current billing period ends, you can do so at any time via your Apple ID account settings: <strong>Settings → [your name] → Subscriptions → Whisper</strong>.</li>
            <li>No partial refunds are offered for unused portions of a subscription period; refund requests are handled directly by Apple in accordance with their refund policy.</li>
          </ul>
        </Section>

        <Section title="Your responsibilities">
          <ul>
            <li>You must be at least 13 years old to use Whisper.</li>
            <li>You are responsible for any content you create within the app (e.g. personal quotes).</li>
            <li>You agree not to reverse-engineer, scrape, or otherwise misuse the app or its data.</li>
            <li>You agree not to use Whisper for any unlawful or harmful purpose.</li>
          </ul>
        </Section>

        <Section title="Intellectual property">
          <p>
            All content within Whisper — including the quote database, app design, branding, and code — is the intellectual property of the Whisper team. You may not reproduce, distribute, or create derivative works without prior written permission.
          </p>
          <p>
            Quotes attributed to third parties remain the intellectual property of their original authors. Whisper does not claim ownership of those quotes.
          </p>
        </Section>

        <Section title="User-created content">
          <p>
            If you write your own quotes inside the app, you retain ownership of that content. By creating quotes in Whisper, you grant us a non-exclusive, royalty-free licence to store and display that content within your account. We will not share your personal quotes with other users or third parties without your consent.
          </p>
        </Section>

        <Section title="Disclaimers">
          <p>
            Whisper is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee that the app will be error-free, uninterrupted, or free of viruses. The quotes in Whisper are for inspirational purposes only and do not constitute professional advice (medical, legal, financial, or otherwise).
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of Whisper, including but not limited to loss of data or loss of profits.
          </p>
        </Section>

        <Section title="Termination">
          <p>
            We reserve the right to suspend or terminate access to Whisper at any time, with or without cause. You may stop using the app at any time by uninstalling it (and cancelling any active legacy subscription through your Apple ID account settings, if applicable).
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these terms from time to time. Changes will be posted on this page with an updated date. Continued use of Whisper after a change constitutes acceptance of the new terms.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by and construed in accordance with the laws of the jurisdiction in which the Whisper team operates, without regard to conflict-of-law principles.
          </p>
        </Section>

        <Section title="Standard End User License Agreement (EULA)">
          <p>
            This app uses the standard Apple End User License Agreement (EULA). You can review it here:{" "}
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-whisper-primary-dark hover:opacity-80 transition-opacity"
            >
              Apple Standard EULA
            </a>.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions about these terms, please reach out via the Contact link in the footer of this site.
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
