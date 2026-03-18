import PageLayout from "@/components/PageLayout";
import { Link2, FileText, Search, LayoutTemplate, ArrowUpRight } from "lucide-react";

export default function HiringResources() {
  const resources = [
    {
      title: "NY Hire Online",
      desc: "The primary portal for New York State job postings and candidate management.",
      url: "https://dol.ny.gov/hiring-resources"
    },
    {
      title: "Job Description Templates",
      desc: "Ready-to-use templates for common industry roles in Dutchess County.",
      url: "#"
    },
    {
      title: "Candidate Screening Tools",
      desc: "Best practices and scoring rubrics for evaluating technical and soft skills.",
      url: "#"
    },
    {
      title: "Diversity & Inclusion Guide",
      desc: "Resources for building a balanced and equitable workforce.",
      url: "#"
    }
  ];

  return (
    <PageLayout 
      title="Hiring Resources" 
      subtitle="Comprehensive tools and expert guidance to streamline your recruitment process and find the perfect talent for your organization."
      imageUrl="/images/hero/business-hero.png"
      breadcrumb={[{ label: "Employers", href: "/employers/business-services" }, { label: "Hiring Resources", href: "/employers/hiring-resources" }]}
    >
      <div className="py-12">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Optimize Your Talent Acquisition</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From technical job boards to compliance documentation, we've gathered the most effective 
            resources to help you navigate the competitive Hudson Valley labor market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="glass p-8 rounded-2xl border hover:border-secondary transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                  {i === 0 ? <Link2 className="h-6 w-6 text-primary" /> : 
                   i === 1 ? <LayoutTemplate className="h-6 w-6 text-primary" /> :
                   i === 2 ? <Search className="h-6 w-6 text-primary" /> :
                   <FileText className="h-6 w-6 text-primary" />}
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-3">{res.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">{res.desc}</p>
              <a href={res.url} className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">Access Resource</a>
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-3xl bg-secondary/10 border-0">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <Search className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h3>
              <p className="text-muted-foreground">Our Business Team can provide custom toolkits tailored to your specific industry needs.</p>
            </div>
            <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all whitespace-nowrap">
              Request Custom Toolkit
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
