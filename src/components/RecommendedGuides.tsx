import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { BLOG_ARTICLES, BlogArticle } from "@/data/blog";

interface RecommendedGuidesProps {
  currentProductSlug: string;
  className?: string;
}

const PRODUCT_GUIDE_MAP: Record<string, string[]> = {
  "genealogy-research-binder": [
    "organize-genealogy-research-binder",
    "ahnentafel-numbering-system-guide",
    "how-to-read-us-census-records",
  ],
  "master-heritage-vault": [
    "organize-genealogy-research-binder",
    "ahnentafel-numbering-system-guide",
    "cemetery-field-research-grave-symbols",
  ],
  "census-extraction-worksheets": [
    "how-to-read-us-census-records",
    "organize-genealogy-research-binder",
    "free-family-tree-starter-kit-guide",
  ],
  "cemetery-vital-records-kit": [
    "cemetery-field-research-grave-symbols",
    "how-to-read-us-census-records",
    "organize-genealogy-research-binder",
  ],
  "goodnotes-digital-planner": [
    "digital-genealogy-planner-ipad-goodnotes",
    "organize-genealogy-research-binder",
    "free-family-tree-starter-kit-guide",
  ],
};

export const RecommendedGuides: React.FC<RecommendedGuidesProps> = ({
  currentProductSlug,
  className = "",
}) => {
  const preferredSlugs = PRODUCT_GUIDE_MAP[currentProductSlug] || [];
  
  // Pick matched articles first, fill remaining up to 3 with other articles
  const matchedArticles: BlogArticle[] = [];
  
  preferredSlugs.forEach((slug) => {
    const found = BLOG_ARTICLES.find((a) => a.slug === slug);
    if (found && !matchedArticles.some((m) => m.slug === found.slug)) {
      matchedArticles.push(found);
    }
  });

  if (matchedArticles.length < 3) {
    BLOG_ARTICLES.forEach((article) => {
      if (matchedArticles.length < 3 && !matchedArticles.some((m) => m.slug === article.slug)) {
        matchedArticles.push(article);
      }
    });
  }

  if (matchedArticles.length === 0) return null;

  return (
    <section className={`py-14 sm:py-20 border-t border-sepiaBorder bg-cream-100/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 bg-forest-900/10 text-forest-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-forest-900/20">
            <BookOpen className="w-3.5 h-3.5 text-forest-800" />
            <span>Topical Authority & Methodology Guides</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
            Recommended Archival Research Guides & Tutorials
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            Not ready to order right now? Learn the proven evidence-evaluation protocols, census extraction workflows, and archival filing systems used by certified genealogists.
          </p>
        </div>

        {/* 3-Guide Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {matchedArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-cream-50 rounded-2xl border border-sepiaBorder overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-cream-200"
                >
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold text-cream-50 bg-forest-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-forest-800">
                      {article.category}
                    </span>
                  </div>
                </Link>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-charcoal-500">
                    <span>{article.readTime}</span>
                    <span>&bull;</span>
                    <span>By {article.author.name}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-forest-900 group-hover:text-bronze-700 transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-sepiaBorder/60 mt-4 flex items-center justify-between">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-xs font-bold text-forest-900 group-hover:text-bronze-700 transition-colors"
                >
                  <span>Read In-Depth Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-medium text-charcoal-500 italic">
                  Free Tutorial
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Hub Callout */}
        <div className="p-6 bg-cream-100 rounded-2xl border border-sepiaBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-bronze-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-bold text-forest-900 text-sm sm:text-base">
                Looking for more archival preservation resources?
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600">
                Browse our complete knowledge base covering census schedules, tombstone iconography, and evidence evaluation.
              </p>
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center text-xs sm:text-sm font-bold text-forest-900 hover:text-bronze-700 underline shrink-0 whitespace-nowrap self-start sm:self-center"
          >
            <span>Explore All 6 Research Guides</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
