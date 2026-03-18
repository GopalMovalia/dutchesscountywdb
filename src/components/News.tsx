import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    date: "February 20, 2026",
    title: "Request for Proposals: Redesign of DCWIB and DCWORKS Websites",
    excerpt:
      "DCWIB is seeking competitive proposals for the redesign of the DCWIB and DCWORKS Websites. Submissions accepted via email.",
  },
  {
    date: "February 20, 2026",
    title: "Request for Proposals: Supportive Services",
    excerpt:
      "The DCWIB is seeking price quotes from consultants to implement a Supportive Services program for DCWorks customers.",
  },
  {
    date: "February 20, 2026",
    title: "Request for Quotes: Quickbooks",
    excerpt:
      "DCWIB issuing this RFQ to obtain pricing for professional services to review and stabilize its existing QuickBooks accounting system.",
  },
];

export default function News() {
  return (
    <section id="news" className="py-32 bg-surface relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 fade-in">
          <div>
            <p className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-4">Latest Insights</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">News & Announcements</h2>
          </div>
          <Link to="/news" className="group inline-flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-widest hover:gap-3 transition-all">
            All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((n, i) => (
            <article
              key={i}
              className="group bg-background border border-border/50 rounded-3xl p-8 hover-lift transition-all hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/5 slide-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6">
                <Calendar className="h-3 w-3 text-secondary" />
                {n.date}
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                {n.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8 line-clamp-3 italic">
                "{n.excerpt}"
              </p>
              <Link 
                to="/news" 
                className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-[0.2em] group-hover:gap-3 transition-all"
              >
                Read Article <ArrowRight className="h-3 w-3" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
