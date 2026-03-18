import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Briefcase,
  FileText,
  Shield,
  Baby,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Career Services",
    description: "Career counseling, job listings, resume assistance, and skills assessments to guide your path.",
    tag: "Job Seekers",
    link: "/job-seekers/career-services",
  },
  {
    icon: FileText,
    title: "Training & Funding",
    description: "Access short-term classroom training, on-the-job programs, and funding assistance for your education.",
    tag: "Job Seekers",
    link: "/job-seekers/funding-options",
  },
  {
    icon: Shield,
    title: "Veterans Services",
    description: "Dedicated support for veterans transitioning to civilian careers with priority of service.",
    tag: "Job Seekers",
    link: "/job-seekers/veterans-services",
  },
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Customized recruitment, job postings, OJT programs, and tax credit guidance for employers.",
    tag: "Employers",
    link: "/employers/business-services",
  },
  {
    icon: Users,
    title: "Youth Programs",
    description: "Summer Youth Employment and year-round career exploration for young adults ages 16–24.",
    tag: "Youth",
    link: "/job-seekers/career-pathways",
  },
  {
    icon: Baby,
    title: "Childcare Coalition",
    description: "Addressing the childcare crisis through the Dutchess County Childcare Coalition partnership.",
    tag: "Community",
    link: "/about/mission",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface border-t border-border">

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in">
          <p className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-4">World-Class Solutions</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive Services
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Strategic resources designed to empower job seekers, support local businesses, and strengthen the entire Dutchess County economic landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <Link
              key={s.title}
              to={s.link}
              className="group relative bg-white border border-border rounded-2xl p-7 hover-lift transition-all hover:border-primary/20 hover:shadow-md slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <s.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 bg-surface/50 px-3 py-1.5 rounded-full border border-border/30">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-tight group-hover:text-secondary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">{s.description}</p>
              
              <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                Explore Service <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
