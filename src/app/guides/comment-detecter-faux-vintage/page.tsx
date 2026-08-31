import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Lightbulb, CheckCircle2, Search, ShieldCheck, Tag, Clock } from "lucide-react";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Comment Reconnaître un Vrai Vêtement Vintage : Single Stitch, Zips et Étiquettes — Folzi AI",
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

  const tocItems = [
    { id: "enjeu-vintage", label: "L'Enjeu de la Revente Vintage" },
    { id: "single-stitch", label: "La Couture Single Stitch (Pre-1995)" },
    { id: "zips-historiques", label: "Les Zips d'Époque (Talon, Scovill)" },
    { id: "numeros-rn", label: "Le Décodage du Numéro RN" },
  ];

  const relatedGuides = [
    {
      title: "Comment Vendre sur Vinted en 24h : Les 7 Secrets de l'Algorithme 2026",
      slug: "/guides/comment-vendre-sur-vinted",
      tag: "Vinted & Algorithme",
      readTime: "6 min",
    },
    {
      title: "Modèle d'Annonce Leboncoin : Le Texte Parfait pour Vendre en 48h",
      slug: "/guides/modele-annonce-leboncoin",
      tag: "Leboncoin & Local",
      readTime: "5 min",
    },
    {
      title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance",
      slug: "/guides/cote-argus-sneakers-vintage",
      tag: "Sneakers & Argus",
      readTime: "6 min",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <GuideLayout
        title="Comment Reconnaître une Pièce Vintage Rare : Les 4 Signatures Secrètes"
        category="Authentification Friperie"
        categoryColor="bg-[#7C5CFC]/20 text-[#C2B3FF] border-[#7C5CFC]/40"
        badgeIcon={<Search className="w-3.5 h-3.5 text-[#C2B3FF]" />}
        readTime="7 min"
        publishDate="15 Février 2026"
        updatedDate="Mis à jour Août 2026"
        description="Le protocole complet des chineurs professionnels pour dater un t-shirt, une veste Carhartt ou un bomber militaire sans étiquette grâce aux détails techniques de fabrication."
        tocItems={tocItems}
        relatedGuides={relatedGuides}
      >
        {/* Intro Banner */}
        <div id="enjeu-vintage" className="p-6 sm:p-8 rounded-3xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/30 space-y-4 backdrop-blur-xl shadow-xl shadow-purple-950/20">
          <div className="flex items-center gap-2.5 text-[#C2B3FF] font-bold text-sm font-mono uppercase tracking-wider">
            <Lightbulb className="w-5 h-5" />
            <span>L&apos;Enjeu Économique du Vrai Vintage</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Une veste de travail Carhartt vintage des années 90 (modèle Detroit J97) peut se vendre entre <strong>180 et 350 € sur Vinted</strong>, contre seulement 40 € pour une réédition moderne sans valeur patrimoniale. Voici comment inspecter coutures, zips et étiquettes pour dater une pièce avec une certitude absolue.
          </p>
        </div>

        {/* Section 1 : Single Stitch */}
        <section id="single-stitch" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#7C5CFC] text-white font-mono font-black flex items-center justify-center text-base shadow-lg shadow-purple-500/30">
              1
            </span>
            La Couture &ldquo;Single Stitch&rdquo; (La preuve avant 1995)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Jusqu&apos;au milieu des années 1990, les machines à coudre industrielles utilisaient une seule rangée de fil pour les ourlets de manches et de taille des t-shirts. À partir de 1995-1996, l&apos;industrie est passée à la double couture (double stitch).
          </p>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300 space-y-2">
            <p className="font-bold text-[#C2B3FF] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C2B3FF]" />
              Le test visuel en friperie :
            </p>
            <p>
              Retournez l&apos;ourlet de la manche : si vous ne voyez qu&apos;une seule ligne de fil continue sur l&apos;endroit et un point de chaînette sur l&apos;envers, le t-shirt est <strong>100% vintage des années 80 ou début 90</strong>.
            </p>
          </div>
        </section>

        {/* Section 2 : Zips d'époque */}
        <section id="zips-historiques" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#7C5CFC] text-white font-mono font-black flex items-center justify-center text-base shadow-lg shadow-purple-500/30">
              2
            </span>
            Le Métal des Fermetures Éclair (Zips Historiques)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Sur les vestes en cuir, blousons militaires et bombers, la tirette du zip révèle immédiatement l&apos;époque :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <div className="font-bold text-[#C2B3FF] font-mono">Talon / Scovill / Conmar</div>
              <div className="text-slate-400 mt-1">Pièces authentiques des années 1950 à 1980. Métal lourd patiné.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <div className="font-bold text-[#C2B3FF] font-mono">Ideal / YKK Métal USA</div>
              <div className="text-slate-400 mt-1">Années 1980 à 1995. Transition vers les fabrications massives.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <div className="font-bold text-slate-500 font-mono">Plastique sans marque</div>
              <div className="text-slate-400 mt-1">Rééditions contemporaines après 2005. Cote standard.</div>
            </div>
          </div>
        </section>

        {/* Section 3 : Les Étiquettes et Numéros RN */}
        <section id="numeros-rn" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#7C5CFC] text-white font-mono font-black flex items-center justify-center text-base shadow-lg shadow-purple-500/30">
              3
            </span>
            Le Décodage du Numéro RN (Registered Identification Number)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Aux États-Unis, chaque fabricant de vêtements possède un numéro RN obligatoire sur l&apos;étiquette d&apos;entretien. Plus le numéro est court, plus la marque est ancienne :
          </p>
          <div className="p-5 rounded-2xl bg-[#0E0A21] border border-[#A88BFF]/30 font-mono text-xs sm:text-sm text-slate-300 space-y-2 shadow-inner">
            <p className="text-[#C2B3FF] font-bold">• RN &lt; 20 000 : Années 1950 - 1960 (Très rare)</p>
            <p className="text-[#C2B3FF] font-bold">• RN 20 000 à 50 000 : Années 1970</p>
            <p className="text-[#C2B3FF] font-bold">• RN 50 000 à 90 000 : Années 1980 - 1990 (Ex. Carhartt RN 14806)</p>
          </div>
        </section>
      </GuideLayout>
    </>
  );
}

