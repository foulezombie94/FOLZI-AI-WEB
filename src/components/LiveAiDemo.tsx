"use client";

import React, { useState } from "react";
import { Sparkles, Scan, Copy, Check, ShieldCheck, ArrowRight, RefreshCw, Layers, CheckCircle2, TrendingUp, Info } from "lucide-react";
import { DEMO_ITEMS, DemoItem } from "@/data/content";

export default function LiveAiDemo() {
  const [selectedItem, setSelectedItem] = useState<DemoItem>(DEMO_ITEMS[0]);
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
      setTimeout(() => setScanStep(1), 400),
      setTimeout(() => setScanStep(2), 900),
      setTimeout(() => setScanStep(3), 1400),
      setTimeout(() => {
        setScanStep(4);
        setIsScanning(false);
      }, 1900),
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
    "Analyse de la coupe et des textures...",
    "Reconnaissance du modèle & état d'usure...",
    "Comparaison de 2 400+ ventes récentes...",
    "Rédaction optimisée pour l'algorithme..."
  ];

  return (
    <section id="demo" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute pointer-events-none w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500/10 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-extrabold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>Simulateur Interactif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            Testez l’IA en direct. <span className="gradient-purple-text">C’est bluffant.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Choisissez un article ci-dessous et observez comment VendMoi génère une annonce complète et son prix idéal en quelques secondes.
          </p>
        </div>

        {/* 3D Item Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          {DEMO_ITEMS.map((item) => {
            const isSelected = selectedItem.id === item.id && !isScanning;
            return (
              <button
                key={item.id}
                onClick={() => startScan(item)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-black text-sm transition-all ${
                  isSelected
                    ? "btn-pill-3d-active bg-brand-500 text-white"
                    : "btn-pill-3d bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
              >
                <img
                  src={item.photoUrl}
                  alt={item.name}
                  className="w-7 h-7 rounded-lg object-cover"
                />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Demo Terminal */}
        <div className="max-w-5xl mx-auto rounded-[36px] bg-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-brand-950/20 border border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Photo & Scanner Simulation */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <img
                  src={selectedItem.photoUrl}
                  alt={selectedItem.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isScanning ? "scale-105 filter brightness-90" : "scale-100"
                  }`}
                />

                {/* Laser animation when scanning */}
                {isScanning && (
                  <>
                    <div className="laser-line animate-laser-scan z-20" />
                    <div className="absolute inset-0 bg-brand-500/20 backdrop-blur-[1px] z-10" />
                  </>
                )}

                {/* Status Overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-black text-brand-300">
                    <Scan className="w-3.5 h-3.5" />
                    {isScanning ? "Analyse en cours..." : "Scan terminé"}
                  </span>
                </div>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="px-3.5 py-1.5 rounded-xl bg-brand-500 text-white font-mono font-black text-sm shadow-lg">
                    {selectedItem.estimatedPrice} € conseillé
                  </div>
                </div>
              </div>

              {/* 3D Action Trigger Button */}
              <button
                onClick={() => startScan(selectedItem)}
                disabled={isScanning}
                className="btn-dark-3d w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-900 text-white text-xs font-extrabold disabled:opacity-50 border border-slate-800"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? "animate-spin" : ""}`} />
                <span>Relancer l’analyse IA</span>
              </button>

            </div>

            {/* Right: Live Generated Output */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Platform Switcher & Copy 3D Button */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActivePlatform("vinted")}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                      activePlatform === "vinted"
                        ? "btn-vinted-3d bg-vinted text-white"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    Format Vinted
                  </button>
                  <button
                    onClick={() => setActivePlatform("leboncoin")}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                      activePlatform === "leboncoin"
                        ? "btn-leboncoin-3d bg-leboncoin text-white"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                    }`}
                  >
                    Format Leboncoin
                  </button>
                </div>

                {/* 3D Copy Button */}
                <button
                  onClick={copyToClipboard}
                  disabled={isScanning}
                  className="btn-3d inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-white text-xs font-black disabled:opacity-50"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300 stroke-[3]" />
                      <span>Annonce copiée !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copier l’annonce</span>
                    </>
                  )}
                </button>
              </div>

              {/* Progress Steps when scanning */}
              {isScanning ? (
                <div className="space-y-4 py-8">
                  <div className="flex items-center gap-3 text-brand-300 font-extrabold text-sm">
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span>{stepsLabels[Math.min(scanStep, stepsLabels.length - 1)]}</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-500 transition-all duration-300"
                      style={{ width: `${(scanStep / 4) * 100}%` }}
                    />
                  </div>
                </div>
              ) : (
                /* Generated Content Card */
                <div className="space-y-5">
                  
                  {/* Generated Title */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] uppercase font-mono font-bold text-slate-400 tracking-wider flex items-center justify-between">
                      <span>Titre optimisé</span>
                      <span className="text-emerald-400 font-mono font-bold">Score SEO : 99/100</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-extrabold text-white text-base font-sans">
                      {activePlatform === "vinted" ? selectedItem.vintedTitle : selectedItem.leboncoinTitle}
                    </div>
                  </div>

                  {/* Generated Description */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] uppercase font-mono font-bold text-slate-400 tracking-wider">
                      Description persuasive
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-line font-normal">
                      {activePlatform === "vinted" ? selectedItem.vintedDescription : selectedItem.leboncoinDescription}
                    </div>
                  </div>

                  {/* Pricing and Keywords Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Price Advice */}
                    <div className="p-3.5 rounded-xl bg-brand-500/15 border border-brand-500/30 space-y-1">
                      <div className="text-[11px] font-bold text-brand-300 uppercase font-mono">
                        Estimation Marché
                      </div>
                      <div className="text-lg font-black text-white font-mono flex items-center gap-2">
                        {selectedItem.estimatedPrice} €
                        <span className="text-xs font-medium text-slate-300">
                          (Fourchette : {selectedItem.marketRange})
                        </span>
                      </div>
                    </div>

                    {/* Quality & Ban-Check */}
                    <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 space-y-1">
                      <div className="text-[11px] font-bold text-emerald-400 uppercase flex items-center gap-1 font-mono">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Conformité CGU
                      </div>
                      <div className="text-xs font-bold text-slate-200">
                        0 mot interdit détecté · 100% sûr
                      </div>
                    </div>

                  </div>

                  {/* Keywords (Tags) */}
                  <div className="space-y-2">
                    <div className="text-[11px] uppercase font-mono font-bold text-slate-400 tracking-wider">
                      Mots-clés stratégiques générés
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-brand-300 text-xs font-mono font-semibold"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pro Tip */}
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/80 text-xs text-slate-300 border border-slate-800">
                    <Info className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span><strong>Conseil Vendeur :</strong> {selectedItem.tips}</span>
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