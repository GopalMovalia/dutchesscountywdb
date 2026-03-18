import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { withBase } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  imageUrl?: string;
}

export default function PageLayout({ children, title, subtitle, breadcrumb, imageUrl }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative pt-36 pb-16 border-b border-border overflow-hidden">
          {/* Background image with light overlay */}
          {imageUrl ? (
            <div className="absolute inset-0 z-0">
              <img
                src={withBase(imageUrl)}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-surface">
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
            </div>
          )}

          <div className="container relative z-10 slide-up">
            {/* Breadcrumb */}
            {breadcrumb && (
              <nav className="flex items-center gap-1.5 mb-5 text-sm text-muted-foreground">
                <a href="/" className="hover:text-primary transition-colors">Home</a>
                {breadcrumb.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <span>/</span>
                    <a href={item.href} className="hover:text-primary transition-colors">{item.label}</a>
                  </div>
                ))}
              </nav>
            )}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">{title}</h1>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </section>

        <div className="fade-in container py-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
