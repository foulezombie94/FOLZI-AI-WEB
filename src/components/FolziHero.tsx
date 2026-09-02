"use client";

import React, { useState } from "react";
import { Sparkles, Download, ArrowRight, CheckCircle2, ChevronDown, Menu, X, Star, ShieldCheck, Zap } from "lucide-react";

/* Real Vector SVG Flags */
function FranceFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 600" className={`${className} rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-black/10`}>
      <rect width="300" height="600" fill="#002654" />
      <rect x="300" width="300" height="600" fill="#FFFFFF" />
      <rect x="600" width="300" height="600" fill="#ED2939" />
    </svg>
  );
}

function UKFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={`${className} rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-black/10`}>
      <clipPath id="uk-clip-hero">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <g clipPath="url(#uk-clip-hero)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

function SpainFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 750 500" className={`${className} rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-black/10`}>
      <rect width="750" height="500" fill="#AA151B" />
      <rect y="125" width="750" height="250" fill="#F1BF00" />
      <circle cx="200" cy="250" r="40" fill="#AA151B" opacity="0.8" />
    </svg>
  );
}

function LaurelSmall({ className = "w-8 h-12 fill-[#A88BFF]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 64" className={className}>
      <g transform="matrix(1,0,0,1,-1.16256,-0.913655)">
        <path d="M6.696,34.229C3.833,34.228 1.924,31.349 1.163,29.746C2.43,29.741 4.564,30.025 6.114,31.094C5.99,30.144 5.91,29.187 5.87,28.229C3,26.983 2.706,23.269 2.83,21.408C3.727,21.907 5.027,22.851 5.93,24.09C5.986,23.267 6.066,22.449 6.168,21.639C3.385,20.386 3.047,16.751 3.142,14.913C4.204,15.484 5.832,16.66 6.725,18.219C6.898,17.351 7.092,16.497 7.302,15.662C4.823,13.946 5.095,10.343 5.492,8.559C6.379,9.249 7.661,10.537 8.334,12.073C8.741,10.815 9.175,9.624 9.617,8.518C8.969,5.189 11.789,2.226 13.448,0.914C13.927,2.987 14.2,7.171 11.694,9.278C11.267,10.342 10.847,11.488 10.453,12.698C11.823,11.731 13.575,11.334 14.692,11.207C14.099,12.955 12.333,16.243 9.407,16.345C9.263,16.923 9.128,17.51 9.003,18.104C10.337,17.114 12.185,16.855 13.296,16.832C12.658,18.263 10.94,20.868 8.502,20.882C8.361,21.83 8.249,22.789 8.172,23.756C9.286,22.47 11.105,21.837 12.216,21.594C11.853,23.172 10.602,26.2 8.052,26.533C8.051,26.704 8.052,26.875 8.053,27.046C8.06,27.816 8.093,28.585 8.155,29.353C9.015,27.674 10.745,26.47 11.858,25.876C11.949,27.768 11.488,31.618 8.618,32.686C8.815,33.664 9.069,34.631 9.384,35.58C9.921,33.895 11.222,32.469 12.114,31.69C12.609,33.442 13.014,37.075 10.772,38.853C11.219,39.704 11.729,40.532 12.308,41.333C12.362,39.321 13.628,37.395 14.497,36.37C15.246,38.028 16.185,41.557 14.237,43.65C14.893,44.351 15.563,44.996 16.245,45.592C15.807,43.314 16.797,40.833 17.543,39.476C18.752,41.151 20.596,44.864 18.906,47.638C19.696,48.172 20.497,48.654 21.308,49.093C20.406,46.951 20.868,44.313 21.321,42.83C22.847,44.22 25.41,47.473 24.327,50.534C25.518,51.035 26.719,51.469 27.922,51.864C26.246,49.756 26.046,46.623 26.157,44.832C28.271,45.996 32.142,49.072 31.384,52.914C31.656,52.992 31.927,53.069 32.198,53.145C33.112,53.403 34.021,53.658 34.923,53.918C32.938,51.674 32.704,48.147 32.826,46.163C35.116,47.424 39.338,50.787 38.361,54.973C43.012,56.521 47.33,58.599 50.844,62.708C51.241,63.172 51.187,63.871 50.722,64.268C50.258,64.665 49.56,64.61 49.163,64.146C45.97,60.413 42.044,58.514 37.822,57.107C36.703,61.298 31.689,62.366 29.137,62.528C29.913,60.569 31.881,57.198 34.842,56.19C33.77,55.881 32.686,55.582 31.596,55.274C31.319,55.196 31.041,55.117 30.763,55.037C28.937,58.666 24.133,58.687 21.761,58.348C22.697,56.925 24.646,54.708 27.031,53.895C26.229,53.628 25.427,53.344 24.63,53.035C22.493,56.058 18.2,55.323 16.148,54.649C17.166,53.57 19.154,51.974 21.317,51.585C20.505,51.182 19.7,50.744 18.904,50.261C16.465,52.959 12.325,51.808 10.368,50.938C11.55,49.915 13.862,48.428 16.175,48.395C15.221,47.66 14.285,46.846 13.373,45.937C10.498,47.099 7.651,44.746 6.408,43.37C7.464,43.048 9.213,42.747 10.83,43.056C10.151,42.16 9.551,41.232 9.025,40.276C5.93,40.323 4.115,37.108 3.447,35.377C4.462,35.45 6.019,35.75 7.352,36.477C7.099,35.737 6.882,34.987 6.696,34.229Z" />
      </g>
    </svg>
  );
}

export default function FolziHero() {
  const [lang, setLang] = useState<"fr" | "en" | "es">("fr");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Vinted IA", href: "/vinted" },
    { label: "Leboncoin IA", href: "/leboncoin" },
    { label: "Argus Prix", href: "/estimation-prix" },
    { label: "Guides Vendeurs", href: "/guides" },
    { label: "Tarifs", href: "#pricing" },
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#140C32] via-[#0B071B] to-[#06040A] pt-6 pb-20 overflow-hidden">
      
      {/* Background ambient radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#7C5CFC]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-[#34D399]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Capsule Header */}
        <header className="w-full py-4 px-4 sm:px-6 rounded-3xl bg-white/[0.04] border border-white/15 border-b-2 border-b-white/20 backdrop-blur-2xl flex items-center justify-between shadow-[0_8px_0_#0A0618] shadow-black/40 mb-14">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] flex items-center justify-center text-white shadow-[0_4px_0_#5234C7] group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tight">
              Folzi <span className="text-[#C2B3FF] font-mono text-sm uppercase">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full p-1.5 px-3 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Lang Switcher + 3D CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 shadow-inner">
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={`badge-3d px-2.5 py-1 text-xs font-bold ${
                  lang === "fr" ? "bg-white text-black shadow-[0_3px_0_#CBD5E1]" : "text-slate-300 hover:text-white bg-transparent shadow-none"
                }`}
              >
                <FranceFlag className="w-3.5 h-2.5" />
                <span>FR</span>
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`badge-3d px-2.5 py-1 text-xs font-bold ${
                  lang === "en" ? "bg-white text-black shadow-[0_3px_0_#CBD5E1]" : "text-slate-300 hover:text-white bg-transparent shadow-none"
                }`}
              >
                <UKFlag className="w-3.5 h-2.5" />
                <span>EN</span>
              </button>
            </div>

            <a
              href="/folzi-ai.apk"
              download="Folzi-AI.apk"
              className="btn-tactile-3d px-5 py-2.5 text-xs font-bold tracking-wider uppercase font-mono"
            >
              <span>Essayer maintenant</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white badge-3d"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mb-8 p-6 rounded-3xl bg-[#0E0A21] border border-white/15 card-3d space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-base font-bold text-white hover:text-[#C2B3FF]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="/folzi-ai.apk"
                download="Folzi-AI.apk"
                className="btn-tactile-3d w-full py-3.5 text-sm font-bold uppercase font-mono"
              >
                <span>Télécharger l&apos;application (APK)</span>
              </a>
            </div>
          </div>
        )}

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-12">
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Appli pour booster vos ventes <span className="gradient-purple-text">Vinted & Leboncoin</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            La meilleure appli de scan visuel et de rédaction automatique sur smartphone pour vendre en 24h sans négocier.
          </p>

          {/* Big Tactile 3D Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/folzi-ai.apk"
              download="Folzi-AI.apk"
              className="btn-tactile-3d w-full sm:w-auto px-10 py-4 text-base font-black tracking-wide uppercase font-mono"
            >
              <span>Essayer maintenant (APK Gratuit)</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            <a
              href="#scanner"
              className="btn-tactile-dark w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wide uppercase font-mono"
            >
              <span>Tester le simulateur en direct</span>
            </a>
          </div>

        </div>

        {/* Triple Phone App Showcase (with High-Definition 3D Tactile Frame) */}
        <div id="app-showcase" className="mt-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Phone 1: AI Vision Scan */}
            <div className="card-3d-phone rounded-[36px] bg-[#0E0A21]/95 border-2 border-white/15 p-6 relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-[11px] font-mono font-bold text-[#A88BFF] uppercase">1. Scan IA Vision</span>
                <span className="badge-3d px-2.5 py-0.5 rounded-full bg-[#34D399]/20 text-[#34D399] border border-[#34D399]/30 text-[10px] font-mono font-bold shadow-[0_2px_0_rgba(52,211,153,0.3)]">1,8 sec</span>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-4 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80"
                  alt="Veste en cuir vintage scannée par IA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-left space-y-1 shadow-[0_4px_0_rgba(0,0,0,0.5)]">
                  <div className="text-xs font-bold text-white">Veste Perfecto Cuir 90s</div>
                  <div className="text-[10px] text-[#34D399] font-mono">100% Cuir Véritable · Très bon état</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 text-center font-medium">
                Détection automatique de la marque, coupe, matière et état d&apos;usure.
              </p>
            </div>

            {/* Phone 2: Instant SEO Copywriting */}
            <div className="card-3d-featured rounded-[36px] p-6 relative overflow-hidden group md:-translate-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-[11px] font-mono font-bold text-[#D4C9FF] uppercase">2. Rédaction Virale</span>
                <span className="badge-3d px-2.5 py-0.5 rounded-full bg-[#7C5CFC]/40 text-white border border-white/30 text-[10px] font-mono font-bold shadow-[0_2px_0_#5234C7]">1-Clic</span>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black/60 border border-white/15 mb-4 p-4 flex flex-col justify-between text-left text-xs shadow-inner">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-[#A88BFF]">TITRE OPTIMISÉ SEO :</div>
                  <div className="font-bold text-white text-xs leading-snug">Veste Perfecto Cuir Vintage Boxy M Noir - Pièce Authentique 90s</div>
                  <div className="text-[10px] font-mono font-bold text-[#A88BFF] pt-1">DESCRIPTION :</div>
                  <div className="text-[11px] text-slate-300 leading-relaxed italic bg-white/5 p-2 rounded-lg border border-white/10">
                    &ldquo;Superbe perfecto en cuir lourd. Fermetures YKK d&apos;origine, doublure satinée. Envoi sous 24h.#vintage #leather #y2k&rdquo;
                  </div>
                </div>
                <div className="w-full py-2.5 rounded-xl bg-[#7C5CFC] text-white text-center font-mono font-bold text-[11px] shadow-[0_4px_0_#5234C7]">
                  ✓ Prêt à coller sur Vinted
                </div>
              </div>
              <p className="text-xs text-white text-center font-bold">
                Titres persuasifs et hashtags algorithmiques pour maximiser les vues.
              </p>
            </div>

            {/* Phone 3: Dynamic Price Valuation */}
            <div className="card-3d-phone rounded-[36px] bg-[#0E0A21]/95 border-2 border-white/15 p-6 relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-[11px] font-mono font-bold text-[#34D399] uppercase">3. Argus & Vente Express</span>
                <span className="badge-3d px-2.5 py-0.5 rounded-full bg-[#34D399]/20 text-[#34D399] border border-[#34D399]/30 text-[10px] font-mono font-bold shadow-[0_2px_0_rgba(52,211,153,0.3)]">24h à 48h</span>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-4 p-5 flex flex-col justify-between text-center shadow-inner">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">Estimation Argus Réel</span>
                  <div className="text-4xl font-black font-mono text-white pt-1">68,00 €</div>
                  <span className="text-[11px] text-[#34D399] font-bold font-mono">Fourchette : 62 € - 74 €</span>
                </div>
                
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left space-y-1.5 text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Ventes comparables :</span>
                    <span className="font-bold text-white font-mono">142 articles</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Délai estimé :</span>
                    <span className="font-bold text-[#34D399] font-mono">&lt; 36 heures</span>
                  </div>
                </div>

                <div className="w-full py-2.5 rounded-xl bg-[#34D399] text-black text-center font-mono font-bold text-[11px] shadow-[0_4px_0_#059669]">
                  Vendu en 24h sans négocier
                </div>
              </div>
              <p className="text-xs text-slate-300 text-center font-medium">
                Le juste prix basé sur les données réelles du marché européen.
              </p>
            </div>

          </div>
        </div>

        {/* Social Proof Metric Laurels (3D Tactile Cards) */}
        <div className="py-10 border-y border-white/10 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            {/* Stat 1 */}
            <div className="card-3d p-6 flex flex-col items-center text-center group">
              <div className="flex items-center gap-2">
                <LaurelSmall />
                <span className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-[#A88BFF] transition-colors">
                  15 000+
                </span>
                <LaurelSmall className="w-8 h-12 fill-[#A88BFF] transform -scale-x-100" />
              </div>
              <span className="text-xs text-slate-300 font-medium mt-1">Vendeurs satisfaits</span>
            </div>

            {/* Stat 2 */}
            <div className="card-3d p-6 flex flex-col items-center text-center group">
              <div className="flex items-center gap-2">
                <LaurelSmall />
                <span className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-[#A88BFF] transition-colors">
                  4,9 ★
                </span>
                <LaurelSmall className="w-8 h-12 fill-[#A88BFF] transform -scale-x-100" />
              </div>
              <span className="text-xs text-slate-300 font-medium mt-1">Note de l&apos;App Store & Play</span>
            </div>

            {/* Stat 3 */}
            <div className="card-3d p-6 flex flex-col items-center text-center group">
              <div className="flex items-center gap-2">
                <LaurelSmall />
                <span className="text-2xl sm:text-3xl font-black font-mono text-white group-hover:text-[#A88BFF] transition-colors">
                  250K+
                </span>
                <LaurelSmall className="w-8 h-12 fill-[#A88BFF] transform -scale-x-100" />
              </div>
              <span className="text-xs text-slate-300 font-medium mt-1">Annonces optimisées</span>
            </div>

          </div>
        </div>

        {/* Press / Platforms 3D Tactile Badges */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Compatible avec vos plateformes préférées :
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="badge-3d px-5 py-2.5 rounded-2xl bg-[#09B1BA]/15 border border-[#09B1BA]/40 border-b-2 border-b-[#09B1BA] text-white font-bold text-xs sm:text-sm shadow-[0_4px_0_rgba(9,177,186,0.35)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#09B1BA] shadow-[0_0_8px_#09B1BA]" />
              <span>Vinted</span>
            </div>
            <div className="badge-3d px-5 py-2.5 rounded-2xl bg-[#F56B2A]/15 border border-[#F56B2A]/40 border-b-2 border-b-[#F56B2A] text-white font-bold text-xs sm:text-sm shadow-[0_4px_0_rgba(245,107,42,0.35)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F56B2A] shadow-[0_0_8px_#F56B2A]" />
              <span>Leboncoin</span>
            </div>
            <div className="badge-3d px-5 py-2.5 rounded-2xl bg-[#00C49F]/15 border border-[#00C49F]/40 border-b-2 border-b-[#00C49F] text-white font-bold text-xs sm:text-sm shadow-[0_4px_0_rgba(0,196,159,0.35)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C49F] shadow-[0_0_8px_#00C49F]" />
              <span>Wallapop</span>
            </div>
            <div className="badge-3d px-5 py-2.5 rounded-2xl bg-[#FF2A6D]/15 border border-[#FF2A6D]/40 border-b-2 border-b-[#FF2A6D] text-white font-bold text-xs sm:text-sm shadow-[0_4px_0_rgba(255,42,109,0.35)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A6D] shadow-[0_0_8px_#FF2A6D]" />
              <span>Vestiaire Collective</span>
            </div>
            <div className="badge-3d px-5 py-2.5 rounded-2xl bg-[#0064D2]/15 border border-[#0064D2]/40 border-b-2 border-b-[#0064D2] text-white font-bold text-xs sm:text-sm shadow-[0_4px_0_rgba(0,100,210,0.35)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0064D2] shadow-[0_0_8px_#0064D2]" />
              <span>eBay</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
