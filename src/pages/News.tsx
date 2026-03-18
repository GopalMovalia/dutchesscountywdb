import PageLayout from "@/components/PageLayout";
import { Search, Filter, Calendar, ArrowRight } from "lucide-react";
import { withBase } from "@/lib/utils";

export default function News() {
  const articles = [
    {
      id: 1,
      title: "DCWorks Launches New Youth Summer Internship Program",
      category: "Community",
      date: "Oct 12, 2023",
      image: "/images/hero/career-hero.png"
    },
    {
      id: 2,
      title: "Regional Manufacturing Sector Sees 15% Growth in Q3",
      category: "Industry News",
      date: "Oct 05, 2023",
      image: "/images/hero/business-hero.png"
    },
    {
      id: 3,
      title: "New Training Grants Available for Healthcare Workers",
      category: "Funding",
      date: "Sep 28, 2023",
      image: "/images/hero/training-hero.png"
    }
  ];

  return (
    <PageLayout 
      title="Latest News" 
      subtitle="Stay informed on regional hiring trends, workforce data, and organizational updates from the DCWDB."
      breadcrumb={[{ label: "News", href: "/news" }]}
    >
      <div className="py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <h2 className="text-3xl font-bold">Recent Updates</h2>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-10 pr-4 py-2 glass rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button className="flex items-center gap-2 p-2 glass rounded-xl text-muted-foreground hover:text-primary transition-colors px-4">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="glass flex flex-col p-4 rounded-3xl group hover:border-secondary transition-all">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={withBase(article.image)} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold uppercase tracking-wider text-primary">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="px-2 pb-2 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar className="h-3 w-3 text-secondary" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <div className="mt-auto pt-6 border-t border-muted">
                  <button className="flex items-center gap-2 text-primary font-bold text-sm">
                    Read Story
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
