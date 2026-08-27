"use client";

import React from "react";
import { Sparkles, ArrowRight, Camera, CheckCircle2, ShieldCheck, Download, Star } from "lucide-react";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

export default function HeroSection() {
  const navLinks = [
    { label: "Simulateur IA", href: "#demo" },
    { label: "Comment ça marche", href: "#about" },
    { label: "Fonctions IA", href: "#services" },
    { label: "Ventes Réelles", href: "#projects" },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0E0924] select-none py-6 sm:py-8">
      
      {/* Ambient Violet Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#7C5CFC]/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#A88BFF]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Top Navbar */}
      <FadeIn delay={0} y={-20} duration={0.7} className="w-full z-20">
        <header className="w-full px-6 md:px-10">
          <nav className="w-full flex items-center justify-between">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#5B2FFF] flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-white font-black text-xl tracking-tight uppercase">
                VendMoi <span className="text-[#C2B3FF] font-light text-xs lowercase">ia studio</span>
              </span>
            </a>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white font-medium uppercase tracking-wider text-sm lg:text-base hover:text-[#C2B3FF] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Quick Download CTA */}
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#0E0924] font-black text-xs uppercase tracking-wider hover:bg-[#EAE5FF] hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5 text-[#7C5CFC]" />
              <span>Installer</span>
            </a>
          </nav>
        </header>
      </FadeIn>

      {/* Center Main Content (Without Phone) */}
      <div className="w-full max-w-5xl mx-auto px-4 text-center my-auto py-12 sm:py-16 relative z-10 flex flex-col items-center gap-6">
        
        {/* Rating / Badge */}
        <FadeIn delay={0.1} y={20} duration={0.7}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#D4C9FF] text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-black font-mono">4.9/5</span>
            <span className="text-white/40">·</span>
            <span>App n°1 Revente Vinted & Leboncoin</span>
          </div>
        </FadeIn>

        {/* Massive Hero Heading */}
        <FadeIn delay={0.2} y={30} duration={0.8} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.92] text-[13vw] sm:text-[14vw] md:text-[12vw] lg:text-[140px] drop-shadow-2xl">
            Vends avec l&apos;ia
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.3} y={20} duration={0.7}>
          <p className="text-base sm:text-lg md:text-xl text-[#D4C9FF] max-w-2xl mx-auto font-normal leading-relaxed">
            Prenez 1 photo. Notre intelligence artificielle rédige l’annonce parfaite, trouve les mots-clés tendances et estime le juste prix pour vendre en moins de 24h.
          </p>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.4} y={20} duration={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <ContactButton label="Télécharger l'App Gratuitement" />
            
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 rounded-full border-2 border-white/60 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base hover:bg-white/15 hover:border-white hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#A88BFF]" />
              <span>Tester le simulateur IA</span>
            </a>
          </div>
        </FadeIn>

        {/* Reassurance points */}
        <FadeIn delay={0.5} y={15} duration={0.7}>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-[#C2B3FF]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>4 crédits offerts à l’inscription</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sans carte bancaire</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#A88BFF]" />
              <span>100% conforme CGU Vinted & Leboncoin</span>
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 flex items-end justify-between z-20">
        <FadeIn delay={0.6} y={20} duration={0.7}>
          <p
            style={{ fontSize: "clamp(0.75rem, 1.2vw, 1.2rem)" }}
            className="text-[#EAE5FF] font-light uppercase tracking-wide leading-snug max-w-[200px] sm:max-w-[280px]"
          >
            Le studio IA qui transforme 1 photo en vente en 24h
          </p>
        </FadeIn>

        <FadeIn delay={0.7} y={20} duration={0.7}>
          <div className="text-right text-xs text-[#C2B3FF] font-mono">
            +15 000 annonces optimisées
          </div>
        </FadeIn>
      </div>

    </section>
  );
}