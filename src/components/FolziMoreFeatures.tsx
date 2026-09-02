"use client";

import React from "react";
import { ArrowRight, Zap, Target, Sliders } from "lucide-react";

export default function FolziMoreFeatures() {
  const features = [
    {
      title: "Ajout intelligent & Recommandations",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80",
      description: "La fonctionnalité d'ajout intelligent simplifie la saisie en vous proposant les coupes et matières les plus recherchées du moment selon la saison et les tendances actuelles.",
    },
    {
      title: "Des milliers de mots-clés optimisés",
      icon: Target,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80",
      description: "Accédez à une base de données de milliers de hashtags et filtres de recherche (#Y2K, #Vintage, #OldMoney) pour propulser vos articles en tête du fil d'actualité Vinted.",
    },
    {
      title: "Flexibilité totale multi-plateformes",
      icon: Sliders,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80",
      description: "Adaptez instantanément vos annonces entre Vinted, Leboncoin, Wallapop, Vestiaire Collective ou eBay en un seul clic sans réécrire une seule ligne de texte.",
    }
  ];

  return (
    <section id="more-features" className="py-24 bg-[#090614] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Fonctionnalités supplémentaires de <span className="gradient-purple-text">vente IA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Tout ce dont vous avez besoin pour maximiser votre visibilité et votre rentabilité en un seul endroit.
          </p>
        </div>

        {/* 3 Large Discovery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="card-3d p-6 sm:p-7 flex flex-col justify-between space-y-6 backdrop-blur-xl group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Photo Banner */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090614]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md flex items-center justify-center text-[#A88BFF] border border-white/20">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4C9FF] transition-colors tracking-tight">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#A88BFF] group-hover:text-white transition-all font-mono">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
