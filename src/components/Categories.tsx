"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/data";

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-whisper-primary-dark">
          What we cover
        </h2>
        <p className="text-center text-whisper-secondary mt-3 max-w-lg mx-auto">
          Thousands of quotes across the corners of life that matter most. Your
          daily 10 is drawn from whichever ones speak to you.
        </p>

        <div className="mt-10 flex gap-4 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible pb-2">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex-shrink-0 w-48 lg:w-auto rounded-2xl shadow-sm hover:scale-[1.03] transition-transform duration-300 cursor-default"
              style={{
                background: `linear-gradient(160deg, ${cat.gradient[0]} 0%, ${cat.gradient[1]} 35%, ${cat.gradient[2]} 70%, ${cat.gradient[3]} 100%)`,
              }}
            >
              <div className="p-5 flex flex-col items-center text-center h-full min-h-[160px] justify-between">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-semibold text-whisper-primary-dark">
                  {cat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
