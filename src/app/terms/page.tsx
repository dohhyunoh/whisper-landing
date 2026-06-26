import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Whisper",
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
        <p className="text-whisper-secondary mt-2 text-sm">Last updated: June 2026</p>

        <Section title="Acceptance of terms">
          <p>
            By downloading, installing, or using Whisper in any way, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.
          </p>
        </Section>

        <Section title="What Whisper is">
          <p>
            Whisper is a premium mobile application that delivers a tightly curated batch of 10 personalised quotes each day. As you swipe through your daily deck, Whisper learns from your preferences and refines the quotes it shows you over time.
          </p>
          <p>
            <strong>As of version 1.0.16, Whisper requires an active paid subscription to use.</strong> A free trial is available for new subscribers where applicable.
          </p>
        </Section>

        <Section title="Subscription">
          <p>
            Whisper is offered exclusively as a paid subscription, available in weekly and annual plans. Pricing is displayed in the app at the point of purchase and may vary by region.
          </p>
          <ul>
            <li><strong>New subscribers</strong> — subscriptions are billed at the price displayed in the app at the time of purchase. New subscribers may be eligible for a 3-day free trial. Eligibility is determined by Apple based on your prior subscription history.</li>
            <li><strong>Existing subscribers from earlier versions</strong> — if you were already an active paying subscriber prior to the v1.0.16 update, your existing subscription continues at your original price. Apple will continue to auto-renew your subscription at the rate you originally agreed to, unless you cancel.</li>
            <li><strong>Free trial</strong> — if a free trial is offered and you accept it, you will not be charged during the trial period. Your subscription begins automatically at the end of the trial unless you cancel at least 24 hours before it ends.</li>
          </ul>
        </Section>

        <Section title="Auto-renewal and cancellation">
          <p>
            Subscriptions automatically renew at the end of each billing period (weekly or annually) at the then-current price unless auto-renewal is turned off at least 24 hours before the end of the current period.
          </p>
          <p>
            You can manage and cancel your subscription at any time by going to your Apple ID account settings on your device:{" "}
            <strong>Settings → [your name] → Subscriptions → Whisper</strong>.
          </p>
          <p>
            Cancellation will take effect at the end of the current billing period. You will retain access until that date. No partial refunds are offered for unused portions of a subscription period; refund requests are handled directly by Apple in accordance with their refund policy.
          </p>
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
            We reserve the right to suspend or terminate access to Whisper at any time, with or without cause. You may stop using the app at any time by uninstalling it and cancelling your subscription through your Apple ID account settings.
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
