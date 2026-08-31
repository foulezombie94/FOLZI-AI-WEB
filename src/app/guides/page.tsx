import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, BookOpen, ArrowRight, Flame, Layers, Award, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides & Stratégies Vendeurs Seconde Main 2026 — Folzi AI",
  description: "Découvrez les guides experts de Folzi AI : algorithme Vinted 2026, modèles d'annonces Leboncoin, cotation sneakers et authentification vintage.",
  alternates: { canonical: "/guides" },
};

export default function GuidesHubPage() {
  const guides = [
    {
      title: "Comment Vendre sur Vinted en 24h : Les 7 Secrets de l'Algorithme 2026",
      desc: "Drip publishing (2-3 articles/jour), pic de trafic 18h-22h, formule de titre SEO et relisting propre pour maximiser vos ventes.",
      slug: "/guides/comment-vendre-sur-vinted",
      tag: "Vinted & Algorithme",
      tagColor: "bg-[#09B1BA]/20 text-[#5BE3EB] border-[#09B1BA]/40",
      readTime: "6 min",
      badge: "Indispensable",
      icon: <Flame className="w-4 h-4 text-[#5BE3EB]" />,
    },
    {
      title: "Modèle d'Annonce Leboncoin : Le Texte Parfait pour Vendre en 48h",
      desc: "Templates copiables pour meubles, high-tech et vêtements avec marge de négociation (+10%) et règles de politesse.",
      slug: "/guides/modele-annonce-leboncoin",
      tag: "Leboncoin & Local",
      tagColor: "bg-[#F56B2A]/20 text-[#FFA071] border-[#F56B2A]/40",
      readTime: "5 min",
      badge: "Templates Prêts",
      icon: <Layers className="w-4 h-4 text-[#FFA071]" />,
    },
    {
      title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance",
      desc: "Grille d'inspection en 4 points (Star loss, Heel drag, Toebox) et tableau de décote selon la présence de la boîte d'origine.",
      slug: "/guides/cote-argus-sneakers-vintage",
      tag: "Sneakers & Argus",
      tagColor: "bg-[#34D399]/20 text-[#6EE7B7] border-[#34D399]/40",
      readTime: "6 min",
      badge: "Grille de Notation",
      icon: <Award className="w-4 h-4 text-[#6EE7B7]" />,
    },
    {
      title: "Comment Reconnaître une Pièce Vintage Rare sans Étiquette ?",
      desc: "Coutures single stitch d'avant 1995, zips d'époque (Talon, Scovill) et numéros RN pour certifier vos trouvailles de friperie.",
      slug: "/guides/comment-detecter-faux-vintage",
      tag: "Authentification Friperie",
      tagColor: "bg-[#7C5CFC]/20 text-[#C2B3FF] border-[#7C5CFC]/40",
      readTime: "7 min",
      badge: "Guide Expert",
      icon: <Sparkles className="w-4 h-4 text-[#C2B3FF]" />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#06040A] text-white flex flex-col justify-between selection:bg-[#7C5CFC]/40 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#06040A]/85 border-b border-white/10 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-200 font-bold">Guides Vendeurs</span>
          </nav>

          <Link
            href="/"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-bold text-xs shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tester Folzi AI</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0A21] via-[#06040A] to-[#06040A] border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#7C5CFC]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] text-xs font-bold font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#A88BFF]" />
            <span>Centre de Ressources &amp; Intelligence Recommerce</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
            Les Guides Officiels pour <span className="gradient-purple-text">Dominer la Revente</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Méthodes éprouvées, analyse des algorithmes 2026, grilles d&apos;estimation argus et techniques d&apos;authentification rédigées par des experts du secteur.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((g, i) => (
            <Link
              key={i}
              href={g.slug}
              className="group p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-[#A88BFF]/40 transition-all flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-xl hover:shadow-purple-950/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C5CFC]/10 rounded-full blur-2xl group-hover:bg-[#7C5CFC]/20 transition-all pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono border ${g.tagColor}`}>
                    {g.icon}
                    <span>{g.tag}</span>
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{g.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4C9FF] transition-colors leading-snug">
                  {g.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {g.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold font-mono text-[#A88BFF] relative z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {g.badge}
                </span>
                <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>Consulter le guide</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Universal Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Centre d&apos;apprentissage officiel pour vendeurs de seconde main.
      </footer>
    </main>
  );
}

