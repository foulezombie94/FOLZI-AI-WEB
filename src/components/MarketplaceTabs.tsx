"use client";

import React, { useState } from "react";
import { Check, Sparkles, Tag, ShieldCheck, MapPin, Hash, ArrowRight, Copy } from "lucide-react";

export default function MarketplaceTabs() {
  const [platform, setPlatform] = useState<"vinted" | "leboncoin">("vinted");
  const [copied, setCopied] = useState(false);

  const sampleTexts = {
    vinted: "Veste authentique en toile de coton lourd. Poches zippées, boutons gravés. Mesures aisselle à aisselle : 54 cm. Envoi sous 24h. #carhartt #vintage #workwear",
    leboncoin: "Bonjour, je vends cette veste Carhartt originale en parfait état. Aucun accroc, fermeture impeccable. Visible sur place ou expédition rapide. N’hésitez pas !",
  };

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(sampleTexts[platform]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#06040A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7C5CFC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] font-bold text-xs uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 text-[#A88BFF]" />
            <span>Adaptation Multi-Canal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Deux plateformes. <span className="gradient-purple-text">Deux stratégies gagnantes.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            On ne vend pas sur Vinted comme sur Leboncoin. Folzi AI adapte le vocabulaire, la structure et les signaux de confiance selon l&apos;endroit où vous publiez.
          </p>
        </div>

        {/* 3D Platform Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 gap-2 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setPlatform("vinted")}
              className={`flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all ${
                platform === "vinted"
                  ? "bg-[#09B1BA] text-white shadow-lg shadow-teal-500/30 scale-105"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Vinted</span>
              <span className="text-[10px] uppercase font-mono font-bold bg-white/20 px-2 py-0.5 rounded-full">
                Mode Dressing
              </span>
            </button>

            <button
              onClick={() => setPlatform("leboncoin")}
              className={`flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm transition-all ${
                platform === "leboncoin"
                  ? "bg-[#F56B2A] text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Leboncoin</span>
              <span className="text-[10px] uppercase font-mono font-bold bg-white/20 px-2 py-0.5 rounded-full">
                Mode Local & Maison
              </span>
            </button>
          </div>
        </div>

        {/* Feature Highlights Grid for Selected Platform */}
        <div className="max-w-4xl mx-auto rounded-[36px] p-8 sm:p-10 bg-[#0E0A21]/90 border border-white/15 backdrop-blur-xl shadow-2xl shadow-purple-950/30 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className={`text-xs font-bold uppercase tracking-wider font-mono ${
                platform === "vinted" ? "text-[#09B1BA]" : "text-[#F56B2A]"
              }`}>
                Optimisation spécifique pour {platform === "vinted" ? "Vinted" : "Leboncoin"}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {platform === "vinted"
                  ? "Algorithme de recommandation Vinted"
                  : "Confiance & politesse Leboncoin"}
              </h3>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-300 font-medium">
              {platform === "vinted" ? (
                <>
                  <li className="flex items-start gap-3">
                    <Hash className="w-5 h-5 text-[#09B1BA] shrink-0 mt-0.5" />
                    <span><strong>Hashtags viraux :</strong> Génère les mots-clés tendances (#vintage, #streetwear, #y2k) qui alimentent le feed Vinted.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Tag className="w-5 h-5 text-[#09B1BA] shrink-0 mt-0.5" />
                    <span><strong>Tailles & filtres :</strong> Correspondance exacte avec les filtres du moteur de recherche Vinted.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#09B1BA] shrink-0 mt-0.5" />
                    <span><strong>Mise en avant de l’état :</strong> Précise les micro-imperfections pour éviter tout litige acheteur.</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F56B2A] shrink-0 mt-0.5" />
                    <span><strong>Remise en main propre :</strong> Phrases prêtes pour la remise locale ou l’envoi sécurisé via Leboncoin.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#F56B2A] shrink-0 mt-0.5" />
                    <span><strong>Formules de politesse :</strong> Ton courtois et rassurant qui déclenche des messages d’acheteurs sérieux.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#F56B2A] shrink-0 mt-0.5" />
                    <span><strong>Mots-clés de géolocalisation :</strong> Optimisé pour les recherches par ville et département.</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Right Simulated Card Preview */}
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-slate-400">Aperçu de la rédaction</span>
              <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                platform === "vinted" ? "bg-[#09B1BA]/20 text-[#5BE3EB] border border-[#09B1BA]/40" : "bg-[#F56B2A]/20 text-[#FFA071] border border-[#F56B2A]/40"
              }`}>
                Prêt à coller
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="font-bold text-white text-sm">
                {platform === "vinted"
                  ? "Veste Carhartt WIP Detroit Kaki - Vintage Boxy M"
                  : "Veste Carhartt Vintage taille M - Remise en main propre ou envoi"}
              </div>
              <div className="text-[#34D399] font-bold font-mono">Prix conseillé : 48 €</div>
              <p className="text-slate-300 leading-relaxed italic bg-white/[0.02] p-3.5 rounded-2xl border border-white/5 font-sans">
                &ldquo;{sampleTexts[platform]}&rdquo;
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="w-full text-xs text-center font-bold text-white bg-[#7C5CFC]/30 hover:bg-[#7C5CFC]/50 py-3 rounded-xl border border-[#A88BFF]/40 font-mono transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Texte copié dans le presse-papier !</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#A88BFF]" />
                  <span>Copier en 1 clic pour {platform === "vinted" ? "Vinted" : "Leboncoin"}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}