import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, BookOpen, ArrowRight, Sparkles, User, Tag, Download } from "lucide-react";
import { BLOG_ARTICLES } from "@/data/blog";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Genealogy Research Guides, Archival Methods & Tutorials — FamilyRootsHub",
  description:
    "Explore authoritative genealogical tutorials on archival 3-ring binder organization, Ahnentafel numbering, US census schedules (1790–1950), gravestone symbol decoding, and GoodNotes digital planning.",
  keywords: [
    "genealogy blog",
    "family history guides",
    "archival binder tutorials",
    "how to read census records",
    "Ahnentafel numbering explanation",
    "gravestone symbolism genealogy",
    "GoodNotes genealogy planner"
  ],
  openGraph: {
    title: "Genealogy Research Guides & Archival Methods | FamilyRootsHub",
    description:
      "Expert step-by-step guides for organizing family records, transcribing censuses, and mastering archival preservation.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "FamilyRootsHub Genealogy Research Guides",
      },
    ],
  },
};

export default function BlogIndexPage() {
  const featuredArticle = BLOG_ARTICLES[0];
  const remainingArticles = BLOG_ARTICLES.slice(1);

  return (
    <div className="bg-cream-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-charcoal-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-forest-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-forest-900 font-semibold">Blog & Archival Guides</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-bronze-300">
            <BookOpen className="w-3.5 h-3.5 text-bronze-700" />
            <span>Archival Knowledge Base</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            Genealogical Methodology & Archival Vault Guides
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            In-depth tutorials, historical transcription guides, and preservation best practices crafted by certified lineage researchers to rescue family heritage from clutter and digital decay.
          </p>
        </div>

        {/* Featured Flagship Article Card */}
        {featuredArticle && (
          <div className="bg-cream-50 rounded-3xl border-2 border-forest-900/40 shadow-vault overflow-hidden transition-all hover:border-forest-800">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] bg-cream-200">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-forest-900 text-cream-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md border border-forest-700">
                    Featured Masterclass
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-charcoal-500">
                    <span className="font-semibold text-bronze-700 bg-bronze-100 px-2.5 py-0.5 rounded-full border border-bronze-200">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredArticle.slug}`} className="block group">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 group-hover:text-forest-700 transition-colors leading-snug">
                      {featuredArticle.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-sepiaBorder/70 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-sepiaBorder">
                      <Image
                        src={featuredArticle.author.avatar}
                        alt={featuredArticle.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-forest-900">{featuredArticle.author.name}</p>
                      <p className="text-[10px] text-charcoal-500">{featuredArticle.date}</p>
                    </div>
                  </div>

                  <Link href={`/blog/${featuredArticle.slug}`}>
                    <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Read Guide
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Remaining Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-sepiaBorder pb-4">
            <h2 className="font-serif text-2xl font-bold text-forest-900">
              All Research Guides & Tutorials ({BLOG_ARTICLES.length})
            </h2>
            <span className="text-xs text-charcoal-500 italic">Peer-reviewed archival standards</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-cream-50 rounded-2xl border border-sepiaBorder shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-vault transition-all duration-300 hover:border-forest-700/60 group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-cream-100/90 backdrop-blur-sm text-forest-900 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-sepiaBorder">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-[11px] text-charcoal-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1 text-bronze-600" />
                        {article.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-bronze-600" />
                        {article.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${article.slug}`} className="block">
                      <h3 className="font-serif text-lg font-bold text-forest-900 group-hover:text-forest-700 transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-sepiaBorder/60 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-sepiaBorder">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-charcoal-700 truncate max-w-[120px]">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-xs font-bold text-forest-800 hover:text-forest-600 flex items-center space-x-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Free Starter Kit Banner at Bottom of Blog */}
        <div className="bg-forest-900 text-cream-100 rounded-3xl p-8 sm:p-12 shadow-vault border border-forest-800 relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-300 bg-forest-800/80 px-3 py-1 rounded-full border border-forest-700">
              Complimentary Research Tool
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50 leading-tight">
              Begin Your Family Tree with Our Free 4-Generation Starter Kit
            </h2>
            <p className="text-sm text-charcoal-300 leading-relaxed">
              Download our archival PDF package containing the 4-Generation Pedigree Chart, Research Log, and Family Oral History Questionnaire. Zero cost, instant access.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/free-starter-kit">
                <Button variant="secondary" size="lg" leftIcon={<Download className="w-4 h-4 text-forest-950" />}>
                  Download Free Starter Kit (PDF)
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="outline" size="lg" className="border-forest-700 text-cream-100 hover:bg-forest-800">
                  Browse All 35+ Printable Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
