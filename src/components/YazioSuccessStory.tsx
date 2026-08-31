"use client";

import React from "react";
import { Sparkles, ArrowRight, Quote, CheckCircle2 } from "lucide-react";

export default function YazioSuccessStory() {
  return (
    <section id="success-story" className="py-24 bg-[#06040A] relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[350px] bg-[#7C5CFC]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#34D399]/20 border border-[#34D399]/40 text-[#34D399] font-bold text-xs uppercase tracking-wider font-mono">
            <Sparkles className="w-4 h-4 text-[#34D399]" />
            <span>Histoire de Réussite Vendeur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Sarah a encaissé <span className="text-[#34D399]">+1 840 €</span> en 14 jours avec Folzi AI
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Découvrez comment une vendeuse a désencombré son dressing et rentabilisé chaque pièce sans stress.
          </p>
        </div>

        {/* Split Before / After Card (Exact YAZIO pattern) */}
        <div className="rounded-[36px] bg-[#0E0A21]/90 border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Split Photos with Giant Green Badge */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/15 shadow-xl flex gap-1.5 p-1.5 bg-black/40">
              
              {/* Photo Before */}
              <div className="relative w-1/2 h-full rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&auto=format&fit=crop&q=80"
                  alt="Dressing avant Folzi AI"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[10px] font-bold font-mono text-rose-300 uppercase border border-rose-500/30">
                  Avant
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-medium text-slate-300 bg-black/60 backdrop-blur-sm p-2 rounded-lg">
                  Placard encombré (45 articles)
                </div>
              </div>

              {/* Photo After */}
              <div className="relative w-1/2 h-full rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=700&auto=format&fit=crop&q=80"
                  alt="Dressing après Folzi AI"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#34D399]/90 text-[10px] font-bold font-mono text-black uppercase shadow-md">
                  Après
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-medium text-[#D4C9FF] bg-black/60 backdrop-blur-sm p-2 rounded-lg">
                  100% vendu en 14 jours ⚡
                </div>
              </div>

              {/* Centered YAZIO Result Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-2xl bg-black/90 border-2 border-[#34D399] shadow-[0_0_25px_rgba(52,211,153,0.4)] text-center">
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#34D399] tracking-tight">
                  +1 840 €
                </span>
              </div>

            </div>
          </div>

          {/* Right: Testimonial & Quote Box */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 bg-white/[0.03] p-6 sm:p-8 rounded-2xl border border-white/10">
            <div className="space-y-4">
              <Quote className="w-10 h-10 text-[#A88BFF] opacity-60" />
              
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                &ldquo;À 32 ans, maman de deux enfants, je n&apos;avais jamais le temps de rédiger 40 annonces sur Vinted... Folzi AI a tout changé !&rdquo;
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                &ldquo;Je prenais une photo pendant ma pause café, et en 2 secondes, le titre avec les bons hashtags et le prix parfait étaient prêts. J&apos;ai tout vendu sans la moindre négociation pénible. C&apos;est le meilleur investissement de l&apos;année.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="font-bold text-white text-base flex items-center gap-1.5">
                  <span>Sarah D.</span>
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Vendeuse Vinted & Leboncoin (Lyon, France)
                </div>
              </div>

              <a
                href="/folzi-ai.apk"
                download="Folzi-AI.apk"
                className="btn-yazio-3d px-5 py-3 text-xs font-bold uppercase font-mono tracking-wider"
              >
                <span>Faire comme Sarah</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
