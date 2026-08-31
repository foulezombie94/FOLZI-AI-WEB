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
          <p className="text-slate-300 text-base sm:text-lg">
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
                className="group relative rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#A88BFF]/40 p-8 shadow-xl shadow-black/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
              >
                <div className="space-y-5">
                  {/* Top Row: Icon + Highlight Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] text-white flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#7C5CFC]/20 text-[#D4C9FF] border border-[#A88BFF]/30 text-[10px] font-bold uppercase font-mono tracking-wider">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#A88BFF] font-mono">
                      {feature.tag}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4C9FF] transition-colors tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-1.5 text-xs font-bold text-[#A88BFF] group-hover:gap-2.5 transition-all">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
