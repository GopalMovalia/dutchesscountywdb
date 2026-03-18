import PageLayout from "@/components/PageLayout";
import { FileText, Map, PieChart, TrendingUp, Download } from "lucide-react";

export default function LocalPlan() {
  const sections = [
    {
      title: "Strategic Goals",
      desc: "Our 4-year plan focuses on industry-driven training, youth employment, and regional economic coordination."
    },
    {
      title: "Market Analysis",
      desc: "Comprehensive data on Dutchess County's aging workforce, emerging sectors, and skills gaps."
    },
    {
      title: "Operational Strategy",
      desc: "How we coordinate with partners like BOCES, Community Colleges, and Chambers of Commerce."
    }
  ];

  return (
    <PageLayout 
      title="Local Plan" 
      subtitle="Our strategic roadmap for workforce development and economic vitality under the Workforce Innovation and Opportunity Act (WIOA)."
      imageUrl="/images/hero/community-hero.png"
      breadcrumb={[{ label: "About", href: "/about/board-information" }, { label: "Local Plan", href: "/about/local-plan" }]}
    >
      <div className="py-12">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">2021-2024 Workforce Innovation & Opportunity Act Plan</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            The Local Plan serves as a blueprint for the regional workforce system. It outlines how the 
            DCWDB will leverage federal WIOA funds to create high-quality career pathways and 
            support business expansion.
          </p>
          
          <div className="grid gap-6">
            {sections.map((section, i) => (
              <div key={i} className="glass p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  {i === 0 ? <TrendingUp className="h-7 w-7 text-secondary" /> : 
                   i === 1 ? <PieChart className="h-7 w-7 text-secondary" /> : 
                   <Map className="h-7 w-7 text-secondary" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{section.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-12 rounded-[40px] text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6 italic font-display">Transparency in Action</h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              Download the full 150-page strategic document including methodology, regional data sets, and public comments.
            </p>
            <button className="flex items-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground rounded-full font-bold mx-auto hover:scale-105 transition-all shadow-2xl">
              <Download className="h-5 w-5" />
              Download Full Report (PDF)
            </button>
          </div>
          <FileText className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 text-white/5 pointer-events-none" />
        </div>
      </div>
    </PageLayout>
  );
}
