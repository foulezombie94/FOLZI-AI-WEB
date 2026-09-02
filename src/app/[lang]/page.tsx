import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { LanguageProvider, Locale } from "@/context/LanguageContext";
import FolziHero from "@/components/FolziHero";
import FolziBenefits from "@/components/FolziBenefits";
import FolziKeyFigures from "@/components/FolziKeyFigures";
import FolziSuccessStory from "@/components/FolziSuccessStory";

const LiveAiDemo = dynamic(() => import("@/components/LiveAiDemo"), { ssr: true });
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export function generateStaticParams() {
  return [
    { lang: "fr" },
    { lang: "en" },
    { lang: "es" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = (lang === "en" || lang === "es") ? lang : "fr";

  if (locale === "en") {
    return {
      title: "Folzi AI — #1 AI Resale Assistant for Vinted, Leboncoin, Wallapop & eBay",
      description: "Boost your second-hand sales by 3x with AI. Snap a picture to estimate fair market value and generate winning listings in 2 seconds.",
      alternates: {
        canonical: "https://folzi-ai-web.vercel.app/en",
        languages: {
          "fr-FR": "https://folzi-ai-web.vercel.app/fr",
          "en-US": "https://folzi-ai-web.vercel.app/en",
          "es-ES": "https://folzi-ai-web.vercel.app/es",
        },
      },
    };
  }

  if (locale === "es") {
    return {
      title: "Folzi AI — Asistente IA de Reventa para Vinted, Leboncoin, Wallapop y eBay",
      description: "Multiplica tus ventas de segunda mano por 3 con IA. 1 sola foto para tasar, redactar anuncios atractivos y vender más rápido.",
      alternates: {
        canonical: "https://folzi-ai-web.vercel.app/es",
        languages: {
          "fr-FR": "https://folzi-ai-web.vercel.app/fr",
          "en-US": "https://folzi-ai-web.vercel.app/en",
          "es-ES": "https://folzi-ai-web.vercel.app/es",
        },
      },
    };
  }

  return {
    title: "Folzi AI — Assistant Vendeur IA Vinted, Leboncoin & eBay",
    description: "Multipliez vos ventes de seconde main par 3 grâce à l'IA. 1 seule photo pour estimer le prix juste, rédiger l'annonce parfaite et vendre en 24h.",
    alternates: {
      canonical: "https://folzi-ai-web.vercel.app/fr",
      languages: {
        "fr-FR": "https://folzi-ai-web.vercel.app/fr",
        "en-US": "https://folzi-ai-web.vercel.app/en",
        "es-ES": "https://folzi-ai-web.vercel.app/es",
      },
    },
  };
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = (lang === "en" || lang === "es") ? lang : "fr";

  return (
    <LanguageProvider locale={locale}>
      <main id="main-content" className="min-h-screen bg-[#06040A] text-white">
        
        {/* 1. Hero */}
        <FolziHero />

        {/* 2. Benefits */}
        <FolziBenefits />

        {/* 3. Live AI Simulator */}
        <LiveAiDemo />

        {/* 4. Discovery Cards */}
        <FeaturesGrid />

        {/* 5. Key Figures */}
        <FolziKeyFigures />

        {/* 6. Success Story */}
        <FolziSuccessStory />

        {/* 7. Reviews */}
        <Testimonials />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. Footer */}
        <Footer />

      </main>
    </LanguageProvider>
  );
}