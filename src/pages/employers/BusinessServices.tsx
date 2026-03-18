import PageLayout from "@/components/PageLayout";
import { Briefcase, BarChart3, Users, Zap, Building2, CheckCircle2 } from "lucide-react";

export default function BusinessServices() {
  const services = [
    {
      title: "Hiring & Recruitment",
      desc: "Access our database of qualified candidates and leverage our centers for your next hiring event.",
      icon: Users
    },
    {
      title: "Labor Market Info",
      desc: "Stay ahead with custom reports on wage trends, industry growth, and regional workforce data.",
      icon: BarChart3
    },
    {
      title: "Custom Training",
      desc: "Upskill your existing workforce through subsidized On-the-Job Training (OJT) programs.",
      icon: Zap
    },
    {
      title: "Tax Credits",
      desc: "Identify and apply for federal and state tax incentives like WOTC for your new hires.",
      icon: Building2
    }
  ];

  return (
    <PageLayout 
      title="Business Services" 
      subtitle="Strategic workforce solutions designed to help Dutchess County employers find, train, and retain a world-class team."
      imageUrl="/images/hero/business-hero.png"
      breadcrumb={[{ label: "Employers", href: "#" }, { label: "Business Services", href: "/employers/business-services" }]}
    >
      <div className="py-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">Your Partner in Regional Growth</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              We understand that a skilled workforce is the engine of your business. 
              Our team provides no-cost resources to help you meet your hiring goals and improve your bottom line.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Employee Retention",
                "Skills Gap Analysis",
                "Job Posting Support",
                "Hiring Incentives"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="font-bold text-primary/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass p-8 rounded-3xl relative z-10 shadow-3xl">
              <img 
                src="/C:/Users/moval/.gemini/antigravity/brain/9137d377-ba86-4889-9b60-1c51b59a66d0/business_services_hero_1773725671988.png" 
                alt="Business Partnership" 
                className="w-full h-auto rounded-2xl shadow-lg mb-6 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="p-4 border-l-4 border-secondary bg-secondary/5 rounded-r-xl">
                <p className="text-sm font-bold italic">"DCWorks helped us find 40 qualified technicians in under 3 weeks. A game-changer for our expansion."</p>
                <p className="text-xs mt-2 text-muted-foreground">— Local Tech Firm CEO</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:bg-primary group transition-all duration-500">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-white/70 transition-colors">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-primary rounded-[40px] text-white overflow-hidden relative">
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to grow your team?</h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Connect with our Business Services Team today to design a customized recruitment and training strategy for your organization.
            </p>
            <button className="px-10 py-5 bg-secondary text-secondary-foreground rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,191,0,0.4)] transition-all">
              Contact Business Team
            </button>
          </div>
          <Building2 className="absolute -bottom-20 -right-20 h-96 w-96 text-white/5" />
        </div>
      </div>
    </PageLayout>
  );
}
