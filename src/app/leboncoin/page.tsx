import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, MapPin, ShieldCheck, TrendingUp, CheckCircle2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "IA Leboncoin — Rédigez l'annonce parfaite en 1 clic avec Folzi AI",
  description:
    "Générez des descriptions polies, rassurantes et optimisées pour Leboncoin en 1 photo : état, dimensions, modalités d'envoi et prix idéal sans négociation.",
  keywords: ["ia leboncoin", "vendre sur leboncoin", "modele annonce leboncoin", "rediger annonce leboncoin", "folzi ai leboncoin"],
  alternates: {
    canonical: "/leboncoin",
  },
  openGraph: {
    title: "IA Leboncoin — Rédigez l'annonce parfaite en 1 clic avec Folzi AI",
    description: "1 photo = annonce Leboncoin rédigée et optimisée pour vendre en 24h.",
    url: "https://folzi-ai-web.vercel.app/leboncoin",
  },
};

export default function LeboncoinLanding() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IA Leboncoin — Rédacteur d'annonces Folzi AI",
    "description": "Générez des annonces Leboncoin structurées et rassurantes en 2 secondes.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://folzi-ai-web.vercel.app" },
        { "@type": "ListItem", "position": 2, "name": "Leboncoin IA", "item": "https://folzi-ai-web.vercel.app/leboncoin" }
      ]
    }
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

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-5 py-16 text-center space-y-8 my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F56B2A]/20 border border-[#F56B2A]/40 text-[#FFA071] text-xs font-bold font-mono uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          <span>Spécial Leboncoin Maison, Meubles & Dressing</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
          Des annonces <span className="text-[#F56B2A]">Leboncoin</span> qui inspirent confiance.
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Prenez une photo de votre meuble, vêtement ou équipement. Folzi AI rédige une annonce polie, précise et complète pour déclencher des messages d’acheteurs sérieux dès le premier jour.
        </p>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F56B2A]/20 text-[#FFA071] flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Formules de Politesse Pro</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ton courtois, chaleureux et structuré adapté aux standards des acheteurs Leboncoin.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/20 text-[#C2B3FF] flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Modalités de Remise Prêtes</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mentions automatiques pour la remise en main propre sécurisée ou l’expédition protégée avec numéro de suivi.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#34D399]/20 text-[#6EE7B7] flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Argus du Marché Local</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Estimation du juste prix pour éviter les négociations excessives et conclure votre vente en moins de 48 heures.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/folzi-ai.apk"
            download="Folzi-AI.apk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F56B2A] to-[#D94F0E] text-white font-bold text-base hover:scale-105 transition-all shadow-xl shadow-orange-600/30"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger l&apos;app Leboncoin IA (Gratuit)</span>
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-base border border-white/10"
          >
            <span>Voir la démonstration en direct</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Application indépendante pour les vendeurs Leboncoin.
      </footer>
    </main>
  );
}
