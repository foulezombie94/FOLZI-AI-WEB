import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, TrendingUp, Calculator, ShieldCheck, CheckCircle2, Flame, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance en 2026",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#34D399]/20 border border-[#34D399]/40 text-[#6EE7B7] text-xs font-bold font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Guide Resell & Cotation 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Cote Sneakers d’Occasion : Comment Fixer le Prix Idéal en 2026
          </h1>
          <p className="text-slate-400 text-sm">Publié par l&apos;équipe Recherche Folzi AI · Lecture 6 min · Mis à jour Août 2026</p>
        </div>

        {/* Intro */}
        <div className="p-6 rounded-3xl bg-[#0E0A21]/90 border border-[#34D399]/30 space-y-3 backdrop-blur-xl">
          <p className="text-slate-200 text-sm leading-relaxed">
            Le marché de la sneaker de seconde main représente plus de 40% des transactions de mode masculine sur Vinted. Entre une paire neuve en boîte (Deadstock) et une paire portée 10 fois (VNDS), la valeur peut varier de <strong>20 à 60 %</strong>. Voici comment estimer la valeur exacte de votre paire.
          </p>
        </div>

        {/* Section 1 : Checklist d'état */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#34D399] text-black font-mono font-black flex items-center justify-center text-sm">1</span>
            Les 4 Points d&apos;Inspection qui Fixent la Cote
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-300">
              <p className="font-bold text-[#6EE7B7]">1. Les étoiles de la semelle avant (Star Loss)</p>
              <p className="text-slate-400">Sur les Nike Dunk et Jordan, la présence intacte des petites étoiles sous la pointe prouve que la semelle n&apos;est pas rabotée.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-300">
              <p className="font-bold text-[#6EE7B7]">2. L&apos;usure du talon (Heel Drag)</p>
              <p className="text-slate-400">Un talon asymétrique ou usé diminue la valeur de 25%. Une photo nette de profil du talon est obligatoire.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-300">
              <p className="font-bold text-[#6EE7B7]">3. Les plis de la Toebox (Creases)</p>
              <p className="text-slate-400">Des plis profonds sur le cuir avant peuvent être atténués au fer doux avec une serviette humide avant la photo.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-300">
              <p className="font-bold text-[#6EE7B7]">4. La boîte d&apos;origine (OG Box) & Lacets</p>
              <p className="text-slate-400">La présence de la boîte d&apos;origine intacte ajoute immédiatement <strong>+15 à 30 €</strong> à la valeur finale.</p>
            </div>
          </div>
        </section>

        {/* Section 2 : Tableau de décote */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#34D399] text-black font-mono font-black flex items-center justify-center text-sm">2</span>
            Grille Officielle de Décote Sneakers 2026
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th className="p-3 text-slate-400 font-semibold text-left">Condition</th>
                  <th className="p-3 text-slate-400 font-semibold text-left">Description</th>
                  <th className="p-3 text-[#6EE7B7] font-bold text-left">Valeur par rapport au marché</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-3 font-bold text-white">DS (Deadstock)</td>
                  <td className="p-3 text-slate-400">Neuf en boîte, jamais essayé</td>
                  <td className="p-3 text-[#6EE7B7] font-bold">100% de la cote</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">VNDS (Very Near DS - 9/10)</td>
                  <td className="p-3 text-slate-400">Porté 1 à 3 fois, semelle impeccable</td>
                  <td className="p-3 text-[#6EE7B7] font-bold">85% - 90%</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">Très bon état (8/10)</td>
                  <td className="p-3 text-slate-400">Légers plis toebox, semelle nettoyée</td>
                  <td className="p-3 text-[#6EE7B7] font-bold">70% - 75%</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white">Bon état (6-7/10)</td>
                  <td className="p-3 text-slate-400">Usure visible, sans boîte d&apos;origine</td>
                  <td className="p-3 text-[#6EE7B7] font-bold">45% - 55%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* In-Article Promotion Widget */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#34D399]/25 via-[#10B981]/15 to-transparent border border-[#34D399]/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Calculez la cote de votre paire en 2 secondes</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Prenez une photo de votre sneaker : l’intelligence artificielle Folzi AI identifie le colorway exact et vous donne la fourchette de prix de vente immédiat.
              </p>
            </div>
            <Link
              href="/estimation-prix"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#34D399] text-black font-bold text-sm shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all shrink-0"
            >
              <Calculator className="w-4 h-4" />
              <span>Accéder à l&apos;Argus IA</span>
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Guide et simulateur d&apos;estimation de seconde main.
      </footer>
    </main>
  );
}
