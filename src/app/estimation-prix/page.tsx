import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, Calculator, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import EarningsCalculator from "@/components/EarningsCalculator";

export const metadata: Metadata = {
  title: "Argus & Estimation Prix Vêtement IA — Folzi AI",
  description:
    "Calculez gratuitement la valeur réelle de vos vêtements, sneakers et objets d'occasion grâce à l'algorithme d'estimation de prix Folzi AI.",
  keywords: ["argus vetement", "estimation prix occasion", "cote vinted", "combien vaut mon vetement", "folzi ai estimation"],
  alternates: {
    canonical: "/estimation-prix",
  },
  openGraph: {
    title: "Argus & Estimation Prix Vêtement IA — Folzi AI",
    description: "Estimez le prix idéal de vos articles de seconde main en 2 secondes.",
    url: "https://folzi-ai-web.vercel.app/estimation-prix",
  },
};

export default function EstimationPrixLanding() {
  return (
    <main className="min-h-screen bg-[#06040A] text-white flex flex-col justify-between">
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
      <div className="max-w-4xl mx-auto px-5 py-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#34D399]/20 border border-[#34D399]/40 text-[#6EE7B7] text-xs font-bold font-mono uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>Argus IA Temps Réel Seconde Main</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
          Le juste prix. <span className="gradient-emerald-text">Sans sous-évaluer votre dressing.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Notre modèle compare en direct plus de 2 400 ventes récentes par catégorie, marque et état pour vous recommander le tarif idéal pour vendre en moins de 48 heures.
        </p>
      </div>

      {/* Embedded Interactive Calculator */}
      <div className="w-full">
        <EarningsCalculator />
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Simulateur et Argus officiel pour les vendeurs particuliers et professionnels.
      </footer>
    </main>
  );
}
