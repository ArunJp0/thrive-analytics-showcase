import { Link } from "react-router-dom";
import { useState } from "react";
import logoWhite from "@/assets/logo-white-new.png";
import LegalModal from "@/components/LegalModal";

const Footer = () => {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer className="bg-navy text-navy-foreground">
        <div className="container-narrow py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-5">
                <Link to="/" aria-label="Thrive Analytics home" className="inline-block">
                  <img src={logoWhite} alt="Thrive Analytics" className="h-12 w-auto lg:h-14" />
                </Link>
              </div>

              <p className="text-[0.9375rem] text-white/55 leading-relaxed">
                Data-driven IT services for forward-thinking businesses across the United Kingdom.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/45">Services</h4>
              <ul className="space-y-2.5 text-[0.9375rem] text-white/60">
                <li><Link to="/services" className="hover:text-white transition-colors">Data Engineering</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Data Analysis</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Data Visualisation</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Bespoke App Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Business Intelligence</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/45">Company</h4>
              <ul className="space-y-2.5 text-[0.9375rem] text-white/60">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><button onClick={() => setLegalModal("privacy")} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setLegalModal("terms")} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/45">Contact</h4>
              <ul className="space-y-2.5 text-[0.9375rem] text-white/60">
                <li><a href="mailto:info@thriveanalytics.co.uk" rel="noopener" className="relative z-10 inline-block break-all [pointer-events:auto] hover:text-white transition-colors">info@thriveanalytics.co.uk</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t lg:mt-14 border-white/10 pt-8 text-center text-xs text-white/30">
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
