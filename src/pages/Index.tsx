import { Helmet } from "react-helmet-async";
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
    <Helmet>
      <title>Thrive Analytics Ltd | Data & Analytics UK</title>
      <meta name="description" content="Thrive Analytics Ltd helps UK businesses turn data into insight with data engineering, analytics, visualisation, data science and bespoke applications." />
      <link rel="canonical" href="https://thriveanalytics.co.uk/" />
    </Helmet>
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
