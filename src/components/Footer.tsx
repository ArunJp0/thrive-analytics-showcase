import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-navy text-navy-foreground">
    <div className="container-narrow section-padding">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">T</span>
            </div>
            <span className="text-lg font-semibold">Thrive Analytics</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Data-driven IT services for forward-thinking businesses across the United Kingdom.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Data Engineering</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Data Analysis</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Data Visualisation</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Bespoke App Development</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Business Intelligence</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/case-studies" className="hover:opacity-100 transition-opacity">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>info@thriveanalytics.co.uk</li>
            <li>+44 (0) 20 7946 0958</li>
            <li>71–75 Shelton Street<br />Covent Garden, London<br />WC2H 9JQ</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-border/20 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Thrive Analytics Ltd. All rights reserved. Registered in England & Wales.
      </div>
    </div>
  </footer>
);

export default Footer;
