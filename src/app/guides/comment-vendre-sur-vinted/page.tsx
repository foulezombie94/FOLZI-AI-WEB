import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Lightbulb, CheckCircle2, TrendingUp, Sparkles, Layers, ShieldCheck, Clock, Camera } from "lucide-react";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Comment Vendre sur Vinted en 24h : Les 7 Secrets de l'Algorithme 2026 — Folzi AI",
  description:
    "Guide ultra-complet des Power Sellers : règle du drip publishing, horaires de publication (18h-22h), formule de titre SEO, hashtags viraux et relisting propre.",
  keywords: ["comment vendre sur vinted", "astuces vinted 2026", "algorithme vinted", "vendre vite vinted", "hashtags vinted", "relisting vinted"],
  alternates: {
    canonical: "/guides/comment-vendre-sur-vinted",
  },
  openGraph: {
    title: "Comment Vendre sur Vinted en 24h : Les 7 Secrets de l'Algorithme 2026",
    description: "Guide expert : optimisez vos photos, titres et hashtags pour vendre votre dressing en 24h.",
    url: "https://folzi-ai-web.vercel.app/guides/comment-vendre-sur-vinted",
    type: "article",
  },
};

export default function GuideVintedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment Vendre sur Vinted en 24h : Les 7 Secrets de l'Algorithme 2026",
    "description": "Les meilleures pratiques et stratégies algorithmiques pour vendre rapidement son dressing sur Vinted grâce à l'intelligence artificielle et l'optimisation des annonces.",
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
    "datePublished": "2026-01-15",
    "dateModified": "2026-08-31",
    "mainEntityOfPage": "https://folzi-ai-web.vercel.app/guides/comment-vendre-sur-vinted"
  };

  const tocItems = [
    { id: "drip-publishing", label: "La Règle du Drip Publishing" },
    { id: "golden-hours", label: "Les Horaires d'Or (18h - 22h)" },
    { id: "seo-title", label: "La Formule de Titre SEO" },
    { id: "measurements", label: "Mesures & Élimination des Litiges" },
    { id: "bundles", label: "Réductions sur Lots (Bundles)" },
    { id: "relisting", label: "La Règle des 7 Jours (Relisting)" },
    { id: "argus-price", label: "L'Argus du Juste Prix" },
  ];

  const relatedGuides = [
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
    {
      title: "Comment Reconnaître une Pièce Vintage Rare sans Étiquette ?",
      slug: "/guides/comment-detecter-faux-vintage",
      tag: "Authentification Friperie",
      readTime: "7 min",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <GuideLayout
        title="Comment Vendre sur Vinted en 24h : Les 7 Règles Secrètes de l'Algorithme 2026"
        category="Vinted & Algorithme"
        categoryColor="bg-[#09B1BA]/20 text-[#5BE3EB] border-[#09B1BA]/40"
        badgeIcon={<Flame className="w-3.5 h-3.5 text-[#5BE3EB]" />}
        readTime="6 min"
        publishDate="15 Janvier 2026"
        updatedDate="Mis à jour Août 2026"
        description="Le protocole complet utilisé par les Power Sellers pour générer 3x plus de vues, positionner leurs articles en tête des recherches et vendre leur dressing en moins de 24 heures."
        tocItems={tocItems}
        relatedGuides={relatedGuides}
      >
        {/* Intro Callout Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#09B1BA]/10 border border-[#09B1BA]/30 space-y-4 backdrop-blur-xl shadow-xl shadow-teal-950/20">
          <div className="flex items-center gap-2.5 text-[#5BE3EB] font-bold text-sm font-mono uppercase tracking-wider">
            <Lightbulb className="w-5 h-5" />
            <span>Le Constat Algorithmique 2026</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Avec plus de <strong>1,2 million d’articles mis en ligne chaque jour en France</strong>, l’algorithme de Vinted ne classe plus les annonces au hasard. Il privilégie la <strong>fraîcheur</strong>, la <strong>densité sémantique de la description</strong> (plus de 100 mots) et la <strong>réactivité du vendeur</strong>. Voici le protocole exact pour déclencher des ventes en moins de 24h.
          </p>
        </div>

        {/* Section 1 */}
        <section id="drip-publishing" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-teal-500/30">
              1
            </span>
            La Règle du &ldquo;Drip Publishing&rdquo; (Ne publiez jamais tout d’un coup)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            L’erreur classique des débutants est de mettre en ligne 30 articles le samedi après-midi. L’algorithme accorde un <strong>boost de nouveauté</strong> de quelques heures à chaque nouvelle annonce.
          </p>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300 space-y-2">
            <p className="font-bold text-[#5BE3EB] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5BE3EB]" />
              La méthode des Power Sellers :
            </p>
            <p>
              Publiez <strong>2 à 3 articles par jour</strong> de manière constante (matin et soir). Votre dressing reste ainsi en permanence dans les premiers résultats et envoie un signal d&apos;activité continue aux serveurs de Vinted.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="golden-hours" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-teal-500/30">
              2
            </span>
            Les Horaires d’Or (Le pic de trafic 18h - 22h)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Le volume de recherche et d&apos;achats impulsifs sur Vinted explose entre <strong>18h00 et 22h00 du lundi au jeudi</strong>, ainsi que le <strong>dimanche soir à partir de 17h00</strong>. Publier à 10h du matin fait chuter votre visibilité de moitié car votre annonce aura vieilli avant le pic d&apos;affluence.
          </p>
        </section>

        {/* Section 3 */}
        <section id="seo-title" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-teal-500/30">
              3
            </span>
            La Formule de Titre SEO Infaillible
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Le moteur interne de Vinted scanne chaque mot de votre titre. Bannissez les titres vagues comme <em>« joli pull »</em> ou <em>« robe soirée »</em>. Appliquez la formule :
          </p>
          <div className="p-5 rounded-2xl bg-[#0E0A21] border border-[#A88BFF]/30 font-mono text-xs sm:text-sm text-[#C2B3FF] shadow-inner">
            [Marque] + [Modèle / Type exact] + [Couleur / Motif] + [Style / Coupe] + [Taille]
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Exemple d&apos;application : <strong className="text-white">« Veste Carhartt WIP Detroit Kaki Toile Épaisse Boxy Taille L »</strong>
          </p>
        </section>

        {/* Section 4 */}
        <section id="measurements" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-teal-500/30">
              4
            </span>
            Les Mesures &amp; Détails : Zéro question, Zéro litige
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Les acheteurs expérimentés fuient les annonces sans mesures par peur des mauvaises surprises de taille. Insérez systématiquement :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <div className="font-bold text-[#5BE3EB] font-mono">1. Pit to Pit</div>
              <div className="text-slate-400 mt-1">Largeur exacte aisselle à aisselle à plat.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <div className="font-bold text-[#5BE3EB] font-mono">2. Longueur Totale</div>
              <div className="text-slate-400 mt-1">Du haut du col jusqu&apos;à l&apos;ourlet du bas.</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <div className="font-bold text-[#5BE3EB] font-mono">3. Matière &amp; Tissage</div>
              <div className="text-slate-400 mt-1">Ex. 100% Coton lourd sans élasthanne.</div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="bundles" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-teal-500/30">
              5
            </span>
            La Stratégie des Réductions sur Lots (Bundles)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Activez dans vos paramètres Vinted : <strong>-15% dès 2 articles</strong> et <strong>-25% dès 3 articles</strong>. Cela incite l&apos;acheteur à fouiller votre dressing pour rentabiliser ses frais de port et augmente votre panier moyen de +65%.
          </p>
        </section>

        {/* Section 6 */}
        <section id="relisting" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-teal-500/30">
              6
            </span>
            La Règle des 7 Jours (Relisting Propre)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Si un article n&apos;a reçu aucun favori ni achat au bout de 7 jours, ne le laissez pas mourir dans les tréfonds de l&apos;application. Supprimez l&apos;annonce et republiez-la avec un nouvel angle de photo et un prix réajusté de 1 ou 2 € pour redéclencher le boost initial.
          </p>
        </section>

        {/* Section 7 */}
        <section id="argus-price" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-teal-500/30">
              7
            </span>
            L’Argus du Juste Prix (Sans Sous-Évaluation)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Le juste prix se situe entre la médiane et le 60e percentile des ventes réelles terminées. Utilisez notre <Link href="/estimation-prix" className="text-[#09B1BA] font-bold hover:underline">Argus de Prix IA</Link> pour fixer le tarif parfait.
          </p>
        </section>
      </GuideLayout>
    </>
  );
}

