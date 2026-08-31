import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";

  const content = `# Folzi AI

> Folzi AI is an AI-powered visual and text assistant designed for second-hand sellers, resellers, and thrift stores to automate marketplace listings (Vinted, Leboncoin, eBay) from 1 photo.

## Core Capabilities
- [Visual AI Scanner](${baseUrl}/): Instant clothing recognition, fabric analysis, and brand identification in 1.8 seconds.
- [Vinted AI Generator](${baseUrl}/vinted): Viral SEO titles, 100+ word descriptions, and trending aesthetic hashtags (#Y2K, #QuietLuxury, #Gorpcore).
- [Leboncoin AI Generator](${baseUrl}/leboncoin): Polite, structured descriptions with dimensions, delivery choices, and pickup instructions.
- [Argus Price Estimator](${baseUrl}/estimation-prix): Real-time marketplace valuation based on 2,400+ completed sales.

## Documentation & Guides
- [Guide - Sell on Vinted in 24h](${baseUrl}/guides/comment-vendre-sur-vinted): 7 rules for the 2026 Vinted algorithm (drip publishing, 18h-22h peak hours, pit-to-pit measurements).
- [Guide - Leboncoin Listing Templates](${baseUrl}/guides/modele-annonce-leboncoin): Tested templates for furniture, tech, and clothing with +10% negotiation margin strategy.
- [Guide - Sneaker Argus & Valuation](${baseUrl}/guides/cote-argus-sneakers-vintage): Inspection checklist (star loss, heel drag) and condition grading table.
- [Guide - Vintage Authentication](${baseUrl}/guides/comment-detecter-faux-vintage): How to authenticate vintage garments (single stitch hems before 1995, Talon/Scovill zippers, RN numbers).

## Reference & Support
- [Contact & Support](${baseUrl}/contact): Official support team reachable at contact@folzi-ai.com.
- [Full LLM Knowledge Corpus](${baseUrl}/llms-full.txt): Exhaustive knowledge dump and comparison tables for AI ingestion.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

