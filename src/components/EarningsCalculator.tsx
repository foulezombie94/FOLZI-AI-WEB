"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, Coins, ArrowRight, Clock, TrendingUp, CheckCircle2 } from "lucide-react";

export default function EarningsCalculator() {
  const [itemCount, setItemCount] = useState<number>(12);
  const [itemType, setItemType] = useState<"standard" | "vintage" | "premium">("vintage");

  const averagePrices = {
    standard: 18,
    vintage: 38,
    premium: 75,
  };

  const currentPrice = averagePrices[itemType];
  const totalEarnings = itemCount * currentPrice;
  const timeSavedHours = Math.round((itemCount * 18) / 60);
  const timeSavedMinutes = (itemCount * 18) % 60;

  return (
    <section id="calculator" className="py-24 bg-[#06040A] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7C5CFC]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-[40px] bg-[#0E0A21]/90 border border-white/15 p-8 sm:p-12 shadow-2xl shadow-purple-950/40 relative backdrop-blur-xl">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] font-bold text-xs uppercase tracking-wider font-mono">
              <Calculator className="w-4 h-4 text-[#A88BFF]" />
              <span>Calculateur de Dressing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Combien d’argent dort dans <span className="gradient-purple-text">votre placard</span> ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal">
              Ajustez le curseur et découvrez combien vous pouvez encaisser en quelques jours grâce au scanner IA de Folzi AI.
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls (Left) */}
            <form
              data-webmcp-tool="calculate_wardrobe_earnings"
              data-webmcp-description="Calculate potential resale earnings on Vinted and Leboncoin based on the number of items and wardrobe type."
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-7 space-y-6 bg-white/[0.02] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-inner backdrop-blur-md"
            >
              
              {/* Type of items tabs */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#A88BFF] font-mono">
                  Type de vêtements / objets :
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setItemType("standard")}
                    data-webmcp-field="dressingType"
                    data-webmcp-value="standard"
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      itemType === "standard"
                        ? "bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white shadow-lg shadow-purple-600/30 scale-105 border border-white/30"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    Classique
                  </button>
                  <button
                    type="button"
                    onClick={() => setItemType("vintage")}
                    data-webmcp-field="dressingType"
                    data-webmcp-value="vintage"
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      itemType === "vintage"
                        ? "bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white shadow-lg shadow-purple-600/30 scale-105 border border-white/30"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    Vintage
                  </button>
                  <button
                    type="button"
                    onClick={() => setItemType("premium")}
                    data-webmcp-field="dressingType"
                    data-webmcp-value="premium"
                    className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all ${
                      itemType === "premium"
                        ? "bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white shadow-lg shadow-purple-600/30 scale-105 border border-white/30"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    Sneakers / Luxe
                  </button>
                </div>
              </div>

              {/* Slider for count */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="items-count-slider" className="text-xs font-bold uppercase tracking-wider text-[#A88BFF] font-mono cursor-pointer">
                    Articles non portés :
                  </label>
                  <span className="px-3.5 py-1 rounded-full bg-[#7C5CFC]/20 text-[#E5DEFF] font-mono font-bold text-sm border border-[#A88BFF]/40">
                    {itemCount} articles
                  </span>
                </div>

                <input
                  id="items-count-slider"
                  name="itemsCount"
                  type="range"
                  min="2"
                  max="40"
                  value={itemCount}
                  onChange={(e) => setItemCount(Number(e.target.value))}
                  aria-label="Nombre d'articles non portés à estimer"
                  aria-valuemin={2}
                  aria-valuemax={40}
                  aria-valuenow={itemCount}
                  aria-valuetext={`${itemCount} articles`}
                  data-webmcp-field="itemCount"
                  data-webmcp-type="number"
                  className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#7C5CFC] focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]"
                />
                
                <div className="flex justify-between text-[11px] font-mono text-slate-400 font-bold">
                  <span>2 articles (Tri rapide)</span>
                  <span>20 articles</span>
                  <span className="text-[#34D399]">Prix optimisé sans perte</span>
                </div>
              </div>

            </form>

            {/* Big Results Card (Right) */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#130D2E] to-[#0A0718] border-2 border-[#7C5CFC]/50 text-white p-8 space-y-6 shadow-2xl shadow-purple-950/60 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C5CFC]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2 relative z-10">
                <div className="text-xs font-bold text-[#D4C9FF] uppercase tracking-wider font-mono">
                  Gain Potentiel Estimé
                </div>
                <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
                  {totalEarnings} €
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  directement sur votre compte bancaire
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 text-left relative z-10">
                <div className="space-y-0.5">
                  <div className="text-[11px] text-slate-400 font-bold flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#A88BFF]" />
                    <span>Temps gagné</span>
                  </div>
                  <div className="text-sm font-black text-slate-200 font-mono">
                    ~{timeSavedHours}h{timeSavedMinutes > 0 ? timeSavedMinutes : ""}
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[11px] text-slate-400 font-bold flex items-center gap-1 font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Délai moyen</span>
                  </div>
                  <div className="text-sm font-black text-[#34D399] font-mono">
                    24h à 48h
                  </div>
                </div>
              </div>

              {/* 3D Action Button */}
              <a
                href="#download"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-purple-600/40 hover:scale-105 transition-all font-mono uppercase tracking-wider relative z-10"
              >
                <span>Scanner mes {itemCount} articles</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}