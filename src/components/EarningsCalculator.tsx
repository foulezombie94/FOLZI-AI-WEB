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
    <section id="calculator" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[40px] bg-gradient-to-br from-brand-50/80 via-white to-purple-50/60 border-2 border-brand-100 p-8 sm:p-12 shadow-xl shadow-brand-500/5 relative">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/70 text-brand-700 font-extrabold text-xs uppercase tracking-wider font-mono">
              <Calculator className="w-4 h-4 text-brand-600" />
              <span>Calculateur de Dressing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight">
              Combien d’argent dort dans votre placard ?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Ajustez le curseur et découvrez combien vous pouvez encaisser en quelques jours grâce au scanner IA de VendMoi.
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls (Left) */}
            <div className="lg:col-span-7 space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
              
              {/* Type of items 3D tabs */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-500 font-mono">
                  Type de vêtements / objets :
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setItemType("standard")}
                    className={`py-3 px-3 rounded-2xl text-xs font-black transition-all ${
                      itemType === "standard"
                        ? "btn-pill-3d-active bg-brand-500 text-white"
                        : "btn-pill-3d bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    Classique
                  </button>
                  <button
                    onClick={() => setItemType("vintage")}
                    className={`py-3 px-3 rounded-2xl text-xs font-black transition-all ${
                      itemType === "vintage"
                        ? "btn-pill-3d-active bg-brand-500 text-white"
                        : "btn-pill-3d bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    Vintage
                  </button>
                  <button
                    onClick={() => setItemType("premium")}
                    className={`py-3 px-3 rounded-2xl text-xs font-black transition-all ${
                      itemType === "premium"
                        ? "btn-pill-3d-active bg-brand-500 text-white"
                        : "btn-pill-3d bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    Sneakers / Luxe
                  </button>
                </div>
              </div>

              {/* Slider for count */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500 font-mono">
                    Articles non portés :
                  </label>
                  <span className="px-3.5 py-1 rounded-full bg-brand-50 text-brand-600 font-mono font-black text-sm border border-brand-200">
                    {itemCount} articles
                  </span>
                </div>

                <input
                  type="range"
                  min="2"
                  max="40"
                  step="1"
                  value={itemCount}
                  onChange={(e) => setItemCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[11px] font-bold text-slate-400 font-mono">
                  <span>2 articles</span>
                  <span>20 articles</span>
                  <span>40+ articles</span>
                </div>
              </div>

              {/* Sub-benefits checklist */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 text-xs text-slate-600 font-bold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Vente 3x plus rapide</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Prix optimisé sans perte</span>
                </div>
              </div>

            </div>

            {/* Big Results Card (Right) */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-950 text-white p-8 space-y-6 shadow-2xl shadow-brand-950/25 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2">
                <div className="text-xs font-black text-brand-300 uppercase tracking-wider font-mono">
                  Gain Potentiel Estimé
                </div>
                <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
                  {totalEarnings} €
                </div>
                <p className="text-xs text-slate-300 font-medium">
                  directement sur votre compte bancaire
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-4 border-y border-slate-800 text-left">
                <div className="space-y-0.5">
                  <div className="text-[11px] text-slate-400 font-bold flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-brand-400" />
                    Temps gagné
                  </div>
                  <div className="text-sm font-black text-slate-200 font-mono">
                    ~{timeSavedHours}h{timeSavedMinutes > 0 ? timeSavedMinutes : ""}
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-[11px] text-slate-400 font-bold flex items-center gap-1 font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Délai moyen
                  </div>
                  <div className="text-sm font-black text-emerald-400 font-mono">
                    24h à 48h
                  </div>
                </div>
              </div>

              {/* 3D Action Button */}
              <a
                href="#download"
                className="btn-3d w-full py-4 rounded-2xl bg-brand-500 text-white font-black text-sm flex items-center justify-center gap-2"
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