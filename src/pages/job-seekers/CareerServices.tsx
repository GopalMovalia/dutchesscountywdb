import PageLayout from "@/components/PageLayout";
import { Search, FileText, Users, GraduationCap, MapPin } from "lucide-react";

export default function CareerServices() {
  const services = [
    {
      title: "One-on-One Counseling",
      desc: "Work with experienced career advisors to identify your strengths and map out your professional journey.",
      icon: Users
    },
    {
      title: "Resume & Cover Letter",
      desc: "Get expert feedback on your professional documents to stand out to potential employers.",
      icon: FileText
    },
    {
      title: "Job Search Strategies",
      desc: "Learn effective techniques for finding hidden opportunities and navigating the modern job market.",
      icon: Search
    },
    {
      title: "Skills Assessment",
      desc: "Discover your aptitude for different career paths through standardized testing and analysis.",
      icon: GraduationCap
    },
    {
      title: "Local Market Insights",
      desc: "Access up-to-date information on hiring trends and in-demand skills in Dutchess County.",
      icon: MapPin
    }
  ];

  return (
    <PageLayout 
      title="Career Services" 
      subtitle="Comprehensive support designed to help you navigate your professional journey with confidence and expertise."
      imageUrl="/images/hero/career-hero.png"
      breadcrumb={[{ label: "Job Seekers", href: "#" }, { label: "Career Services", href: "/job-seekers/career-services" }]}
    >
      <div className="py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover-lift transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary p-12 rounded-3xl text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to take the next step?</h2>
            <p className="text-white/70 text-lg mb-8">
              Our career centers in Poughkeepsie and Beacon are open and ready to assist you. 
              Schedule a virtual or in-person appointment today to begin your transformation.
            </p>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold hover:bg-white hover:text-primary transition-all shadow-xl shadow-secondary/20">
              Schedule Consultation
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </PageLayout>
  );
}
