import Hero from "@/components/hero-section";
import Features from "@/components/features-1";
import Pricing from "@/components/pricing";
import FAQsTwo from "@/components/faqs-2";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
export default function Home() {
return (
  <div>
    <Hero/>
    <Features/>
    <Pricing/>
    <FAQsTwo/>
    <CallToAction/>
    <FooterSection/>
  </div> 
);
}