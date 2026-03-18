import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Job Seekers",
    children: [
      { label: "Career Services", href: "/job-seekers/career-services" },
      { label: "Workshops & Events", href: "/job-seekers/workshops-events" },
      { label: "Career Pathways", href: "/job-seekers/career-pathways" },
      { label: "Funding Options", href: "/job-seekers/funding-options" },
      { label: "Veterans Services", href: "/job-seekers/veterans-services" },
    ],
  },
  {
    label: "Employers",
    children: [
      { label: "Business Services", href: "/employers/business-services" },
      { label: "On-the-Job Training", href: "/employers/on-the-job-training" },
      { label: "Hiring Resources", href: "/employers/hiring-resources" },
    ],
  },
  {
    label: "About DCWIB",
    children: [
      { label: "Board Information", href: "/about/board-information" },
      { label: "Mission & Vision", href: "/about/mission" },
      { label: "Local Plan", href: "/about/local-plan" },
      { label: "Training Providers", href: "/about/training-providers" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-background ${
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
      }`}
    >
      {/* Teal top utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between h-9 text-[11px]">
          <div className="flex items-center gap-6 opacity-80">
            <a href="tel:8454630517" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
              <Phone className="h-3 w-3" />
              (845) 463-0517
            </a>
            <a href="mailto:admin@dcwib.org" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
              <Mail className="h-3 w-3" />
              admin@dcwib.org
            </a>
          </div>
          <span className="opacity-60 tracking-wide">A proud partner of the American Job Center® network</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-0.5 group">
          <span className="text-xl font-display font-bold text-primary tracking-tight">DC</span>
          <span className="text-xl font-display font-bold text-secondary tracking-tight">Works</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname.startsWith(item.href || "#")
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>

                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 slide-up z-50">
                    <div className="bg-card border border-border rounded-xl shadow-lg py-1.5 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === child.href
                              ? "text-primary font-semibold bg-accent"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            to="/contact"
            className="ml-3 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background shadow-lg">
          <div className="container py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-0.5">
                  <div className="px-3 py-2 text-xs font-bold text-primary uppercase tracking-widest">
                    {item.label}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors ml-2"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 pb-2 px-1">
              <Link
                to="/contact"
                className="block w-full py-3 bg-primary text-primary-foreground text-center rounded-lg font-semibold text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
