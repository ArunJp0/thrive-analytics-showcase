import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-3xl font-bold md:text-4xl text-foreground">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: February 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">1. Agreement</h2>
            <p>By accessing the Thrive Analytics Ltd website or engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">2. Services</h2>
            <p>Thrive Analytics Ltd provides data engineering, analysis, visualisation, application development, data science, and business intelligence services. All engagements are subject to a separate statement of work or service agreement.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">3. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of Thrive Analytics Ltd and is protected by UK intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">4. Limitation of Liability</h2>
            <p>Thrive Analytics Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services, except where such liability cannot be excluded by law.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">5. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">6. Contact</h2>
            <p>For questions regarding these terms, contact us at legal@thriveanalytics.co.uk or write to 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
