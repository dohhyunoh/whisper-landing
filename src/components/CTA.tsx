"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(180deg, #D4E8F0 0%, #B8D9E8 50%, #7B9AAA 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto flex flex-col items-center text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-whisper-primary-dark">
          Find the words that speak to you.
        </h2>
        <p className="text-whisper-secondary mt-3 text-lg">
          Whisper is free to download.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="https://apps.apple.com/us/app/whisper-daily-quotes/id6758811323"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-md hover:bg-gray-800 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-left">
              <div className="text-xs opacity-75">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
