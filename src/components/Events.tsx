import { Link } from "react-router-dom";
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, Sparkles } from "lucide-react";

const events = [
  {
    date: "Mar 10",
    title: "Using Age To Your Advantage",
    time: "10:00 AM – 11:30 AM",
    location: "DCWorks Career Center",
  },
  {
    date: "Mar 10",
    title: "Tech Foundations 1: Digital Basics",
    time: "1:30 PM – 4:30 PM",
    location: "DCWorks Career Center",
  },
  {
    date: "Mar 11",
    title: "Resume One-on-One",
    time: "9:00 AM – 12:00 PM",
    location: "DCWorks Career Center",
  },
  {
    date: "Mar 12",
    title: "Funding Assistance Workshop",
    time: "10:00 AM – 11:30 AM",
    location: "DCWorks Career Center",
  },
  {
    date: "Mar 12",
    title: "Hudson Valley Job Fair",
    time: "3:00 PM – 6:00 PM",
    location: "DCWorks Career Center",
    highlight: true,
  },
];

export default function Events() {
  return (
    <section id="events" className="py-32 bg-background relative overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 fade-in">
          <div>
            <p className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-4">The Calendar</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">
              Workshops & Events
            </h2>
          </div>
          <Link 
            to="/job-seekers/workshops-events" 
            className="group inline-flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-widest hover:gap-3 transition-all"
          >
            Full Schedule <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4">
          {events.map((e, i) => (
            <div
              key={i}
              className={`group flex flex-col md:flex-row md:items-center gap-8 p-1 sm:p-2 pr-8 rounded-[2rem] border transition-all duration-500 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 slide-up ${
                e.highlight 
                  ? "border-secondary/20 bg-secondary/[0.03]" 
                  : "border-border/50 bg-surface/30"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex-shrink-0 w-24 h-24 rounded-[1.5rem] bg-white border border-border/50 flex flex-col items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-500">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{e.date.split(" ")[0]}</span>
                <p className="text-3xl font-display font-bold text-primary tracking-tighter">{e.date.split(" ")[1]}</p>
              </div>

              <div className="flex-1 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-secondary transition-colors">
                    {e.title}
                  </h3>
                  {e.highlight && (
                    <span className="flex items-center gap-1.5 text-[9px] font-bold bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full uppercase tracking-widest">
                      <Sparkles className="h-2.5 w-2.5" /> Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-secondary/60" /> {e.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary/60" /> {e.location}
                  </span>
                </div>
              </div>

              <div className="pb-6 md:pb-0 px-4 md:px-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground rounded-xl hover:bg-secondary hover:text-secondary-foreground transition-all shadow-md group-hover:shadow-secondary/20"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
