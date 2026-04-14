import Header from "@/components/Navbar";
import Hero2 from "@/components/Hero2";
import IntegrationSection from "@/components/IntegrationSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PricingPreview from "@/components/PricingPreview";
import Navbar from "@/components/Navbar";
import BriefModule from "@/components/BriefModule";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <IntegrationSection />
      <PricingPreview />
      <HowItWorks />
      <Features />
      <SocialProof />
      <BriefModule />
      <CTA />
      <Footer />
    </>
  );
}