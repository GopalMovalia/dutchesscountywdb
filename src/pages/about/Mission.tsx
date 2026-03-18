import PageLayout from "@/components/PageLayout";
import { Target, Eye, Heart, Shield, CheckCircle2 } from "lucide-react";

export default function Mission() {
  const pillars = [
    {
      title: "Integrity",
      desc: "Acting with transparency and accountability in all our fiscal and operational decisions.",
      icon: Shield
    },
    {
      title: "Excellence",
      desc: "Striving for the highest quality in training programs and regional workforce initiatives.",
      icon: Target
    },
    {
      title: "Collaboration",
      desc: "Building strong bridges between government, education, and the private sector.",
      icon: Heart
    }
  ];

  return (
    <PageLayout 
      title="Mission & Vision" 
      subtitle="Our commitment to building a robust, inclusive, and future-ready workforce for all residents and businesses."
      imageUrl="/images/hero/community-hero.png"
      breadcrumb={[{ label: "About", href: "/about/board-information" }, { label: "Mission & Vision", href: "/about/mission" }]}
    >
      <div className="py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="glass p-10 rounded-[40px] border-l-8 border-secondary">
              <div className="flex items-center gap-4 mb-6">
                <Target className="h-10 w-10 text-secondary" />
                <h2 className="text-3xl font-bold uppercase tracking-tight">Our Mission</h2>
              </div>
              <p className="text-2xl font-medium leading-relaxed italic text-primary/80">
                To create a world-class workforce development system that meets the needs of 
                businesses and citizens, fostering regional economic prosperity.
              </p>
            </div>
            <div className="glass p-10 rounded-[40px] border-l-8 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-bold uppercase tracking-tight">Our Vision</h2>
              </div>
              <p className="text-2xl font-medium leading-relaxed italic text-muted-foreground">
                To be the strategic leader of a collaborative workforce ecosystem that 
                empowers every resident to achieve professional success.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-3xl">
              <img 
                src="/C:/Users/moval/.gemini/antigravity/brain/9137d377-ba86-4889-9b60-1c51b59a66d0/community_leadership_hero_1773725690293.png" 
                alt="Regional Leadership" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-2xl max-w-sm">
              <h3 className="font-bold text-xl mb-4">Core Values</h3>
              <div className="space-y-4">
                {pillars.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <p.icon className="h-5 w-5 text-secondary shrink-0" />
                    <div>
                      <p className="font-bold text-sm">{p.title}</p>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-20 text-center border-t">
          <h2 className="text-3xl font-bold mb-12">Driven by Regional Success</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-display font-bold text-secondary mb-2">$4.2M+</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Annual Funding Oversight</p>
            </div>
            <div>
              <p className="text-5xl font-display font-bold text-primary mb-2">12,000+</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Residents Assisted</p>
            </div>
            <div>
              <p className="text-5xl font-display font-bold text-secondary mb-2">1,500+</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Employer Partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
