import PageLayout from "@/components/PageLayout";
import { DollarSign, CheckCircle2, Shield, Landmark, ArrowRight } from "lucide-react";

export default function FundingOptions() {
  const steps = [
    {
      title: "Self-Assessment",
      desc: "Determine your eligibility for federal and state assistance programs based on your current employment status and career goals."
    },
    {
      title: "Orientation Session",
      desc: "Attend a mandatory introductory session to learn about the various grants and scholarships available through DCWorks."
    },
    {
      title: "Career Research",
      desc: "Work with a counselor to identify 'Demand Occupations' that qualify for ITA (Individual Training Account) funding."
    },
    {
      title: "Application & Approval",
      desc: "Complete the formal application process for training grants of up to $4,000 for qualifying programs."
    }
  ];

  return (
    <PageLayout 
      title="Funding Options" 
      subtitle="Financial resources and grants available to help you acquire the skills needed for a high-demand career."
      imageUrl="/images/hero/training-hero.png"
      breadcrumb={[{ label: "Job Seekers", href: "#" }, { label: "Funding Options", href: "/job-seekers/funding-options" }]}
    >
      <div className="py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">Investing in Your Future</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At DCWorks, we believe financial constraints shouldn't stand in the way of professional growth. 
              We offer several funding streams to support your training and education.
            </p>

            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <Landmark className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">ITA Training Grants</h3>
                    <p className="text-sm text-muted-foreground">Direct funding for tuition at approved training providers.</p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <DollarSign className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Work-Based Learning</h3>
                    <p className="text-sm text-muted-foreground">Earn while you learn through on-the-job training opportunities.</p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Supportive Services</h3>
                    <p className="text-sm text-muted-foreground">Assistance with transportation, childcare, and equipment costs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-12 rounded-3xl relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-8 relative z-10">Application Journey</h2>
            <div className="space-y-12 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i !== steps.length - 1 && (
                    <div className="absolute top-8 left-4 w-0.5 h-16 bg-muted-foreground/20" />
                  )}
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/5 rounded-full" />
          </div>
        </div>

        <div className="mt-20 p-8 glass bg-secondary/5 border-dashed text-center rounded-2xl">
          <p className="text-muted-foreground mb-4">Questions about your eligibility?</p>
          <button className="text-primary font-bold hover:text-secondary transition-colors underline decoration-2 underline-offset-4">
            Speak with a Funding Specialist
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
