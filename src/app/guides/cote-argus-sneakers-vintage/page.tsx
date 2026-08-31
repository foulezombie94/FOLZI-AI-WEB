import type { Metadata } from "next";
import Link from "next/link";
import { Award, Lightbulb, CheckCircle2, TrendingUp, Sparkles, ShieldCheck, Box } from "lucide-react";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance en 2026 — Folzi AI",
  description:
    "Guide d'estimation des sneakers de seconde main : grille de décote d'usure (Deadstock vs 9/10 vs 7/10), valeur de la boîte OG, et modèles les plus liquides (New Balance 530, Dunk, Jordan 4).",
  keywords: ["cote sneakers occasion", "argus sneakers", "estimer prix jordan 4", "prix revente new balance 530", "dunk low occasion prix"],
  alternates: {
    canonical: "/guides/cote-argus-sneakers-vintage",
  },
  openGraph: {
    title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance en 2026",
    description: "Guide expert pour estimer vos sneakers et vêtements vintage sans perdre de marge.",
    url: "https://folzi-ai-web.vercel.app/guides/cote-argus-sneakers-vintage",
    type: "article",
  },
};

export default function GuideArgusPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance en 2026",
    "description": "Comment évaluer précisément la cote et le prix de revente des sneakers de collection et vêtements vintage.",
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
    "datePublished": "2026-02-01",
    "dateModified": "2026-08-31",
    "mainEntityOfPage": "https://folzi-ai-web.vercel.app/guides/cote-argus-sneakers-vintage"
  };

  const tocItems = [
    { id: "marche-sneakers", label: "Le Marché Sneakers en 2026" },
    { id: "inspection-4points", label: "Les 4 Points d'Inspection Clés" },
    { id: "grille-decote", label: "Grille Officielle de Décote 2026" },
    { id: "modeles-liquides", label: "Modèles les Plus Recherchés" },
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
        title="Cote & Argus Sneakers d'Occasion : Comment Fixer le Prix Idéal en 2026"
        category="Sneakers & Argus"
        categoryColor="bg-[#34D399]/20 text-[#6EE7B7] border-[#34D399]/40"
        badgeIcon={<Award className="w-3.5 h-3.5 text-[#6EE7B7]" />}
        readTime="6 min"
        publishDate="1er Février 2026"
        updatedDate="Mis à jour Août 2026"
        description="Le protocole complet pour coter vos Nike, Jordan et New Balance selon l'état d'usure de la semelle, la boîte d'origine et la rareté du coloris."
        tocItems={tocItems}
        relatedGuides={relatedGuides}
      >
        {/* Intro */}
        <div id="marche-sneakers" className="p-6 sm:p-8 rounded-3xl bg-[#34D399]/10 border border-[#34D399]/30 space-y-4 backdrop-blur-xl shadow-xl shadow-emerald-950/20">
          <div className="flex items-center gap-2.5 text-[#6EE7B7] font-bold text-sm font-mono uppercase tracking-wider">
            <Lightbulb className="w-5 h-5" />
            <span>Dynamique de la Seconde Main</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Le marché de la sneaker de seconde main représente plus de <strong>40% des transactions de mode masculine sur Vinted</strong>. Entre une paire neuve en boîte (Deadstock) et une paire portée 10 fois (VNDS), la valeur peut varier de <strong>20 à 60 %</strong>. Voici comment estimer la valeur exacte de votre paire.
          </p>
        </div>

        {/* Section 1 : Checklist d'état */}
        <section id="inspection-4points" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#34D399] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-emerald-500/30">
              1
            </span>
            Les 4 Points d&apos;Inspection qui Fixent la Cote
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-[#6EE7B7]">1. Les étoiles de la semelle avant (Star Loss)</p>
              <p className="text-slate-400">Sur les Nike Dunk et Jordan, la présence intacte des petites étoiles sous la pointe prouve que la semelle n&apos;est pas rabotée.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-[#6EE7B7]">2. L&apos;usure du talon (Heel Drag)</p>
              <p className="text-slate-400">Un talon asymétrique ou usé diminue la valeur de 25%. Une photo nette de profil du talon est obligatoire.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-[#6EE7B7]">3. Les plis de la Toebox (Creases)</p>
              <p className="text-slate-400">Des plis profonds sur le cuir avant peuvent être atténués au fer doux avec une serviette humide avant la photo.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="font-bold text-[#6EE7B7]">4. La boîte d&apos;origine (OG Box) &amp; Lacets</p>
              <p className="text-slate-400">La présence de la boîte d&apos;origine intacte ajoute immédiatement <strong>+15 à 30 €</strong> à la valeur finale.</p>
            </div>
          </div>
        </section>

        {/* Section 2 : Tableau de décote */}
        <section id="grille-decote" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#34D399] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-emerald-500/30">
              2
            </span>
            Grille Officielle de Décote Sneakers 2026
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th className="p-4 text-slate-300 font-bold text-left">Condition</th>
                  <th className="p-4 text-slate-300 font-bold text-left">Description</th>
                  <th className="p-4 text-[#6EE7B7] font-bold text-left">Valeur par rapport au marché</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">DS (Deadstock)</td>
                  <td className="p-4 text-slate-400 font-sans">Neuf en boîte, jamais essayé</td>
                  <td className="p-4 text-[#6EE7B7] font-bold">100% de la cote</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">VNDS (9/10)</td>
                  <td className="p-4 text-slate-400 font-sans">Porté 1 à 3 fois, semelle impeccable</td>
                  <td className="p-4 text-[#6EE7B7] font-bold">85% - 90%</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">Très bon état (8/10)</td>
                  <td className="p-4 text-slate-400 font-sans">Légers plis toebox, semelle propre</td>
                  <td className="p-4 text-[#6EE7B7] font-bold">70% - 75%</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">Bon état (6-7/10)</td>
                  <td className="p-4 text-slate-400 font-sans">Usure visible, sans boîte d&apos;origine</td>
                  <td className="p-4 text-[#6EE7B7] font-bold">45% - 55%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 : Modèles liquides */}
        <section id="modeles-liquides" className="space-y-4 pt-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <span className="w-9 h-9 rounded-2xl bg-[#34D399] text-black font-mono font-black flex items-center justify-center text-base shadow-lg shadow-emerald-500/30">
              3
            </span>
            Les Silhouettes les Plus Liquides en France
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Ces 3 modèles se revendent en moins de 48h si le prix est aligné avec l&apos;argus :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <span className="font-bold text-[#6EE7B7]">New Balance 530 / 1906R</span>
              <p className="text-slate-400 mt-1">Délai moyen de vente : 28h.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <span className="font-bold text-[#6EE7B7]">Nike Dunk Low &amp; SB</span>
              <p className="text-slate-400 mt-1">Forte demande sur Panda &amp; Grey Fog.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
              <span className="font-bold text-[#6EE7B7]">Air Jordan 4 OG</span>
              <p className="text-slate-400 mt-1">Prime de rareté sur paires authentifiées.</p>
            </div>
          </div>
        </section>
      </GuideLayout>
    </>
  );
}

