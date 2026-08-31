"use client";

import React, { useState } from "react";
import { Sparkles, Scan, Copy, Check, ShieldCheck, RefreshCw, Hash, Tag, Flame, Lightbulb, ArrowRight } from "lucide-react";
import { DEMO_ITEMS, DemoItem } from "@/data/content";

export default function LiveAiDemo() {
  const [selectedItem, setSelectedItem] = useState<DemoItem>(DEMO_ITEMS[1] || DEMO_ITEMS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(4);
  const [activePlatform, setActivePlatform] = useState<"vinted" | "leboncoin">("vinted");
  const [copied, setCopied] = useState(false);

  const startScan = (item: DemoItem) => {
    setSelectedItem(item);
    setIsScanning(true);
    setScanStep(0);
    setCopied(false);

    const steps = [
      setTimeout(() => setScanStep(1), 350),
      setTimeout(() => setScanStep(2), 800),
      setTimeout(() => setScanStep(3), 1300),
      setTimeout(() => {
        setScanStep(4);
        setIsScanning(false);
      }, 1800),
    ];

    return () => steps.forEach(clearTimeout);
  };

  const copyToClipboard = () => {
    const title = activePlatform === "vinted" ? selectedItem.vintedTitle : selectedItem.leboncoinTitle;
    const desc = activePlatform === "vinted" ? selectedItem.vintedDescription : selectedItem.leboncoinDescription;
    const hashtags = activePlatform === "vinted" ? "\n\n" + selectedItem.keywords.map(k => `#${k}`).join(" ") : "";
    const text = `${title}\n\nPrix : ${selectedItem.estimatedPrice} €\n\n${desc}${hashtags}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const stepsLabels = [
    "Analyse de la coupe, marque et texture...",
    "Reconnaissance de l'état d'usure & matière...",
    "Comparaison de 2 400+ ventes réelles récentes...",
    "Génération du titre SEO viral et des hashtags..."
  ];

  return (
    <section id="scanner" className="py-24 bg-[#06040A] relative overflow-hidden border-t border-white/10 select-none">
      
      {/* Background Ambient Glows */}
      <div className="absolute pointer-events-none w-[650px] h-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7C5CFC]/15 rounded-full blur-[160px] -z-0" />
      <div className="absolute pointer-events-none w-[450px] h-[450px] top-1/4 right-10 bg-[#09B1BA]/10 rounded-full blur-[140px] -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Testez l’IA sur vos articles. <span className="gradient-purple-text">Résultat en 1,8 seconde.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Cliquez sur un article ci-dessous pour voir la vitesse à laquelle Folzi AI analyse la photo et génère une annonce complète prête à publier.
          </p>
        </div>

        {/* Item Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {DEMO_ITEMS.map((item) => {
            const isSelected = selectedItem.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => startScan(item)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                  isSelected
                    ? "bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white border-white/40 shadow-lg shadow-purple-600/30 scale-105"
                    : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border-white/10"
                }`}
              >
                <img
                  src={item.thumbnailUrl || item.photoUrl}
                  alt={item.name}
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7 rounded-lg object-cover border border-white/20"
                />
                <span>{item.name}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />}
              </button>
            );
          })}
        </div>

        {/* Main Terminal Card */}
        <div className="max-w-5xl mx-auto rounded-[32px] bg-[#0C081D]/90 border border-white/15 p-5 sm:p-8 lg:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: AI Vision Scanner HUD */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
                
                {/* Photo with subtle zoom on scan */}
                <img
                  src={selectedItem.photoUrl}
                  alt={selectedItem.name}
                  width={500}
                  height={500}
                  decoding="async"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isScanning ? "scale-105 brightness-90" : "scale-100"
                  }`}
                />

                {/* Laser Scanning Animation */}
                {isScanning && (
                  <>
                    <div className="laser-line animate-laser-scan z-20" />
                    <div className="absolute inset-0 bg-brand-500/20 backdrop-blur-[0.5px] z-10" />
                  </>
                )}

                {/* HUD Viewfinder Reticle Brackets */}
                <div className="absolute inset-5 pointer-events-none z-15">
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#A88BFF]" />
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#A88BFF]" />
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#A88BFF]" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#A88BFF]" />
                </div>

                {/* Top HUD Badge: Live AI Vision Status */}
                <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white shadow-lg">
                    <span className={`w-2 h-2 rounded-full ${isScanning ? "bg-amber-400 animate-ping" : "bg-[#34D399] shadow-[0_0_8px_#34D399]"}`} />
                    <span className="font-mono">{isScanning ? "Scan IA en cours..." : "Scan IA terminé"}</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                    99.2%
                  </div>
                </div>

                {/* Bottom HUD Badge: Price Estimate */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Tag className="w-3.5 h-3.5 text-[#A88BFF]" />
                    <span>{selectedItem.brand}</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-mono font-black text-xs shadow-lg shadow-purple-600/40 border border-white/20">
                    {selectedItem.estimatedPrice} € conseillé
                  </div>
                </div>

              </div>

              {/* Action Button: Relaunch Scan */}
              <button
                type="button"
                onClick={() => startScan(selectedItem)}
                disabled={isScanning}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-bold transition-all border border-white/15 active:scale-98 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 text-[#A88BFF] ${isScanning ? "animate-spin" : ""}`} />
                <span>{isScanning ? "Analyse en cours..." : "Relancer l’analyse IA"}</span>
              </button>

            </div>

            {/* Right Column: Generated Marketplace Listing */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              
              {/* Header Switcher & Copy CTA */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                
                {/* Platform Tabs */}
                <div className="flex items-center gap-2 p-1 rounded-xl bg-black/40 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setActivePlatform("vinted")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activePlatform === "vinted"
                        ? "bg-[#09B1BA] text-white shadow-md shadow-teal-500/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Hash className="w-3.5 h-3.5" />
                    <span>Vinted</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePlatform("leboncoin")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activePlatform === "leboncoin"
                        ? "bg-[#F56B2A] text-white shadow-md shadow-orange-500/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>Leboncoin</span>
                  </button>
                </div>

                {/* High Contrast Copy Button */}
                <button
                  type="button"
                  onClick={copyToClipboard}
                  disabled={isScanning}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-md shadow-purple-600/30 border border-white/20 disabled:opacity-50"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />
                      <span>Copié dans le presse-papier !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copier l’annonce</span>
                    </>
                  )}
                </button>

              </div>

              {/* Live Scan Progression State */}
              {isScanning ? (
                <div className="py-12 space-y-4 text-center my-auto">
                  <div className="inline-flex items-center gap-2 text-[#D4C9FF] font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-[#A88BFF] animate-spin" />
                    <span>{stepsLabels[Math.min(scanStep, stepsLabels.length - 1)]}</span>
                  </div>
                  <div className="w-full max-w-md mx-auto h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#7C5CFC] to-[#34D399] transition-all duration-300"
                      style={{ width: `${(scanStep / 4) * 100}%` }}
                    />
                  </div>
                </div>
              ) : (
                /* Generated Content Blocks */
                <div className="space-y-4">
                  
                  {/* Title Block */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-400">
                      <span>TITRE OPTIMISÉ</span>
                      <span className="text-[#34D399] font-mono">SCORE SEO : 99/100</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 font-bold text-white text-sm sm:text-base leading-snug">
                      {activePlatform === "vinted" ? selectedItem.vintedTitle : selectedItem.leboncoinTitle}
                    </div>
                  </div>

                  {/* Description Block */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono font-bold text-slate-400">
                      DESCRIPTION PERSUASIVE
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {activePlatform === "vinted" ? selectedItem.vintedDescription : selectedItem.leboncoinDescription}
                    </div>
                  </div>

                  {/* 2 Stats Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    <div className="p-3 rounded-xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/25 space-y-0.5">
                      <div className="text-[10px] font-bold text-[#D4C9FF] uppercase font-mono">
                        Estimation Marché
                      </div>
                      <div className="text-base font-black text-white font-mono flex items-center gap-2">
                        {selectedItem.estimatedPrice} €
                        <span className="text-[11px] font-normal text-slate-400">
                          (Fourchette : {selectedItem.marketRange})
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#34D399]/10 border border-[#34D399]/25 space-y-0.5">
                      <div className="text-[10px] font-bold text-[#6EE7B7] uppercase font-mono flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                        <span>Conformité CGU</span>
                      </div>
                      <div className="text-xs font-bold text-slate-200">
                        0 mot interdit détecté · 100% sûr
                      </div>
                    </div>

                  </div>

                  {/* Strategic Hashtags / Tags */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono font-bold text-slate-400">
                      MOTS-CLÉS STRATÉGIQUES GÉNÉRÉS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.keywords.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[#C2B3FF] text-xs font-mono font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pro Tip Card */}
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="text-amber-300">Conseil Vendeur :</strong> {selectedItem.tips}
                    </p>
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
