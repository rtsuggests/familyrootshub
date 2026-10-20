import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://familyrootshub.com";

  const privatePaths = [
    "/api/",
    "/admin/",
    "/dashboard/",
    "/checkout/",
    "/_next/",
    "/private/",
  ];

  return {
    rules: [
      // General Crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      // Googlebot (Standard & AI Overviews)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: privatePaths,
      },
      // Google-Extended (Gemini & Search AI)
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: privatePaths,
      },
      // OpenAI ChatGPT Indexer
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: privatePaths,
      },
      // ChatGPT Search Live Agent
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: privatePaths,
      },
      // SearchGPT Specialized Discovery Crawler
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Perplexity AI Answer Engine
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: privatePaths,
      },
      // Anthropic Claude Indexer & Search Agents
      {
        userAgent: ["ClaudeBot", "anthropic-ai"],
        allow: "/",
        disallow: privatePaths,
      },
      // Apple Intelligence Agents
      {
        userAgent: ["Applebot", "Applebot-Extended"],
        allow: "/",
        disallow: privatePaths,
      },
      // Cohere AI Engine
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: privatePaths,
      },
      // Microsoft Bing & Copilot
      {
        userAgent: "bingbot",
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
