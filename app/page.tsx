import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ProblemSolution from "@/components/ProblemSolution";
import PricingPreview from "@/components/PricingPreview";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <PricingPreview />
      <SocialProof />
      <CTA />
      <Footer />
    </>
  );
}