"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { THEME_SWATCHES } from "@/lib/data";

const BULLETS = [
  "Unlimited access to every category",
  "12 stunning background themes",
  "4 premium fonts + Shuffle mode",
  "Early bird users get Premium free",
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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-whisper-primary-dark">
          Go Premium
        </h2>
        <p className="text-center text-whisper-secondary mt-3 max-w-lg mx-auto">
          Unlock the full Whisper experience with beautiful themes and exclusive
          fonts.
        </p>

        <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start justify-center">
          {/* Left — feature list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex-1 max-w-md"
          >
            <ul className="space-y-4">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-whisper-accent text-white flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-whisper-primary-dark font-medium">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-block mt-8 bg-whisper-accent text-white px-7 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition-opacity"
            >
              Unlock Premium
            </a>
          </motion.div>

          {/* Right — theme swatches grid (placeholder thumbnails) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="flex-1 max-w-md w-full"
          >
            <div className="grid grid-cols-4 gap-3">
              {THEME_SWATCHES.map((t) => (
                <div key={t.key} className="flex flex-col items-center">
                  <div
                    className="w-full aspect-square rounded-xl shadow-sm border border-white/60"
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="text-xs text-whisper-secondary mt-1.5 text-center leading-tight">
                    {t.displayName}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
