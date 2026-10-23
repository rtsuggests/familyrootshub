import React from "react";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Star,
  Download,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Layers,
  Clock,
  Printer,
  ChevronRight,
  Zap,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_FAQS } from "@/data/faqs";
import { PRODUCT_EDUCATIONAL_CONTENT } from "@/data/productEducationalContent";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProductJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { StickyCheckoutBar } from "@/components/StickyCheckoutBar";
import { ProductPurchaseBox } from "@/components/ProductPurchaseBox";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.filter(
    (p) => p.slug !== "genealogy-research-binder" && p.slug !== "free-starter-kit"
  ).map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const cleanTitle =
    product.slug === "census-extraction-worksheets"
      ? "Census Extraction Worksheets (1790–1950)"
      : product.slug === "goodnotes-digital-planner"
      ? "Heritage Tablet Digital Planner"
      : product.name;

  return {
    title: cleanTitle,
    description: product.shortDescription,
    openGraph: {
      title: `${cleanTitle} | FamilyRootsHub`,
      description: product.shortDescription,
      images: [product.coverImage],
    },
  };
}

export default function GenericProductPage({ params }: ProductPageProps) {
  // If user requests free-starter-kit via this route, redirect to dedicated landing
  if (params.slug === "free-starter-kit") {
    redirect("/free-starter-kit");
  }

  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "Templates", url: "https://familyrootshub.com/templates" },
    { name: product.name, url: `https://familyrootshub.com/templates/${product.slug}` },
  ];

  return (
    <>
      <ProductJsonLd
        product={product}
        url={`https://familyrootshub.com/templates/${product.slug}`}
      />
      <FaqJsonLd faqs={PRODUCT_FAQS} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <div className="bg-cream-100 min-h-screen pb-16">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-sepiaBorder/60 bg-cream-50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs text-charcoal-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-forest-900">
                Home
              </Link>
              <span>/</span>
              <Link href="/templates" className="hover:text-forest-900">
                Templates
              </Link>
              <span>/</span>
              <span className="text-forest-900 font-semibold truncate">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Hero */}
        <section className="py-10 sm:py-16 border-b border-sepiaBorder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Product Cover Gallery */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-forest-800/60 shadow-vault bg-cream-200">
                  <Image
                    src={product.coverImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    className="object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-forest-800 text-cream-100 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-forest-900">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-cream-50 rounded-xl border border-sepiaBorder flex items-center justify-between text-xs text-charcoal-600">
                  <div className="flex items-center space-x-2">
                    <Printer className="w-4 h-4 text-forest-800" />
                    <span>Format: {product.format}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-forest-800" />
                    <span>Instant Digital PDF Delivery</span>
                  </div>
                </div>
              </div>

              {/* Pricing & Checkout */}
              <div className="lg:col-span-5 bg-cream-50 rounded-2xl border border-sepiaBorder shadow-vault p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-bronze-600 uppercase tracking-widest bg-bronze-100 px-2.5 py-0.5 rounded-full border border-bronze-200">
                      {product.category}
                    </span>
                    <div className="flex items-center text-amber-500 text-xs font-bold">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-charcoal-800">{product.rating}</span>
                      <span className="text-charcoal-400 font-normal ml-1">
                        ({product.reviewsCount} reviews)
                      </span>
                    </div>
                  </div>

                  <h1 className="font-serif text-3xl font-bold text-forest-900 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-xs text-charcoal-500 italic mt-1">
                    {product.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="p-4 bg-cream-100 rounded-xl border border-sepiaBorder flex items-baseline justify-between">
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif text-4xl font-bold text-forest-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-base text-charcoal-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-forest-800 font-semibold block mt-0.5">
                      {product.pagesCount} Archival Pages &bull; Lifetime Unlimited Access
                    </span>
                  </div>
                  {product.originalPrice && (
                    <span className="text-xs uppercase font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-1 rounded">
                      Save ${(product.originalPrice - product.price).toFixed(0)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {product.fullDescription || product.shortDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-2 text-xs text-charcoal-700">
                  <div className="font-bold text-forest-900 uppercase tracking-wider text-[11px] mb-1">
                    Included Features:
                  </div>
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5 mr-2" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Purchase Action Box with Instant Archival PDF Delivery */}
                <ProductPurchaseBox product={product} />
              </div>
            </div>
          </div>
        </section>

        {/* Included Templates Breakdown */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center">
                <Layers className="w-5 h-5 text-bronze-300" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  Included Templates in This Kit ({product.includedTemplates.length})
                </h3>
                <p className="text-xs text-charcoal-500">
                  All templates formatted for 3-ring binder margin allowance and digital note-taking.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {product.includedTemplates.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-cream-100 p-3.5 rounded-xl border border-sepiaBorder/70 flex items-start text-xs sm:text-sm text-charcoal-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5 mr-2.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Deep-Dive & Archival Methodology (E-E-A-T) */}
        {PRODUCT_EDUCATIONAL_CONTENT[product.slug] && (
          <section className="py-14 sm:py-20 border-t border-b border-sepiaBorder bg-cream-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-bronze-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-bronze-700" />
                  <span>{PRODUCT_EDUCATIONAL_CONTENT[product.slug].standardsBadge}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
                  {PRODUCT_EDUCATIONAL_CONTENT[product.slug].title}
                </h2>
                <p className="text-sm font-medium text-bronze-700 italic">
                  {PRODUCT_EDUCATIONAL_CONTENT[product.slug].subtitle}
                </p>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed pt-2">
                  {PRODUCT_EDUCATIONAL_CONTENT[product.slug].methodologyOverview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {PRODUCT_EDUCATIONAL_CONTENT[product.slug].principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="bg-cream-100 p-6 sm:p-7 rounded-2xl border border-sepiaBorder shadow-sm space-y-3"
                  >
                    <h3 className="font-serif text-lg font-bold text-forest-900 leading-snug">
                      {principle.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-forest-900 text-cream-100 rounded-2xl border border-forest-800 text-xs sm:text-sm leading-relaxed flex items-start space-x-3.5 shadow-vault">
                <Sparkles className="w-5 h-5 text-bronze-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream-50 block font-serif text-sm mb-1">
                    Archival Material Calibration:
                  </strong>
                  <span className="text-charcoal-200">
                    {PRODUCT_EDUCATIONAL_CONTENT[product.slug].archivalNotes}
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <FaqAccordion items={PRODUCT_FAQS} />

        {/* Sticky Checkout Bar on Scroll */}
        <StickyCheckoutBar product={product} />
      </div>
    </>
  );
}
