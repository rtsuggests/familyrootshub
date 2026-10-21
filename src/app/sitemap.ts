import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { BLOG_ARTICLES } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://familyrootshub.com";
  // W3C date-only format (YYYY-MM-DD) without milliseconds for 100% Google Search Console compatibility
  const currentDate = new Date().toISOString().split("T")[0];

  // Core Static Landing & Compliance Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/free-starter-kit`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // The 5 Paid Product Pages under /templates/[slug]
  // Note: The 6th product (Free Starter Kit) is mapped directly above to its canonical /free-starter-kit URL
  const productPages: MetadataRoute.Sitemap = PRODUCTS.filter(
    (p) => p.slug !== "free-starter-kit"
  ).map((product) => ({
    url: `${baseUrl}/templates/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: product.id === "genealogy-research-binder" ? 0.95 : 0.9,
  }));

  // All 6 Authoritative Blog Articles
  const blogPages: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.isoDate.split("T")[0],
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
