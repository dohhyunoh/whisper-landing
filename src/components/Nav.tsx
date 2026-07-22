"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : "bg-transparent"
      }`}
    >
      <span className="text-xl font-semibold text-whisper-primary-dark tracking-tight">
        Whisper
      </span>

      <a
        href="https://apps.apple.com/us/app/whisper-daily-quotes/id6758811323"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-whisper-accent text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
      >
        Get Whisper — it&apos;s free
      </a>
    </nav>
  );
}
