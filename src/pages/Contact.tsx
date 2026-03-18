import PageLayout from "@/components/PageLayout";
import { Mail, Phone, MapPin, Send, MessageSquare, Info } from "lucide-react";

export default function Contact() {
  const offices = [
    {
      name: "Main Office (Poughkeepsie)",
      address: "191 Main Street, Poughkeepsie, NY 12601",
      phone: "(845) 473-4100",
      hours: "Mon - Fri: 8:30 AM - 4:30 PM"
    },
    {
      name: "Beacon Center",
      address: "223 Main Street, Beacon, NY 12508",
      phone: "(845) 838-8290",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM"
    }
  ];

  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Have questions? Our regional workforce experts are ready to assist you via phone, email, or in-person visits."
      breadcrumb={[{ label: "Contact", href: "/contact" }]}
    >
      <div className="py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="glass p-8 rounded-3xl space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">General inquiries and support</p>
                    <a href="mailto:info@dcwib.org" className="text-primary font-bold hover:text-secondary transition-colors">info@dcwib.org</a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Direct Line</h3>
                    <p className="text-muted-foreground text-sm mb-2">Technical assistance and grants</p>
                    <a href="tel:8454734100" className="text-primary font-bold hover:text-secondary transition-colors">(845) 473-4100</a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
              <div className="space-y-6">
                {offices.map((office, i) => (
                  <div key={i} className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-secondary transition-all">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4">{office.name}</h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-4 w-4 text-secondary shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Info className="h-4 w-4 text-secondary shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                      <button className="mt-6 text-primary font-bold text-sm flex items-center gap-2">
                        Get Directions
                        <Send className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className="glass p-12 rounded-[40px] sticky top-32 shadow-3xl">
              <div className="flex items-center gap-4 mb-8">
                <MessageSquare className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl font-bold">Send a Message</h2>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-muted border-0 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 bg-muted border-0 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Subject</label>
                  <select className="w-full px-6 py-4 bg-muted border-0 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Business Services</option>
                    <option>Career Counseling</option>
                    <option>Training Grants</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground ml-1">Message</label>
                  <textarea className="w-full px-6 py-4 bg-muted border-0 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white transition-all h-32 resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
