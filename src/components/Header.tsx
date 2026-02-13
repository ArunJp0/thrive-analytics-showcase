import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoColored from "@/assets/logo-colored.png";

const navItems = [
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl">
      <div className="container-narrow flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoColored} alt="Thrive Analytics" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`rounded-md px-4 py-2 text-base font-medium transition-colors hover:text-white ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-white/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-3">
            <Button size="sm" className="btn-hover-glow">Book a Consultation</Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-navy px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-white/5 ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-white/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-2 block">
            <Button className="w-full btn-hover-glow" size="sm">Book a Consultation</Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
