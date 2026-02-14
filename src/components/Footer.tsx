import { Link } from "react-router-dom";
import { useState } from "react";
import logoWhite from "@/assets/logo-white-new.png";
import LegalModal from "@/components/LegalModal";

const Footer = () => {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer className="bg-navy text-navy-foreground">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-5">
                <img src={logoWhite} alt="Thrive Analytics" className="h-14 w-auto" />
              </div>
              <p className="text-base text-white/50 leading-relaxed">
                Data-driven IT services for forward-thinking businesses across the United Kingdom.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/40">Services</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/services" className="hover:text-white transition-colors">Data Engineering</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Data Analysis</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Data Visualisation</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Bespoke App Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Business Intelligence</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/40">Company</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><button onClick={() => setLegalModal("privacy")} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setLegalModal("terms")} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/40">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>info@thriveanalytics.co.uk</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/30">
            © {new Date().getFullYear()} Thrive Analytics Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      <LegalModal
        open={legalModal !== null}
        onOpenChange={(open) => !open && setLegalModal(null)}
        type={legalModal ?? "privacy"}
      />
    </>
  );
};

export default Footer;
