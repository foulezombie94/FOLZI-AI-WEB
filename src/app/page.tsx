"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Sparkles, Download } from "lucide-react";

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
};obileCta: "Descargar la App",
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
    { label: t.nav.scanner, href: "#scanner", hasDropdown: false },
    { label: t.nav.features, href: "#features", hasDropdown: false },
    { label: t.nav.marketplaces, href: "#solutions", hasDropdown: true },
    { label: t.nav.download, href: "#download", hasDropdown: false },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black select-none">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4"
      />

      {/* Subtle Violet Ambient Highlights */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#7C5CFC]/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#9D7BFF]/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Foreground Container */}
      <div className="relative z-10 flex flex-col h-full w-full">
        
        {/* Navigation Top Bar */}
        <header className="w-full px-5 py-5 sm:px-8 sm:py-6 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Folzi AI */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] flex items-center justify-center text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <span className="text-xl font-bold text-[#010101] lg:text-white tracking-tight transition-colors">
              Folzi <span className="font-light text-sm text-[#7C5CFC] lg:text-[#D4C9FF] uppercase font-mono">AI</span>
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
            <div className="flex items-center rounded-full bg-white/12 border border-white/25 p-1 backdrop-blur-xl shadow-md gap-0.5">
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === "fr"
                    ? "bg-white text-black shadow-md scale-105"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                title="Passer en Français"
              >
                <FranceFlag className="w-4 h-2.5" />
                <span className="font-mono">FR</span>
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === "en"
                    ? "bg-white text-black shadow-md scale-105"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                title="Switch to English"
              >
                <UKFlag className="w-4 h-2.5" />
                <span className="font-mono">EN</span>
              </button>

              <button
                type="button"
                onClick={() => setLang("es")}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === "es"
                    ? "bg-white text-black shadow-md scale-105"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                title="Cambiar a Español"
              >
                <SpainFlag className="w-4 h-2.5" />
                <span className="font-mono">ES</span>
              </button>
            </div>

            {/* Separate Installer Pill */}
            <a
              href="#download"
              className="rounded-full px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] hover:opacity-95 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-purple-600/30 border border-white/20"
            >
              {t.nav.install}
            </a>

          </div>

          {/* Mobile Right Controls: 3-Flag Segmented Switcher + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            
            {/* Mobile 3-Flag Selector */}
            <div className="flex items-center rounded-full bg-white/15 border border-white/20 p-0.5 backdrop-blur-lg gap-0.5">
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={`p-1.5 rounded-full transition-all ${
                  lang === "fr" ? "bg-white shadow-sm scale-110" : "opacity-70 hover:opacity-100"
                }`}
                title="Français"
              >
                <FranceFlag className="w-4 h-2.5" />
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                className={`p-1.5 rounded-full transition-all ${
                  lang === "en" ? "bg-white shadow-sm scale-110" : "opacity-70 hover:opacity-100"
                }`}
                title="English"
              >
                <UKFlag className="w-4 h-2.5" />
              </button>

              <button
                type="button"
                onClick={() => setLang("es")}
                className={`p-1.5 rounded-full transition-all ${
                  lang === "es" ? "bg-white shadow-sm scale-110" : "opacity-70 hover:opacity-100"
                }`}
                title="Español"
              >
                <SpainFlag className="w-4 h-2.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-10 w-10 rounded-full bg-white/15 border border-white/20 backdrop-blur-lg flex items-center justify-center relative z-50 text-[#010101] lg:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Menu
                className={`w-5 h-5 absolute transition-all duration-300 ${
                  menuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`w-5 h-5 absolute transition-all duration-300 ${
                  menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </button>

          </div>

        </header>

        {/* Mobile Backdrop Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Mobile Slide-in Drawer */}
        <div
          className={`fixed right-0 top-0 z-40 h-full w-72 bg-[#0E0924]/95 border-l border-white/15 backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Links */}
          <div className="px-6 pt-24 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen ? `${(index + 1) * 60}ms` : "0ms",
                }}
                className={`rounded-xl px-4 py-3.5 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center justify-between ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                }`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
              </a>
            ))}
          </div>

          {/* Mobile Bottom CTA */}
          <div className="mt-auto px-6 pb-10">
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: menuOpen ? "300ms" : "0ms",
              }}
              className={`w-full rounded-2xl py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] hover:opacity-90 transition-all duration-400 shadow-xl shadow-purple-600/30 flex items-center justify-center border border-white/20 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.mobileCta}
            </a>
          </div>
        </div>

        {/* Main Content (Pinned to Bottom with mt-auto) */}
        <div className="mt-auto px-5 pb-8 sm:px-8 sm:pb-12 lg:px-12 lg:pb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
          
          {/* Left Side: Headline + Apple Store Download Button */}
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.35rem] font-semibold leading-[1.1] tracking-tight text-[#010101] lg:text-white max-w-2xl transition-colors">
              {t.headline}
            </h1>

            {/* Download Badges: App Store & Android APK */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5">
              {/* Apple Store Download Badge */}
              <a
                href="#download"
                className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-white text-black hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl w-fit border border-black/15 select-none group"
              >
                {/* Official Apple Logo SVG */}
                <svg
                  viewBox="0 0 384 512"
                  width="22"
                  height="28"
                  className="fill-black shrink-0 group-hover:scale-105 transition-transform"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>

                {/* Badge Text */}
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] sm:text-[11px] font-normal tracking-tight text-neutral-800">
                    {t.appStore.downloadOn}
                  </span>
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-black font-sans -mt-0.5">
                    {t.appStore.appStore}
                  </span>
                </div>
              </a>

              {/* Android Direct APK Download Badge */}
              <a
                href="/folzi-ai.apk"
                download="Folzi-AI.apk"
                className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl w-fit border border-white/30 select-none group"
              >
                {/* Official Android Robot SVG */}
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-[#3DDC84] shrink-0 group-hover:scale-110 transition-transform"
                >
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1557-.2697.0633-.6141-.2064-.7698-.2696-.1557-.6141-.0633-.7698.2064l-2.0231 3.5042c-1.442-.659-3.0566-1.031-4.7782-1.031-1.7216 0-3.3362.372-4.7782 1.031L5.3007 5.301c-.1557-.2697-.5002-.3621-.7698-.2064-.2697.1557-.3621.5001-.2064.7698l1.996 3.4572C2.6889 11.2867.24 15.1129.04 19.64h23.92c-.2-4.5271-2.6489-8.3533-6.0785-10.3186" />
                </svg>

                {/* Badge Text */}
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] sm:text-[11px] font-normal tracking-tight text-white/80">
                    {t.apk.downloadFor}
                  </span>
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans -mt-0.5 flex items-center gap-1.5">
                    {t.apk.androidApk}
                    <Download className="w-4 h-4 text-[#3DDC84] group-hover:translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Two Elegant Glass Cards (Violet & Blanc) */}
          <div className="flex flex-col gap-4 sm:flex-row lg:w-auto lg:gap-5">
            
            {/* Card 1: Scanner Intelligent IA */}
            <div className="rounded-[24px] bg-white/12 backdrop-blur-2xl p-6 sm:w-72 flex flex-col justify-between border border-white/25 shadow-[0_20px_50px_rgba(124,92,252,0.2)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#7C5CFC]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-3 relative z-10">
                {/* Top Badge & Metric */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#7C5CFC]/30 border border-[#A88BFF]/40 text-[#E5DEFF] text-[10px] font-bold uppercase tracking-wider font-mono">
                    {t.card1.badge}
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-white font-mono">
                    {t.card1.time}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-white tracking-tight">
                  {t.card1.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-white/80">
                  {t.card1.desc}
                </p>

                {/* Detection tags */}
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
  );
}