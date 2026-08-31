"use client";

import React from "react";
import { Camera, WandSparkles, Banknote, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Prenez 1 seule photo",
      description: "Ouvrez l’app VendMoi et photographiez votre vêtement ou objet sous une bonne lumière. Notre IA analyse automatiquement la silhouette, la marque et la matière.",
      icon: Camera,
      tag: "1.8 seconde",
      badgeColor: "bg-brand-50 text-brand-600 border-brand-200"
    },
    {
      number: "2",
      title: "L’IA rédige et estime le prix",
      description: "Titre percutant optimisé pour la recherche, description détaillée, hashtags tendances et prix calculé selon les dernières ventes réelles.",
      icon: WandSparkles,
      tag: "Zéro effort",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      number: "3",
      title: "Copiez et vendez en 24h",
      description: "En 1 clic, collez votre annonce sur Vinted ou Leboncoin. Vous recevez immédiatement des notifications d’acheteurs intéressés sans négociation interminable.",
      icon: Banknote,
      tag: "+240% de vues",
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#090614] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] font-bold text-xs uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 text-[#A88BFF]" />
            <span>Simplicité Absolue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Vendre en ligne n’a jamais été <span className="gradient-purple-text">aussi simple</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            3 étapes limpides pour transformer le désordre de votre placard en revenus réguliers.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#A88BFF]/40 p-8 shadow-2xl shadow-black/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 group backdrop-blur-xl"
              >
                <div className="space-y-6">
                  {/* Top Step Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] text-white font-mono font-black text-2xl flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
                      {step.number}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider bg-[#7C5CFC]/20 text-[#D4C9FF] border border-[#A88BFF]/30">
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon & Details */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4C9FF] transition-colors tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-normal">
                      {step.description.replace("VendMoi", "Folzi AI")}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-[#A88BFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>Automatisé par Folzi AI</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}