import { Briefcase, Search, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { withBase } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-border">
      {/* Background image with right-dominant overlay */}
      <div className="absolute inset-0">
        <img
          src={withBase("/images/hero/hero-bg.png")}
          alt="Dutchess County professionals"
          className="w-full h-full object-cover"
        />
        {/* Black overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle dark tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative container pt-36 pb-24">
        <div className="max-w-3xl ml-auto">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1f1a]/80 border border-white/20 mb-8 fade-in backdrop-blur-sm">
            <MapPin className="h-3 w-3 text-white" />
            <span className="text-[11px] font-semibold text-white tracking-widest uppercase">
              Dutchess County, New York
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.05] mb-6 slide-up tracking-tight drop-shadow-md">
            Building Careers.<br />
            <span className="text-white drop-shadow-sm">Growing Businesses.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 font-medium max-w-xl mb-12 slide-up leading-relaxed" style={{ animationDelay: "100ms" }}>
            Your local resource for career services, employer solutions, and workforce development in Dutchess County, New York.
          </p>

          {/* Dual CTA cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl slide-up" style={{ animationDelay: "200ms" }}>
            <Link
              to="/job-seekers/career-services"
              className="group flex items-center gap-4 bg-primary text-primary-foreground p-5 rounded-2xl hover:bg-primary/90 hover-lift"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Search className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-base flex items-center gap-1">
                  Job Seekers <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </p>
                <p className="text-xs opacity-70 mt-0.5">Find your next career path</p>
              </div>
            </Link>

            <Link
              to="/employers/business-services"
              className="group flex items-center gap-4 bg-secondary text-secondary-foreground p-5 rounded-2xl hover:bg-secondary/90 hover-lift"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-base flex items-center gap-1">
                  Employers <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </p>
                <p className="text-xs opacity-70 mt-0.5">Build your dream team</p>
              </div>
            </Link>
          </div>

          {/* Trust / stats row */}
          <div className="flex flex-wrap items-center gap-6 mt-14 slide-up bg-[#0d1f1a]/75 backdrop-blur-sm rounded-2xl px-6 py-4 w-fit" style={{ animationDelay: "300ms" }}>
            {[
              { value: "15k+", label: "Residents Served" },
              { value: "75+", label: "Coalition Partners" },
              { value: "20+", label: "Years of Impact" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/80 font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
