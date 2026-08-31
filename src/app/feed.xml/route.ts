import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";

  const posts = [
    {
      title: "Comment Vendre sur Vinted en 24h : Guide Ultime & Algorithme 2026",
      slug: "comment-vendre-sur-vinted",
      desc: "Les 5 règles indispensables pour maximiser les vues, choisir les bons hashtags et vendre son dressing sans attendre.",
      date: "2026-01-15",
    },
    {
      title: "Modèle d'Annonce Leboncoin : Le Texte Parfait pour Vendre en 48h",
      slug: "modele-annonce-leboncoin",
      desc: "Structures types avec formules de politesse, précisions sur les dimensions et options de remise en main propre.",
      date: "2026-02-10",
    },
    {
      title: "Cote & Argus Sneakers d'Occasion : Comment Estimer Nike, Jordan, New Balance",
      slug: "cote-argus-sneakers-vintage",
      desc: "Évaluez la vraie valeur de vos paires selon l'état d'usure de la semelle et la présence de la boîte d'origine.",
      date: "2026-02-01",
    },
    {
      title: "Comment Reconnaître une Pièce Vintage Rare sans Étiquette ?",
      slug: "comment-detecter-faux-vintage",
      desc: "Coutures single stitch, zips Talon d'époque et astuces visuelles pour dater vos trouvailles de friperie.",
      date: "2026-02-15",
    },
  ];

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Folzi AI — Guides &amp; Conseils Vendeurs Seconde Main</title>
    <link>${baseUrl}/guides</link>
    <description>Astuces, algorithmes et stratégies pour maximiser vos ventes sur Vinted, Leboncoin et les plateformes de seconde main.</description>
    <language>fr-FR</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/guides/${post.slug}</link>
      <guid>${baseUrl}/guides/${post.slug}</guid>
      <description><![CDATA[${post.desc}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
