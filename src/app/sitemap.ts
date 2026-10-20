import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { BLOG_ARTICLES } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://familyrootshub.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-starter-kit`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/templates/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: product.id === "genealogy-research-binder" ? 0.95 : 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.isoDate),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
