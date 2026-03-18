import PageLayout from "@/components/PageLayout";
import { Star, Shield, Award, Medal, CheckCircle2 } from "lucide-react";

export default function VeteransServices() {
  const benefits = [
    {
      title: "Priority of Service",
      desc: "Veterans and eligible spouses receive first priority for all DOL-funded programs and training assistance.",
      icon: Star
    },
    {
      title: "Career Transition Assistance",
      desc: "Specialize support in translating your military experience into civilian professional success.",
      icon: Medal
    },
    {
      title: "Specialized Training Grants",
      desc: "Access exclusive funding streams designated for those who have served in the armed forces.",
      icon: Award
    }
  ];

  return (
    <PageLayout 
      title="Veterans Services" 
      subtitle="Honoring your service with priority career assistance and specialized transition support for veterans and their families."
      imageUrl="/images/hero/community-hero.png"
      breadcrumb={[{ label: "Job Seekers", href: "/job-seekers/career-services" }, { label: "Veterans Services", href: "/job-seekers/veterans-services" }]}
    >
      <div className="py-12">
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-muted-foreground/20 flex-grow" />
            <Shield className="h-8 w-8 text-primary" />
            <div className="h-px bg-muted-foreground/20 flex-grow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Honoring Your Service</h2>
          <p className="text-xl text-center text-muted-foreground leading-relaxed">
            The Dutchess County Workforce Development Board is committed to providing Veterans with the tools 
            and support needed to excel in the civilian workforce. We are proud to offer specialized guidance 
            tailored to your unique skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="glass p-8 rounded-2xl text-center hover-lift transition-all group">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 glass rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <h3 className="text-2xl font-bold mb-8">Dedicated Veteran Coordinators</h3>
              <ul className="space-y-4 mb-10">
                {[
                  "Military-to-civilian skill translation",
                  "Federal and State benefit navigation",
                  "Direct referrals to veteran-friendly employers",
                  "Assistance with GI Bill® and VET TEC applications"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:shadow-xl hover:shadow-primary/20 transition-all">
                Connect with a Coordinator
              </button>
            </div>
            <div className="bg-primary/5 p-12 md:p-16 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Medal className="h-24 w-24 text-secondary/30 mx-auto" />
                <p className="text-muted-foreground font-display font-medium uppercase tracking-[0.2em]">Dedicated to Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
