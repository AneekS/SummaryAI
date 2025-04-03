 // rot "/" page.tsx
import { Button } from "@/components/ui/button";
import BgGradient from "@/components/common/bg-gradient";
import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";
//main page displayed '/'
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] relative w-full">


      <BgGradient></BgGradient>
      <div className="flex flex-col">
        <HeroSection></HeroSection> 
        <DemoSection ></DemoSection>
        <HowItWorksSection></HowItWorksSection>
        <PricingSection></PricingSection>
        <CTASection/>
      </div>

    </div>
  );
}
