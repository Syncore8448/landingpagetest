import Header from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegrationSection from "@/components/IntegrationSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PricingPreview from "@/components/PricingPreview";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntegrationSection />
      <PricingPreview />
      <HowItWorks />
      <Features />
      <SocialProof />
      <CTA />
      <Footer />
    </>
  );
}