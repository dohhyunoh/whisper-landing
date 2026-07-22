import type { Metadata } from "next";
import { APP_STORE_URL, SITE_URL } from "@/lib/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import QuoteCarousel from "@/components/QuoteCarousel";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Whisper — Daily Quotes",
  operatingSystem: "iOS",
  applicationCategory: "LifestyleApplication",
  url: SITE_URL,
  installUrl: APP_STORE_URL,
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <QuoteCarousel />
      <CTA />
      <Footer />
    </main>
  );
}
