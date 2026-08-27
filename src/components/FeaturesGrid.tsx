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
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>Technologies de Pointe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            Tout le pouvoir d’un <span className="gradient-purple-text">studio pro</span> dans votre poche.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            VendMoi réunit l’état de l’art de l’intelligence artificielle visuelle et textuelle pour vous faire gagner des heures et maximiser chaque vente.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-brand-300 p-8 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Row: Icon + Highlight Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[11px] font-extrabold uppercase">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-600">
                      {feature.tag}
                    </div>
                    <h3 className="text-xl font-extrabold text-ink group-hover:text-brand-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:gap-2.5 transition-all">
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
