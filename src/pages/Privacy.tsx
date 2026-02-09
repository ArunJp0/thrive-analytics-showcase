import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="bg-navy py-16 md:py-20">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl font-bold md:text-4xl text-navy-foreground">Privacy Policy</h1>
        <p className="mt-3 text-white/50">Last updated: February 2026</p>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">1. Introduction</h2>
            <p>Thrive Analytics Ltd ("we", "our", "us") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">2. Information We Collect</h2>
            <p>We may collect: your name, email address, phone number, company name, and any information you provide through our contact forms or when engaging with our services. We also collect technical data such as IP addresses, browser types, and usage data through cookies and analytics tools.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p>We use your data to respond to enquiries, deliver our services, improve our website, send relevant communications (with your consent), and comply with legal obligations. We will never sell your personal data to third parties.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">4. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions are retained for 24 months unless otherwise agreed.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to access, rectify, erase, restrict, and port your personal data. You may also withdraw consent at any time. To exercise these rights, contact us at privacy@thriveanalytics.co.uk.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">6. Contact</h2>
            <p>For data protection queries, contact our Data Protection Officer at privacy@thriveanalytics.co.uk or write to us at 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
