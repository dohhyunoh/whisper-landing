import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_STORE_ID, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Whisper",
  title: "Whisper — Daily Quotes, Tailored to You",
  description:
    "Discover beautiful quotes that speak to your soul. Whisper delivers personalized daily quotes across motivation, philosophy, health, relationships, and more.",
  openGraph: {
    title: "Whisper — Daily Quotes, Tailored to You",
    description:
      "Daily quotes that learn from every swipe, and anonymous letters to a stranger who understands. Available on iOS.",
    type: "website",
    siteName: "Whisper",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whisper — Daily Quotes, Tailored to You",
    description:
      "Daily quotes that learn from every swipe, and anonymous letters to a stranger who understands. Available on iOS.",
  },
  itunes: { appId: APP_STORE_ID },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
