"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CAROUSEL_QUOTES } from "@/lib/data";

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % CAROUSEL_QUOTES.length),
    []
  );
  const prev = useCallback(
    () =>
      setIndex(
        (i) => (i - 1 + CAROUSEL_QUOTES.length) % CAROUSEL_QUOTES.length
      ),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  const quote = CAROUSEL_QUOTES[index];

  return (
    <section
      className="py-24 px-6"
      style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243C5A 100%)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-10">
          Words from the collection
        </h2>

        {/* Quote slide */}
        <div className="relative w-full min-h-[180px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <p className="text-xl sm:text-2xl text-white font-light italic leading-relaxed max-w-2xl">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="mt-4 text-whisper-secondary font-medium">
                — {quote.author}
                {quote.source && (
                  <span className="font-normal opacity-70">
                    , {quote.source}
                  </span>
                )}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {CAROUSEL_QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-whisper-accent scale-110" : "bg-white/30"
              }`}
              aria-label={`Go to quote ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex gap-4 mt-5">
          <button
            onClick={prev}
            aria-label="Previous quote"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next quote"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
