"use client";

import React from "react";
import dynamic from "next/dynamic";
import YazioHero from "@/components/YazioHero";
import YazioBenefits from "@/components/YazioBenefits";
import YazioKeyFigures from "@/components/YazioKeyFigures";
import YazioSuccessStory from "@/components/YazioSuccessStory";
import YazioMoreFeatures from "@/components/YazioMoreFeatures";

// Dynamically split interactive tools & below-the-fold sections
const LiveAiDemo = dynamic(() => import("@/components/LiveAiDemo"), { ssr: true });
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), { ssr: true });
const EarningsCalculator = dynamic(() => import("@/components/EarningsCalculator"), { ssr: true });
const MarketplaceTabs = dynamic(() => import("@/components/MarketplaceTabs"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const PricingSection = dynamic(() => import("@/components/PricingSection"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: true });
const DownloadCta = dynamic(() => import("@/components/DownloadCta"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#06040A] text-white">
      
      {/* 1. YAZIO Style Hero: Capsule Navbar + Punchy Headline + 3D CTA + Triple Phone App Showcase + Laurel Metrics + Platform Badges */}
      <YazioHero />

      {/* 2. YAZIO Style Benefits: 3 Large Cards with Green Checkmark Icons & Lifestyle Imagery */}
      <YazioBenefits />

      {/* 3. Interactive Live AI Simulator */}
      <LiveAiDemo />

      {/* 4. Core Features Showcase: 3 Large Discovery Cards */}
      <FeaturesGrid />

      {/* 5. YAZIO Style Key Figures in Green Laurel Wreaths: 98,7%, 1,8s, +240% */}
      <YazioKeyFigures />

      {/* 6. YAZIO Style Success Story: Split Photo Transformation Card (+1 840 €) */}
      <YazioSuccessStory />

      {/* 7. Wardrobe Earnings Calculator with Slider & WebMCP */}
      <EarningsCalculator />

      {/* 8. Marketplace Specific Strategies (Vinted vs Leboncoin with 1-click copy) */}
      <MarketplaceTabs />

      {/* 9. Verified Seller Reviews with 5 Gold Stars & Store Badges */}
      <Testimonials />

      {/* 10. Secondary Discovery Features: Smart adding, Keywords database, Multi-platform */}
      <YazioMoreFeatures />

      {/* 11. Transparent Pricing & Credits */}
      <PricingSection />

      {/* 12. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 13. Grand Finale Download CTA with 3D Button & QR Code */}
      <DownloadCta />

      {/* 14. Luxury Modern Footer with App Store & Google Play badges */}
      <Footer />

    </main>
  );
}
