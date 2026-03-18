import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-1">
              <span className="text-xl font-display font-bold text-foreground">DC</span>
              <span className="text-xl font-display font-bold text-secondary">Works</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Dutchess County's workforce through strategic partnerships and career solutions.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/dutchessonestop/"
                className="w-8 h-8 flex items-center justify-center bg-white border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Career Center */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Career Center</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>191 Main Street,<br />Poughkeepsie, NY 12601</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span>(845) 249-4634</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-secondary flex-shrink-0" />
                <span>Mon–Fri 8:30 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* DCWIB Office */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">DCWIB Office</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>3 Neptune Road, Suite A21,<br />Poughkeepsie, NY 12601</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span>(845) 463-0517</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span>admin@dcwib.org</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/job-seekers/career-pathways" className="hover:text-primary transition-colors">Career Pathways</Link></li>
              <li><Link to="/about/training-providers" className="hover:text-primary transition-colors">Training Providers</Link></li>
              <li><Link to="/employers/business-services" className="hover:text-primary transition-colors">Business Services</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li>
                <a href="https://labor.ny.gov" className="hover:text-primary transition-colors">
                  NYS Dept. of Labor ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dutchess County Workforce Investment Board. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
