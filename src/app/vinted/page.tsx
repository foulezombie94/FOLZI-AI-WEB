import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, Hash, Tag, TrendingUp, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "IA Vinted — Vendez votre dressing 3x plus vite avec Folzi AI",
  description:
    "Générez instantanément des titres viraux, descriptions avec hashtags tendances et le juste prix pour Vinted en 1 seule photo grâce à l'IA Folzi AI.",
  keywords: ["ia vinted", "vendre sur vinted", "vinted booster", "generateur annonce vinted", "hashtags vinted", "folzi ai vinted"],
  alternates: {
    canonical: "/vinted",
  },
  openGraph: {
    title: "IA Vinted — Vendez votre dressing 3x plus vite avec Folzi AI",
    description: "1 photo = annonce Vinted optimisée avec hashtags et prix argus en 2 secondes.",
    url: "https://folzi-ai-web.vercel.app/vinted",
  },
};

export default function VintedLanding() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IA Vinted — Optimiseur d'annonces Folzi AI",
    "description": "Générez en 2 secondes des annonces prêtes pour l'algorithme Vinted.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://folzi-ai-web.vercel.app" },
        { "@type": "ListItem", "position": 2, "name": "Vinted IA", "item": "https://folzi-ai-web.vercel.app/vinted" }
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#09B1BA]/20 border border-[#09B1BA]/40 text-[#5BE3EB] text-xs font-bold font-mono uppercase tracking-wider">
          <Hash className="w-3.5 h-3.5" />
          <span>Spécial Vinted Seller & Dressing</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
          Dominez l’algorithme <span className="text-[#09B1BA]">Vinted</span> et vendez en 24h.
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Prenez vos vêtements en photo. Folzi AI extrait la marque, la coupe, la couleur exacte, rédige une description captivante et ajoute les hashtags viraux qui placent votre article en tête du feed.
        </p>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#09B1BA]/20 text-[#5BE3EB] flex items-center justify-center font-bold">
              <Hash className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Hashtags Viraux Automatiques</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              #vintage #y2k #streetwear #oversize : l’IA insère les tags tendance que les acheteurs recherchent activement.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/20 text-[#C2B3FF] flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Argus de Prix Temps Réel</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Comparaison avec des milliers de ventes réelles sur Vinted pour vendre au prix fort sans subir de négociations agressives.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#34D399]/20 text-[#6EE7B7] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Zéro Litige Acheteur</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Détails précis sur l&apos;état, les matières et les mesures (aisselle à aisselle) pour protéger vos 5 étoiles.
            </p>
          </div>
        </div>

        {/* Comparative Table: Manuel vs Folzi AI */}
        <div className="pt-8 text-left">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Vente Manuelle vs Folzi AI</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th className="p-3.5 text-slate-400 font-semibold text-left">Critère</th>
                  <th className="p-3.5 text-rose-400 font-semibold text-left">Rédaction Manuelle</th>
                  <th className="p-3.5 text-[#5BE3EB] font-bold text-left">Avec Folzi AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-3.5 text-slate-300 font-medium">Temps par annonce</td>
                  <td className="p-3.5 text-slate-400">10 à 15 minutes</td>
                  <td className="p-3.5 text-[#5BE3EB] font-bold">1,8 seconde ⚡</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-slate-300 font-medium">Hashtags & SEO Vinted</td>
                  <td className="p-3.5 text-slate-400">Oubliés ou génériques</td>
                  <td className="p-3.5 text-[#5BE3EB] font-bold">5 à 7 tags viraux ciblés</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-slate-300 font-medium">Prix de vente</td>
                  <td className="p-3.5 text-slate-400">Au hasard / sous-évalué</td>
                  <td className="p-3.5 text-[#5BE3EB] font-bold">Argus comparé à 2 400 ventes</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-slate-300 font-medium">Délai moyen de vente</td>
                  <td className="p-3.5 text-slate-400">14 à 45 jours</td>
                  <td className="p-3.5 text-[#5BE3EB] font-bold">Moins de 24 heures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/folzi-ai.apk"
            download="Folzi-AI.apk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#09B1BA] to-[#067A80] text-white font-bold text-base hover:scale-105 transition-all shadow-xl shadow-teal-600/30"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger l&apos;app Vinted IA (4 crédits offerts)</span>
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
        © {new Date().getFullYear()} Folzi AI. Application indépendante pour les vendeurs Vinted.
      </footer>
    </main>
  );
}
