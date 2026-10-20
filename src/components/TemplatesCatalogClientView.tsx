"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, BookOpen, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCategory, Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const CATEGORIES: ("All" | ProductCategory)[] = [
  "All",
  "Pedigree & Trees",
  "Census Extractors",
  "Digital Planners (GoodNotes)",
  "Cemetery & Vital Records",
];

export const TemplatesCatalogClientView: React.FC = () => {
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

  return (
    <>
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
                <Link href="/" className="hover:text-cream-100">
                  Home
                </Link>
                <span>/</span>
                <span className="text-bronze-300 font-semibold">Templates Catalog</span>
              </nav>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream-50 leading-tight">
                Printable Genealogy Templates & Archival Planners
              </h1>
              <p className="mt-4 text-sm sm:text-base text-charcoal-200 leading-relaxed font-sans">
                Professional-grade pedigree charts, census extraction forms, and digital tablet planners. Formatted for 3-ring binder margins and zero-bleed printing.
              </p>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="bg-cream-50 rounded-2xl shadow-vault border border-sepiaBorder p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search templates (e.g., Census, GoodNotes, Ahnentafel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-cream-100 border border-sepiaBorder rounded-xl text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-forest-800"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border",
                    selectedCategory === cat
                      ? "bg-forest-800 text-cream-50 border-forest-900 shadow-sm"
                      : "bg-cream-100 text-charcoal-700 border-sepiaBorder hover:bg-cream-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-charcoal-500 font-medium">
              Showing <span className="font-bold text-forest-900">{filteredProducts.length}</span> certified archival systems
            </p>
            {selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-xs text-bronze-700 hover:text-bronze-800 underline font-semibold"
              >
                Clear Category Filter
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-cream-50 rounded-2xl border border-dashed border-sepiaBorder">
              <BookOpen className="w-10 h-10 text-charcoal-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-forest-900">No Templates Found</h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Try adjusting your search query or switching category filters.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          )}

          {/* Archival Guarantee Banner */}
          <section className="mt-16 bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-forest-800 uppercase tracking-widest bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
                100% Archival Standard
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
                Engineered for Century-Long Permanence
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 max-w-xl">
                Every template features pre-calculated Ahnentafel indexing, 0.75&quot; left margins for three-hole punch rings, and high-contrast typography designed for zero ghosting on 32lb acid-free paper.
              </p>
            </div>
            <Link href="/templates/genealogy-research-binder" className="shrink-0">
              <Button variant="primary" size="md">
                Explore Flagship Binder System
              </Button>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};
