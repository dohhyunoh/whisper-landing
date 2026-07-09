import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Whisper",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #B8D9E8 0%, #D4E8F0 40%, #EEF4F7 75%, #F5F5F0 100%)",
      }}
    >
      {/* Nav */}
      <nav className="flex w-full items-center justify-between px-6 py-5 max-w-4xl mx-auto">
        <Link href="/" className="text-xl font-semibold text-whisper-primary-dark tracking-tight">
          Whisper
        </Link>
        <Link href="/" className="text-sm text-whisper-secondary hover:text-whisper-primary-dark transition-colors">
          ← Back
        </Link>
      </nav>

      {/* Content */}
      <article className="flex-1 max-w-3xl mx-auto px-6 pb-24 pt-8 w-full">
        <h1 className="text-4xl font-bold text-whisper-primary-dark">Contact</h1>
        <p className="text-whisper-secondary mt-2 text-sm">We'd love to hear from you.</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-whisper-primary-dark">Email</h2>
          <p className="mt-2 text-whisper-secondary leading-relaxed">
            For general questions or feedback, drop us a line at{" "}
            <a
              href="mailto:admin@whisperquotes.app"
              className="text-whisper-primary-dark underline hover:opacity-70 transition-opacity"
            >
              admin@whisperquotes.app
            </a>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-whisper-primary-dark">TikTok</h2>
          <p className="mt-2 text-whisper-secondary leading-relaxed">
            Say hi on{" "}
            <a
              href="https://www.tiktok.com/@whisperquotes.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-whisper-primary-dark underline hover:opacity-70 transition-opacity"
            >
              @whisperquotes.app
            </a>
            .
          </p>
        </section>
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
