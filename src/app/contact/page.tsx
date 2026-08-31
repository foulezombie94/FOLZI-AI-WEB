import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowLeft, Mail, MessageSquare, ShieldCheck, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Support — Folzi AI",
  description: "Contactez l'équipe Folzi AI pour toute question technique, partenariat, presse ou support utilisateur.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact & Support Folzi AI",
    "description": "Page de contact officiel et support technique de Folzi AI.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Folzi AI",
      "email": "contact@folzi-ai.com",
      "url": "https://folzi-ai-web.vercel.app"
    }
  };

  return (
    <main className="min-h-screen bg-[#06040A] text-white flex flex-col justify-between">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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

      <div className="max-w-3xl mx-auto px-5 py-16 space-y-10 my-auto text-center sm:text-left">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] text-xs font-bold font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Support & Contact Officiel</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Une question ? Une suggestion ? <span className="gradient-purple-text">Contactez-nous.</span>
          </h1>
          <p className="text-slate-300 text-base max-w-xl leading-relaxed">
            Notre équipe technique et commerciale vous répond sous 24 heures ouvrées.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3 text-left backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-[#7C5CFC]/20 text-[#C2B3FF] flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Email Direct</h2>
            <p className="text-xs text-slate-400">Pour toute demande générale, presse ou partenariat :</p>
            <a href="mailto:contact@folzi-ai.com" className="text-sm font-bold text-[#C2B3FF] hover:underline font-mono block pt-1">
              contact@folzi-ai.com
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3 text-left backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-[#34D399]/20 text-[#6EE7B7] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white">Délai de Réponse</h2>
            <p className="text-xs text-slate-400">Nous traitons 100% des messages du lundi au vendredi.</p>
            <span className="text-xs font-bold text-[#6EE7B7] font-mono block pt-1">
              Temps moyen : &lt; 4 heures
            </span>
          </div>
        </div>

        {/* WebMCP Interactive Contact Form */}
        <form
          data-webmcp-tool="submit_contact_inquiry"
          data-webmcp-description="Submits a support inquiry, question, or partnership request to the Folzi AI team."
          action="mailto:contact@folzi-ai.com"
          method="post"
          encType="text/plain"
          className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4 text-left backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-[#E5DEFF]">
            <Send className="w-4 h-4 text-[#A88BFF]" />
            <span>Formulaire de Message Direct</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-bold text-slate-300 font-mono">
                Nom complet :
              </label>
              <input
                id="contact-name"
                name="fullName"
                type="text"
                required
                placeholder="ex. Alex Martin"
                data-webmcp-field="fullName"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-bold text-slate-300 font-mono">
                Email :
              </label>
              <input
                id="contact-email"
                name="emailAddress"
                type="email"
                required
                placeholder="votre@email.com"
                data-webmcp-field="emailAddress"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-bold text-slate-300 font-mono">
              Message ou Question :
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              required
              placeholder="Expliquez-nous votre besoin ou posez votre question..."
              data-webmcp-field="message"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-purple-600/30 hover:scale-[1.02] transition-all"
          >
            Envoyer le message
          </button>
        </form>
      </div>

      <footer className="max-w-7xl mx-auto w-full px-5 py-8 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Folzi AI. Support officiel pour les utilisateurs et partenaires.
      </footer>
    </main>
  );
}
