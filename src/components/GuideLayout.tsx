"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  Check,
  Share2,
  BookOpen,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

interface GuideLayoutProps {
  title: string;
  category: string;
  categoryColor?: string;
  badgeIcon?: React.ReactNode;
  readTime: string;
  publishDate: string;
  updatedDate: string;
  description: string;
  tocItems: TocItem[];
  relatedGuides: {
    title: string;
    slug: string;
    tag: string;
    readTime: string;
  }[];
  children: React.ReactNode;
}

export default function GuideLayout({
  title,
  category,
  categoryColor = "bg-[#7C5CFC]/20 text-[#D4C9FF] border-[#A88BFF]/40",
  badgeIcon,
  readTime,
  publishDate,
  updatedDate,
  description,
  tocItems,
  relatedGuides,
  children,
}: GuideLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeToc, setActiveToc] = useState<string>(tocItems[0]?.id || "");
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setScrollProgress(Number(scrollPercent.toFixed(1)));
      }

      const headings = tocItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      for (let i = headings.length - 1; i >= 0; i--) {
        const el = headings[i];
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveToc(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#06040A] text-white flex flex-col justify-between selection:bg-[#7C5CFC]/40 selection:text-white">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-[#7C5CFC] via-[#A88BFF] to-[#34D399] transition-all duration-150 ease-out shadow-[0_0_12px_#A88BFF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#06040A]/85 border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Breadcrumbs */}
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <span>Accueil</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/guides" className="hover:text-white transition-colors font-medium">
              Guides Vendeurs
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600 hidden sm:block" />
            <span className="text-slate-300 font-bold hidden sm:inline-block max-w-[200px] md:max-w-[320px] truncate">
              {title}
            </span>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              title="Copier le lien du guide"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Lien copié !</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Partager</span>
                </>
              )}
            </button>

            <Link
              href="/"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-bold text-xs shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tester Folzi AI</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative w-full pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-gradient-to-b from-[#0E0A21] via-[#06040A] to-[#06040A] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#7C5CFC]/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left relative z-10">
          {/* Badge Category */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider border shadow-sm ${categoryColor}`}>
              {badgeIcon || <BookOpen className="w-3.5 h-3.5" />}
              <span>{category}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {updatedDate}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            {title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
            {description}
          </p>

          {/* Editorial Meta Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs text-slate-400 border-t border-white/10 font-mono">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] flex items-center justify-center text-white text-[10px] font-bold">
                F
              </div>
              <span className="text-slate-200 font-medium">Recherche Folzi AI</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{readTime} de lecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>Publié le {publishDate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Article + Sticky TOC) */}
      <main id="main-content" className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 space-y-10 text-slate-200 text-base leading-relaxed">
            {children}

            {/* In-Article Promotion CTA Banner */}
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#130D2E] via-[#0E0A21] to-[#06040A] border-2 border-[#7C5CFC]/50 shadow-2xl shadow-purple-950/60 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C5CFC]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C5CFC]/30 border border-[#A88BFF]/40 text-[#E5DEFF] text-xs font-mono font-bold w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#A88BFF]" />
                <span>Gain de temps immédiat</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Prêt à automatiser vos annonces en 1,8 seconde ?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  Prenez une photo de votre article : Folzi AI applique instantanément toutes les règles de ce guide (titres SEO, 100+ mots, hashtags viraux et prix argus).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-bold text-sm shadow-xl shadow-purple-600/40 hover:scale-105 transition-all flex items-center gap-2 font-mono uppercase tracking-wider"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Tester avec 4 crédits offerts</span>
                </Link>
                <Link
                  href="/estimation-prix"
                  className="px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-bold text-sm transition-all"
                >
                  Simuler mon dressing ➔
                </Link>
              </div>
            </div>
          </article>

          {/* Right Sticky Sidebar: Table of Contents & Quick Box (4 cols) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            {/* Table of Contents Box */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#A88BFF]">
                <BookOpen className="w-4 h-4" />
                <span>Sommaire du guide</span>
              </div>

              <nav className="space-y-1">
                {tocItems.map((item, idx) => {
                  const isActive = activeToc === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`group flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                        isActive
                          ? "bg-[#7C5CFC]/20 text-[#E5DEFF] font-bold border border-[#A88BFF]/30"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="font-mono text-slate-500 group-hover:text-slate-300 shrink-0">
                        0{idx + 1}.
                      </span>
                      <span className="line-clamp-2 leading-relaxed">{item.label}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Quick Pro-Tip Box */}
            <div className="p-6 rounded-3xl bg-[#09B1BA]/10 border border-[#09B1BA]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#5BE3EB] text-xs font-bold font-mono uppercase">
                <TrendingUp className="w-4 h-4" />
                <span>Conseil Algorithme</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Les acheteurs Vinted & Leboncoin négocient 3 fois moins lorsque l&apos;annonce mentionne les dimensions complètes et une description de plus de 100 mots.
              </p>
            </div>
          </aside>

        </div>
      </main>

      {/* Related Guides Carousel / Grid */}
      <section className="w-full bg-[#080511] border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Continuer votre lecture
              </h2>
              <p className="text-xs text-slate-400">
                Découvrez les autres stratégies des Power Sellers de seconde main.
              </p>
            </div>
            <Link
              href="/guides"
              className="text-xs font-bold font-mono text-[#A88BFF] hover:underline flex items-center gap-1"
            >
              <span>Tous les guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedGuides.map((rg, i) => (
              <Link
                key={i}
                href={rg.slug}
                className="group p-6 rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#A88BFF]/40 transition-all flex flex-col justify-between space-y-4 backdrop-blur-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#D4C9FF]">
                      {rg.tag}
                    </span>
                    <span>{rg.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#D4C9FF] transition-colors leading-snug">
                    {rg.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#A88BFF] pt-3 border-t border-white/10">
                  <span>Lire le guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Centre d&apos;apprentissage officiel pour vendeurs de seconde main.
      </footer>
    </div>
  );
}
