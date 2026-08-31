import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, CheckCircle2, MessageSquare, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Modèle d'Annonce Leboncoin Gratuit : Exemples de Textes qui Vendent en 48h",
  description:
    "Copiez nos modèles d'annonces Leboncoin pour meubles, vêtements et high-tech : phrases rassurantes, formules de politesse, et modalités de remise en main propre.",
  keywords: ["modele annonce leboncoin", "exemple description leboncoin", "texte annonce leboncoin meuble", "astuces vente leboncoin"],
  alternates: {
    canonical: "/guides/modele-annonce-leboncoin",
  },
  openGraph: {
    title: "Modèle d'Annonce Leboncoin Gratuit : Exemples de Textes qui Vendent en 48h",
    description: "Modèles types prêts à copier-coller pour vendre plus vite sur Leboncoin.",
    url: "https://folzi-ai-web.vercel.app/guides/modele-annonce-leboncoin",
    type: "article",
  },
};

export default function GuideLeboncoinPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Modèle d'Annonce Leboncoin Gratuit : Exemples de Textes qui Vendent en 48h",
    "description": "Les meilleurs templates et structures de descriptions pour déclencher des prises de contact sérieuses sur Leboncoin.",
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
    "datePublished": "2026-02-10",
    "dateModified": "2026-08-31",
    "mainEntityOfPage": "https://folzi-ai-web.vercel.app/guides/modele-annonce-leboncoin"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F56B2A]/20 border border-[#F56B2A]/40 text-[#FFA071] text-xs font-bold font-mono uppercase tracking-wider">
            <span>Template & Modèle Leboncoin</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Modèle d’Annonce Leboncoin : Le Texte Parfait pour Vendre en 48h
          </h1>
          <p className="text-slate-400 text-sm">Publié par l&apos;équipe Folzi AI · Lecture 4 min</p>
        </div>

        {/* Intro */}
        <div className="p-6 rounded-2xl bg-[#0E0A21]/90 border border-white/15 space-y-3">
          <p className="text-slate-200 text-base leading-relaxed">
            Sur Leboncoin, une annonce sans formule de politesse ou sans précision sur les dimensions fait fuir les acheteurs sérieux. Voici la structure infaillible pour recevoir des offres concrètes.
          </p>
        </div>

        {/* Template Box 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F56B2A] text-black font-mono font-bold flex items-center justify-center text-sm">1</span>
            Structure Type d’une Annonce Rentable
          </h2>
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 font-mono text-xs text-slate-300">
            <p className="text-[#FFA071] font-bold">Bonjour,</p>
            <p>Je vends ce [Nom précis de l&apos;objet] de la marque [Marque], modèle [Modèle], en [État : comme neuf / très bon état].</p>
            <p className="text-slate-400">📏 <strong>Caractéristiques & Dimensions :</strong><br/>- Dimensions : Hauteur XX cm x Largeur XX cm<br/>- Matière / Couleur : [Détails]<br/>- Raison de la vente : déménagement / renouvellement</p>
            <p className="text-slate-400">📍 <strong>Modalités de retrait :</strong><br/>- Remise en main propre possible sur [Ville / Quartier / Métro]<br/>- Paiement sécurisé Leboncoin ou espèces lors du retrait</p>
            <p className="text-[#FFA071] font-bold">N&apos;hésitez pas à me contacter par messagerie pour toute question. Réponse rapide assurée.<br/>Cordialement.</p>
          </div>
        </section>

        {/* In-Article Promotion Widget */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#F56B2A]/20 via-[#D94F0E]/10 to-transparent border border-[#F56B2A]/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Générez cette description en 1 clic</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Prenez une photo de votre meuble ou objet : Folzi AI extrait les dimensions, rédige la politesse et le prix conseillé.
              </p>
            </div>
            <Link
              href="/leboncoin"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F56B2A] text-white font-bold text-sm shadow-lg shadow-orange-600/30 hover:scale-105 transition-all shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tester l&apos;IA Leboncoin</span>
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Guide et modèles officiels pour les vendeurs Leboncoin.
      </footer>
    </main>
  );
}
