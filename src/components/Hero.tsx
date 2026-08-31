"use client";

import React from "react";
import { Sparkles, ArrowRight, Camera, CheckCircle2, ShieldCheck, Star, Tag, TrendingUp } from "lucide-react";
import { STATS } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 hero-curve-bg overflow-hidden">
      {/* Absolute Ambient Background Glows */}
      <div className="absolute pointer-events-none -top-24 -left-32 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-3xl -z-0" />
      <div className="absolute pointer-events-none top-1/3 -right-32 w-[600px] h-[600px] bg-brand-400/15 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Trust & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Rating & Category Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-brand-200/80 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-black text-ink font-mono">4.9 / 5</span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-bold text-brand-600">
                App n°1 Revente Vinted & Leboncoin
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.08]">
              Vendez votre dressing{" "}
              <span className="gradient-purple-text">3x plus vite</span>{" "}
              grâce à l’IA.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Prenez 1 photo. Notre intelligence artificielle rédige l’annonce parfaite, trouve les mots-clés tendances et estime le prix exact pour vendre en 24h.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#download"
                className="btn-3d w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-500 text-white font-black text-base"
              >
                <Camera className="w-5 h-5" />
                <span>Télécharger l’app gratuitement</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#demo"
                className="btn-secondary-3d w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white border border-slate-200 text-ink font-extrabold text-base"
              >
                <Sparkles className="w-5 h-5 text-brand-500" />
                <span>Tester le simulateur IA</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs font-bold text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>4 crédits offerts à l'inscription</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Sans carte bancaire</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                <span>Anti-bannissement 100% sûr</span>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup with Live Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/35 via-brand-400/25 to-purple-600/35 rounded-full blur-3xl opacity-75 transform scale-95 pointer-events-none" />

            {/* Phone Container */}
            <div className="relative w-full max-w-[330px] rounded-[48px] p-3.5 bg-slate-900 border-4 border-slate-800 shadow-2xl shadow-brand-900/25">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30" />

              {/* Phone Screen */}
              <div className="relative w-full aspect-[9/18.5] bg-slate-950 rounded-[38px] overflow-hidden flex flex-col justify-between text-white p-4">
                
                {/* Background Camera Feed Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80')`
                  }}
                >
                  <div className="absolute inset-0 bg-slate-950/30 backdrop-brightness-95" />
                </div>

                {/* Laser Scanning Animation */}
                <div className="laser-line animate-laser-scan z-20" />

                {/* Viewfinder Target */}
                <div className="absolute inset-x-7 top-16 bottom-36 border-2 border-brand-400/60 rounded-2xl z-10 pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-5 h-5 border-t-4 border-l-4 border-brand-400 rounded-tl-lg" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 border-t-4 border-r-4 border-brand-400 rounded-tr-lg" />
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-4 border-l-4 border-brand-400 rounded-bl-lg" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-4 border-r-4 border-brand-400 rounded-br-lg" />
                </div>

                {/* Top Status Header */}
                <div className="relative z-20 flex items-center justify-between pt-5 px-1">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                    <span>Scanner IA Actif</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-[10px] font-extrabold uppercase font-mono">
                    99.2% Précis
                  </div>
                </div>

                {/* Floating Bottom Detection Sheet */}
                <div className="relative z-20 space-y-2 pb-2">
                  <div className="glass-panel-dark rounded-2xl p-3.5 text-xs space-y-1.5 shadow-xl border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-sm text-white flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-brand-400" />
                        Carhartt WIP Vintage
                      </span>
                      <span className="text-[11px] font-black text-brand-300 bg-brand-500/40 px-2 py-0.5 rounded-full font-mono">
                        48 € conseillé
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight font-normal">
                      Veste workwear coton épais · Taille M · État impeccable
                    </p>
                  </div>

                  <div className="w-full py-3 rounded-xl bg-brand-500 flex items-center justify-center gap-2 text-white font-black text-xs shadow-md shadow-brand-500/50">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Annonce prête pour Vinted & Leboncoin</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Floating Live Metric Card */}
            <div className="absolute -bottom-4 right-0 sm:-right-4 glass-panel rounded-2xl p-4 shadow-xl border border-white flex items-center gap-3.5 z-30">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-black text-ink font-mono">+240% de clics</div>
                <div className="text-[11px] text-slate-500 font-semibold">Vendu en moins de 24h</div>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-10 border-t border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-brand-500 tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}