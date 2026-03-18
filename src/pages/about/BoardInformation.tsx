import PageLayout from "@/components/PageLayout";
import { Users, FileText, Calendar, Landmark, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function BoardInformation() {
  const members = [
    { name: "John Doe", role: "Chairperson", org: "Local Tech Corp" },
    { name: "Jane Smith", role: "Vice Chair", org: "Regional Health" },
    { name: "Robert Brown", role: "Treasurer", org: "County Finance" },
    { name: "Alice White", role: "Secretary", org: "Community College" }
  ];

  return (
    <PageLayout 
      title="Board Information" 
      subtitle="Meet the leaders driving workforce innovation and strategic economic growth in Dutchess County."
      imageUrl="/images/hero/community-hero.png"
      breadcrumb={[{ label: "About", href: "#" }, { label: "Board Information", href: "/about/board-information" }]}
    >
      <div className="py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-8">Board Leadership</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {members.map((member, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex items-center gap-6">
                    <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8">Purpose & Function</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Dutchess County Workforce Development Board (DCWDB) is responsible for the oversight 
                of federal, state, and local workforce funding. Our board consists of majority private 
                sector leaders, alongside representatives from education, labor, and community-based organizations.
              </p>
              <div className="grid gap-4">
                {[
                  "Approving regional workforce development strategies",
                  "Overseeing One-Stop Career Center operations",
                  "Building partnerships between education and industry",
                  "Managing fiscal integrity of workforce grants"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 glass rounded-xl border-l-4 border-primary">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-primary p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-secondary" />
                Meeting Schedule
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-secondary font-bold text-xs uppercase mb-1">Full Board Meeting</p>
                  <p className="font-bold">November 18, 2023</p>
                  <p className="text-white/60 text-sm">8:30 AM | Virtual via Zoom</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 opacity-60">
                  <p className="text-secondary font-bold text-xs uppercase mb-1">Executive Committee</p>
                  <p className="font-bold">October 25, 2023</p>
                  <p className="text-white/60 text-sm">9:00 AM | Main Center</p>
                </div>
              </div>
              <button className="w-full mt-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-bold hover:bg-white transition-all">
                View All Meetings
              </button>
            </div>

            <div className="glass p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                Public Records
              </h3>
              <div className="grid gap-4">
                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-all">
                  <span className="text-sm font-medium">Bylaws & Constitution</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-all">
                  <span className="text-sm font-medium">Meeting Minutes Archive</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-all">
                  <span className="text-sm font-medium">Fiscal Year Reports</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
