import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, BookOpen, ArrowRight, TrendingUp, Hash } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides & Conseils Vendeurs Seconde Main — Folzi AI",
  description: "Découvrez tous nos guides experts pour optimiser vos annonces, dominer l'algorithme Vinted et Leboncoin, et vendre vos vêtements au meilleur prix.",
  alternates: { canonical: "/guides" },
};

export default function GuidesHubPage() {
  const guides = [
    {
      title: "Comment Vendre sur Vinted en 24h : Guide Ultime & Algorithme 2026",
      desc: "Les 5 règles indispensables pour maximiser les vues, choisir les bons hashtags et vendre son dressing sans attendre.",
      slug: "/guides/comment-vendre-sur-vinted",
      tag: "Vinted",
      tagColor: "bg-[#09B1BA]/20 text-[#5BE3EB] border-[#09B1BA]/40",
      readTime: "4 min",
    },
    {
      title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance",
      desc: "Évaluez la vraie valeur de vos paires selon l'état d'usure de la semelle et la présence de la boîte d'origine.",
      slug: "/guides/cote-argus-sneakers-vintage",
      tag: "Argus & Sneakers",
      tagColor: "bg-[#34D399]/20 text-[#6EE7B7] border-[#34D399]/40",
      readTime: "5 min",
    },
  ];

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

      <div className="max-w-4xl mx-auto px-5 py-16 space-y-10 my-auto">
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] text-xs font-bold font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Centre de Ressources & Guides Vendeurs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Guides & Stratégies pour Vendre Plus et Mieux
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Conseils pratiques, analyses d’algorithmes et techniques d’optimisation pour les passionnés et professionnels de la seconde main.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((g, i) => (
            <Link
              key={i}
              href={g.slug}
              className="group p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#A88BFF]/40 transition-all flex flex-col justify-between space-y-6 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${g.tagColor}`}>
                    {g.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{g.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-[#D4C9FF] transition-colors leading-tight">
                  {g.title}
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {g.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#A88BFF] group-hover:gap-3 transition-all pt-4 border-t border-white/10">
                <span>Lire l&apos;article complet</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Centre d&apos;apprentissage officiel pour la vente de seconde main.
      </footer>
    </main>
  );
}
