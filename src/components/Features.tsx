"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Personalized for You",
    desc: "Tell us your interests during onboarding and we curate quotes that resonate with your life.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28c-1-.7-8-5.2-8-10.2C8 14.6 10 12 13 12c1.4 0 2.3.8 3 2 .7-1.2 1.6-2 3-2 3 0 5 2.6 5 5.8C24 22.8 17 27.3 16 28z" fill="#E85D75" />
      </svg>
    ),
  },
  {
    title: "Swipe to Discover",
    desc: "Browse an endless feed of beautiful quotes. Save the ones that strike a chord.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 16h16M20 12l4 4-4 4M12 12l-4 4 4 4" stroke="#5A8BA8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Save & Share",
    desc: "Bookmark your favourites and share them with friends in one tap.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="24" cy="8" r="3" stroke="#5A8BA8" strokeWidth="2.5" fill="none" />
        <circle cx="24" cy="24" r="3" stroke="#5A8BA8" strokeWidth="2.5" fill="none" />
        <circle cx="8" cy="16" r="3" stroke="#5A8BA8" strokeWidth="2.5" fill="none" />
        <path d="M10.5 14.5l11 -5M10.5 17.5l11 5" stroke="#5A8BA8" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Write Your Own",
    desc: "Feeling inspired? Pen your own quote and add it to your personal collection.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M22 4l6 6-14 14H8v-6L22 4z" stroke="#5A8BA8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M18 8l6 6" stroke="#5A8BA8" strokeWidth="2.5" strokeLinecap="round" />
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
          Everything you need
        </h2>
        <p className="text-center text-whisper-secondary mt-3 max-w-xl mx-auto">
          Whisper is designed to make daily inspiration effortless.
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
