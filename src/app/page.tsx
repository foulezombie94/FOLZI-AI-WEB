"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { LanguageProvider } from "@/context/LanguageContext";
import FolziHero from "@/components/FolziHero";
import FolziBenefits from "@/components/FolziBenefits";
import FolziKeyFigures from "@/components/FolziKeyFigures";
import FolziSuccessStory from "@/components/FolziSuccessStory";

// Dynamically split interactive tools & below-the-fold sections
const LiveAiDemo = dynamic(() => import("@/components/LiveAiDemo"), { ssr: true });
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language || "fr"];
      let target = "fr";

      for (const lang of browserLangs) {
        const code = (lang || "").toLowerCase().split("-")[0];
        if (code === "fr") {
          target = "fr";
          break;
        }
        if (code === "es") {
          target = "es";
          break;
        }
        if (code === "en") {
          target = "en";
          break;
        }
      }

      router.replace(`/${target}`);
    }
  }, [router]);

  return (
    <LanguageProvider locale="fr">
      <main id="main-content" className="min-h-screen bg-[#06040A] text-white">
        
        {/* 1. Hero: Capsule Navbar + Punchy Headline + 3D CTA + Triple Phone App Showcase + Laurel Metrics + Platform Badges */}
        <FolziHero />

      {/* 2. Benefits: 3 Large Cards with Green Checkmark Icons & Lifestyle Imagery */}
      <FolziBenefits />

      {/* 3. Interactive Live AI Simulator */}
      <LiveAiDemo />

      {/* 4. Core Features Showcase: 3 Large Discovery Cards */}
      <FeaturesGrid />

      {/* 5. Key Figures in Green Laurel Wreaths: 98,7%, 1,8s, +240% */}
      <FolziKeyFigures />

      {/* 6. Success Story: Split Photo Transformation Card (+1 840 €) */}
      <FolziSuccessStory />

      {/* 7. Verified Seller Reviews with 5 Gold Stars & Store Badges */}
      <Testimonials />

      {/* 8. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 9. Luxury Modern Footer with App Store & Google Play badges */}
      <Footer />

    </main>
    </LanguageProvider>
  );
}
