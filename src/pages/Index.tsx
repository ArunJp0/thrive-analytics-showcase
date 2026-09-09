import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <>
    <SEOHead
      title="Thrive Analytics Ltd | Data & Analytics Peterborough UK"
      description="Thrive Analytics Ltd helps businesses in Peterborough and across the UK turn data into insight with analytics, engineering, visualisation and bespoke technology."
      path="/"
    />
    <Layout>
    <HeroSection />
    <TrustedBySection />
    <ServicesOverview />
    <WhyChooseUs />
    <HowItWorks />
    <CaseStudiesPreview />
    <CTASection />
  </Layout>
  </>
);

export default Index;
