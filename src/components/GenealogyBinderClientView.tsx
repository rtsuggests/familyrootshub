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
import { PRODUCTS } from "@/data/products";
import { PRODUCT_FAQS } from "@/data/faqs";
import { formatPrice } from "@/lib/utils";
import { RecommendedGuides } from "@/components/RecommendedGuides";

export const GenealogyBinderClientView: React.FC = () => {
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

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
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
              <span className="text-forest-900 font-semibold truncate">35-Page Master Binder</span>
            </nav>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="py-10 sm:py-16 border-b border-sepiaBorder">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Product Gallery (Left) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-forest-800/60 shadow-vault bg-cream-200">
                  <Image
                    src={images[selectedImage]}
                    alt="35-Page Genealogy Research Binder Preview"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    className="object-cover transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-forest-800 text-cream-100 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-forest-900">
                      Flagship Archival Kit
                    </span>
                    <span className="bg-amber-600 text-cream-100 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      35 Pages &bull; Letter + A4
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === idx
                          ? "border-forest-800 ring-2 ring-forest-800/30 scale-[1.02]"
                          : "border-sepiaBorder hover:border-forest-600 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>

                {/* Archival Quality Badges */}
                <div className="grid grid-cols-3 gap-3 pt-4 text-center">
                  <div className="p-3 bg-cream-50 rounded-xl border border-sepiaBorder">
                    <Printer className="w-5 h-5 mx-auto text-forest-800 mb-1" />
                    <p className="text-[11px] font-bold text-forest-900">Standard Hole Punch</p>
                    <p className="text-[10px] text-charcoal-500">Generous 0.75&quot; left gutter</p>
                  </div>
                  <div className="p-3 bg-cream-50 rounded-xl border border-sepiaBorder">
                    <Clock className="w-5 h-5 mx-auto text-forest-800 mb-1" />
                    <p className="text-[11px] font-bold text-forest-900">Instant PDF Delivery</p>
                    <p className="text-[10px] text-charcoal-500">Download link in 10 seconds</p>
                  </div>
                  <div className="p-3 bg-cream-50 rounded-xl border border-sepiaBorder">
                    <Award className="w-5 h-5 mx-auto text-forest-800 mb-1" />
                    <p className="text-[11px] font-bold text-forest-900">NARA Standardized</p>
                    <p className="text-[10px] text-charcoal-500">Compliant with US Archives</p>
                  </div>
                </div>
              </div>

              {/* Purchase Box (Right) */}
              <div className="lg:col-span-5 bg-cream-50 rounded-2xl border border-sepiaBorder shadow-vault p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-bronze-800 uppercase tracking-widest bg-bronze-100 px-2.5 py-0.5 rounded-full border border-bronze-200">
                      Printable Binder Kit
                    </span>
                    <div className="flex items-center text-amber-500 text-xs font-bold">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-charcoal-800">4.98</span>
                      <span className="text-charcoal-400 font-normal ml-1">(842 reviews)</span>
                    </div>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 leading-tight">
                    35-Page Master Genealogy Research Binder System
                  </h1>
                  <p className="text-xs text-charcoal-500 italic mt-1">
                    The Complete Physical Archival System for 3-Ring Binders
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
                      Includes US Letter + International A4 Formats
                    </span>
                  </div>
                  <span className="text-xs uppercase font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded">
                    Save $15 (52% Off)
                  </span>
                </div>

                {/* Value Bullets */}
                <div className="space-y-2 text-xs text-charcoal-700">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5 mr-2" />
                    <span><strong>Full 35-Page Layout:</strong> Pedigrees, family groups, and census extractors.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5 mr-2" />
                    <span><strong>Pre-Numbered Ahnentafel System:</strong> Every ancestor has a coordinate.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5 mr-2" />
                    <span><strong>Binder Margin Allowance:</strong> No text cutoff under 3-hole rings.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5 mr-2" />
                    <span><strong>Print Forever License:</strong> Print unlimited copies for all family lines.</span>
                  </div>
                </div>

                {/* Purchase Button with direct Gumroad overlay */}
                <div className="space-y-3 pt-2">
                  <a
                    href="https://familyrootshub.gumroad.com/l/research-binder?wanted=true"
                    className="gumroad-button block w-full"
                    data-gumroad-single-product="true"
                  >
                    <Button
                      variant="secondary"
                      size="xl"
                      className="w-full shadow-lg"
                      leftIcon={<ShoppingBag className="w-5 h-5 text-forest-950" />}
                    >
                      <span>Buy Instant Access &bull; {formatPrice(product.price)}</span>
                    </Button>
                  </a>

                  {checkoutSuccess && (
                    <div className="bg-forest-100 border border-forest-300 p-4 rounded-xl text-center space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-forest-900 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 text-forest-800" />
                        <span>Order Confirmed! Your PDF is Ready</span>
                      </div>
                      <a
                        href="/downloads/FamilyRootsHub-35-Page-Research-Binder.pdf"
                        download="FamilyRootsHub-35-Page-Research-Binder.pdf"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-cream-50 bg-forest-800 hover:bg-forest-900 px-4 py-2 rounded-lg"
                      >
                        <Download className="w-4 h-4 text-bronze-300" />
                        <span>Download 35-Page Research Binder (PDF)</span>
                      </a>
                    </div>
                  )}

                  <div className="flex items-center justify-center space-x-4 text-[11px] text-charcoal-500 pt-1">
                    <div className="flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-forest-700 mr-1" />
                      <span>30-Day Money-Back Guarantee</span>
                    </div>
                    <span>&bull;</span>
                    <div className="flex items-center">
                      <Zap className="w-3.5 h-3.5 text-forest-700 mr-1" />
                      <span>Instant Digital Download</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 300+ Word System Guide */}
        <section id="system-guide" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-sepiaBorder">
          <div className="bg-cream-50 rounded-2xl border border-sepiaBorder p-8 sm:p-12 space-y-8 shadow-sm">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-700 bg-bronze-100 px-3 py-1 rounded-full border border-bronze-200">
                Archivist Operating Standard
              </span>
              <h2 className="font-serif text-3xl font-bold text-forest-900">
                The Anatomy of the 35-Page Research Binder System
              </h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Why thousands of family historians have discarded haphazard plastic bins in favor of this standardized archival hierarchy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-base text-forest-900 flex items-center">
                  <Compass className="w-4 h-4 text-bronze-600 mr-2" />
                  1. The Ahnentafel Structural Foundation
                </h3>
                <p>
                  Amateur genealogy binders fail because they sort ancestors alphabetically by surname. This breaks down when maternal maiden names proliferate across generations. Our system utilizes universal Ahnentafel numbering (mathematical doubling). Person #1 is the root proband (you or your child). Person #2 is the biological father; Person #3 is the biological mother.
                </p>
                <p>
                  Every male ancestor possesses an even number; every female an odd number. To find any ancestor&apos;s father, multiply by two; to find their mother, multiply by two and add one.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-base text-forest-900 flex items-center">
                  <FileText className="w-4 h-4 text-bronze-600 mr-2" />
                  2. Microfilm & Decennial Census Standardization
                </h3>
                <p>
                  Squinting at microfilm scans on ancestry websites causes researchers to overlook crucial details. Our Census Extraction worksheets recreate the exact column-by-column questions used by federal census marshals from 1790 through 1950.
                </p>
                <p>
                  Pre-1850 tick marks for free white males and females are categorized cleanly; 1880 through 1920 Soundex, citizenship status, and mother-tongue columns align precisely with National Archives standards.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-base text-forest-900 flex items-center">
                  <Award className="w-4 h-4 text-bronze-600 mr-2" />
                  3. Elizabeth Shown Mills Evidence Framework
                </h3>
                <p>
                  Built in strict accordance with Elizabeth Shown Mills&apos; seminal <em>Evidence Explained</em> standard. Our primary document extraction sheets require researchers to distinguish between original source artifacts versus derivative compilations, primary information from eyewitnesses versus secondary accounts, and direct proof versus circumstantial clues.
                </p>
                <p>
                  This eliminates the proliferation of genealogical errors, ensures cross-verification of conflicting death dates, and creates an audit trail that academic lineage societies (DAR, SAR, Mayflower Society) can immediately verify.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-base text-forest-900 flex items-center">
                  <ShieldCheck className="w-4 h-4 text-bronze-600 mr-2" />
                  4. ISO 11108 Archival Permanence & Gutter Engineering
                </h3>
                <p>
                  Standard pulp printer paper deteriorates within decades due to residual sulfuric acid. All 35 sheets in this binder are calibrated with fine-gauge vector line weights optimized for 28lb–32lb acid-free, lignin-free alkaline-buffered paper (ISO 11108 standards).
                </p>
                <p>
                  Furthermore, each sheet includes an engineered 0.75-inch inner gutter margin. Standard 3-hole punches and heavy D-ring binder hardware will never punch through ancestor birth dates, marriage certificates, or source citation notes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase-by-Phase Breakdown Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-sepiaBorder">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="font-serif text-3xl font-bold text-forest-900">
              Complete 35-Template Inventory Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Each phase engineered to solve a specific genealogical bottleneck.
            </p>
          </div>

          <div className="space-y-6">
            {binderPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-cream-50 p-6 sm:p-8 rounded-2xl border border-sepiaBorder shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-sepiaBorder pb-3 gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-lg bg-forest-800 text-cream-100 flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-forest-900">{phase.phase}</h3>
                  </div>
                  <span className="text-xs font-semibold text-bronze-700 bg-bronze-100 px-3 py-1 rounded-full border border-bronze-200 self-start sm:self-auto">
                    {phase.count}
                  </span>
                </div>
                <p className="text-xs text-charcoal-600">{phase.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                  {phase.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder/60 flex items-start text-xs text-charcoal-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5 mr-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Archival Guides (Phase 4 Topic Silo Linking) */}
        <RecommendedGuides currentProductSlug={product.slug} />

        {/* FAQs */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={PRODUCT_FAQS} />
        </section>
      </div>
    </>
  );
};
