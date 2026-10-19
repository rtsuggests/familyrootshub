"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, BookOpen, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCategory, Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const CATEGORIES: ("All" | ProductCategory)[] = [
  "All",
  "Pedigree & Trees",
  "Census Extractors",
  "Digital Planners (GoodNotes)",
  "Cemetery & Vital Records",
];

export default function TemplatesCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProductCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "Templates & Planners", url: "https://familyrootshub.com/templates" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onPurchase={(p) => (window.location.href = `/templates/${p.slug}`)}
      />

      <div className="bg-cream-100 min-h-screen pb-20">
        {/* Header Banner */}
        <section className="bg-forest-900 text-cream-100 py-12 sm:py-16 border-b border-forest-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-xs text-charcoal-300 mb-3" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-cream-50">
                  Home
                </Link>
                <span>/</span>
                <span className="text-bronze-300 font-medium">Templates</span>
              </nav>

              <div className="inline-flex items-center space-x-2 bg-forest-800 text-bronze-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-700 mb-3">
                <Layers className="w-3.5 h-3.5 text-bronze-400" />
                <span>Archival Template Catalog</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-cream-50 leading-tight">
                Genealogy Research Templates &amp; Digital Planners
              </h1>

              <p className="text-sm sm:text-base text-charcoal-200 mt-3 leading-relaxed">
                Standardized, acid-free compatible printable kits and GoodNotes tablet planners designed for amateur family scribes and certified genealogists.
              </p>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <div className="sticky top-[73px] z-30 bg-cream-50/95 backdrop-blur-md border-b border-sepiaBorder shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const count =
                    cat === "All"
                      ? PRODUCTS.length
                      : PRODUCTS.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 shrink-0",
                        isSelected
                          ? "bg-forest-800 text-cream-50 shadow-sm border border-forest-900"
                          : "bg-cream-100 text-charcoal-700 hover:bg-cream-200 border border-sepiaBorder"
                      )}
                    >
                      <span>{cat}</span>
                      <span
                        className={cn(
                          "px-1.5 py-0.2 rounded-full text-[10px]",
                          isSelected
                            ? "bg-forest-700 text-cream-100"
                            : "bg-cream-300 text-charcoal-600"
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search templates, census, pedigree..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-cream-100 text-charcoal-900 placeholder-charcoal-400 text-xs rounded-xl border border-sepiaBorder focus:outline-none focus:ring-2 focus:ring-forest-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-charcoal-500 font-medium">
              Showing <strong>{filteredProducts.length}</strong> available archival systems
            </span>
            {selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-xs text-forest-800 hover:underline font-semibold"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  featured={product.id === "genealogy-research-binder"}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onPurchase={(p) => (window.location.href = `/templates/${p.slug}`)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-cream-50 border border-sepiaBorder rounded-2xl p-12 text-center max-w-md mx-auto space-y-3">
              <BookOpen className="w-12 h-12 text-charcoal-400 mx-auto" />
              <h3 className="font-serif text-lg font-bold text-forest-900">
                No templates matched your query
              </h3>
              <p className="text-xs text-charcoal-600">
                Try searching for broader keywords like &quot;pedigree&quot;, &quot;census&quot;, or reset your filters.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Bottom helper card */}
          <div className="mt-16 bg-cream-50 border border-sepiaBorder rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-xl font-bold text-forest-900">
                Need a Custom Archival Template or Church Schedule?
              </h3>
              <p className="text-xs text-charcoal-600 max-w-xl">
                We frequently commission specialized templates for parish registers, military rolls, and immigration manifests based on researcher requests.
              </p>
            </div>
            <a
              href="mailto:support@familyrootshub.com?subject=Custom%20Genealogy%20Template%20Request"
              className="shrink-0"
            >
              <Button variant="outline" size="md">
                Request a Custom Form
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
