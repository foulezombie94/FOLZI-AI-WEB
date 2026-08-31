import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, ShieldCheck, Camera, CheckCircle2, Award, Lightbulb, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment Reconnaître un Vrai Vêtement Vintage : Single Stitch, Zips et Étiquettes",
  description:
    "Guide ultime d'authentification vintage : coutures single stitch (avant 1995), zips historiques (Talon, Scovill, Ideal), numéros RN et étiquettes Carhartt d'époque.",
  keywords: ["reconnaitre vrai vintage", "single stitch t shirt", "authentifier veste carhartt", "scanner etiquette vintage", "dramage etiquette vintage", "folzi ai vintage"],
  alternates: {
    canonical: "/guides/comment-detecter-faux-vintage",
  },
  openGraph: {
    title: "Comment Reconnaître un Vrai Vêtement Vintage : Single Stitch, Zips et Étiquettes",
    description: "Guide expert pour authentifier et estimer vos pièces vintage sans étiquette.",
    url: "https://folzi-ai-web.vercel.app/guides/comment-detecter-faux-vintage",
    type: "article",
  },
};

export default function GuideVintagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment Reconnaître un Vrai Vêtement Vintage : Single Stitch, Zips et Étiquettes",
    "description": "Les indices clés pour authentifier les vêtements vintage des années 70, 80 et 90 et repérer les fausses rééditions.",
    "author": {
      "@type": "Organization",
      "name": "Folzi AI Research Team"
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
        <Link href="/guides" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Tous les guides</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] flex items-center justify-center text-white">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-lg">Folzi <span className="text-[#C2B3FF] font-mono text-xs">AI</span></span>
        </Link>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-5 py-16 space-y-12">
        
        {/* Title & Badge */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 text-[#C2B3FF] text-xs font-bold font-mono uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            <span>Guide Authentification & Friperie 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Comment Reconnaître une Pièce Vintage Rare : Les 4 Signatures Secrètes
          </h1>
          <p className="text-slate-400 text-sm">Publié par l&apos;équipe Recherche Folzi AI · Lecture 7 min · Mis à jour Août 2026</p>
        </div>

        {/* Intro */}
        <div className="p-6 rounded-3xl bg-[#0E0A21]/90 border border-[#7C5CFC]/30 space-y-3 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[#C2B3FF] font-bold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>L&apos;Enjeu de la Revente Vintage</span>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed">
            Une veste de travail Carhartt vintage des années 90 (Detroit J97) peut se vendre entre <strong>180 et 350 €</strong> sur Vinted, contre seulement 40 € pour une réédition moderne. Voici comment inspecter coutures, zips et étiquettes pour dater une pièce avec certitude.
          </p>
        </div>

        {/* Section 1 : Single Stitch */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#7C5CFC] text-white font-mono font-black flex items-center justify-center text-sm">1</span>
            La Couture &ldquo;Single Stitch&rdquo; (La preuve avant 1995)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Jusqu&apos;au milieu des années 1990, les machines à coudre industrielles utilisaient une seule rangée de fil pour les ourlets de manches et de taille des t-shirts. À partir de 1995-1996, l&apos;industrie est passée à la double couture (double stitch).
          </p>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-2">
            <p className="font-bold text-[#C2B3FF]">🔍 Le test visuel en friperie :</p>
            <p>Retournez l&apos;ourlet de la manche : si vous ne voyez qu&apos;une seule ligne de fil continue sur l&apos;endroit et un point de chaînette sur l&apos;envers, le t-shirt est <strong>100% vintage des années 80 ou début 90</strong>.</p>
          </div>
        </section>

        {/* Section 2 : Zips d'époque */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#7C5CFC] text-white font-mono font-black flex items-center justify-center text-sm">2</span>
            Le Métal des Fermetures Éclair (Zips Historiques)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Sur les vestes en cuir, blousons militaires et bombers, la tirette du zip révèle immédiatement l&apos;époque :
          </p>
          <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
            <li><strong>Zips Talon / Scovill / Conmar :</strong> Pièces des années 1950 à 1980.</li>
            <li><strong>Zips Ideal / YKK Métal Lourd :</strong> Années 1980 à 1995.</li>
            <li><strong>Zips Plastique modernes sans gravure :</strong> Pièces contemporaines sans valeur de collection.</li>
          </ul>
        </section>

        {/* Section 3 : Les Étiquettes et Numéros RN */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#7C5CFC] text-white font-mono font-black flex items-center justify-center text-sm">3</span>
            Le Décodage du Numéro RN (Registered Identification Number)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Aux États-Unis, chaque fabricant de vêtements possède un numéro RN obligatoire sur l&apos;étiquette d&apos;entretien. Plus le numéro est court, plus la marque est ancienne :
          </p>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-slate-300 space-y-1">
            <p>• RN &lt; 20000 : Années 1950 - 1960</p>
            <p>• RN 20000 à 50000 : Années 1970</p>
            <p>• RN 50000 à 90000 : Années 1980 - 1990 (Ex: Carhartt RN 14806)</p>
          </div>
        </section>

        {/* In-Article Promotion Widget */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#7C5CFC]/25 via-[#5B2FFF]/15 to-transparent border border-[#7C5CFC]/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Laissez l’IA dater et coter votre pièce</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Photographiez votre vêtement vintage : Folzi AI compare les coupes historiques et vous donne la marque d&apos;origine, la décennie et sa cote en 1,8 seconde.
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
