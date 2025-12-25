import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, CheckCircle2, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen font-inter">
      <Navbar />
      <Hero />
      <Features />

      {/* Platform Preview / Dashboard Mockup */}
      <section className="py-32 px-6 relative bg-transparent overflow-hidden">
        <div className="absolute inset-0 bg-stone-500/[0.02] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-outfit font-black mb-6 uppercase tracking-tight text-foreground">
              Transparent <span className="text-gradient-primary">Project Dashboards</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-inter font-medium tracking-tight opacity-80">
              Real-time visualization of your EB-1A case health, evidence accumulation, and filing status.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative glass-card rounded-[2.5rem] overflow-hidden border border-muted-foreground/10 shadow-3xl bg-card/60">
              {/* Browser/OS Top Bar */}
              <div className="bg-muted px-8 py-5 flex items-center justify-between border-b border-muted-foreground/10">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/30" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/30" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/30" />
                </div>
                <div className="text-[10px] font-inter font-bold text-muted-foreground uppercase tracking-[0.3em] opacity-60 flex items-center gap-4">
                  <span className="flex items-center gap-2"><Box size={10} /> EB1-SECURE-NODE-04</span>
                  <span className="h-4 w-px bg-muted-foreground/20" />
                  <span>V7.4-FINAL-DRAFT</span>
                </div>
              </div>

              {/* Actual Mockup Content (A preview of the dashboard) */}
              <div className="p-8 md:p-16 aspect-[16/10] md:aspect-[16/9] bg-background/40 relative flex items-center justify-center">
                <div className="grid grid-cols-12 gap-8 w-full h-full opacity-40 select-none pointer-events-none filter blur-[2px]">
                  {/* Sidebar Sim */}
                  <div className="hidden md:block col-span-3 space-y-6 border-r border-muted-foreground/10 pr-8">
                    <div className="h-8 w-32 bg-foreground/10 rounded-lg" />
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-10 w-full bg-foreground/5 rounded-xl flex items-center px-4 gap-3">
                          <div className="w-4 h-4 rounded bg-foreground/10" />
                          <div className="h-2 w-20 bg-foreground/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Dashboard Content Sim */}
                  <div className="col-span-12 md:col-span-9 space-y-8">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="h-32 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl" />
                      <div className="h-32 bg-foreground/5 rounded-3xl" />
                      <div className="h-32 bg-foreground/5 rounded-3xl" />
                    </div>
                    <div className="h-72 bg-foreground/5 rounded-[2rem]" />
                    <div className="grid grid-cols-2 gap-6">
                      <div className="h-48 bg-foreground/5 rounded-3xl" />
                      <div className="h-48 bg-foreground/5 rounded-3xl" />
                    </div>
                  </div>
                </div>

                {/* Overlay for Interaction */}
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-8 bg-background/20 backdrop-blur-[4px]">
                  <div className="p-10 rounded-[2.5rem] bg-card/80 border border-muted-foreground/20 shadow-3xl text-center max-w-lg mx-auto transform transition-transform group-hover:scale-[1.02]">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl shadow-indigo-500/20">
                      <Zap className="text-white fill-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-outfit font-black mb-3 uppercase tracking-tight text-foreground leading-none">Transparency Engine</h3>
                    <p className="text-muted-foreground text-sm font-inter font-medium leading-relaxed mb-6">
                      Log in to your private advisory portal to see real-time Kazarian audit scores, adjudicator sentiment, and technical evidence hardening.
                    </p>
                    <Button size="lg" className="h-14 bg-foreground text-background hover:bg-foreground/90 font-outfit font-black rounded-xl shadow-xl px-10 uppercase tracking-widest text-xs">
                      Preview Platform Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      {/* Final CTA */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[3.5rem] border border-muted-foreground/10 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.1)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-purple-500/[0.03]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] -mr-48 -mt-48 transition-all group-hover:bg-indigo-600/10" />

          <div className="relative z-10 flex flex-col items-center">
            <Badge className="bg-indigo-500/10 text-indigo-600 uppercase font-black text-[10px] tracking-[0.4em] mb-10 px-6 py-2 rounded-full border border-indigo-500/20">Final Phase Implementation</Badge>
            <h2 className="text-4xl md:text-5xl font-outfit font-black mb-8 leading-[1.1] text-foreground uppercase tracking-tight">
              Impacted by <br /> <span className="text-gradient-primary">Expert Analysis</span>.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-14 max-w-2xl mx-auto font-inter font-medium leading-relaxed opacity-80">
              Don't leave your EB-1A journey to chance. Join the ecosystem where extraordinary talent meets precise technical engineering.
            </p>
            <Button size="lg" className="h-16 px-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-lg font-outfit font-black shadow-xl shadow-indigo-500/20 group uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
              Ready for Scan
              <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={20} />
            </Button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 pt-16 border-t border-muted-foreground/10 w-full opacity-60">
              {[
                { label: "Success Rate", value: "94.2%" },
                { label: "Technical Peers", value: "850+" },
                { label: "Avg. Velocity", value: "118d" },
                { label: "Hardened Files", value: "5.2k" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-outfit font-black text-foreground">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-muted/20 text-center text-muted-foreground transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start text-left">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xl shadow-indigo-500/20">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-foreground font-outfit font-black tracking-tighter uppercase text-2xl leading-none">Guide<span className="text-indigo-600">Soft</span></span>
                <span className="text-[7px] text-muted-foreground font-bold uppercase tracking-[0.4em]">Intelligent Solutions</span>
              </div>
            </div>
            <p className="text-sm font-inter font-medium leading-relaxed opacity-60">
              We bridge the gap between extraordinary technical innovation and complex adjudicative standards through elite data engineering and strategic legal architecture.
            </p>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Intelligence</h4>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest opacity-60">
              <a href="#" className="hover:text-indigo-500 transition-colors">Case Vault</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">Velocity Index</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">Strategic Map</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">Criteria Scan</a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Infrastructure</h4>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest opacity-60">
              <a href="#" className="hover:text-indigo-500 transition-colors">Advisory API</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">Privacy Node</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">Audit Protocol</a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground flex items-center gap-3">
              <Shield size={12} className="text-indigo-500" /> Administrative Security
            </h4>
            <div className="p-6 rounded-2xl bg-muted/60 border border-muted-foreground/10 text-[10px] font-bold uppercase tracking-widest leading-loose opacity-60">
              All case data is encrypted using US Federal post-quantum standards. Advisory is technical in nature; we are not a law firm.
            </div>
            <p className="text-[10px] tracking-widest font-black uppercase opacity-40">© 2025 GuideSoft Technologies.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}
