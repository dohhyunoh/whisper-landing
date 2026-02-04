"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(180deg, #B8D9E8 0%, #D4E8F0 40%, #EEF4F7 75%, #F5F5F0 100%)",
      }}
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 pt-16">
        {/* Left — copy */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-whisper-primary-dark leading-tight">
            Words that
            <br />
            <span className="text-whisper-accent">inspire</span> you.
          </h1>
          <p className="mt-5 text-lg text-whisper-secondary max-w-md">
            A curated collection of quotes tailored to your interests, delivered
            daily. Swipe, save, and share the words that matter most.
          </p>

          {/* Store buttons */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#"
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
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-md hover:bg-gray-800 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.83-1.38L13.16 12l-9.33 9.88C3.34 21.61 3 21.09 3 20.5zm11.5-8.79l2.3-2.3-7.4-7.4 5.1 9.7zm3.14 1.79l2.17-1.25c.5-.29.5-1.06 0-1.35l-2.17-1.25L15.5 12l2.14 2.5zM6.4 20.7l7.4-7.4-2.3-2.3L6.4 20.7z" />
              </svg>
              <span className="text-left">
                <div className="text-xs opacity-75">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right — phone placeholder */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div
            className="w-64 sm:w-72 rounded-3xl shadow-2xl border border-gray-200 flex items-center justify-center"
            style={{
              height: "480px",
              background:
                "linear-gradient(180deg, #B8D9E8 0%, #D4E8F0 50%, #EEF4F7 100%)",
            }}
          >
            <div className="text-center px-6">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-whisper-secondary font-medium text-sm">
                App Screenshot
              </p>
              <p className="text-whisper-secondary/60 text-xs mt-1">
                Swap this placeholder for a real screenshot
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5A8BA8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}
