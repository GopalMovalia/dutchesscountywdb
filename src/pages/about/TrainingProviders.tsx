import PageLayout from "@/components/PageLayout";
import { GraduationCap, Award, MapPin, Search, ArrowRight, ExternalLink } from "lucide-react";

export default function TrainingProviders() {
  const providers = [
    {
      name: "Dutchess Community College",
      type: "Public Institution",
      specialties: ["Healthcare", "Advanced Manufacturing", "Business"],
      location: "Poughkeepsie, NY"
    },
    {
      name: "Dutchess BOCES",
      type: "Vocational Training",
      specialties: ["Construction", "Automotive", "Culinary Arts"],
      location: "Poughkeepsie, NY"
    },
    {
      name: "SUNY Ulster",
      type: "Public Institution",
      specialties: ["IT & Cybersecurity", "Green Energy"],
      location: "Stone Ridge, NY"
    }
  ];

  return (
    <PageLayout 
      title="Training Providers" 
      subtitle="Explore eligible training providers and programs approved to receive WIOA funding and support."
      imageUrl="/images/hero/training-hero.png"
      breadcrumb={[{ label: "About", href: "/about/board-information" }, { label: "Training Providers", href: "/about/training-providers" }]}
    >
      <div className="py-12">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Invest in Your Potential</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We partner with leading educational institutions and specialized training centers to ensure 
            our residents receive high-quality, industry-recognized credentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-6 rounded-2xl sticky top-32">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Search className="h-4 w-4 text-secondary" />
                Filter Providers
              </h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Search name..." 
                  className="w-full px-4 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <select className="w-full px-4 py-2 bg-muted rounded-lg text-sm focus:outline-none">
                  <option>All Industries</option>
                  <option>Healthcare</option>
                  <option>Manufacturing</option>
                  <option>Technology</option>
                </select>
                <div className="pt-4 border-t">
                  <p className="text-xs font-bold text-muted-foreground uppercase mb-3">Program Length</p>
                  <div className="space-y-2">
                    {["Short-term ( < 6 mo)", "Degree-based", "Certificate"].map((label, i) => (
                      <label key={i} className="flex items-center gap-2 text-sm text-primary/70">
                        <input type="checkbox" className="rounded" /> {label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {providers.map((p, i) => (
              <div key={i} className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center group hover:border-secondary transition-all">
                <div className="w-20 h-20 bg-primary/5 rounded-[32px] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <GraduationCap className="h-10 w-10" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                    <span className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{p.type}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="h-4 w-4 text-secondary" /> {p.location}
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {p.specialties.map((s, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-muted hover:bg-secondary hover:text-white rounded-xl font-bold transition-all">
                  View Programs
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-10 rounded-[30px] border-dashed border-2 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Want to become an approved provider?</h3>
            <p className="text-muted-foreground">Learn about the requirements and application process for inclusion on the ETPL.</p>
          </div>
          <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all">
            Provider Application
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
