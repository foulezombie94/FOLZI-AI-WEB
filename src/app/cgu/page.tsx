import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales d’Utilisation (CGU) — Folzi AI",
  description: "Conditions Générales d’Utilisation du service et de l’application Folzi AI.",
  alternates: { canonical: "/cgu" },
};

export default function CguPage() {
  return (
    <main className="min-h-screen bg-[#06040A] text-white flex flex-col justify-between">
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

      <div className="max-w-3xl mx-auto px-5 py-16 space-y-8 text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Conditions Générales d’Utilisation
        </h1>
        <p className="text-xs text-slate-400 font-mono">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Objet du Service</h2>
          <p>
            Folzi AI est une application d&apos;aide à la rédaction d&apos;annonces de vente entre particuliers et professionnels via intelligence artificielle visuelle et textuelle.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Indépendance des Plateformes</h2>
          <p>
            Folzi AI est un outil tiers indépendant. L&apos;application n&apos;est ni affiliée, ni sponsorisée, ni gérée par Vinted UAB, Adevinta France (Leboncoin) ou toute autre marketplace tierce.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Propriété Intellectuelle & Données</h2>
          <p>
            Les photos analysées par le modèle sont traitées pour la génération de la description et ne sont pas revendues à des tiers.
          </p>
        </section>
      </div>

      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Tous droits réservés.
      </footer>
    </main>
  );
}
