"use client";

import React from "react";
import { ScanLine, Sparkles, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FeaturesGrid() {
  const discoveryCards = [
    {
      title: "Reconnaissance Visuelle & Suivi Facile",
      subtitle: "1 photo suffit",
      badge: "Vision IA Instantanée",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80",
      description: "Cette appli de vente gratuite vous évite les heures passées à taper manuellement chaque détail. Prenez une photo : l'IA identifie immédiatement le modèle, la marque, le tissu et la coupe exacte.",
    },
    {
      title: "Scanner de Code-barres & Étiquettes",
      subtitle: "Zéro litige acheteur",
      badge: "Authenticité & Taille",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=700&auto=format&fit=crop&q=80",
      description: "Le scanner d'étiquettes Folzi AI est la façon la plus simple d'extraire la composition textile et les dimensions exactes (aisselle à aisselle) pour rassurer les acheteurs et éviter les retours.",
    },
    {
      title: "Argus en Temps Réel & Notation de Prix",
      subtitle: "+35% de marge nette",
      badge: "Prix Conseillé",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&auto=format&fit=crop&q=80",
      description: "Envie d'un compteur de rentabilité qui vous indique le juste prix de revente ? Notre algorithme analyse des millions de transactions Vinted et Leboncoin pour vous proposer le tarif idéal.",
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#06040A] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C5CFC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] font-bold text-xs uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 text-[#A88BFF]" />
            <span>Technologies de Pointe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Découvrez le studio <span className="gradient-purple-text">Folzi AI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Folzi AI réunit l’état de l’art de l’intelligence artificielle visuelle et textuelle pour vous faire gagner des heures et maximiser chaque vente.
          </p>
        </div>

        {/* 3 Large Discovery Cards (Exact YAZIO pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {discoveryCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[#A88BFF]/50 p-6 sm:p-7 flex flex-col justify-between space-y-6 backdrop-blur-xl transition-all duration-300 shadow-xl group hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* Photo Banner with Tag */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06040A]/90 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold font-mono text-[#E5DEFF] border border-white/20">
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#A88BFF] font-mono">
                    {card.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4C9FF] transition-colors tracking-tight leading-snug">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#A88BFF] group-hover:text-white transition-all font-mono">
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
