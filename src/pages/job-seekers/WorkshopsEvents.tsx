import PageLayout from "@/components/PageLayout";
import { Calendar, Users, MapPin, Clock, ArrowRight } from "lucide-react";

export default function WorkshopsEvents() {
  const events = [
    {
      title: "Professional Resume Writing",
      date: "Oct 15, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Main Career Center / Zoom",
      type: "Workshop"
    },
    {
      title: "Healthcare Career Fair",
      date: "Oct 22, 2023",
      time: "1:00 PM - 4:00 PM",
      location: "Poughkeepsie Grand Hotel",
      type: "Recruitment"
    },
    {
      title: "Interview Masterclass",
      date: "Nov 02, 2023",
      time: "9:00 AM - 11:30 AM",
      location: "Virtual Event",
      type: "Training"
    }
  ];

  return (
    <PageLayout 
      title="Workshops & Events" 
      subtitle="Expand your skills and connect with regional employers through our curated calendar of professional development sessions."
      imageUrl="/images/hero/training-hero.png"
      breadcrumb={[{ label: "Job Seekers", href: "#" }, { label: "Workshops & Events", href: "/job-seekers/workshops-events" }]}
    >
      <div className="py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">Upcoming Opportunities</h2>
            <div className="space-y-6">
              {events.map((event, i) => (
                <div key={i} className="glass p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-secondary/30 transition-all group">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase tracking-wider">
                      {event.type}
                    </span>
                    <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">{event.title}</h3>
                    <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-secondary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-secondary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-bold group/btn">
                    Register Now
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="glass p-8 rounded-2xl bg-primary text-white border-0 shadow-2xl overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Never Miss an Event</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Subscribe to our weekly newsletter to get upcoming workshops and exclusive recruitment events delivered to your inbox.
                  </p>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 bg-white/10 rounded-xl mb-4 placeholder:text-white/30 border border-white/10 focus:outline-none focus:border-secondary transition-all"
                  />
                  <button className="w-full py-3 bg-secondary text-secondary-foreground rounded-xl font-bold shadow-lg shadow-secondary/20 hover:bg-white transition-all">
                    Subscribe
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>

              <div className="glass p-8 rounded-2xl border-dashed">
                <h3 className="text-xl font-bold mb-4">Host an Event?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Are you an employer or training provider looking to collaborate on a workshop? Reach out to our events team.
                </p>
                <button className="text-secondary font-bold hover:underline">Contact Events Team</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
