"use client";

import React, { useState } from "react";
import { Check, Sparkles, Tag, ShieldCheck, MapPin, Hash, ArrowRight } from "lucide-react";

export default function MarketplaceTabs() {
  const [platform, setPlatform] = useState<"vinted" | "leboncoin">("vinted");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-extrabold text-xs uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>Adaptation Multi-Canal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            Deux plateformes. <span className="gradient-purple-text">Deux stratégies gagnantes.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            On ne vend pas sur Vinted comme sur Leboncoin. VendMoi adapte le vocabulaire, la structure et les signaux de confiance selon l'endroit où vous publiez.
          </p>
        </div>

        {/* 3D Platform Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-2 rounded-2xl bg-slate-100 border border-slate-200 gap-3">
            <button
              onClick={() => setPlatform("vinted")}
              className={`flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-black text-sm transition-all ${
                platform === "vinted"
                  ? "btn-vinted-3d bg-vinted text-white"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <span>Vinted</span>
              <span className="text-[10px] uppercase font-mono font-bold bg-white/20 px-2 py-0.5 rounded-full">
                Mode Dressing
              </span>
            </button>

            <button
              onClick={() => setPlatform("leboncoin")}
              className={`flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-black text-sm transition-all ${
                platform === "leboncoin"
                  ? "btn-leboncoin-3d bg-leboncoin text-white"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <span>Leboncoin</span>
              <span className="text-[10px] uppercase font-mono font-bold bg-white/20 px-2 py-0.5 rounded-full">
                Mode Maison & Local
              </span>
            </button>
          </div>
        </div>

        {/* Feature Highlights Grid for Selected Platform */}
        <div className="max-w-4xl mx-auto rounded-[36px] p-8 sm:p-10 bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className={`text-xs font-black uppercase tracking-wider font-mono ${
                platform === "vinted" ? "text-vinted" : "text-leboncoin"
              }`}>
                Optimisation spécifique pour {platform === "vinted" ? "Vinted" : "Leboncoin"}
              </span>
              <h3 className="text-2xl font-black text-ink">
                {platform === "vinted"
                  ? "Algorithme de recommandation Vinted"
                  : "Confiance & politesse Leboncoin"}
              </h3>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700 font-medium">
              {platform === "vinted" ? (
                <>
                  <li className="flex items-start gap-3">
                    <Hash className="w-5 h-5 text-vinted shrink-0 mt-0.5" />
                    <span><strong>Hashtags viraux :</strong> Génère les mots-clés tendances (#vintage, #streetwear, #y2k) qui alimentent le feed Vinted.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Tag className="w-5 h-5 text-vinted shrink-0 mt-0.5" />
                    <span><strong>Tailles & filtres :</strong> Correspondance exacte avec les filtres du moteur de recherche Vinted.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-vinted shrink-0 mt-0.5" />
                    <span><strong>Mise en avant de l’état :</strong> Précise les micro-imperfections pour éviter tout litige acheteur.</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-leboncoin shrink-0 mt-0.5" />
                    <span><strong>Remise en main propre :</strong> Phrases prêtes pour la remise locale ou l’envoi sécurisé via Leboncoin.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-leboncoin shrink-0 mt-0.5" />
                    <span><strong>Ton rassurant :</strong> Formules de politesse intégrées adaptées aux acheteurs de Leboncoin.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-leboncoin shrink-0 mt-0.5" />
                    <span><strong>Détails techniques :</strong> Dimensions et matériaux pour rassurer avant la commande.</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Example Preview Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-extrabold text-xs text-slate-800 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${
                  platform === "vinted" ? "bg-vinted" : "bg-leboncoin"
                }`} />
                Aperçu de l’annonce générée
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-mono">
                Prête à coller
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="font-extrabold text-slate-900 text-sm font-sans">
                {platform === "vinted"
                  ? "Veste Workwear Vintage Kaki Carhartt WIP - Coupe Boxy M"
                  : "Veste Carhartt WIP vintage kaki taille M - Très bon état"}
              </div>
              <div className="text-brand-600 font-black font-mono">Prix conseillé : 48 €</div>
              <div className="text-slate-600 leading-relaxed text-[11px] bg-slate-50 p-3.5 rounded-xl font-normal">
                {platform === "vinted"
                  ? "Veste vintage en toile de coton épaisse de qualité supérieure. Pièce authentique sans tâche ni accroc. #carhartt #workwear #vintage #streetwear"
                  : "Bonjour, je vends cette veste Carhartt authentique en très bon état. Toile robuste, 2 grandes poches. Remise en main propre ou envoi soigné."}
              </div>
            </div>

            <div className="text-[11px] text-center font-bold text-brand-600 bg-brand-50 py-2.5 rounded-xl">
              ✓ Copiez en 1 clic et collez directement dans {platform === "vinted" ? "Vinted" : "Leboncoin"}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}