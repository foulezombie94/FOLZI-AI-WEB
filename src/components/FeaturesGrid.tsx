"use client";

import React from "react";
import { ScanLine, Sparkles, TrendingUp, ShieldCheck, Layers, Coins, ArrowRight } from "lucide-react";
import { FEATURES } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  ScanLine,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Layers,
  Coins
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-[#06040A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C5CFC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] font-bold text-xs uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 text-[#A88BFF]" />
            <span>Technologies de Pointe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tout le pouvoir d’un <span className="gradient-purple-text">studio pro</span> dans votre poche.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Folzi AI réunit l’état de l’art de l’intelligence artificielle visuelle et textuelle pour vous faire gagner des heures et maximiser chaque vente.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[#A88BFF]/50 p-8 shadow-xl shadow-black/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden"
              >
                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C5CFC]/10 rounded-full blur-2xl group-hover:bg-[#7C5CFC]/25 transition-all pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Top Row: Icon + Highlight Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] text-white flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#7C5CFC]/20 text-[#E5DEFF] border border-[#A88BFF]/40 text-[11px] font-bold uppercase font-mono tracking-wider shadow-sm">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#A88BFF] font-mono">
                      {feature.tag}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4C9FF] transition-colors tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-bold text-[#A88BFF] group-hover:text-white transition-all relative z-10 font-mono">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 text-[#A88BFF] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

