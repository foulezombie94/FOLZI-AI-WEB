import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Lightbulb } from "lucide-react";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Modèle d'Annonce Leboncoin Gratuit : 3 Exemples de Textes qui Vendent en 48h — Folzi AI",
  description:
    "Copiez nos modèles d'annonces Leboncoin testés pour meubles, high-tech et objets : formules de politesse, cadrage photo 4:5 mobile, et marge de négociation.",
  keywords: ["modele annonce leboncoin", "exemple description leboncoin", "texte annonce leboncoin meuble", "astuces vente leboncoin", "titre annonce leboncoin"],
  alternates: {
    canonical: "/guides/modele-annonce-leboncoin",
  },
  openGraph: {
    title: "Modèle d'Annonce Leboncoin Gratuit : 3 Exemples de Textes qui Vendent en 48h",
    description: "Modèles types prêts à copier-coller pour vendre plus vite sur Leboncoin.",
    url: "https://folzi-ai-web.vercel.app/guides/modele-annonce-leboncoin",
    type: "article",
  },
};

export default function GuideLeboncoinPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Modèle d'Annonce Leboncoin Gratuit : 3 Exemples de Textes qui Vendent en 48h",
    "description": "Les meilleurs templates et structures de descriptions pour déclencher des prises de contact sérieuses sur Leboncoin.",
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
    "datePublished": "2026-02-10",
    "dateModified": "2026-08-31",
    "mainEntityOfPage": "https://folzi-ai-web.vercel.app/guides/modele-annonce-leboncoin"
  };

  const tocItems = [
    { id: "regles-or", label: "Les 4 Règles d'Or Leboncoin" },
    { id: "modele-meubles", label: "Modèle Type : Meubles & Maison" },
    { id: "modele-hightech", label: "Modèle Type : High-Tech & Valeur" },
    { id: "negociation", label: "Marge de Négociation (+10%)" },
  ];

  const relatedGuides = [
    {
      title: "Comment Vendre sur Vinted en 24h : Les 7 Secrets de l'Algorithme 2026",
      slug: "/guides/comment-vendre-sur-vinted",
      tag: "Vinted & Algorithme",
      readTime: "6 min",
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
        title="Modèles d'Annonces Leboncoin : Les 3 Textes Parfaits pour Vendre en 48h"
        category="Leboncoin & Local"
        categoryColor="bg-[#F56B2A]/20 text-[#FFA071] border-[#F56B2A]/40"
        badgeIcon={<MessageSquare className="w-3.5 h-3.5 text-[#FFA071]" />}
        readTime="5 min"
        publishDate="10 Février 2026"
        updatedDate="Mis à jour Août 2026"
        description="Les meilleures structures d'annonces, formules de politesse et stratégies tarifaires pour rassurer les acheteurs, éviter les négociations agressives et vendre rapidement."
        tocItems={tocItems}
        relatedGuides={relatedGuides}
      >
        {/* Intro Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F56B2A]/10 border border-[#F56B2A]/30 space-y-4 backdrop-blur-xl shadow-xl shadow-orange-950/20">
          <div className="flex items-center gap-2.5 text-[#FFA071] font-bold text-sm font-mono uppercase tracking-wider">
            <Lightbulb className="w-5 h-5" />
            <span>La Psychologie de l&apos;Acheteur Leboncoin</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Sur Leboncoin, la méfiance est le premier frein à l&apos;achat. Une annonce sans politesse, sans dimensions précises ou avec des photos floues est immédiatement ignorée. Une description de plus de 150 mots avec une structure rassurante reçoit en moyenne <strong>3 fois plus de messages d&apos;acheteurs sérieux</strong>.
          </p>
        </div>

        {/* Section 1 : Règles clés */}
        <section id="regles-or" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#F56B2A] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-orange-500/30">
              1
            </span>
            Les 4 Règles d’Or d’une Annonce Leboncoin Rentable
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-white flex items-center gap-2">📸 Format Portrait 4:5 Mobile</p>
              <p className="text-slate-400">Plus de 80% des utilisateurs consultent sur smartphone. Photographiez verticalement en lumière naturelle, sans flash.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-white flex items-center gap-2">⏰ Horaires de Mise en Ligne</p>
              <p className="text-slate-400">Publiez le <strong>dimanche entre 11h et 14h</strong> ou en semaine entre <strong>20h et 22h</strong> pour un pic de visibilité immédiat.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-white flex items-center gap-2">💶 Marge de Négociation (+10%)</p>
              <p className="text-slate-400">Affichez un prix 10% au-dessus de votre objectif réel pour laisser l&apos;acheteur négocier et conclure avec satisfaction.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-white flex items-center gap-2">🏷️ Titre de Moins de 60 Caractères</p>
              <p className="text-slate-400">Formule : <code>[Marque] + [Modèle / Type] + [État] + [Caractéristique]</code></p>
            </div>
          </div>
        </section>

        {/* Template 1 : Meubles & Déco */}
        <section id="modele-meubles" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#F56B2A] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-orange-500/30">
              2
            </span>
            Modèle Type 1 : Meubles &amp; Maison (Prêt à Copier)
          </h2>
          <div className="p-6 rounded-2xl bg-[#0E0A21] border border-[#FFA071]/30 space-y-3 font-mono text-xs sm:text-sm text-slate-300 relative shadow-inner">
            <p className="text-[#FFA071] font-bold">Bonjour,</p>
            <p>Je vends cette <strong>[Table / Commode / Canapé]</strong> de la marque <strong>[Marque / Ex: IKEA Hemnes]</strong> en <strong>[Très bon état / Comme neuf]</strong>.</p>
            <div className="p-4 rounded-xl bg-white/5 space-y-1 text-slate-300 text-xs">
              <p className="font-bold text-white">📏 Dimensions exactes :</p>
              <p>- Longueur : XX cm | Largeur : XX cm | Hauteur : XX cm</p>
              <p>- Matière : Bois massif / Chêne clair</p>
              <p>- Raison de la vente : Réaménagement d&apos;intérieur</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 space-y-1 text-slate-300 text-xs">
              <p className="font-bold text-white">📍 Modalités de retrait :</p>
              <p>- À venir récupérer sur place à [Ville / Quartier / Étage avec/sans ascenseur]</p>
              <p>- Aide possible pour charger dans votre véhicule</p>
              <p>- Paiement sécurisé Leboncoin ou espèces lors de la remise en main propre</p>
            </div>
            <p className="text-[#FFA071] font-bold">N&apos;hésitez pas à me contacter par la messagerie pour toute information complémentaire. Réponse rapide assurée.<br/>Bien cordialement.</p>
          </div>
        </section>

        {/* Template 2 : High-Tech */}
        <section id="modele-hightech" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#F56B2A] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-orange-500/30">
              3
            </span>
            Modèle Type 2 : High-Tech &amp; Objets de Valeur
          </h2>
          <div className="p-6 rounded-2xl bg-[#0E0A21] border border-[#FFA071]/30 space-y-3 font-mono text-xs sm:text-sm text-slate-300 shadow-inner">
            <p className="text-[#FFA071] font-bold">Bonjour,</p>
            <p>Je mets en vente mon <strong>[Appareil / Modèle précis et capacité]</strong> en parfait état de fonctionnement.</p>
            <div className="p-4 rounded-xl bg-white/5 space-y-1 text-slate-300 text-xs">
              <p className="font-bold text-white">🔋 État &amp; Accessoires :</p>
              <p>- État esthétique : Impeccable, toujours protégé par une coque et un verre trempé</p>
              <p>- Santé de la batterie : XX%</p>
              <p>- Vendu complet avec : boîte d&apos;origine, câble d&apos;origine et facture d&apos;achat</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 space-y-1 text-slate-300 text-xs">
              <p className="font-bold text-white">📦 Livraison &amp; Remise :</p>
              <p>- Envoi soigné et protégé sous 24h via Mondial Relay / Colissimo avec numéro de suivi</p>
              <p>- Remise en main propre possible dans un lieu public sécurisé</p>
            </div>
            <p className="text-[#FFA071] font-bold">Prix ferme et justifié au vu de l&apos;état irréprochable. Premier contact via la messagerie Leboncoin.<br/>Cordialement.</p>
          </div>
        </section>

        {/* Section 4 : Négociation */}
        <section id="negociation" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#F56B2A] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-orange-500/30">
              4
            </span>
            La Gestion Parfaite de la Négociation
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Sur Leboncoin, refuser brutalement une offre fait fuir l&apos;acheteur. Répondez toujours avec courtoisie en proposant une contre-offre à mi-chemin :
          </p>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300 space-y-2">
            <p className="font-bold text-[#FFA071]">Formule type de contre-offre :</p>
            <p className="italic font-mono">
              &ldquo;Bonjour [Prénom], merci pour votre intérêt. Votre offre à 40 € est un peu basse au vu de l&apos;état impeccable de l&apos;article. Je peux faire un geste à 45 € si vous venez le chercher aujourd&apos;hui. Qu&apos;en pensez-vous ?&rdquo;
            </p>
          </div>
        </section>
      </GuideLayout>
    </>
  );
}
