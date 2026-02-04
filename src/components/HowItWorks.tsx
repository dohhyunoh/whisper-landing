"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Download & Set Up",
    desc: "Grab Whisper from the App Store or Google Play. Takes seconds to install and open.",
  },
  {
    number: "02",
    title: "Tell Us What Inspires You",
    desc: "Pick your favourite categories — motivation, philosophy, health, and more — during a quick onboarding flow.",
  },
  {
    number: "03",
    title: "Enjoy Daily Quotes",
    desc: "Receive a fresh, personalised quote every day. Swipe, save, and share what speaks to you.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(180deg, #F5F5F0 0%, #EEF4F7 50%, #D4E8F0 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-whisper-primary-dark">
          How it works
        </h2>
        <p className="text-center text-whisper-secondary mt-3 max-w-lg mx-auto">
          Three simple steps and you&apos;re on your way to daily inspiration.
        </p>

        <div className="relative mt-14 flex flex-col lg:flex-row items-start justify-center gap-8">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 h-0.5 bg-whisper-primary/30 w-3/4" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.18, ease: "easeOut" }}
              className="relative flex-1 flex flex-col items-center text-center"
            >
              {/* Circle with number */}
              <div
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ background: "linear-gradient(135deg, #5A8BA8, #3A6B80)" }}
              >
                {step.number}
              </div>

              <h3 className="mt-5 font-semibold text-whisper-primary-dark text-lg">
                {step.title}
              </h3>
              <p className="text-whisper-secondary text-sm mt-2 max-w-xs leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
