"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const BULLETS = [
  "10 personalised quotes every day",
  "Swipe-trained learning engine",
  "Your evolving Soul Signature",
  "Save unlimited favourites + write your own",
  "Premium themes, fonts, and widgets",
];

export default function Premium() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(180deg, #EEF4F7 0%, #D4E8F0 60%, #B8D9E8 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-whisper-primary-dark">
          Whisper Pro
        </h2>
        <p className="text-center text-whisper-secondary mt-3 max-w-lg mx-auto">
          One subscription. Everything Whisper does. Cancel anytime.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl shadow-md border border-white/60 p-8 sm:p-10 max-w-2xl mx-auto"
        >
          {/* Price */}
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-whisper-accent/10 text-whisper-accent text-xs font-bold tracking-wider uppercase">
              3-day free trial
            </div>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-whisper-primary-dark">$3.99</span>
              <span className="text-whisper-secondary">/ week</span>
            </div>
            <p className="mt-2 text-sm text-whisper-secondary">
              or <span className="font-semibold text-whisper-primary-dark">$59.99/year</span> — save 71%
            </p>
          </div>

          {/* Bullets */}
          <ul className="mt-8 space-y-3.5">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-whisper-accent text-white flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-whisper-primary-dark">{b}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://apps.apple.com/us/app/whisper-daily-quotes/id6758811323"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full text-center bg-whisper-accent text-white px-7 py-3.5 rounded-full font-semibold shadow-md hover:opacity-90 transition-opacity"
          >
            Start free trial
          </a>
          <p className="mt-3 text-center text-xs text-whisper-secondary">
            No charge for 3 days. Cancel anytime in your Apple ID settings.
          </p>
        </motion.div>

        {/* Grandfathered note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-whisper-secondary max-w-xl mx-auto"
        >
          Already subscribed to Whisper before this update? Your price is locked at
          your original rate. Nothing changes for you.
        </motion.p>
      </div>
    </section>
  );
}
