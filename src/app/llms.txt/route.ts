import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";

  const content = `# Folzi AI

> Folzi AI is an AI-powered visual and text assistant for second-hand sellers, resellers, and thrift stores to automate marketplace listings on Vinted, Leboncoin, and eBay from a single photo.

Folzi AI analyzes clothing items, sneakers, and vintage pieces using computer vision, generates marketplace-optimized SEO titles and descriptions, embeds viral aesthetic hashtags (#Y2K, #QuietLuxury, #Gorpcore), and estimates real-time resale prices based on 2,400+ market sales.

## Features

- [Visual AI Scanner](${baseUrl}/): Instant clothing recognition, fabric analysis, and brand identification in 1.8 seconds.
- [Vinted AI Generator](${baseUrl}/vinted): Viral SEO titles, 100+ word descriptions, and trending aesthetic hashtags.
- [Leboncoin AI Generator](${baseUrl}/leboncoin): Polite, structured descriptions with dimensions, delivery choices, and pickup instructions.
- [Argus Price Estimator](${baseUrl}/estimation-prix): Real-time marketplace valuation based on 2,400+ completed sales.

## Guides

- [Guide - Sell on Vinted in 24h](${baseUrl}/guides/comment-vendre-sur-vinted): 7 rules for the 2026 Vinted algorithm including drip publishing and golden hours.
- [Guide - Leboncoin Listing Templates](${baseUrl}/guides/modele-annonce-leboncoin): Tested templates for furniture, tech, and clothing with negotiation buffer strategy.
- [Guide - Sneaker Argus & Valuation](${baseUrl}/guides/cote-argus-sneakers-vintage): Inspection checklist and condition grading table from Deadstock to Used.
- [Guide - Vintage Authentication](${baseUrl}/guides/comment-detecter-faux-vintage): How to authenticate vintage garments using single stitch hems, Talon zippers, and RN numbers.

## Optional

- [Contact & Support](${baseUrl}/contact): Official support team reachable 24/7 at contact@folzi-ai.com.
- [Full LLM Knowledge Corpus](${baseUrl}/llms-full.txt): Exhaustive knowledge dump and comparison tables for deep AI agent ingestion.
- [RSS Feed](${baseUrl}/feed.xml): Real-time RSS 2.0 syndication feed for new guides and algorithm updates.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}


