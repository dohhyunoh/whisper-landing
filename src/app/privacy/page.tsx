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
        <p className="text-whisper-secondary mt-2 text-sm">Last updated: July 2026</p>

        <Section title="What information we collect">
          <p>
            Whisper collects only what is necessary to deliver a personalised experience:
          </p>
          <ul>
            <li><strong>Onboarding data</strong> — the name, preferences, and interest categories you choose during setup. This is stored locally on your device.</li>
            <li><strong>Liked &amp; saved quotes</strong> — stored locally via AsyncStorage so your favourites persist across sessions.</li>
            <li><strong>Premium status</strong> — a flag indicating whether you have unlocked Premium, stored locally.</li>
            <li><strong>Anonymous exchange content</strong> — if you use Whisper&apos;s anonymous letter exchange, the short notes you write, the mood you check in with, and (optionally) the general themes and gender you selected during onboarding are sent to our backend so a note can be delivered to and from other people. This content is linked only to an anonymous device identifier — never to your name, email, or any personal profile. Notes are automatically deleted after roughly 24 hours.</li>
            <li><strong>Anonymous device identifier</strong> — to route exchange notes without requiring any login, Whisper creates an anonymous identifier for your device (via Supabase Anonymous Authentication). It contains no personal information.</li>
            <li><strong>Push notification token</strong> — if you turn on message notifications, we store your device&apos;s push token so we can alert you when someone responds to, or likes, your note.</li>
            <li><strong>Anonymous analytics data</strong> — to improve the app experience, we collect anonymous usage data including screen views, feature usage, and onboarding progress. No personally identifiable information is collected.</li>
            <li><strong>Advertising identifier (IDFA)</strong> — if you grant permission via the App Tracking Transparency prompt, we collect your device&apos;s advertising identifier to measure the performance of advertising campaigns. You can decline this prompt and the app will function normally without it.</li>
            <li><strong>Attribution data</strong> — we collect anonymous install and in-app event data (e.g. subscription events) to understand which advertising campaigns bring users to Whisper. This data is processed by AppsFlyer and shared with advertising partners such as TikTok.</li>
          </ul>
        </Section>

        <Section title="How we use your information">
          <p>
            Personal data you provide during onboarding is used solely to customise which quotes appear in your feed. We do not use it for advertising or profiling. Advertising identifiers and attribution data, when collected, are used only to measure advertising campaign performance and optimise ad delivery through our advertising partners.
          </p>
        </Section>

        <Section title="Data stored on your device">
          <p>
            By default, Whisper stores your personal data — your name, preferences, interests, liked quotes, and premium status — locally on your device using local storage (AsyncStorage). This information is never transmitted to our servers.
          </p>
          <p>
            The one exception is the anonymous letter exchange (described below): to deliver a note between two people, the note itself must pass through our backend. It is stored anonymously and deleted automatically after roughly 24 hours.
          </p>
        </Section>

        <Section title="The anonymous letter exchange">
          <p>
            Whisper includes an optional feature that lets you exchange short, anonymous notes of encouragement with other users. We designed it to be private and anonymous by default:
          </p>
          <ul>
            <li><strong>No identity.</strong> Notes are tied to an anonymous device identifier only. There are no names, no profiles, and no way for another user to see who you are.</li>
            <li><strong>Ephemeral.</strong> Every note (and any report record) is automatically deleted from our backend after approximately 24 hours.</li>
            <li><strong>Screened for safety.</strong> Before a note is delivered, its text is checked by an automated moderation service (OpenAI&apos;s Moderation API) to filter harmful content. This check is used only for safety — never for advertising, profiling, or model training. Notes that indicate a crisis are shown supportive resources instead of being delivered to another person.</li>
            <li><strong>You are in control.</strong> You can report or block any note or sender at any time, and you can turn message notifications on or off in Settings.</li>
          </ul>
          <p>
            The backend that stores and routes these notes is provided by Supabase. We do not sell exchange content, and we do not use it for advertising.
          </p>
        </Section>

        <Section title="Advertising and tracking">
          <p>
            When you first open Whisper, you will be shown Apple&apos;s App Tracking Transparency (ATT) prompt asking for permission to track your activity across other companies&apos; apps and websites. If you consent, your device&apos;s advertising identifier (IDFA) will be shared with AppsFlyer and our advertising partners (such as TikTok) to measure ad campaign performance. If you decline, the app will still function normally — only anonymous, aggregated data will be used for attribution via Apple&apos;s SKAdNetwork framework.
          </p>
          <p>
            This website (the landing page) may use basic analytics provided by our hosting provider (Vercel) to understand traffic patterns. No personal identifiers are collected or shared via the website.
          </p>
        </Section>

        <Section title="Third-party services">
          <p>
            We use the following third-party services:
          </p>
          <ul>
            <li><strong>Supabase</strong> — provides the backend for the anonymous letter exchange: it stores and routes the notes, the anonymous device identifier, and your push notification token. Exchange notes are deleted automatically after roughly 24 hours. See their privacy policy at <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-whisper-primary hover:underline">supabase.com/privacy</a>.</li>
            <li><strong>OpenAI</strong> — the text of exchange notes is sent to OpenAI&apos;s Moderation API to screen for harmful content before delivery. This is used solely for safety and is not used to train models or for advertising. See their privacy policy at <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-whisper-primary hover:underline">openai.com/policies/privacy-policy</a>.</li>
            <li><strong>Expo</strong> — delivers push notifications for the exchange (e.g. when someone responds to your note). Your anonymous push token is processed to route the notification to your device. See their privacy policy at <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-whisper-primary hover:underline">expo.dev/privacy</a>.</li>
            <li><strong>PostHog</strong> — to collect and process anonymous analytics data (screen views, feature usage, onboarding progress) to improve the app experience. No personally identifiable information is collected. See their privacy policy at <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-whisper-primary hover:underline">posthog.com/privacy</a>.</li>
            <li><strong>RevenueCat</strong> — to process in-app purchases. RevenueCat collects purchase history and anonymous device identifiers. Subscription events are forwarded to AppsFlyer for attribution purposes. See their privacy policy at <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-whisper-primary hover:underline">revenuecat.com/privacy</a>.</li>
            <li><strong>AppsFlyer</strong> — to measure advertising campaign performance and attribute app installs and in-app events (such as subscriptions) to their originating ad campaigns. AppsFlyer may collect your IDFA (with your consent), anonymous device identifiers, and in-app event data. This data is shared with our advertising partners (such as TikTok) to optimise ad delivery. See their privacy policy at <a href="https://www.appsflyer.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-whisper-primary hover:underline">appsflyer.com/privacy</a>.</li>
            <li><strong>TikTok Ads</strong> — receives attribution and conversion data from AppsFlyer to measure and optimise advertising campaigns that direct users to Whisper. See their privacy policy at <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-whisper-primary hover:underline">tiktok.com/privacy</a>.</li>
            <li><strong>Google Fonts</strong> — to load premium typefaces. Google may log font requests; see their privacy policy at google.com/privacy.</li>
            <li><strong>Vercel</strong> — to host this landing page. See their privacy policy at vercel.com/legal/privacy-policy.</li>
            <li><strong>Apple App Store</strong> — distribution platform governed by its own privacy policy.</li>
          </ul>
        </Section>

        <Section title="How long we keep your data">
          <p>
            Data stored locally on your device persists until you delete the app or manually clear app data. We do not retain copies of this local data on any server.
          </p>
          <p>
            Anonymous letter-exchange content (notes, replies, and report records) is automatically deleted from our backend approximately 24 hours after it is created. Your anonymous device identifier and push token persist only so the feature can function, and are removed when you turn off message notifications or stop using the exchange.
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
