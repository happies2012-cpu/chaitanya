import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />

      {/* Platform Preview / Dashboard Mockup */}
      <section className="py-24 px-6 bg-orange-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4"><span className="text-orange-500">Transparent</span> Case Dashboards</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
              Real-time visualization of your EB-1A case health, evidence accumulation, and filing status.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-muted/30 border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">horizon_eb1_v7.0 // petition_logic_active</div>
              </div>
              <div className="p-8 md:p-12 aspect-[16/10] md:aspect-[16/9] bg-[#020617] flex items-center justify-center">
                {/* Mockup Content */}
                <div className="grid grid-cols-12 gap-6 w-full h-full opacity-80 select-none pointer-events-none">
                  <div className="col-span-12 md:col-span-8 space-y-6">
                    <div className="h-32 bg-white/5 rounded-2xl animate-pulse" />
                    <div className="h-64 bg-white/5 rounded-2xl animate-pulse" />
                  </div>
                  <div className="col-span-12 md:col-span-4 space-y-6">
                    <div className="h-full bg-white/5 rounded-2xl animate-pulse" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                  <div className="p-4 rounded-2xl bg-orange-500/10 backdrop-blur-md border border-orange-500/30 text-orange-400 font-bold text-center">
                    Advisor Intelligence Preview
                    <div className="text-[10px] text-white/60 font-black uppercase tracking-widest mt-1">Client Root Access Required</div>
                  </div>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 font-black rounded-xl shadow-xl shadow-white/10 px-8">
                    Preview Your Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto glass p-16 rounded-[2.5rem] border-white/10 shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-6 leading-tight">Secure your <span className="text-orange-500">Green Card</span> <br />with 100% confidence.</h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Don't leave your EB-1A journey to chance. Join the ecosystem where extraordinary talent meets precise legal engineering.
            </p>
            <Button size="lg" className="h-16 px-12 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl text-xl font-black shadow-2xl shadow-orange-500/40 group uppercase tracking-widest">
              Begin Eligibility Scan
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <p className="mt-8 text-xs text-muted-foreground uppercase tracking-[0.3em] font-black">
              75+ Success Stories // 0% Generic Consulting
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-muted-foreground">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-white font-bold tracking-tighter uppercase text-lg">HORIZON<span className="text-orange-500">EB-1</span></span>
          </div>
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Legal Terms</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Consultation</a>
          </div>
          <p className="text-[10px] tracking-widest font-bold opacity-60">© 2025 Horizon Eb1 Tech Advisors. Not a Law Firm. Technical Consulting Only.</p>
        </div>
      </footer>
    </main>
  );
}
