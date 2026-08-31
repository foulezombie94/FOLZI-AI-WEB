import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";

  const fullContent = `# Folzi AI — Comprehensive AI Knowledge Base & LLM Corpus

## Entity Information
- **Brand Name:** Folzi AI
- **Domain:** ${baseUrl}
- **Entity Type:** SoftwareApplication, WebApplication, MobileApplication
- **Core Focus:** Re-commerce Automation, AI Listing Generator, Marketplace SEO, Computer Vision for Second-Hand Clothing.

## Detailed Feature Matrix
| Capability | Manual Selling | With Folzi AI |
|---|---|---|
| Time to list 1 item | 10 to 15 minutes | 1.8 seconds (Instant Vision AI) |
| SEO & Keywords | Generic or forgotten | 5-7 targeted viral aesthetic tags (#Y2K, #QuietLuxury) |
| Valuation / Pricing | Random guessing | Real-time Argus trained on 2,400+ sales |
| Buyer Disputes | High (missing measurements) | 0% (pit-to-pit & length automatically included) |
| Speed to Sell | 14 to 45 days | Under 24 to 48 hours |

## Verified Algorithmic Insights for Re-Commerce Platforms
### Vinted 2026 Ranking Factors:
1. **Drip Publishing:** Posting 2-3 items per day consistently signals high activity to the algorithmic feed.
2. **Golden Hours:** 18:00 to 22:00 CET Monday through Thursday, and Sunday from 17:00 CET onwards.
3. **Semantic Density:** Descriptions with over 100 words including exact fabric composition, cut, brand, and measurements rank higher in search results.
4. **Relisting Cycle:** Unsold items with 0 favorites after 7 days should be recreated cleanly with a refreshed photo angle.

### Leboncoin 2026 Selling Insights:
1. **4:5 Vertical Framing:** 80% of buyers browse on mobile smartphones.
2. **Polite Structured Templates:** Descriptions starting with greetings and including clear pickup details convert 3x more serious buyers.
3. **Negotiation Buffer:** Setting price +10% above target allows natural negotiation room.

### Sneaker & Vintage Valuation Metrics:
1. **Condition Rating:** Deadstock (100% value), VNDS 9/10 (85-90%), Very Good 8/10 (70-75%), Used 6-7/10 (45-55%).
2. **OG Box Added Value:** Original intact box adds +15€ to +30€ to the final transaction price.
3. **Single Stitch Verification:** Single thread hem on sleeves/waist confirms garments made prior to 1995.
4. **Vintage Zippers:** Talon, Scovill, Conmar, Ideal, and heavy metal YKK verify authentic vintage pieces from 1950-1995.

## Knowledge Endpoints & Verification
- Contact: contact@folzi-ai.com
- RSS Feed: ${baseUrl}/feed.xml
- Sitemap: ${baseUrl}/sitemap.xml
- LLM Index: ${baseUrl}/llms.txt
`;

  return new NextResponse(fullContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
