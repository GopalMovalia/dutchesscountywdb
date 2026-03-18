import PageLayout from "@/components/PageLayout";
import { Briefcase, GraduationCap, CheckCircle2, DollarSign, ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function OnTheJobTraining() {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-secondary" />,
      title: "Wage Reimbursements",
      desc: "Employers receive up to 50% wage reimbursement for the cost of training new hires on the job."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-secondary" />,
      title: "Skill-Matched Hires",
      desc: "We help match pre-screened candidates to open positions aligned with your business's specific skill requirements."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-secondary" />,
      title: "Reduced Turnover",
      desc: "Employees trained through OJT programs demonstrate higher retention rates compared to traditionally hired workers."
    },
    {
      icon: <Building2 className="h-6 w-6 text-secondary" />,
      title: "Industry Focus",
      desc: "Priority sectors include healthcare, advanced manufacturing, construction trades, IT, and transportation."
    }
  ];

  const steps = [
    { step: "01", title: "Initial Consultation", desc: "Meet with a business services representative to assess your hiring needs and determine OJT eligibility." },
    { step: "02", title: "Candidate Matching", desc: "We identify and refer pre-qualified candidates from our talent pipeline who meet your job requirements." },
    { step: "03", title: "Contract Agreement", desc: "A formal OJT contract is drawn up outlining the training plan, duration, wage reimbursement rate, and milestones." },
    { step: "04", title: "Training & Reimbursement", desc: "You hire and train the employee. Upon verification, wage reimbursements are processed on a regular basis." }
  ];

  return (
    <PageLayout 
      title="On-The-Job Training" 
      subtitle="Partner with DCWorks to hire and train new employees — and receive wage reimbursements while building your workforce."
      imageUrl="/images/hero/business-hero.png"
      breadcrumb={[{ label: "Employers", href: "/employers/business-services" }, { label: "On-The-Job Training", href: "/employers/on-the-job-training" }]}
    >
      <div className="py-12">

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xl text-muted-foreground leading-relaxed">
            On-the-Job Training (OJT) is a federally funded program that reimburses employers for the cost of training 
            new workers. It's a win-win: you get job-ready talent, and we help cover the cost of getting them up to speed.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 gap-8 mb-24">
          {benefits.map((b, i) => (
            <div key={i} className="glass p-8 rounded-3xl flex gap-6 hover-lift transition-all">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">How the OJT Program Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border z-0 -translate-x-1/2" />
                )}
                <div className="glass p-6 rounded-3xl relative z-10 h-full">
                  <span className="text-4xl font-display font-black text-secondary/20 block mb-4">{s.step}</span>
                  <h3 className="font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="glass p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8">Employer Eligibility</h3>
            <div className="space-y-4">
              {[
                "Registered business operating in Dutchess County",
                "Full-time position (minimum 30 hours/week)",
                "Pays at least minimum wage",
                "Provides structured on-the-job training",
                "No prior layoffs of workers in same position within 6 months"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-10 rounded-3xl bg-primary text-primary-foreground border-0">
            <h3 className="text-2xl font-bold mb-6">Reimbursement Rates</h3>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Reimbursement rates are based on worker experience and are typically:
            </p>
            <div className="space-y-4">
              {[
                { label: "Standard Rate", value: "Up to 50% of wages" },
                { label: "Priority Populations", value: "Up to 75% of wages" },
                { label: "Maximum Duration", value: "Up to 6 months" },
                { label: "Training Cap", value: "Negotiated per contract" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-primary-foreground/70 text-sm">{item.label}</span>
                  <span className="font-bold text-secondary">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 glass rounded-3xl bg-secondary/5">
          <h2 className="text-3xl font-bold mb-4">Ready to Hire Smarter?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our Business Services team today to find out if your next hire qualifies for OJT funding.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-secondary hover:text-secondary-foreground transition-all hover-lift shadow-lg"
          >
            Contact a Business Specialist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </PageLayout>
  );
}
