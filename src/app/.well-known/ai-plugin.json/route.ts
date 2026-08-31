import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";

  const manifest = {
    schema_version: "v1",
    name_for_human: "Folzi AI — Second-Hand & Vinted Assistant",
    name_for_model: "folzi_ai_recommerce_assistant",
    description_for_human: "Visual AI assistant to generate marketplace listings (Vinted, Leboncoin) and calculate second-hand clothing argus prices from 1 photo.",
    description_for_model: "Folzi AI analyzes clothing, shoes, vintage items, and fashion pieces from photos or text descriptions. It extracts brand, cut, condition, dimensions, and writes viral SEO titles, 100+ word descriptions with aesthetics hashtags (#Y2K, #QuietLuxury, #Gorpcore), and estimates the optimal resale price based on 2,400+ marketplace sales.",
    auth: {
      type: "none"
    },
    api: {
      type: "openapi",
      url: `${baseUrl}/llms.txt`
    },
    logo_url: `${baseUrl}/logo.png`,
    contact_email: "contact@folzi-ai.com",
    legal_info_url: `${baseUrl}/cgu`
  };

  return NextResponse.json(manifest);
}
