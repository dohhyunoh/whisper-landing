"use client";

import { useRive } from "@rive-app/react-canvas";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/site";

type ArgoEmotion = "clear" | "sad" | "angry" | "anxiety";

interface Mood {
  id: string;
  label: string;
  color: string;
  message: string;
  emotion: ArgoEmotion;
  icon: (size: number, color: string) => React.ReactNode;
}

function SunIcon(size: number, color: string) {
  const c = size / 2;
  const r = size * 0.2;
  const rayInner = size * 0.35;
  const rayOuter = size * 0.46;
  const strokeW = size * 0.08;
  const rays = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 45 * Math.PI) / 180;
    return {
      x1: c + rayInner * Math.cos(angle),
      y1: c + rayInner * Math.sin(angle),
      x2: c + rayOuter * Math.cos(angle),
      y2: c + rayOuter * Math.sin(angle),
    };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth={strokeW} />
      {rays.map((ray, i) => (
        <line key={i} {...ray} stroke={color} strokeWidth={strokeW} strokeLinecap="round" />
      ))}
    </svg>
  );
}

function CloudIcon(size: number, color: string) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M6.5 18.5C4.015 18.5 2 16.485 2 14c0-2.2 1.575-4.035 3.665-4.435C6.28 7.005 8.895 5 12 5c3.865 0 7 3.135 7 7h.5c1.93 0 3.5 1.57 3.5 3.5S21.43 19 19.5 19h-13c-.17 0-.335-.005-.5-.015"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StormIcon(size: number, color: string) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M6.5 16C4.015 16 2 13.985 2 11.5c0-2.2 1.575-4.035 3.665-4.435C6.28 4.505 8.895 2.5 12 2.5c3.865 0 7 3.135 7 7h.5c1.93 0 3.5 1.57 3.5 3.5S21.43 16.5 19.5 16.5H6.5"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="9" y1="18.5" x2="8" y2="21" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
      <line x1="13" y1="18.5" x2="12" y2="21" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
      <line x1="17" y1="18.5" x2="16" y2="21" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

function WindIcon(size: number, color: string) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12h14a2.5 2.5 0 1 1-2.5 2.5"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16h6a2 2 0 1 1-2 2"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Mirrors data/moods.tsx in the app repo — keep copy and colors in sync.
const MOODS: Mood[] = [
  {
    id: "clear",
    label: "Clear",
    color: "#89CFF0",
    message: "Light, open, easy. Your mind feels bright and the day looks kind.",
    emotion: "clear",
    icon: SunIcon,
  },
  {
    id: "cloudy",
    label: "Cloudy",
    color: "#A0B4C8",
    message: "Tender and tearful. There's a quiet sadness sitting close to the surface today.",
    emotion: "sad",
    icon: CloudIcon,
  },
  {
    id: "stormy",
    label: "Stormy",
    color: "#8DA399",
    message: "Charged up and frustrated. Anger is crackling through — something's pushed you too far.",
    emotion: "angry",
    icon: StormIcon,
  },
  {
    id: "windy",
    label: "Windy",
    color: "#BFA6C9",
    message: "Restless and racing. Your heart's quick and your mind won't quite settle.",
    emotion: "anxiety",
    icon: WindIcon,
  },
];

const SPARKLES = [
  { top: "15%", left: "20%", size: 6, delay: 0, duration: 3 },
  { top: "25%", right: "25%", size: 5, delay: 1, duration: 4 },
  { top: "60%", left: "15%", size: 3, delay: 2, duration: 3.5 },
  { top: "70%", right: "30%", size: 5, delay: 0.5, duration: 4 },
  { top: "40%", right: "15%", size: 3, delay: 1.5, duration: 3 },
];

function ArgoEmotionView({ emotion }: { emotion: ArgoEmotion }) {
  const { rive, RiveComponent } = useRive({
    src: "/argo_4em.riv",
    artboard: "main",
    stateMachines: "main",
    autoplay: true,
    autoBind: true,
  });

  useEffect(() => {
    if (!rive) return;
    rive.viewModelInstance?.trigger(emotion)?.trigger();
  }, [rive, emotion]);

  return <RiveComponent className="w-full h-full" />;
}

export default function HeroDemo() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const displayIndex = selectedIndex >= 0 ? selectedIndex : 0; // default to Clear visually
  const displayMood = MOODS[displayIndex];

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden select-none"
      style={{
        background:
          "linear-gradient(180deg, #B8D9E8 0%, #D4E8F0 30%, #EEF4F7 70%, #F5F5F0 100%)",
      }}
    >
      {/* Sparkles */}
      {SPARKLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{ ...p, width: p.size, height: p.size }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <p className="pt-8 text-center text-[17px] font-light text-whisper-primary">
        How does your mind feel?
      </p>

      {/* Argo + label */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-0">
        <motion.div
          className="w-44 h-44"
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            key={`pop-${selectedIndex}`}
            className="w-full h-full"
            initial={selectedIndex >= 0 ? { scale: 0.85 } : false}
            animate={{ scale: 1 }}
            transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] }}
          >
            <ArgoEmotionView emotion={displayMood.emotion} />
          </motion.div>
        </motion.div>

        <motion.div
          key={`label-${displayIndex}`}
          className="mt-3 px-8 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-lg font-bold tracking-wide" style={{ color: displayMood.color }}>
            {displayMood.label}
          </p>
          <p className="mt-1 text-[11px] font-light text-[#6B8F9E]">{displayMood.message}</p>
        </motion.div>
      </div>

      {/* Mood pills + CTA */}
      <div className="pb-6">
        <div className="flex justify-center gap-1.5 px-3">
          {MOODS.map((mood, i) => {
            const isSelected = selectedIndex === i;
            return (
              <button
                key={mood.id}
                type="button"
                onClick={() => setSelectedIndex(i)}
                className="flex flex-col items-center rounded-xl px-2 py-2 min-w-[52px] border-[1.5px] transition-colors cursor-pointer"
                style={{
                  backgroundColor: isSelected ? mood.color : "rgba(255,255,255,0.6)",
                  borderColor: isSelected ? mood.color : "transparent",
                }}
              >
                <span className="mb-0.5">{mood.icon(16, isSelected ? "#fff" : mood.color)}</span>
                <span
                  className="text-[9px] font-semibold"
                  style={{ color: isSelected ? "#fff" : "#7B9AAA" }}
                >
                  {mood.label}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          className="mt-4 px-6"
          animate={{ opacity: selectedIndex >= 0 ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-white/95 py-2.5 text-center text-sm font-bold tracking-wide text-whisper-primary border-2 border-[rgba(184,217,232,0.4)] shadow-[0_8px_12px_rgba(90,139,168,0.15)] active:translate-y-0.5"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
}
