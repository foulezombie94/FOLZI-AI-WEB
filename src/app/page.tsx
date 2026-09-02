"use client";

import React from "react";
import dynamic from "next/dynamic";
import FolziHero from "@/components/FolziHero";
import FolziBenefits from "@/components/FolziBenefits";
import FolziKeyFigures from "@/components/FolziKeyFigures";
import FolziSuccessStory from "@/components/FolziSuccessStory";

// Dynamically split interactive tools & below-the-fold sections
const LiveAiDemo = dynamic(() => import("@/components/LiveAiDemo"), { ssr: true });
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), { ssr: true });
const EarningsCalculator = dynamic(() => import("@/components/EarningsCalculator"), { ssr: true });
const MarketplaceTabs = dynamic(() => import("@/components/MarketplaceTabs"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FaqSection = dynamic(() => import("@/components/FaqSection"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
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

      {/* 7. Wardrobe Earnings Calculator with Slider & WebMCP */}
      <EarningsCalculator />

      {/* 8. Marketplace Specific Strategies (Vinted vs Leboncoin with 1-click copy) */}
      <MarketplaceTabs />

      {/* 9. Verified Seller Reviews with 5 Gold Stars & Store Badges */}
      <Testimonials />

      {/* 10. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 11. Luxury Modern Footer with App Store & Google Play badges */}
      <Footer />

    </main>
  );
}
