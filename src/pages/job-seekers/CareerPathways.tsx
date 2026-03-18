import PageLayout from "@/components/PageLayout";
import { ArrowRight, Code, Shield, Heart, Zap, Briefcase } from "lucide-react";
import { withBase } from "@/lib/utils";

export default function CareerPathways() {
  const pathways = [
    {
      title: "Advanced Manufacturing",
      desc: "Prepare for high-tech roles in precision engineering, robotics, and logistics.",
      icon: Zap,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Information Technology",
      desc: "Launch your career in cybersecurity, software development, or network administration.",
      icon: Code,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Healthcare Services",
      desc: "Enter the growing field of nursing, specialized therapy, or medical administration.",
      icon: Heart,
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Professional Services",
      desc: "Develop expertise in finance, project management, and business ops.",
      icon: Briefcase,
      color: "bg-amber-500/10 text-amber-600"
    },
    {
      title: "Public Safety & Transit",
      desc: "Contribute to regional infrastructure and community safety through specialized roles.",
      icon: Shield,
      color: "bg-green-500/10 text-green-600"
    }
  ];

  return (
    <PageLayout 
      title="Career Pathways" 
      subtitle="Strategic routes designed to align your skills with the most promising and in-demand industries in the Hudson Valley."
      imageUrl="/images/hero/training-hero.png"
      breadcrumb={[{ label: "Job Seekers", href: "#" }, { label: "Career Pathways", href: "/job-seekers/career-pathways" }]}
    >
      <div className="py-12">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Designed for Long-Term Success</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlike traditional job searches, Career Pathways focus on building a sustainable professional future. 
            We've identified key industry sectors in Dutchess County that offer competitive wages and clear advancement opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathways.map((path, i) => (
            <div key={i} className="glass group p-8 rounded-2xl hover:bg-primary transition-all duration-500">
              <div className={`w-14 h-14 ${path.color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white transition-all`}>
                <path.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{path.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-white/70 transition-colors">
                {path.desc}
              </p>
              <button className="flex items-center gap-2 font-bold text-secondary group-hover:text-white transition-colors">
                Explore Pathway
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 p-1 rounded-[32px] bg-gradient-to-br from-secondary via-primary to-accent">
          <div className="bg-background rounded-[30px] p-12 md:p-20 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Need help choosing your path?</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  Our Career Navigators are experts at aligning your personal interests with market demand. 
                  Let us help you build a personalized roadmap.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                    Get Started
                  </button>
                  <button className="px-10 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">
                    Download Guide
                  </button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="aspect-square bg-muted rounded-3xl overflow-hidden shadow-2xl rotate-3">
                  <img 
                    src={withBase("/images/hero/career-hero.png")} 
                    alt="Career Advice" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl max-w-[200px] -rotate-3">
                  <p className="text-sm font-bold leading-tight">85% of graduates find jobs in their field within 6 months.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
