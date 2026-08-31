import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FAQS } from "@/data/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";

export const viewport: Viewport = {
  themeColor: "#06040A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Folzi AI — Vendez 3x plus vite sur Vinted & Leboncoin grâce à l'IA",
    template: "%s | Folzi AI",
  },
  description:
    "Prenez 1 seule photo : l'intelligence artificielle Folzi AI génère l'annonce parfaite, le titre SEO viral, les hashtags tendance et le prix argus en moins de 2 secondes. 4 crédits offerts immédiatement.",
  keywords: [
    "Folzi AI",
    "ia vinted",
    "generateur annonce vinted",
    "vendre sur vinted 2026",
    "booster ventes vinted",
    "ia leboncoin",
    "rediger annonce leboncoin",
    "estimation prix vetement occasion",
    "argus vinted",
    "cote sneakers occasion",
    "scanner photo vetement",
    "y2k vinted",
    "quiet luxury",
    "gorpcore",
    "sezane occasion",
    "carhartt vintage",
    "revendeur seconde main",
    "IA dressing",
  ],
  authors: [{ name: "Folzi AI Team", url: siteUrl }],
  creator: "Folzi AI",
  publisher: "Folzi AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
      "en-US": "/?lang=en",
      "es-ES": "/?lang=es",
    },
  },
  openGraph: {
    title: "Folzi AI — L'IA qui transforme vos photos en ventes sur Vinted & Leboncoin",
    description:
      "Prenez 1 photo : l'IA génère l'annonce parfaite, le titre SEO viral, les hashtags et le prix argus en 2 secondes. 4 crédits offerts sans carte bancaire.",
    url: siteUrl,
    siteName: "Folzi AI",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Folzi AI — Multipliez par 3 vos ventes Vinted & Leboncoin avec l'IA",
    description:
      "Scannez votre dressing en 1 clic. Annonce, hashtags et prix conseillé générés en 1.8 seconde.",
    creator: "@folzi_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Folzi AI",
        "operatingSystem": "Android, iOS, Web",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "4 crédits d'annonces IA offerts gratuitement sans carte bancaire.",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "15420",
          "bestRating": "5",
          "worstRating": "1",
        },
        "description":
          "Studio d'intelligence artificielle visuelle pour scanner des vêtements et générer des annonces prêtes à vendre pour Vinted, Leboncoin et plateformes de seconde main.",
      },
      {
        "@type": "Organization",
        "name": "Folzi AI",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "sameAs": [
          "https://github.com/foulezombie94/Folzi-AI",
          "https://github.com/foulezombie94/FOLZI-AI-WEB",
        ],
      },
      {
        "@type": "WebSite",
        "name": "Folzi AI",
        "url": siteUrl,
        "inLanguage": ["fr-FR", "en-US", "es-ES"],
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  const webMcpData = {
    schema_version: "v1",
    tools: [
      {
        name: "calculate_wardrobe_earnings",
        description: "Calculates estimated resale earnings on Vinted and Leboncoin based on wardrobe item count and clothing category.",
        parameters: {
          type: "object",
          properties: {
            itemCount: {
              type: "integer",
              minimum: 2,
              maximum: 40,
              description: "Number of unused clothing items to estimate.",
            },
            dressingType: {
              type: "string",
              enum: ["standard", "vintage", "premium"],
              description: "Category of garments: standard (18€/item), vintage (38€/item), or premium/sneakers (75€/item).",
            },
          },
          required: ["itemCount", "dressingType"],
        },
      },
      {
        name: "submit_contact_inquiry",
        description: "Submits a support inquiry, question, or partnership request to the Folzi AI team.",
        parameters: {
          type: "object",
          properties: {
            fullName: { type: "string", description: "Sender's name." },
            emailAddress: { type: "string", format: "email", description: "Sender's email address." },
            message: { type: "string", description: "Support or partnership message content." },
          },
          required: ["fullName", "emailAddress", "message"],
        },
      },
    ],
  };

  return (
    <html lang="fr" className={`w-full bg-[#06040A] text-white ${inter.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/webmcp+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webMcpData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.__webmcp_tools__ = ${JSON.stringify(webMcpData.tools)};
                if (navigator.modelContext && typeof navigator.modelContext.registerTool === 'function') {
                  ${JSON.stringify(webMcpData.tools)}.forEach(function(tool) {
                    try { navigator.modelContext.registerTool(tool); } catch(e) {}
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body className="w-full min-h-screen bg-[#06040A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}