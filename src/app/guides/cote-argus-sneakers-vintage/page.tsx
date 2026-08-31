import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, TrendingUp, Calculator, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance",
  description:
    "Guide pratique pour calculer la cote de revente de vos sneakers d'occasion (Nike Dunk, Jordan 4, New Balance 530/1906, Adidas Samba) et maximiser votre marge.",
  keywords: ["cote sneakers occasion", "argus sneakers", "estimer prix jordan", "prix revente new balance", "folzi ai argus"],
  alternates: {
    canonical: "/guides/cote-argus-sneakers-vintage",
  },
  openGraph: {
    title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance",
    description: "Guide expert pour estimer vos sneakers et vêtements vintage sans perdre de marge.",
    url: "https://folzi-ai-web.vercel.app/guides/cote-argus-sneakers-vintage",
    type: "article",
  },
};

export default function GuideArgusPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance",
    "description": "Comment évaluer précisément la cote et le prix de revente des sneakers de collection et vêtements vintage.",
    "author": {
      "@type": "Organization",
      "name": "Folzi AI Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Folzi AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://folzi-ai-web.vercel.app/logo.png"
      }
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-08-31",
    "mainEntityOfPage": "https://folzi-ai-web.vercel.app/guides/cote-argus-sneakers-vintage"
  };

  return (
    <main className="min-h-screen bg-[#06040A] text-white flex flex-col justify-between">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-5 py-6 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l&apos;accueil</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] flex items-center justify-center text-white">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-lg">Folzi <span className="text-[#C2B3FF] font-mono text-xs">AI</span></span>
        </Link>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-5 py-16 space-y-10">
        
        {/* Title & Badge */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#34D399]/20 border border-[#34D399]/40 text-[#6EE7B7] text-xs font-bold font-mono uppercase tracking-wider">
            <span>Guide Resell & Argus 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Cote Sneakers d’Occasion : Comment Fixer le Prix Idéal en 2026
          </h1>
          <p className="text-slate-400 text-sm">Publié par l&apos;équipe Folzi AI · Lecture 5 min</p>
        </div>

        {/* Intro Banner */}
        <div className="p-6 rounded-2xl bg-[#0E0A21]/90 border border-white/15 space-y-3">
          <p className="text-slate-200 text-base leading-relaxed">
            Le marché de la sneaker de seconde main évolue chaque semaine. Voici comment estimer la juste valeur de vos paires (New Balance 530, Dunk Low, Jordan 1/4) selon leur état d’usure et la présence de la boîte d’origine.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#34D399] text-black font-mono font-bold flex items-center justify-center text-sm">1</span>
            L’état de la semelle et de l’étoile avant
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Les acheteurs de sneakers inspectent en priorité deux éléments : l’usure du talon et les étoiles de la semelle avant. Une paire nettoyée avec des semelles blanchies se vend jusqu&apos;à 35% plus cher.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#34D399] text-black font-mono font-bold flex items-center justify-center text-sm">2</span>
            La boîte d’origine (OG Box) : +15 à 25 € de valeur nette
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Conserver la boîte d’origine, même légèrement abîmée, rassure immédiatement l’acheteur sur l’authenticité de la paire et justifie un prix plus élevé.
          </p>
        </section>

        {/* In-Article Promotion Widget */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#34D399]/20 via-[#10B981]/10 to-transparent border border-[#34D399]/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Testez notre Argus IA en direct</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Prenez votre paire en photo : l’algorithme compare les ventes récentes et vous donne la fourchette de prix exacte.
              </p>
            </div>
            <Link
              href="/estimation-prix"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#34D399] text-black font-bold text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all shrink-0"
            >
              <Calculator className="w-4 h-4" />
              <span>Accéder à l&apos;Argus IA</span>
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Guide et simulateur d&apos;estimation de seconde main.
      </footer>
    </main>
  );
}
