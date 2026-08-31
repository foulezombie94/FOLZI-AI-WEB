import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, CheckCircle2, TrendingUp, Hash, Camera, ShieldCheck, Clock, Layers, Flame, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment Vendre sur Vinted en 24h : Les 7 Secrets de l'Algorithme 2026",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#09B1BA]/20 border border-[#09B1BA]/40 text-[#5BE3EB] text-xs font-bold font-mono uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            <span>Guide Stratégique Power Seller 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Comment Vendre sur Vinted en 24h : Les 7 Règles Secrètes de l’Algorithme
          </h1>
          <p className="text-slate-400 text-sm">Publié par l&apos;équipe Recherche Folzi AI · Lecture 6 min · Mis à jour Août 2026</p>
        </div>

        {/* Intro Banner */}
        <div className="p-6 rounded-3xl bg-[#0E0A21]/90 border border-[#09B1BA]/30 space-y-3 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[#5BE3EB] font-bold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>Le Constat Algorithmique</span>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed">
            Avec plus de 1,2 million d’articles mis en ligne chaque jour en France, l’algorithme de Vinted ne classe plus les annonces au hasard. Il privilégie la <strong>fraîcheur</strong>, la <strong>densité sémantique de la description</strong> (plus de 100 mots) et la <strong>réactivité du vendeur</strong>. Voici le protocole exact pour déclencher des ventes en moins de 24h.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-sm">1</span>
            La Règle du &ldquo;Drip Publishing&rdquo; (Ne publiez jamais tout d’un coup)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            L’erreur classique des débutants est de mettre en ligne 30 articles le samedi après-midi. L’algorithme accorde un <strong>boost de nouveauté</strong> de quelques heures à chaque nouvelle annonce. 
          </p>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-2">
            <p className="font-bold text-[#5BE3EB]">💡 La méthode des Power Sellers :</p>
            <p>Publiez <strong>2 à 3 articles par jour</strong> de manière constante. Votre dressing reste ainsi en permanence dans les premiers résultats et envoie un signal d&apos;activité continue à Vinted.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-sm">2</span>
            Les Horaires d’Or (Le pic de trafic 18h - 22h)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Le volume de recherche et d&apos;achats impulsifs sur Vinted explose entre <strong>18h00 et 22h00 du lundi au jeudi</strong>, ainsi que le <strong>dimanche soir à partir de 17h00</strong>. Publier à 10h du matin fait chuter votre visibilité de moitié car votre annonce aura vieilli avant le pic d&apos;affluence.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-sm">3</span>
            La Formule de Titre SEO Infaillible
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Le moteur interne de Vinted scanne chaque mot de votre titre. Bannissez les titres vagues comme <em>« joli pull »</em> ou <em>« robe soirée »</em>. Appliquez la formule :
          </p>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-[#C2B3FF]">
            [Marque] + [Modèle / Type exact] + [Couleur / Motif] + [Style / Coupe] + [Taille]
          </div>
          <p className="text-xs text-slate-400">
            Exemple : <em>« Veste Carhartt WIP Detroit Kaki Toile Épaisse Boxy Taille L »</em>
          </p>
        </section>

        {/* In-Article Promo Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#7C5CFC]/25 via-[#5B2FFF]/15 to-transparent border border-[#7C5CFC]/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Générez tout cela en 1,8 seconde avec l&apos;IA</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Folzi AI prend votre photo, applique cette formule de titre, rédige plus de 100 mots détaillés et insère 7 hashtags viraux.
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
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-sm">4</span>
            Les Mesures & Détails : Zéro question, Zéro litige
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Les acheteurs expérimentés fuient les annonces sans mesures par peur des mauvaises surprises de taille. Insérez systématiquement :
          </p>
          <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
            <li><strong>Largeur aisselle à aisselle (Pit to Pit)</strong></li>
            <li><strong>Longueur totale depuis le col jusqu&apos;au bas</strong></li>
            <li><strong>Composition exacte</strong> (ex : 100% coton lourd, sans élasthanne)</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-sm">5</span>
            La Stratégie des Réductions sur Lots (Bundles)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Activez dans vos paramètres : <strong>-15% dès 2 articles</strong> et <strong>-25% dès 3 articles</strong>. Cela incite l&apos;acheteur à fouiller votre dressing pour rentabiliser ses frais de port et augmente votre panier moyen de +65%.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-sm">6</span>
            La Règle des 7 Jours (Relisting Propre)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Si un article n&apos;a reçu aucun favori ni achat au bout de 7 jours, ne le laissez pas mourir dans les tréfonds de l&apos;application. Supprimez l&apos;annonce et republiez-la avec un nouvel angle de photo et un prix réajusté de 1 ou 2 € pour redéclencher le boost initial.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#09B1BA] text-black font-mono font-black flex items-center justify-center text-sm">7</span>
            L’Argus du Juste Prix (Sans Sous-Évaluation)
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Le juste prix se situe entre la médiane et le 60e percentile des ventes réelles terminées. Utilisez notre <Link href="/estimation-prix" className="text-[#09B1BA] font-bold hover:underline">Argus de Prix IA</Link> pour fixer le tarif parfait.
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
