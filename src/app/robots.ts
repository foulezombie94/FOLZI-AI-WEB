import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://folzi-ai-web.vercel.app";

  return {
    rules: [
      {
        userAgent: [
          "*",
          // xAI / Grok & Twitter
          "GrokBot",
          "xAI-Bot",
          "Grok",
          "Twitterbot",
          "XBot",
          // Google, Gemini, Vertex, DeepMind & AI Overviews
          "Google-Extended",
          "Googlebot",
          "Google-InspectionTool",
          "GoogleOther",
          "GoogleOther-Image",
          "GoogleOther-Video",
          "Google-CloudVertexBot",
          "Storebot-Google",
          "Mediapartners-Google",
          // OpenAI & ChatGPT
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "OpenAI",
          "OpenAI-Search",
          // Anthropic & Claude
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Claude",
          // Perplexity AI
          "PerplexityBot",
          "Perplexity-Search",
          // DeepSeek
          "DeepSeekBot",
          "DeepSeek",
          // Meta / LLaMA
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "FacebookBot",
          "facebookexternalhit",
          // Apple Intelligence & Siri Search
          "Applebot",
          "Applebot-Extended",
          // Amazon & Bedrock
          "Amazonbot",
          "Amazon-Search",
          // Microsoft, Bing, Copilot & Azure AI
          "Bingbot",
          "BingPreview",
          "msnbot",
          "Microsoft-Search",
          "Copilot",
          // Mistral AI
          "MistralAI",
          "MistralBot",
          // Cohere
          "cohere-ai",
          "cohere-training-data-crawler",
          // ByteDance / Doubao / TikTok
          "Bytespider",
          "ByteDance",
          // Alibaba / Qwen
          "AlibabaBot",
          "QwenBot",
          // Tencent / Hunyuan
          "TencentSearch",
          "HunyuanBot",
          // Baidu / ERNIE
          "Baiduspider",
          "BaiduSpider-AI",
          // Naver / HyperCLOVA
          "Yeti",
          "NaverBot",
          // Common Crawl & Open Source AI Datasets
          "CCBot",
          "Diffbot",
          "Omgilibot",
          "omgili",
          "AI2Bot",
          "AllenAI",
          "Crawlspace",
          "ImagesiftBot",
          "PetalBot",
          "DataForSeoBot",
          // AI Search Engines
          "YouBot",
          "Bravebot",
          "DuckDuckBot",
          "DuckDuckGo-Favicons-Bot",
          "YandexBot",
          "Qwantify",
          "Sogou",
          "Exabot",
          "SeznamBot",
          // AI Research, Coding & Search Agents
          "CursorBot",
          "ReplitBot",
          "Devin",
          "HuggingFaceBot",
          "TXYZBot",
          "Phind",
          "KomoBot",
          "Sourcegraph",
          "Tabnine",
        ],
        allow: [
          "/",
          "/vinted",
          "/leboncoin",
          "/estimation-prix",
          "/guides",
          "/guides/*",
          "/llms.txt",
          "/llms-full.txt",
          "/.well-known/ai-plugin.json",
          "/feed.xml",
        ],
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}



