import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, CheckCircle2, TrendingUp, Hash, Camera, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment Vendre sur Vinted en 24h : Guide Ultime & Algorithme 2026",
  description:
    "Découvrez les 7 étapes indispensables pour vendre vos vêtements sur Vinted en moins de 24h : photos, titres SEO viraux, hashtags et estimation du prix juste avec l'IA.",
  keywords: ["comment vendre sur vinted", "astuces vinted 2026", "algorithme vinted", "vendre vite vinted", "hashtags vinted"],
  alternates: {
    canonical: "/guides/comment-vendre-sur-vinted",
  },
  openGraph: {
    title: "Comment Vendre sur Vinted en 24h : Guide Ultime & Algorithme 2026",
    description: "Guide expert : optimisez vos photos, titres et hashtags pour vendre votre dressing en 24h.",
    url: "https://folzi-ai-web.vercel.app/guides/comment-vendre-sur-vinted",
    type: "article",
  },
};

export default function GuideVintedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment Vendre sur Vinted en 24h : Guide Ultime & Algorithme 2026",
    "description": "Les meilleures pratiques pour vendre rapidement son dressing sur Vinted grâce à l'intelligence artificielle et l'optimisation des annonces.",
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
    "datePublished": "2026-01-15",
    "dateModified": "2026-08-31",
    "mainEntityOfPage": "https://folzi-ai-web.vercel.app/guides/comment-vendre-sur-vinted"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09B1BA]/20 border border-[#09B1BA]/40 text-[#5BE3EB] text-xs font-bold font-mono uppercase tracking-wider">
            <span>Guide Vendeur Vinted 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Comment Vendre sur Vinted en 24h : Les 5 Règles d’Or de l’Algorithme
          </h1>
          <p className="text-slate-400 text-sm">Publié par l&apos;équipe Folzi AI · Lecture 4 min</p>
        </div>

        {/* Intro Banner */}
        <div className="p-6 rounded-2xl bg-[#0E0A21]/90 border border-white/15 space-y-3">
          <p className="text-slate-200 text-base leading-relaxed">
            Chaque jour, plus de 1,2 million d’articles sont mis en ligne sur Vinted en France. Pour sortir du lot et vendre en quelques heures sans brader vos vêtements, voici la méthode exacte utilisée par les top vendeurs.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-bold flex items-center justify-center text-sm">1</span>
            Soignez la première photo (Le déclencheur de clics)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            80% des utilisateurs scrollent à toute vitesse. Votre première photo doit être lumineuse, nette et sur fond neutre. Évitez les photos au sol avec des plis. Suspendez votre vêtement sur un cintre en bois devant un mur blanc ou clair.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-bold flex items-center justify-center text-sm">2</span>
            Le titre SEO : Remplir tous les mots-clés stratégiques
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Ne tapez jamais <em>« robe rouge »</em>. L’algorithme de recherche Vinted indexe chaque mot du titre. Utilisez la formule :
          </p>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-[#C2B3FF]">
            [Marque] + [Modèle] + [Couleur / Motif] + [Coupe / Style] + [Taille]
          </div>
          <p className="text-xs text-slate-400">
            Exemple : <em>« Veste Carhartt WIP Detroit Kaki Vintage Boxy Taille M »</em>
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-bold flex items-center justify-center text-sm">3</span>
            Les hashtags : Le secret pour apparaître dans le feed &ldquo;Pour Vous&rdquo;
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Ajoutez 5 à 7 hashtags pertinents en bas de votre description. C’est ce qui permet à l’algorithme de recommander votre pièce aux acheteurs qui ont liké des articles similaires.
          </p>
        </section>

        {/* In-Article Promotion Widget */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#7C5CFC]/20 via-[#5B2FFF]/10 to-transparent border border-[#7C5CFC]/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Automatisez tout cela en 1 photo</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Folzi AI identifie la marque, rédige le titre SEO viral et insère les hashtags en 1,8 seconde.
              </p>
            </div>
            <a
              href="/folzi-ai.apk"
              download="Folzi-AI.apk"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:scale-105 transition-all shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Tester Folzi AI (Gratuit)</span>
            </a>
          </div>
        </div>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-bold flex items-center justify-center text-sm">4</span>
            L’Argus du juste prix (Éviter la sous-évaluation)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Si votre prix est 20% au-dessus du marché, votre article reste bloqué 6 mois. S’il est trop bas, vous perdez de l’argent. Consultez notre <Link href="/estimation-prix" className="text-[#09B1BA] font-bold hover:underline">Argus de Prix IA</Link> pour fixer le tarif optimal dès la publication.
          </p>
        </section>

      </article>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Guide officiel pour les revendeurs de seconde main.
      </footer>
    </main>
  );
}
