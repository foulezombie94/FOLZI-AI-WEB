import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Download, CheckCircle2, MessageSquare, MapPin, ShieldCheck, Clock, Flame, Lightbulb, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "Modèle d'Annonce Leboncoin Gratuit : 3 Exemples de Textes qui Vendent en 48h",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F56B2A]/20 border border-[#F56B2A]/40 text-[#FFA071] text-xs font-bold font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Templates & Stratégie Leboncoin 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Modèles d’Annonces Leboncoin : Les 3 Textes Parfaits pour Vendre en 48h
          </h1>
          <p className="text-slate-400 text-sm">Publié par l&apos;équipe Recherche Folzi AI · Lecture 6 min · Mis à jour Août 2026</p>
        </div>

        {/* Intro */}
        <div className="p-6 rounded-3xl bg-[#0E0A21]/90 border border-[#F56B2A]/30 space-y-3 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[#FFA071] font-bold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>La Psychologie de l&apos;Acheteur Leboncoin</span>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed">
            Sur Leboncoin, la méfiance est le premier frein à l&apos;achat. Une annonce sans politesse, sans dimensions précises ou avec des photos floues est immédiatement ignorée. Une description de plus de 150 mots avec une structure rassurante reçoit en moyenne <strong>3 fois plus de messages d&apos;acheteurs sérieux</strong>.
          </p>
        </div>

        {/* Section 1 : Règles clés */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#F56B2A] text-black font-mono font-black flex items-center justify-center text-sm">1</span>
            Les 4 Règles d’Or d’une Annonce Leboncoin Rentable
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-300">
              <p className="font-bold text-white">📸 Format Portrait 4:5 Mobile</p>
              <p className="text-slate-400">Plus de 80% des utilisateurs consultent sur smartphone. Photographiez verticalement en lumière naturelle, sans flash.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-300">
              <p className="font-bold text-white">⏰ Horaires de Mise en Ligne</p>
              <p className="text-slate-400">Publiez le <strong>dimanche entre 11h et 14h</strong> ou en semaine entre <strong>20h et 22h</strong> pour un pic de visibilité immédiat.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-300">
              <p className="font-bold text-white">💶 La Marge de Négociation (+10%)</p>
              <p className="text-slate-400">Affichez un prix 10% au-dessus de votre objectif réel pour laisser l&apos;acheteur négocier et conclure la vente avec satisfaction.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-slate-300">
              <p className="font-bold text-white">🏷️ Titre de moins de 60 caractères</p>
              <p className="text-slate-400">Formule : <code>[Marque] + [Modèle / Type] + [État] + [Caractéristique clé]</code></p>
            </div>
          </div>
        </section>

        {/* Template 1 : Meubles & Déco */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#F56B2A] text-black font-mono font-black flex items-center justify-center text-sm">2</span>
            Modèle Type 1 : Meubles & Maison (Prêt à Copier)
          </h2>
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 font-mono text-xs text-slate-300 relative group">
            <p className="text-[#FFA071] font-bold">Bonjour,</p>
            <p>Je vends cette <strong>[Table / Commode / Canapé]</strong> de la marque <strong>[Marque / Ex: IKEA Hemnes]</strong> en <strong>[Très bon état / Comme neuf]</strong>.</p>
            <p className="text-slate-400">
              📏 <strong>Dimensions exactes :</strong><br/>
              - Longueur : XX cm | Largeur : XX cm | Hauteur : XX cm<br/>
              - Matière : Bois massif / Chêne clair<br/>
              - Raison de la vente : Réaménagement d&apos;intérieur
            </p>
            <p className="text-slate-400">
              📍 <strong>Modalités de retrait :</strong><br/>
              - À venir récupérer sur place à [Ville / Quartier / Étage avec/sans ascenseur]<br/>
              - Aide possible pour charger dans votre véhicule<br/>
              - Paiement sécurisé Leboncoin ou espèces lors de la remise en main propre
            </p>
            <p className="text-[#FFA071] font-bold">N&apos;hésitez pas à me contacter par la messagerie pour toute information complémentaire. Réponse rapide assurée.<br/>Bien cordialement.</p>
          </div>
        </section>

        {/* Template 2 : High-Tech & Électronique */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-xl bg-[#F56B2A] text-black font-mono font-black flex items-center justify-center text-sm">3</span>
            Modèle Type 2 : High-Tech & Objets de Valeur
          </h2>
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 font-mono text-xs text-slate-300">
            <p className="text-[#FFA071] font-bold">Bonjour,</p>
            <p>Je mets en vente mon <strong>[Appareil / Modèle précis et capacité]</strong> en parfait état de fonctionnement.</p>
            <p className="text-slate-400">
              🔋 <strong>État & Accessoires :</strong><br/>
              - État esthétique : Impeccable, toujours protégé par une coque et un verre trempé<br/>
              - Santé de la batterie : XX%<br/>
              - Vendu complet avec : boîte d&apos;origine, câble d&apos;origine et facture d&apos;achat
            </p>
            <p className="text-slate-400">
              📦 <strong>Livraison & Remise :</strong><br/>
              - Envoi soigné et protégé sous 24h via Mondial Relay / Colissimo avec numéro de suivi<br/>
              - Remise en main propre possible dans un lieu public sécurisé
            </p>
            <p className="text-[#FFA071] font-bold">Prix ferme et justifié au vu de l&apos;état irréprochable. Premier contact via la messagerie Leboncoin.<br/>Cordialement.</p>
          </div>
        </section>

        {/* In-Article Promotion Widget */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#F56B2A]/25 via-[#D94F0E]/15 to-transparent border border-[#F56B2A]/40 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Rédigez cette description en 1 seule photo</h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                Photographiez votre objet : Folzi AI extrait les caractéristiques techniques, rédige la politesse et estime le juste prix en 1,8 seconde.
              </p>
            </div>
            <Link
              href="/leboncoin"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F56B2A] text-white font-bold text-sm shadow-lg shadow-orange-600/30 hover:scale-105 transition-all shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tester l&apos;IA Leboncoin</span>
            </Link>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Guide et modèles officiels pour les vendeurs Leboncoin.
      </footer>
    </main>
  );
}
