"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Sparkles, Download, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import LiveAiDemo from "@/components/LiveAiDemo";
import FeaturesGrid from "@/components/FeaturesGrid";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import MarketplaceTabs from "@/components/MarketplaceTabs";
import EarningsCalculator from "@/components/EarningsCalculator";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

type Language = "fr" | "en" | "es";

interface Translations {
  nav: {
    scanner: string;
    features: string;
    marketplaces: string;
    download: string;
    install: string;
  };
  headline: string;
  appStore: {
    downloadOn: string;
    appStore: string;
  };
  apk: {
    downloadFor: string;
    androidApk: string;
  };
  card1: {
    badge: string;
    time: string;
    title: string;
    desc: string;
    tag1: string;
    tag2: string;
    footer1: string;
    footer2: string;
  };
  card2: {
    badge: string;
    status: string;
    title: string;
    desc: string;
    tag1: string;
    tag2: string;
    footer1: string;
    footer2: string;
  };
  mobileCta: string;
}

const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      scanner: "Scanner IA",
      features: "Fonctionnalités",
      marketplaces: "Vinted & Leboncoin",
      download: "Télécharger",
      install: "Installer",
    },
    headline: "L’IA qui transforme vos photos en ventes sur Vinted & Leboncoin",
    appStore: {
      downloadOn: "Disponible dans l'",
      appStore: "App Store",
    },
    apk: {
      downloadFor: "Télécharger direct",
      androidApk: "Android (APK)",
    },
    card1: {
      badge: "Vision IA",
      time: "1.8s",
      title: "Reconnaissance Visuelle",
      desc: "Prenez 1 photo : l’IA identifie automatiquement la marque, la coupe, la matière et l’état du vêtement.",
      tag1: "Marque & Modèle",
      tag2: "Coupe & Taille",
      footer1: "Automatisé à 100%",
      footer2: "Zéro saisie manuelle",
    },
    card2: {
      badge: "Vinted & Leboncoin",
      status: "Prêt",
      title: "Rédaction & Estimation",
      desc: "Génération instantanée du titre optimisé SEO, de la description persuasive, des hashtags viraux et du prix conseillé.",
      tag1: "Titre Viral",
      tag2: "Argus du Prix",
      footer1: "4 crédits offerts",
      footer2: "Sans carte bancaire",
    },
    mobileCta: "Télécharger l'App (APK)",
  },
  en: {
    nav: {
      scanner: "AI Scanner",
      features: "Features",
      marketplaces: "Marketplaces AI",
      download: "Download",
      install: "Install",
    },
    headline: "The AI that turns your photos into instant sales on Vinted & Marketplaces",
    appStore: {
      downloadOn: "Download on the",
      appStore: "App Store",
    },
    apk: {
      downloadFor: "Direct Download",
      androidApk: "Android (APK)",
    },
    card1: {
      badge: "Computer Vision",
      time: "1.8s",
      title: "Visual Recognition",
      desc: "Snap 1 photo: AI instantly detects brand, cut, fabric, and item condition automatically.",
      tag1: "Brand & Model",
      tag2: "Cut & Fit",
      footer1: "100% Automated",
      footer2: "Zero manual typing",
    },
    card2: {
      badge: "Vinted & Resale",
      status: "Ready",
      title: "Copywriting & Valuation",
      desc: "Instant generation of SEO-optimized viral title, persuasive description, hashtags, and ideal listing price.",
      tag1: "Viral Title",
      tag2: "Price Valuation",
      footer1: "4 free credits",
      footer2: "No credit card needed",
    },
    mobileCta: "Download the App (APK)",
  },
  es: {
    nav: {
      scanner: "Escáner IA",
      features: "Funciones",
      marketplaces: "Vinted y Wallapop",
      download: "Descargar",
      install: "Instalar",
    },
    headline: "La IA que convierte tus fotos en ventas al instante en Vinted y Wallapop",
    appStore: {
      downloadOn: "Descargar en",
      appStore: "App Store",
    },
    apk: {
      downloadFor: "Descarga directa",
      androidApk: "Android (APK)",
    },
    card1: {
      badge: "Visión IA",
      time: "1.8s",
      title: "Reconocimiento Visual",
      desc: "Haz 1 foto: la IA identifica automáticamente la marca, el corte, el tejido y el estado de la prenda.",
      tag1: "Marca y Modelo",
      tag2: "Corte y Talla",
      footer1: "100% Automatizado",
      footer2: "Sin escritura manual",
    },
    card2: {
      badge: "Vinted y Wallapop",
      status: "Listo",
      title: "Redacción y Tasación",
      desc: "Generación inmediata del título SEO viral, descripción persuasiva, hashtags y precio recomendado.",
      tag1: "Título Viral",
      tag2: "Tasación de Precio",
      footer1: "4 créditos gratis",
      footer2: "Sin tarjeta bancaria",
    },
    mobileCta: "Descargar la App (APK)",
  },
};

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
      <clipPath id="uk-clip-nav">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <g clipPath="url(#uk-clip-nav)">
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

export default function Home() {
  const [lang, setLang] = useState<Language>("fr");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Vinted IA", href: "/vinted", hasDropdown: false },
    { label: "Leboncoin IA", href: "/leboncoin", hasDropdown: false },
    { label: "Argus Prix", href: "/estimation-prix", hasDropdown: false },
    { label: "Guides Vendeurs", href: "/guides", hasDropdown: false },
    { label: "Tarifs", href: "#pricing", hasDropdown: false },
  ];

  return (
    <main className="w-full min-h-screen bg-[#06040A] text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#06040A] select-none flex flex-col justify-between">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 900'%3E%3Crect fill='%2306040A' width='1600' height='900'/%3E%3C/svg%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4"
        />

        {/* Subtle Violet Ambient Highlights */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#7C5CFC]/20 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#9D7BFF]/15 rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Main Foreground Container */}
        <div className="relative z-10 flex flex-col min-h-screen w-full justify-between">
          
          {/* Navigation Top Bar */}
          <header className="w-full px-5 py-5 sm:px-8 sm:py-6 lg:px-12 flex items-center justify-between">
            
            {/* Brand Logo - Folzi AI */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] flex items-center justify-center text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 fill-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight transition-colors">
                Folzi <span className="font-light text-sm text-[#D4C9FF] uppercase font-mono">AI</span>
              </span>
            </a>

            {/* Desktop Navigation & Actions */}
            <div className="hidden md:flex items-center gap-3">
              
              {/* Glass Pill Nav Cluster */}
              <nav className="rounded-full bg-white/12 border border-white/25 px-2 py-1.5 backdrop-blur-xl flex items-center gap-1 shadow-lg shadow-black/10">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full px-4 py-1.5 text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-all inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-80" />}
                  </a>
                ))}
              </nav>

              {/* Direct 3-Flag Segmented Switcher (Instant 1-Click Translation) */}
              <div className="flex items-center gap-1 bg-white/12 border border-white/25 backdrop-blur-xl rounded-full p-1 shadow-lg shadow-black/10">
                <button
                  type="button"
                  onClick={() => setLang("fr")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === "fr"
                      ? "bg-white text-black shadow-md scale-105"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  title="Passer en Français"
                >
                  <FranceFlag className="w-4 h-3" />
                  <span>FR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === "en"
                      ? "bg-white text-black shadow-md scale-105"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  title="Switch to English"
                >
                  <UKFlag className="w-4 h-3" />
                  <span>EN</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                    lang === "es"
                      ? "bg-white text-black shadow-md scale-105"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  title="Cambiar a Español"
                >
                  <SpainFlag className="w-4 h-3" />
                  <span>ES</span>
                </button>
              </div>

              {/* Download Direct APK Button */}
              <a
                href="/folzi-ai.apk"
                download="Folzi-AI.apk"
                className="rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white px-5 py-2 text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-purple-600/30 border border-white/20 inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{t.nav.install}</span>
              </a>

            </div>

            {/* Mobile Actions: Flag Switcher & Hamburger Menu */}
            <div className="flex md:hidden items-center gap-2">
              <div className="flex items-center gap-0.5 bg-black/40 border border-white/20 backdrop-blur-md rounded-full p-0.5">
                <button
                  type="button"
                  onClick={() => setLang("fr")}
                  className={`p-1 rounded-full ${lang === "fr" ? "bg-white/25" : "opacity-60"}`}
                  aria-label="Français"
                >
                  <FranceFlag className="w-4 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`p-1 rounded-full ${lang === "en" ? "bg-white/25" : "opacity-60"}`}
                  aria-label="English"
                >
                  <UKFlag className="w-4 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`p-1 rounded-full ${lang === "es" ? "bg-white/25" : "opacity-60"}`}
                  aria-label="Español"
                >
                  <SpainFlag className="w-4 h-3" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </header>

          {/* Center Main Headline */}
          <div className="w-full px-6 sm:px-12 flex flex-col items-center justify-center text-center my-auto py-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] drop-shadow-2xl">
              {t.headline}
            </h1>
          </div>

          {/* Bottom Row */}
          <div className="w-full px-5 pb-8 sm:px-8 sm:pb-10 lg:px-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            
            {/* Left Column: Download Badges */}
            <div className="flex flex-col gap-3 w-full sm:w-auto items-center sm:items-start">
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                {/* 1. Android APK Direct Download Badge */}
                <a
                  href="/folzi-ai.apk"
                  download="Folzi-AI.apk"
                  className="rounded-[18px] bg-gradient-to-br from-[#7C5CFC]/90 via-[#5B2FFF]/90 to-[#4018D4]/90 backdrop-blur-xl border border-white/30 px-5 py-2.5 flex items-center gap-3.5 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(124,92,252,0.4)] group"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center border border-white/20 group-hover:bg-white/25 transition-colors">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-white/90 uppercase tracking-wider font-semibold font-mono">
                      {t.apk.downloadFor}
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                      <span>{t.apk.androidApk}</span>
                      <span className="text-[10px] bg-emerald-400 text-black px-1.5 py-0.2 rounded font-mono font-black uppercase">
                        Direct
                      </span>
                    </span>
                  </div>
                </a>

                {/* 2. Apple App Store Badge */}
                <a
                  href="#download"
                  className="rounded-[18px] bg-white/12 backdrop-blur-xl border border-white/25 px-5 py-2.5 flex items-center gap-3.5 hover:bg-white/20 transition-all shadow-lg shadow-black/20 group"
                >
                  <svg className="w-7 h-7 text-white fill-current shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.96-14.43-6.19-9.56-11.07-20.7-14.63-33.43-3.56-12.72-5.34-24.31-5.34-34.77 0-16.19 4.39-29.35 13.18-39.48 8.78-10.13 19.34-15.34 31.67-15.62 4.47 0 9.77 1.25 15.91 3.76 6.13 2.5 10.12 3.81 11.96 3.91 1.45-.1 5.56-1.44 12.33-4.02 6.77-2.58 12.19-3.75 16.27-3.52 10.37.52 19.16 4.34 26.38 11.45 7.22 7.12 11.83 15.77 13.84 25.96-9.14 5.53-13.62 13.25-13.43 23.16.19 8.24 3.35 15.22 9.48 20.93 6.13 5.71 13.48 9.07 22.05 10.07-2.01 6.19-4.5 12.28-7.48 18.27zm-32.99-106.6c0-7.81 2.87-15.02 8.6-21.65 5.74-6.62 12.87-10.62 21.4-12 0 1.09.05 2.12.15 3.09.11.97.11 1.95 0 2.94-.43 8.04-3.48 15.37-9.16 22-5.68 6.63-12.83 10.45-21.45 11.46-.33-1.95-.5-3.89-.5-5.84z"/>
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold font-mono">
                      {t.appStore.downloadOn}
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      {t.appStore.appStore}
                    </span>
                  </div>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-white/80 pl-1">
                <span className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_10px_#34D399]" />
                <span>Installation directe · Prêt à l’emploi</span>
              </div>
            </div>

            {/* Right Column: 2 Glass Feature Badges */}
            <div className="hidden lg:flex items-center gap-4">
              
              {/* Card 1: Reconnaissance Visuelle */}
              <div className="rounded-[24px] bg-white/12 backdrop-blur-2xl p-6 sm:w-72 flex flex-col justify-between border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#7C5CFC]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  {/* Top Badge & Time */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#7C5CFC]/30 border border-[#A88BFF]/40 text-[#E5DEFF] text-[10px] font-bold uppercase tracking-wider font-mono">
                      {t.card1.badge}
                    </span>
                    <span className="text-[11px] font-bold text-[#A88BFF] font-mono">{t.card1.time}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {t.card1.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-white/80">
                    {t.card1.desc}
                  </p>

                  {/* Output pill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] font-medium text-white/90">
                      {t.card1.tag1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] font-medium text-white/90">
                      {t.card1.tag2}
                    </span>
                  </div>
                </div>

                {/* Status footer */}
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70 relative z-10">
                  <span className="text-[#C2B3FF] font-medium font-mono">{t.card1.footer1}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-white/80">{t.card1.footer2}</span>
                </div>
              </div>

              {/* Card 2: Annonce prête en 1 clic */}
              <div className="rounded-[24px] bg-white/12 backdrop-blur-2xl p-6 sm:w-72 flex flex-col justify-between border border-white/25 shadow-[0_20px_50px_rgba(124,92,252,0.2)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#5B2FFF]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  {/* Top Badge & Live Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#7C5CFC]/30 border border-[#A88BFF]/40 text-[#E5DEFF] text-[10px] font-bold uppercase tracking-wider font-mono">
                      {t.card2.badge}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#A88BFF] shadow-[0_0_8px_#A88BFF]" />
                      <span className="text-[10px] font-bold text-white/80 uppercase font-mono">{t.card2.status}</span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {t.card2.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-white/80">
                    {t.card2.desc}
                  </p>

                  {/* Output pill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] font-medium text-white/90">
                      {t.card2.tag1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] font-medium text-white/90">
                      {t.card2.tag2}
                    </span>
                  </div>
                </div>

                {/* Free Credits Badge Footer */}
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/80 relative z-10">
                  <span className="font-bold text-[#E5DEFF] font-mono">{t.card2.footer1}</span>
                  <span className="text-white/50 text-[10px]">{t.card2.footer2}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Ecosystem Logos Band */}
      <section className="w-full bg-[#080511] border-y border-white/10 py-8 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            <Sparkles className="w-4 h-4 text-[#A88BFF]" />
            <span>Compatible avec vos plateformes préférées :</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-bold text-slate-300">
            <span className="flex items-center gap-2 hover:text-[#09B1BA] transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#09B1BA]" /> Vinted
            </span>
            <span className="flex items-center gap-2 hover:text-[#F56B2A] transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F56B2A]" /> Leboncoin
            </span>
            <span className="flex items-center gap-2 hover:text-[#00C49F] transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C49F]" /> Wallapop
            </span>
            <span className="flex items-center gap-2 hover:text-[#FF2A6D] transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A6D]" /> Vestiaire Collective
            </span>
            <span className="flex items-center gap-2 hover:text-[#E53238] transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E53238]" /> eBay
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Live AI Simulator */}
      <LiveAiDemo />

      {/* Core AI Capabilities Bento Grid */}
      <FeaturesGrid />

      {/* Before / After Performance Comparison */}
      <BeforeAfter />

      {/* How It Works - 3 Step Process */}
      <HowItWorks />

      {/* Marketplace Intelligence (Vinted vs Leboncoin) */}
      <MarketplaceTabs />

      {/* Wardrobe Earnings Calculator */}
      <EarningsCalculator />

      {/* Real Seller Reviews & Testimonials */}
      <Testimonials />

      {/* Transparent Pricing & Credits */}
      <PricingSection />

      {/* Interactive FAQ Accordion */}
      <FaqSection />

      {/* Grand Finale Download CTA with QR Code */}
      <DownloadCta />

      {/* Luxury Footer */}
      <Footer />
    </main>
  );
}