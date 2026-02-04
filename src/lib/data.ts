// ---------------------------------------------------------------------------
// Brand colors — pulled directly from MyQuotesApp/constants/theme.ts
// ---------------------------------------------------------------------------
export const WhisperColors = {
  primary: "#5A8BA8",
  primaryDark: "#3A6B80",
  secondary: "#7B9AAA",
  accent: "#E85D75",
  bgGradientStart: "#B8D9E8",
  bgGradientMid1: "#D4E8F0",
  bgGradientMid2: "#EEF4F7",
  bgGradientEnd: "#F5F5F0",
};

// ---------------------------------------------------------------------------
// Category gradients — exact 4-stop arrays from MyQuotesApp/constants/categories.ts
// ---------------------------------------------------------------------------
export interface CategoryData {
  key: string;
  label: string;
  gradient: [string, string, string, string];
  icon: string; // emoji used as quick icon
  quoteCount: number;
}

export const CATEGORIES: CategoryData[] = [
  {
    key: "motivation",
    label: "Motivation",
    gradient: ["#F0E0C8", "#F2E9DC", "#F7F4EE", "#F5F5F0"],
    icon: "🔥",
    quoteCount: 100,
  },
  {
    key: "philosophy",
    label: "Philosophy",
    gradient: ["#C8E0F0", "#DCE9F2", "#EEF4F7", "#F5F5F0"],
    icon: "🤔",
    quoteCount: 100,
  },
  {
    key: "health",
    label: "Health",
    gradient: ["#C8F0C8", "#DCF2DC", "#EEF7EE", "#F5F5F0"],
    icon: "🌿",
    quoteCount: 100,
  },
  {
    key: "relationships",
    label: "Relationships",
    gradient: ["#F0C8D8", "#F2DCE4", "#F7EEF0", "#F5F5F0"],
    icon: "💗",
    quoteCount: 100,
  },
  {
    key: "religion",
    label: "Religion",
    gradient: ["#D4C8F0", "#E2DCF2", "#F0EEF7", "#F5F5F0"],
    icon: "✨",
    quoteCount: 100,
  },
];

// ---------------------------------------------------------------------------
// Premium theme swatches — names + representative colors from MyQuotesApp/constants/premium.ts
// ---------------------------------------------------------------------------
export interface ThemeSwatch {
  key: string;
  displayName: string;
  color: string; // single representative hex for the placeholder swatch
}

export const THEME_SWATCHES: ThemeSwatch[] = [
  { key: "default", displayName: "Classic", color: "#B8D9E8" },
  { key: "desert-dunes", displayName: "Desert Dunes", color: "#D4A574" },
  { key: "misty-forest", displayName: "Misty Forest", color: "#4A7C59" },
  { key: "autumn-leaves", displayName: "Autumn Leaves", color: "#C2703A" },
  { key: "mountain-lake", displayName: "Mountain Lake", color: "#3B7EA1" },
  { key: "starry-night", displayName: "Starry Night", color: "#1B2A4A" },
  { key: "golden-sunset", displayName: "Golden Sunset", color: "#E8943A" },
  { key: "ocean-waves", displayName: "Ocean Waves", color: "#2E86AB" },
  { key: "northern-lights", displayName: "Northern Lights", color: "#6DB33F" },
  { key: "foggy-morning", displayName: "Foggy Morning", color: "#A8BEC8" },
  { key: "purple-sky", displayName: "Purple Sky", color: "#6A5ACD" },
  { key: "snowy-peaks", displayName: "Snowy Peaks", color: "#D6EAF0" },
  { key: "cozy-candles", displayName: "Cozy Candles", color: "#C9956B" },
];

// ---------------------------------------------------------------------------
// Real quotes — sampled from the app's quote JSON files for the carousel
// ---------------------------------------------------------------------------
export interface QuoteData {
  text: string;
  author: string;
  source?: string;
  category: string;
}

export const CAROUSEL_QUOTES: QuoteData[] = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "motivation",
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    category: "philosophy",
  },
  {
    text: "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
    author: "Andy Dufresne",
    source: "The Shawshank Redemption",
    category: "motivation",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
    category: "philosophy",
  },
  {
    text: "You don't have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman",
    category: "health",
  },
  {
    text: "The greatest thing you'll ever learn is just to love and be loved in return.",
    author: "Eden Ahbez",
    source: "Nature Boy",
    category: "relationships",
  },
  {
    text: "It's okay to not be okay.",
    author: "Unknown",
    category: "health",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "philosophy",
  },
];
