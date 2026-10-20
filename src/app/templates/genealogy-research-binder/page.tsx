"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Star,
  Download,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Layers,
  FileText,
  Clock,
  Printer,
  Compass,
  ArrowRight,
  Zap,
  Award,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/Button";
import { StickyCheckoutBar } from "@/components/StickyCheckoutBar";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProductJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_FAQS } from "@/data/faqs";
import { formatPrice } from "@/lib/utils";

export default function GenealogyResearchBinderPage() {
  const product = PRODUCTS.find((p) => p.id === "genealogy-research-binder")!;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const images = [
    product.coverImage,
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
  ];

  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "Templates", url: "https://familyrootshub.com/templates" },
    {
      name: "35-Page Printable Research Binder",
      url: "https://familyrootshub.com/templates/genealogy-research-binder",
    },
  ];

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      // Call mock checkout API
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });

      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#1E3A2F", "#B8860B", "#F5EDD5"],
      });

      setCheckoutSuccess(true);
    } catch (e) {
      console.error(e);
      setCheckoutSuccess(true);
    } finally {
      setIsCheckingOut(false);
    }
  };

  const binderPhases = [
    {
      phase: "Phase 1: Master Pedigree & Direct Line Foundation",
      count: "7 Templates",
      description: "Establish your core ancestral lineages using universal Ahnentafel numbering standards.",
      items: [
        "Master 5-Generation Pedigree Spread (Gutter-aligned for 3-ring binder tabs)",
        "Spine Insert Labels (1.0-inch, 1.5-inch, 2.0-inch, and 3.0-inch D-ring formats)",
        "Family Surnames Master Index Register",
        "Color-Coded Section Divider Tabs (Paternal & Maternal lines)",
        "Ancestor Quick Reference Index (Numbered 1 through 63)",
      ],
    },
    {
      phase: "Phase 2: Family Groups, Vital Records & Biographies",
      count: "9 Templates",
      description: "Isolate individual family units, child birth orders, and primary source certificates.",
      items: [
        "Comprehensive Family Group Sheet (Husband, Wife, All Children)",
        "Individual Biographical Chronology (Year-by-year life timeline)",
        "Birth & Baptismal Primary Document Extraction Worksheet",
        "Marriage Bond, Banns & License Register",
        "Death Certificate, Obituary & Funeral Program Record Sheet",
        "Maiden Name Hypothesis & Tracking Matrix",
      ],
    },
    {
      phase: "Phase 3: Federal & State Census Extraction (1790–1950)",
      count: "8 Templates",
      description: "Transcribe microfilm enumerations with pre-printed historical column headers.",
      items: [
        "1790-1840 Head-of-Household Age Bracket Breakdown Table",
        "1850-1870 Every-Name & Real Estate Schedule Extraction",
        "1880-1920 Soundex, Citizenship & Immigration Census Worksheets",
        "1930-1950 Employment, Housing & Post-War Supplementary Form",
        "Decennial Census Cross-Reference Master Tracking Matrix",
      ],
    },
    {
      phase: "Phase 4: Land Deeds, Probate Wills & Military Service",
      count: "6 Templates",
      description: "Document property transfers, estate distributions, and military conflicts.",
      items: [
        "Metes-and-Bounds Land Deed & Grant Platting Grid",
        "Probate Inventory & Last Will & Testament Analysis Ledger",
        "Civil War, WWI & WWII Draft Registration / Pension Dossier",
        "Passenger Ship Manifest & Port of Departure Immigration Dossier",
      ],
    },
    {
      phase: "Phase 5: Cemetery Epigraphy, DNA & Brick-Wall Solutions",
      count: "5 Templates",
      description: "Field worksheets for headstones and deductive methods for elusive ancestors.",
      items: [
        "Headstone Condition, Inscription & Epitaph Transcription Sheet",
        "Cemetery Cluster & Plot Cartography Grid",
        "Autosomal DNA Match Triangulation & Centimorgan (cM) Matrix",
        "Brick-Wall Negative Evidence & Timeline Contradiction Log",
        "Repository & Library On-Site Research Register",
      ],
    },
  ];

  return (
    <>
      <ProductJsonLd
        product={product}
        url="https://familyrootshub.com/templates/genealogy-research-binder"
      />
      <FaqJsonLd faqs={PRODUCT_FAQS} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Sticky Checkout Bar */}
      <StickyCheckoutBar product={product} onCheckout={handleCheckout} />

      <div className="bg-cream-100 min-h-screen">
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
              <span className="text-forest-900 font-semibold truncate">
                35-Page Printable Research Binder
              </span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION / PRODUCT OVERVIEW */}
        <section className="py-10 sm:py-16 border-b border-sepiaBorder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Image Gallery */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-forest-800/60 shadow-vault bg-cream-200">
                  <Image
                    src={images[selectedImage]}
                    alt="Physical 35-Page Genealogy Binder in leather cover"
                    fill
                    priority
                    className="object-cover transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-forest-800 text-cream-100 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-forest-900">
                      Museum Archival Quality
                    </span>
                  </div>
                </div>

                {/* Thumbnail selector */}
                <div className="grid grid-cols-4 gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === idx
                          ? "border-bronze-500 ring-2 ring-bronze-300 shadow-sm"
                          : "border-sepiaBorder opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Binder preview thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-cream-50 rounded-xl border border-sepiaBorder flex items-center justify-between text-xs text-charcoal-600">
                  <div className="flex items-center space-x-2">
                    <Printer className="w-4 h-4 text-forest-800" />
                    <span>Formatted for standard US Letter &amp; A4 printing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-forest-800" />
                    <span>Instant PDF Download (Zero shipping wait)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing & Purchase Card */}
              <div className="lg:col-span-5 bg-cream-50 rounded-2xl border border-sepiaBorder shadow-vault p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-bronze-600 uppercase tracking-widest bg-bronze-100 px-2.5 py-0.5 rounded-full border border-bronze-200">
                      Bestseller &bull; Save 52% Today
                    </span>
                    <div className="flex items-center text-amber-500 text-xs font-bold">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-charcoal-800">{product.rating}</span>
                      <span className="text-charcoal-400 font-normal ml-1">
                        ({product.reviewsCount} verified reviews)
                      </span>
                    </div>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-sm text-charcoal-600 italic mt-1">
                    {product.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 bg-cream-100 rounded-xl border border-sepiaBorder flex items-baseline justify-between">
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif text-4xl font-bold text-forest-900">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-base text-charcoal-400 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <span className="text-xs text-forest-800 font-semibold block mt-0.5">
                      One-time payment &bull; Lifetime unrestricted use &amp; reprints
                    </span>
                  </div>
                  <span className="text-xs uppercase font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-1 rounded">
                    Save $15.00
                  </span>
                </div>

                {/* Feature Checkpoints */}
                <div className="space-y-2.5 text-xs text-charcoal-700">
                  {product.features.slice(0, 5).map((f, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5 mr-2.5" />
                      <span className="leading-normal">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Purchase Button & Guaranteed Badges */}
                <div className="space-y-3 pt-2">
                  <a
                    href="https://familyrootshub.gumroad.com/l/research-binder?wanted=true"
                    className="gumroad-button block w-full"
                    data-gumroad-single-product="true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="secondary"
                      size="xl"
                      className="w-full shadow-lg"
                      leftIcon={<ShoppingBag className="w-5 h-5 text-forest-950" />}
                    >
                      <span>Buy Instant Access &bull; ${product.price}</span>
                    </Button>
                  </a>

                  <div className="flex items-center justify-center space-x-4 text-[11px] text-charcoal-500 pt-1">
                    <span className="flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-forest-700 mr-1" />
                      30-Day Money Back Guarantee
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center">
                      <Zap className="w-3.5 h-3.5 text-bronze-600 mr-1" />
                      Instant PDF Delivery
                    </span>
                  </div>

                  {/* Payment Icons Simulation */}
                  <div className="pt-2 border-t border-sepiaBorder/60 flex items-center justify-center space-x-2 text-[10px] text-charcoal-500 uppercase tracking-wider">
                    <span>Guaranteed Secure Checkout:</span>
                    <span className="font-bold text-charcoal-700">Stripe &bull; LemonSqueezy &bull; Apple Pay &bull; PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED 300+ WORD "HOW TO USE THIS SYSTEM" GUIDE */}
        <section id="system-guide" className="py-16 sm:py-24 bg-cream-50 border-b border-sepiaBorder">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-200 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-forest-700" />
                <span>Standardized Archival Methodology</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
                How to Use This Archival Binder System
              </h2>
              <p className="text-sm text-charcoal-600 mt-2">
                A step-by-step master guide for organizing centuries of records into an enduring family archive.
              </p>
            </div>

            <div className="prose prose-forest text-charcoal-800 text-sm sm:text-base leading-relaxed space-y-6">
              <div className="bg-cream-100 p-6 rounded-2xl border border-sepiaBorder space-y-3">
                <h3 className="font-serif text-xl font-bold text-forest-900 m-0">
                  1. The Ahnentafel Numerical Framework: The Mathematical Backbone
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed m-0">
                  Every seasoned genealogist encounters the &quot;Name Trap&quot;: when three successive generations share the exact same given name (e.g., John Sterling, born 1782, 1808, and 1834). Our 35-page binder eliminates this ambiguity by enforcing the internationally accepted <strong>Ahnentafel Numbering System</strong> endorsed by the National Genealogical Society. Under this rule, the primary subject begins as Person Number 1. From there, every person&apos;s biological father is calculated as precisely <code>2n</code> (double their number), while their mother is designated as <code>2n + 1</code>.
                </p>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed m-0">
                  By assigning this immutable integer to each individual biographical chronology sheet, you can pull any ancestor&apos;s folder instantly without confusing collateral uncles, cousins, or second wives who share an identical surname.
                </p>
              </div>

              <div className="bg-cream-100 p-6 rounded-2xl border border-sepiaBorder space-y-3">
                <h3 className="font-serif text-xl font-bold text-forest-900 m-0">
                  2. Decennial Federal Census Extraction: Eliminating Microfilm Guesswork
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed m-0">
                  Between 1790 and 1950, the United States federal government conducted 17 population censuses. Yet, prior to 1850, enumerators recorded only the head of household by name, tallying remaining family members as numerical tick marks within age brackets. Our binder includes dedicated pre-printed extraction sheets mapped column-for-column to each decennial schedule.
                </p>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed m-0">
                  Instead of attempting to transcribe messy handwriting on blank notebook paper, you transcribe directly onto these pre-aligned columns—capturing immigration years, native tongues, literacy status, and military pensions without losing your spatial orientation. When examining siblings and adjacent farming neighbors (the FAN club), these worksheets preserve the context that reveals hidden maternal lines.
                </p>
              </div>

              <div className="bg-cream-100 p-6 rounded-2xl border border-sepiaBorder space-y-3">
                <h3 className="font-serif text-xl font-bold text-forest-900 m-0">
                  3. Physical Assembly: The Acid-Free Preservation Protocol
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed m-0">
                  To ensure your research survives intact for your descendants in 2150, we recommend printing the binder on 28lb or 32lb acid-free, lignin-free paper buffered with calcium carbonate (such as HP Premium 32lb). Each template in this kit incorporates a generous 0.75-inch inner gutter allowance, ensuring standard 3-ring or European 4-ring hole punches will never truncate vital text or ancestor names.
                </p>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed m-0">
                  Pair this system with pigment-based archival fine-point pens (like Sakura Pigma Micron) and non-PVC polypropylene document sleeves for fragile original marriage certificates and tintype photographs. With the included color-coded spine labels (sized for 1-inch, 1.5-inch, 2-inch, and 3-inch D-ring binders), your finished volume looks and functions like a master library accession.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FULL 35 TEMPLATES DETAILED BREAKDOWN */}
        <section className="py-16 sm:py-24 bg-cream-100 border-b border-sepiaBorder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-200 mb-3">
                <Layers className="w-3.5 h-3.5 text-bronze-600" />
                <span>Complete Inventory</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
                All 35 Archival Templates Included in This Kit
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 mt-2">
                Organized into five research phases so you can systematically tackle each branch of your tree.
              </p>
            </div>

            <div className="space-y-6">
              {binderPhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-8 shadow-sm hover:border-forest-700/60 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-sepiaBorder gap-2">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-900">
                        {phase.phase}
                      </h3>
                      <p className="text-xs text-charcoal-600 mt-0.5">{phase.description}</p>
                    </div>
                    <span className="text-xs font-bold text-bronze-700 bg-bronze-100 border border-bronze-200 px-3 py-1 rounded-full shrink-0">
                      {phase.count}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    {phase.items.map((item, i) => (
                      <div key={i} className="flex items-start text-xs sm:text-sm text-charcoal-800">
                        <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5 mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACCORDION FAQ WITH FULL SCHEMAPAGE DATA */}
        <FaqAccordion
          items={PRODUCT_FAQS}
          title="Frequently Asked Questions About the 35-Page Binder"
          subtitle="Clear answers on printing, compatibility, and archival permanence."
        />

        {/* BOTTOM BUY SECTION */}
        <section className="bg-forest-900 text-cream-100 py-16 text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50">
              Ready to Build Your Family&apos;s Permanent Heritage Archive?
            </h2>
            <p className="text-sm text-charcoal-200">
              Instant digital delivery. Print as many copies as you need for your entire family tree. Covered by our 30-day archival money-back guarantee.
            </p>
            <div className="pt-2">
              <a
                href="https://familyrootshub.gumroad.com/l/research-binder?wanted=true"
                className="gumroad-button inline-block"
                data-gumroad-single-product="true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="xl"
                  leftIcon={<ShoppingBag className="w-5 h-5 text-forest-950" />}
                  className="shadow-vault"
                >
                  Get Instant Access Now &bull; $14
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
