import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Premium from "@/components/Premium";
import QuoteCarousel from "@/components/QuoteCarousel";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <Premium />
      <QuoteCarousel />
      <CTA />
      <Footer />
    </main>
  );
}
