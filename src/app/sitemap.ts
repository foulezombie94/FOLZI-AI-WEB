import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          fr: `${baseUrl}`,
          en: `${baseUrl}?lang=en`,
          es: `${baseUrl}?lang=es`,
        },
      },
    },
  ];
}
