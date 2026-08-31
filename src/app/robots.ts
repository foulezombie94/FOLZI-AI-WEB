import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";

  return {
    rules: [
      {
        userAgent: [
          "*",
          // OpenAI & ChatGPT
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "OpenAI",
          // Anthropic & Claude
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          // Perplexity AI
          "PerplexityBot",
          "Perplexity-Search",
          // Google, Gemini, Vertex & AI Overviews
          "Google-Extended",
          "Googlebot",
          "GoogleOther",
          "GoogleOther-Image",
          "GoogleOther-Video",
          // Meta / LLaMA
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "FacebookBot",
          // Apple Intelligence & Siri Search
          "Applebot",
          "Applebot-Extended",
          // Amazon & Bedrock
          "Amazonbot",
          // Microsoft, Bing & Copilot
          "Bingbot",
          "BingPreview",
          "msnbot",
          "Microsoft-Search",
          // Cohere
          "cohere-ai",
          "cohere-training-data-crawler",
          // Mistral AI
          "MistralAI",
          "MistralBot",
          // ByteDance / TikTok
          "Bytespider",
          // Common Crawl & Open Source AI Corpi
          "CCBot",
          "Diffbot",
          "Omgilibot",
          "omgili",
          "AI2Bot",
          "AllenAI",
          // AI Search Engines
          "YouBot",
          "Bravebot",
          "DuckDuckBot",
          "DuckDuckGo-Favicons-Bot",
          "YandexBot",
          "Qwantify",
          "Baiduspider",
          "Sogou",
          // AI Coding Assistants & Scrapers
          "CursorBot",
          "ReplitBot",
          "Devin",
          "HuggingFaceBot",
          "TXYZBot",
        ],
        allow: ["/", "/vinted", "/leboncoin", "/estimation-prix", "/guides", "/guides/*", "/llms.txt", "/llms-full.txt", "/feed.xml"],
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}


