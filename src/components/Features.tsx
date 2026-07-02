"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "10 quotes daily",
    desc: "A tightly curated batch of 10 quotes every morning. Scarce, intentional, never overwhelming.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="4" stroke="#5A8BA8" strokeWidth="2.5" fill="none" />
        <text x="16" y="22" fontSize="13" fontWeight="700" fill="#5A8BA8" textAnchor="middle">10</text>
      </svg>
    ),
  },
  {
    title: "Swipe to teach",
    desc: "Swipe right when it speaks to you. Swipe left when it doesn't. Every swipe sharpens tomorrow's deck.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 16h16M20 12l4 4-4 4M12 12l-4 4 4 4" stroke="#5A8BA8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Write to a stranger",
    desc: "After your daily check-in, offer a few kind words to a stranger — and a different soul writes back to you. Anonymous, private, and gently fading within a day.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="8" width="22" height="16" rx="3" stroke="#5A8BA8" strokeWidth="2.5" fill="none" />
        <path d="M6 10l10 7 10-7" stroke="#5A8BA8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Your Soul Signature",
    desc: "See the shape of who you've been swiping like — a constellation of the themes that move you most.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="2" fill="#5A8BA8" />
        <circle cx="8" cy="9" r="2" fill="#F4B6C2" />
        <circle cx="24" cy="10" r="2" fill="#A7C7DC" />
        <circle cx="7" cy="22" r="2" fill="#F2D8A7" />
        <circle cx="25" cy="22" r="2" fill="#C9B8E0" />
        <path d="M16 16L8 9M16 16L24 10M16 16L7 22M16 16L25 22" stroke="#5A8BA8" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Save & share",
    desc: "Tap the heart to keep the words that hit deep. Share them in one tap.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28c-1-.7-8-5.2-8-10.2C8 14.6 10 12 13 12c1.4 0 2.3.8 3 2 .7-1.2 1.6-2 3-2 3 0 5 2.6 5 5.8C24 22.8 17 27.3 16 28z" fill="#E85D75" />
      </svg>
    ),
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-whisper-primary-dark">
          A daily ritual, not a feed
        </h2>
        <p className="text-center text-whisper-secondary mt-3 max-w-xl mx-auto">
          Whisper is built for intention, not endless scroll — ten quotes to steady your morning, and a quiet, anonymous way to reach a stranger who needs it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-whisper-primary-dark text-lg">
                {f.title}
              </h3>
              <p className="text-whisper-secondary text-sm mt-1 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
