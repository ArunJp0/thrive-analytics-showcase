import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <TrustedBySection />
    <ServicesOverview />
    <WhyChooseUs />
    <HowItWorks />
    <CaseStudiesPreview />
    <CTASection />
  </Layout>
);

export default Index;
