import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité (RGPD) — Folzi AI",
  description: "Politique de confidentialité et protection des données personnelles de Folzi AI.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
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
          Politique de Confidentialité
        </h1>
        <p className="text-xs text-slate-400 font-mono">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Protection de la Vie Privée (RGPD)</h2>
          <p>
            Folzi AI respecte scrupuleusement la réglementation européenne (RGPD). Vos données personnelles et identifiants sont chiffrés et stockés de manière sécurisée.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Traitement des Photos</h2>
          <p>
            Les photos téléchargées pour l&apos;analyse visuelle sont uniquement utilisées pour générer le titre, la description et l&apos;estimation de prix demandée par l&apos;utilisateur.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Vos Droits d&apos;Accès et de Suppression</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données à tout moment en contactant notre délégué à la protection des données à : <span className="text-[#C2B3FF] font-mono font-bold">contact@folzi-ai.com</span>.
          </p>
        </section>
      </div>

      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Tous droits réservés.
      </footer>
    </main>
  );
}
