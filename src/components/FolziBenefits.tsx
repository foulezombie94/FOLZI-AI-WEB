"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FolziBenefits() {
  const benefits = [
    {
      title: "Prenez 1 seule photo pour identifier instantanément marque, matière et coupe",
      tag: "1,8 seconde",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&auto=format&fit=crop&q=80",
      description: "Notre vision IA analyse la silhouette, le textile, le motif et l'usure de votre article en un éclair sans rien taper."
    },
    {
      title: "Remplacez les descriptions bâclées par des annonces professionnelles persuasives",
      tag: "Zéro effort",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=80",
      description: "Folzi AI rédige le titre SEO parfait, les détails techniques et les hashtags viraux recherchés par les acheteurs."
    },
    {
      title: "Atteignez votre objectif de gains et videz votre dressing en 24h à 48h",
      tag: "+240% de vues",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=80",
      description: "L'argus en temps réel calcule le juste prix pour vendre vite au meilleur tarif sans subir les négociations agressives."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-[#0C081E] relative overflow-hidden border-t border-white/10">
      {/* Soft Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#7C5CFC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Lancez le studio Folzi AI <span className="gradient-purple-text">dès aujourd&apos;hui !</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Adoptez la méthode la plus rapide et rentable pour transformer vos placards en revenus réguliers.
          </p>

          <div className="pt-2">
            <a
              href="/folzi-ai.apk"
              download="Folzi-AI.apk"
              className="btn-tactile-3d px-8 py-4 text-sm sm:text-base font-bold shadow-xl tracking-wide uppercase font-mono"
            >
              <span>Essayer maintenant (Gratuit)</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* 3 Large Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#A88BFF]/50 p-6 sm:p-7 flex flex-col justify-between space-y-6 backdrop-blur-xl transition-all duration-300 shadow-xl hover:-translate-y-1.5 group"
            >
              <div className="space-y-4">
                {/* Header with Green Checkmark */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#34D399]/20 border border-[#34D399]/40 flex items-center justify-center shrink-0 text-[#34D399] mt-0.5 shadow-[0_0_12px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-5 h-5 fill-[#34D399]/20" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#D4C9FF] transition-colors">
                    {b.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-12 font-normal">
                  {b.description}
                </p>
              </div>

              {/* Photo Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C081E]/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold font-mono text-[#E5DEFF] border border-white/20">
                  {b.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
