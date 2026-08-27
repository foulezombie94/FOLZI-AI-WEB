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
    <section className="py-24 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>Simplicité Absolue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            Vendre en ligne n’a jamais été <span className="gradient-purple-text">aussi simple</span>.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            3 étapes limpides pour transformer le désordre de votre placard en revenus réguliers.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-6">
                  {/* Top Step Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white font-mono font-black text-2xl flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
                      {step.number}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase border ${step.badgeColor}`}>
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon & Details */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-black text-ink group-hover:text-brand-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-brand-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Automatisé par VendMoi</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}