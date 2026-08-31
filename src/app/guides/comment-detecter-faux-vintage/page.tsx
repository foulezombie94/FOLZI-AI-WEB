import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, ShieldCheck, Camera, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment Reconnaître un Vrai Vêtement Vintage : Coutures, Zips et Étiquettes",
  description:
    "Guide d'authentification pour chineurs et revendeurs : comment identifier une pièce vintage authentique (coutures single stitch, zips YKK/Talon, étiquettes d'époque) et la scanner avec l'IA.",
  keywords: ["reconnaitre vrai vintage", "single stitch t shirt", "authentifier veste carhartt", "scanner etiquette vintage", "folzi ai vintage"],
  alternates: {
    canonical: "/guides/comment-detecter-faux-vintage",
  },
  openGraph: {
    title: "Comment Reconnaître un Vrai Vêtement Vintage : Coutures, Zips et Étiquettes",
    description: "Guide expert pour authentifier et estimer vos pièces vintage sans étiquette.",
    url: "https://folzi-ai-web.vercel.app/guides/comment-detecter-faux-vintage",
    type: "article",
  },
};

export default function GuideVintagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment Reconnaître un Vrai Vêtement Vintage : Coutures, Zips et Étiquettes",
    "description": "Les indices clés pour authentifier les vêtements vintage des années 70, 80 et 90.",
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
    "datePublished": "2026-02-15",
    "dateModified": "2026-08-31",
    "mainEntityOfPage": "https://folzi-ai-web.vercel.app/guides/comment-detecter-faux-vintage"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 text-[#C2B3FF] text-xs font-bold font-mono uppercase tracking-wider">
            <span>Guide Authentification Vintage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Comment Reconnaître une Pièce Vintage Rare sans Étiquette ?
          </h1>
          <p className="text-slate-400 text-sm">Publié par l&apos;équipe Folzi AI · Lecture 5 min</p>
        </div>

        {/* Intro */}
        <div className="p-6 rounded-2xl bg-[#0E0A21]/90 border border-white/15 space-y-3">
          <p className="text-slate-200 text-base leading-relaxed">
            Vous avez déniché une veste ou un t-shirt en friperie dont l’étiquette a été coupée ? Voici les 3 éléments d’inspection visuelle pour dater précisément une pièce et la revendre au vrai prix de collection.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#7C5CFC] text-white font-mono font-bold flex items-center justify-center text-sm">1</span>
            La couture Single Stitch (Avant 1995)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Sur les t-shirts vintage des années 80 et début 90, les ourlets des manches et du bas sont cousus avec une seule rangée de fil (single stitch) au lieu des doubles coutures modernes. C’est la signature d’une pièce d’époque authentique.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#7C5CFC] text-white font-mono font-bold flex items-center justify-center text-sm">2</span>
            Le métal des fermetures (Zips Talon, Scovill, Ideal)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Sur les vestes militaires, blousons en cuir et vestes Carhartt d&apos;époque, la marque gravée sur la tirette de fermeture éclair révèle immédiatement la décennie de fabrication.
          </p>
        </section>

        {/* In-Article Promotion Widget */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#7C5CFC]/20 via-[#5B2FFF]/10 to-transparent border border-[#7C5CFC]/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Laissez l’IA identifier votre pièce</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Photographiez votre vêtement vintage : Folzi AI compare les coupes historiques et vous donne la marque d&apos;origine et sa cote en 1,8s.
              </p>
            </div>
            <a
              href="/folzi-ai.apk"
              download="Folzi-AI.apk"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#7C5CFC] text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:scale-105 transition-all shrink-0"
            >
              <Camera className="w-4 h-4" />
              <span>Scanner une pièce (Gratuit)</span>
            </a>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Guide expert en authentification et valorisation seconde main.
      </footer>
    </main>
  );
}
