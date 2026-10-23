import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Download,
  Share2,
  ChevronRight,
  BookOpen,
  ShieldCheck,
  HelpCircle,
  Tag,
} from "lucide-react";
import { BLOG_ARTICLES, BlogArticle } from "@/data/blog";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { formatPrice } from "@/lib/utils";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const url = `https://familyrootshub.com/blog/${article.slug}`;
  const seoTitle = article.shortTitle || article.title;

  return {
    title: seoTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: `${seoTitle} | FamilyRootsHub`,
      description: article.metaDescription,
      url: url,
      type: "article",
      publishedTime: article.isoDate,
      authors: [article.author.name],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: article.metaDescription,
      images: [article.coverImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

function renderFormattedText(text: string): React.ReactNode {
  // Regex to match markdown links: [anchor text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const anchorText = match[1];
    const url = match[2];
    const isInternal = url.startsWith("/") || url.startsWith("#");

    if (isInternal) {
      parts.push(
        <Link
          key={`${match.index}-${url}`}
          href={url}
          className="text-forest-900 font-semibold underline decoration-bronze-400 decoration-2 underline-offset-2 hover:text-bronze-700 hover:decoration-bronze-600 transition-colors"
        >
          {anchorText}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`${match.index}-${url}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-forest-900 font-semibold underline decoration-bronze-400 decoration-2 underline-offset-2 hover:text-bronze-700 hover:decoration-bronze-600 transition-colors"
        >
          {anchorText}
        </a>
      );
    }
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function SingleBlogPostPage({ params }: BlogPageProps) {
  const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const otherArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const articleUrl = `https://familyrootshub.com/blog/${article.slug}`;

  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "Blog", url: "https://familyrootshub.com/blog" },
    { name: article.title, url: articleUrl },
  ];

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.metaDescription}
        url={articleUrl}
        image={article.coverImage}
        datePublished={article.isoDate}
        authorName={article.author.name}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />
      {article.content.faqs && article.content.faqs.length > 0 && (
        <FaqJsonLd faqs={article.content.faqs} />
      )}

      <div className="bg-cream-100 min-h-screen pb-16">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-sepiaBorder/60 bg-cream-50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs text-charcoal-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-forest-900">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-forest-900">
                Blog
              </Link>
              <span>/</span>
              <span className="text-forest-900 font-semibold truncate max-w-[280px] sm:max-w-md">
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="py-10 sm:py-14 bg-cream-50 border-b border-sepiaBorder">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs">
              <span className="font-bold text-bronze-800 bg-bronze-100 px-3 py-1 rounded-full border border-bronze-300 uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-charcoal-400">&bull;</span>
              <span className="text-charcoal-600 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-bronze-600" />
                {article.date}
              </span>
              <span className="text-charcoal-400">&bull;</span>
              <span className="text-charcoal-600 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-bronze-600" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans max-w-3xl">
              {article.tagline}
            </p>

            <div className="pt-4 border-t border-sepiaBorder/60 flex items-center justify-center sm:justify-start space-x-3.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-forest-800 shadow-sm">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-forest-900">{article.author.name}</p>
                <p className="text-xs text-charcoal-500">{article.author.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Reading Column (8 Columns) */}
            <article className="lg:col-span-8 space-y-10 bg-cream-50 p-6 sm:p-10 rounded-3xl border border-sepiaBorder shadow-sm">
              {/* Featured Cover Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-sepiaBorder shadow-vault bg-cream-200">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 65vw"
                  className="object-cover"
                />
              </div>

              {/* Introduction */}
              <div
                data-ai-summary="true"
                className="ai-summary p-5 sm:p-6 bg-cream-100 rounded-2xl border-l-4 border-forest-800 text-charcoal-800 text-sm sm:text-base leading-relaxed italic"
              >
                {renderFormattedText(article.content.introduction)}
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {article.content.sections.map((section) => (
                  <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 border-b border-sepiaBorder/60 pb-2">
                      {section.heading}
                    </h2>

                    {section.subheading && (
                      <h3 className="font-serif text-base sm:text-lg font-semibold text-bronze-700 italic">
                        {section.subheading}
                      </h3>
                    )}

                    <div className="space-y-3.5 text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{renderFormattedText(p)}</p>
                      ))}
                    </div>

                    {/* Optional Key Takeaway Callout */}
                    {section.keyTakeaway && (
                      <div
                        data-ai-summary="true"
                        className="ai-summary p-4 sm:p-5 bg-forest-900 text-cream-100 rounded-2xl border border-forest-800 space-y-1.5 shadow-sm"
                      >
                        <div className="flex items-center space-x-2 text-bronze-300 font-bold text-xs uppercase tracking-wider">
                          <Sparkles className="w-4 h-4 text-bronze-400" />
                          <span>Archival Key Takeaway</span>
                        </div>
                        <p className="text-xs sm:text-sm text-charcoal-100 font-serif leading-relaxed">
                          &ldquo;{section.keyTakeaway}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* Optional Responsive Data Table */}
                    {section.tableData && (
                      <div className="overflow-x-auto rounded-2xl border border-sepiaBorder shadow-sm my-6 bg-cream-100">
                        <table className="min-w-full divide-y divide-sepiaBorder text-left text-xs sm:text-sm">
                          <thead className="bg-forest-900 text-cream-100">
                            <tr>
                              {section.tableData.headers.map((h, hIdx) => (
                                <th key={hIdx} className="px-4 py-3 font-serif font-bold tracking-wider">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-sepiaBorder/60 bg-cream-50 text-charcoal-800">
                            {section.tableData.rows.map((row, rIdx) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-cream-50" : "bg-cream-100/60"}>
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`px-4 py-3 align-top ${
                                      cIdx === 0 ? "font-bold text-forest-900" : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Optional Bullet Points */}
                    {section.bulletPoints && (
                      <ul className="space-y-2.5 my-4 bg-cream-100/80 p-5 rounded-2xl border border-sepiaBorder/70">
                        {section.bulletPoints.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start text-xs sm:text-sm text-charcoal-800">
                            <CheckCircle2 className="w-4 h-4 text-forest-800 shrink-0 mt-0.5 mr-2.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Conclusion */}
              <div className="pt-8 border-t border-sepiaBorder space-y-4">
                <h3 className="font-serif text-xl font-bold text-forest-900">Summary & Final Guidance</h3>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                  {renderFormattedText(article.content.conclusion)}
                </p>
              </div>

              {/* FAQs Section */}
              {article.content.faqs && article.content.faqs.length > 0 && (
                <div className="pt-8 border-t border-sepiaBorder space-y-5">
                  <div className="flex items-center space-x-2 text-forest-900">
                    <HelpCircle className="w-5 h-5 text-bronze-600" />
                    <h3 className="font-serif text-2xl font-bold">Frequently Asked Questions</h3>
                  </div>

                  <div className="space-y-3">
                    {article.content.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-cream-100 p-5 rounded-2xl border border-sepiaBorder space-y-2"
                      >
                        <h4 className="font-serif font-bold text-forest-900 text-sm sm:text-base">
                          {faq.question}
                        </h4>
                        <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sticky Sidebar (4 Columns) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Product Match Card (with direct Gumroad Modal overlay!) */}
              <div className="bg-cream-50 rounded-2xl border-2 border-forest-900/60 p-6 shadow-vault space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-bronze-800 uppercase tracking-widest bg-bronze-100 px-2.5 py-0.5 rounded-full border border-bronze-200">
                    Recommended Tool
                  </span>
                  <div className="flex items-center text-xs font-bold text-forest-900">
                    <span>{formatPrice(article.relatedProduct.price)}</span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-sepiaBorder bg-cream-200">
                  <Image
                    src={article.relatedProduct.coverImage}
                    alt={article.relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-forest-900 leading-snug">
                    {article.relatedProduct.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-1.5 leading-relaxed">
                    {article.relatedProduct.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={article.relatedProduct.gumroadUrl}
                    className="gumroad-button block w-full"
                    data-gumroad-single-product="true"
                  >
                    <Button
                      variant="secondary"
                      size="md"
                      className="w-full shadow-md hover:shadow-lg"
                      leftIcon={<ShoppingBag className="w-4 h-4 text-forest-950" />}
                    >
                      <span>Get Instant Access &bull; {formatPrice(article.relatedProduct.price)}</span>
                    </Button>
                  </a>

                  <Link
                    href={`/templates/${article.relatedProduct.slug}`}
                    className="block text-center text-xs text-forest-800 hover:text-forest-600 underline font-medium mt-2.5"
                  >
                    View Product Details & Breakdown &rarr;
                  </Link>
                </div>
              </div>

              {/* Free Starter Kit Promo Box */}
              <div className="bg-forest-900 text-cream-100 rounded-2xl p-6 shadow-sm border border-forest-800 space-y-3.5">
                <div className="flex items-center space-x-2 text-bronze-300 text-xs font-bold uppercase tracking-wider">
                  <Download className="w-4 h-4" />
                  <span>Free Download</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-cream-50 leading-snug">
                  Instant 4-Generation Pedigree Kit (PDF)
                </h4>
                <p className="text-xs text-charcoal-300 leading-relaxed">
                  Start mapping your ancestors today with our free printable chart, interview questionnaire, and research log.
                </p>
                <Link href="/free-starter-kit" className="block pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-forest-700 text-cream-100 hover:bg-forest-800"
                  >
                    Download Free Kit ($0)
                  </Button>
                </Link>
              </div>

              {/* Table of Contents Box */}
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <div className="bg-cream-50 rounded-2xl border border-sepiaBorder p-5 shadow-sm space-y-3">
                  <div className="flex items-center space-x-2 text-forest-900 font-bold text-xs uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-bronze-600" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-1.5 text-xs">
                    {article.tableOfContents.map((toc) => (
                      <a
                        key={toc.id}
                        href={`#${toc.id}`}
                        className="block py-1 px-2 rounded-lg text-charcoal-700 hover:text-forest-900 hover:bg-cream-100 transition-colors"
                      >
                        {toc.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* Bottom Related Articles Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 border-t border-sepiaBorder">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                Continue Reading Archival Guides
              </h2>
              <Link href="/blog" className="text-xs font-bold text-forest-800 hover:text-forest-600 underline">
                View All Guides &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="bg-cream-50 rounded-2xl border border-sepiaBorder overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-cream-200">
                      <Image
                        src={rel.coverImage}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <span className="text-[10px] font-bold text-bronze-700 uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <h3 className="font-serif font-bold text-forest-900 text-sm group-hover:text-forest-700 line-clamp-2 leading-snug">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-charcoal-600 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 pt-0 text-[11px] text-charcoal-500 flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <span className="text-forest-800 font-bold group-hover:translate-x-0.5 transition-transform flex items-center">
                      Read &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
