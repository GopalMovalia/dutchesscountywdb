import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="slide-up">
            <p className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-4">Our Legacy</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight tracking-tight">
              Building a <span className="text-secondary">Robust</span> Economy for Dutchess County
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed mb-10">
              <p>
                The Dutchess County Workforce Investment Board (DCWIB) is the strategic catalyst for workforce excellence in our region. We bridge the gap between human potential and economic opportunity.
              </p>
              <ul className="space-y-4">
                {[
                  "Strategic Workforce Planning",
                  "Industry-Specific Partnerships",
                  "Lifelong Learning Initiatives",
                  "Data-Driven Economic Insights"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about/board-information"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover-lift transition-all"
              >
                Board Leadership <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about/local-plan"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface hover-lift transition-all"
              >
                Strategcic Plan
              </Link>
            </div>
          </div>

          <div className="relative">
            
            <div className="grid grid-cols-2 gap-6 p-4">
              {[
                { value: "75+", label: "Coalition Members", delay: "0" },
                { value: "50+", label: "Regional Partners", delay: "100" },
                { value: "15k+", label: "Residents Served", delay: "200" },
                { value: "20+", label: "Years of Impact", delay: "300" },
              ].map((stat) => (
                <div 
                  key={stat.label} 
                  className="bg-white border border-border rounded-2xl p-8 text-center hover-lift transition-all slide-up"
                  style={{ animationDelay: `${stat.delay}ms` }}
                >
                  <p className="text-4xl font-display font-bold text-secondary mb-2 tracking-tight">{stat.value}</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
