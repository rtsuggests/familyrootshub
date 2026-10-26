"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Download,
  BookOpen,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Star,
  Users,
  Compass,
  FileSpreadsheet,
  Layers,
  ArrowRight,
  Lock,
  Flame,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { CousinCalculator } from "@/components/CousinCalculator";
import { ArchivalGearGrid } from "@/components/ArchivalGearGrid";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FaqJsonLd, WebSiteJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { useModal } from "@/components/ModalContext";
import { FEATURED_PRODUCTS, PRODUCTS } from "@/data/products";
import { TESTIMONIALS } from "@/data/testimonials";
import { HOMEPAGE_FAQS } from "@/data/faqs";
import { Product } from "@/types";
import { generateStarterKitBlob } from "@/lib/utils";

const leadSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export default function HomePage() {
  const { openLeadModal } = useModal();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
  });

  const onLeadBannerSubmit = async (data: LeadFormValues) => {
    try {
      const savedLeads = JSON.parse(localStorage.getItem("frh_captured_leads") || "[]");
      savedLeads.push({
        ...data,
        timestamp: new Date().toISOString(),
        source: "homepage_banner",
      });
      localStorage.setItem("frh_captured_leads", JSON.stringify(savedLeads));

      await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#1E3A2F", "#B8860B", "#F5EDD5"],
      });

      setLeadSuccess(true);

      // Auto download
      const blob = generateStarterKitBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "FamilyRootsHub-4-Gen-Pedigree-Starter-Kit.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      setLeadSuccess(true);
    }
  };

  const handlePurchase = (product: Product) => {
    window.location.href = `/templates/${product.slug}`;
  };

  return (
    <>
      <WebSiteJsonLd />
      <FaqJsonLd faqs={HOMEPAGE_FAQS} />
      <ItemListJsonLd
        name="Featured Archival Genealogy Systems"
        description="Certified archival printable pedigree charts, research binders, and digital planners."
        items={FEATURED_PRODUCTS.map((p, idx) => ({
          name: p.name,
          url: p.slug === "free-starter-kit" ? "https://familyrootshub.com/free-starter-kit" : `https://familyrootshub.com/templates/${p.slug}`,
          position: idx + 1,
        }))}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onPurchase={handlePurchase}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-sepiaBorder bg-cream-100">
        {/* Subtle decorative background watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#1E3A2F_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Dual CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-bronze-100/90 text-bronze-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
                <span>Certified Archival Organization System</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold text-forest-900 leading-[1.12] tracking-tight">
                Turn Centuries of Family Clutter into an{" "}
                <span className="text-bronze-600 underline decoration-bronze-300 decoration-wavy decoration-2">
                  Organized Heritage Vault
                </span>
              </h1>

              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Rescuing family memories from chaotic shoeboxes, scattered Ancestry printouts, and digital cloud decay. Our standardized 35-page physical binder templates and digital planners preserve your lineage for generations.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  onClick={() => openLeadModal()}
                  variant="primary"
                  size="xl"
                  leftIcon={<Download className="w-5 h-5 text-bronze-300" />}
                  className="w-full sm:w-auto shadow-heritage-lg"
                >
                  Download Free Starter Kit
                </Button>

                <Link href="/templates/genealogy-research-binder" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="xl"
                    leftIcon={<BookOpen className="w-5 h-5 text-forest-800" />}
                    className="w-full sm:w-auto"
                  >
                    Explore Master Binder ($14)
                  </Button>
                </Link>
              </div>

              {/* Social Proof snippet under buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-charcoal-600">
                <div className="flex items-center space-x-1.5">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-cream-100 object-cover"
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Eleanor Vance"
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-cream-100 object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Marcus Thornton"
                    />
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-cream-100 object-cover"
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Sarah Miller"
                    />
                  </div>
                  <div className="flex items-center text-amber-500 font-bold ml-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-charcoal-800 ml-1">4.98 / 5.0</span>
                  </div>
                  <span>(1,840+ genealogists)</span>
                </div>

                <div className="flex items-center space-x-1 text-forest-800 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-forest-700" />
                  <span>NARA &amp; NGS Archival Protocols</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Mockup Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Binder Stack Mockup Card */}
                <div className="relative bg-cream-50 rounded-2xl border-2 border-forest-800/80 shadow-vault p-6 sm:p-7 overflow-hidden">
                  {/* Decorative Archival Label Tab */}
                  <div className="absolute top-0 right-8 bg-forest-900 text-cream-50 text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-b-lg shadow-sm border-x border-b border-forest-800">
                    Archival Heirloom Edition
                  </div>

                  {/* Main Binder Image */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-sepiaBorder mb-5 shadow-inner">
                    <Image
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
                      alt="Physical 35-Page Genealogy Research Binder mockup"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent flex items-end p-4">
                      <div className="text-cream-50 text-xs">
                        <span className="font-serif font-bold text-sm block">
                          The 35-Page Master Research Binder
                        </span>
                        <span className="text-bronze-300">
                          Pre-printed Ahnentafel Pedigrees, Census &amp; Cemetery Worksheets
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-charcoal-700">
                    <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>35 Modular Sheets</span>
                    </div>
                    <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>US Letter &amp; A4 Ready</span>
                    </div>
                    <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>1790-1950 Census Grids</span>
                    </div>
                    <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                      <span>Spine Labels (3 Sizes)</span>
                    </div>
                  </div>

                  {/* Direct Link to Binder */}
                  <Link
                    href="/templates/genealogy-research-binder"
                    className="mt-5 block w-full text-center bg-forest-800 hover:bg-forest-700 text-cream-50 text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-colors"
                  >
                    View Binder Contents &amp; Sample Pages &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEAD MAGNET FUNNEL BANNER */}
      <section className="bg-forest-900 text-cream-100 py-12 border-b border-forest-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-800/90 border border-bronze-400/40 rounded-2xl p-6 sm:p-10 shadow-heritage-lg flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-bronze-300 bg-forest-950/60 px-3 py-1 rounded-full border border-forest-700">
                <Flame className="w-3.5 h-3.5 text-bronze-400" />
                <span>Instant Free Download</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-tight">
                Get the 4-Generation Pedigree Chart &amp; Daily Research Log
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
                Enter your email for an immediate download of our foundational Ahnentafel tree chart and archive repository log. Acid-free print ready.
              </p>
            </div>

            {/* Email Opt-in Form */}
            <div className="w-full lg:w-auto shrink-0 max-w-md">
              {!leadSuccess ? (
                <form
                  onSubmit={handleSubmit(onLeadBannerSubmit)}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 text-charcoal-900 placeholder-charcoal-400 text-sm focus:outline-none focus:ring-2 focus:ring-bronze-400 border border-sepiaBorder shadow-inner"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-300 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    size="md"
                    isLoading={isSubmitting}
                    leftIcon={<Download className="w-4 h-4" />}
                    className="shrink-0"
                  >
                    Download Free PDF
                  </Button>
                </form>
              ) : (
                <div className="bg-forest-950/80 border border-bronze-400 p-4 rounded-xl text-center space-y-1">
                  <div className="flex items-center justify-center space-x-2 text-bronze-300 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-bronze-400" />
                    <span>Download Dispatched!</span>
                  </div>
                  <p className="text-xs text-cream-200">
                    Your chart was downloaded to your device. Check your email for permanent backup access.
                  </p>
                </div>
              )}
              <div className="mt-2 text-center lg:text-left text-[11px] text-charcoal-300 flex items-center justify-center lg:justify-start space-x-1.5">
                <Lock className="w-3 h-3 text-bronze-400" />
                <span>100% Privacy. Zero spam. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE GRID */}
      <section className="py-16 sm:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-200 mb-3">
              <Layers className="w-3.5 h-3.5 text-forest-700" />
              <span>Core Archival Collection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
              Curated Organization Systems for Every Stage
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 mt-3 leading-relaxed">
              From our free foundational kit to our complete 112-page printable &amp; digital vault, choose the exact system tailored to your research workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                featured={prod.id === "genealogy-research-binder"}
                onQuickView={(p) => setQuickViewProduct(p)}
                onPurchase={handlePurchase}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/templates">
              <Button
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Browse All 6 Specialized Template Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURE BREAKDOWN: WHY ARCHIVAL SYSTEMS MATTER */}
      <section className="py-16 sm:py-24 bg-cream-50 border-t border-b border-sepiaBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-200 mb-3">
              <Award className="w-3.5 h-3.5 text-bronze-600" />
              <span>Archival Engineering</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
              Why Printable &amp; Archival Systems Matter
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 mt-3 leading-relaxed">
              Genealogy is a lifelong treasure. Relying solely on online subscription websites leaves your family history vulnerable to server wipes, proprietary file lock-in, and monthly fee cancellation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-6 space-y-3 hover:shadow-heritage transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                Acid-Free 200-Year Life
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Our templates are formatted with high-contrast lines calibrated for heavy 32lb acid-free paper and pigment ink. Your work won&apos;t yellow, crumble, or bleed when handed down.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-6 space-y-3 hover:shadow-heritage transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                Ahnentafel Standard
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Universal mathematical indexing (Person = 1, Father = 2n, Mother = 2n+1). Prevents identical-name confusion across complex ancestral generations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-6 space-y-3 hover:shadow-heritage transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center font-bold">
                <FileSpreadsheet className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                1790–1950 Census Grids
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Exact column replicas for every US Federal Census schedule. Transcribe messy microfilm without squinting or transposing historical column headers.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-6 space-y-3 hover:shadow-heritage transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                Brick-Wall Hypothesis Matrix
              </h3>
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Structured deductive logging designed to isolate missing maiden names, cross-reference FAN clubs (Friends, Associates, Neighbors), and triangulate DNA matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE COUSIN CALCULATOR WIDGET */}
      <CousinCalculator />

      {/* 6. SOCIAL PROOF / TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-cream-50 border-b border-sepiaBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-200 mb-3">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
              <span>Researcher Endorsements</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
              Trusted by Family Historians &amp; Archivists
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 mt-2 leading-relaxed">
              See how everyday researchers replaced overwhelming binders and lost notes with our structured methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-cream-100 rounded-2xl border border-sepiaBorder p-6 sm:p-8 flex flex-col justify-between shadow-heritage hover:shadow-heritage-lg transition-all"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-700 italic leading-relaxed mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-sepiaBorder/60">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-forest-800"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-forest-900">{t.name}</h4>
                    <p className="text-[11px] text-charcoal-500">{t.role}</p>
                    <p className="text-[10px] text-bronze-800 font-semibold">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CURATED GEAR CAROUSEL/GRID */}
      <ArchivalGearGrid />

      {/* 8. FAQ ACCORDION */}
      <FaqAccordion items={HOMEPAGE_FAQS} />

      {/* 9. FINAL HIGH-CONVERTING BOTTOM CTA */}
      <section className="bg-forest-900 text-cream-100 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-forest-800 text-bronze-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-700">
            <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
            <span>Begin Your Heritage Archive Today</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-50 leading-tight">
            Give Your Ancestors the Permanent Physical Tribute They Deserve
          </h2>
          <p className="text-sm sm:text-base text-charcoal-200 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait until a computer crash or lost subscription erases your family&apos;s priceless legacy. Download the free starter kit or get the full 35-page master binder now.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => openLeadModal()}
              variant="secondary"
              size="xl"
              leftIcon={<Download className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-vault"
            >
              Download Free Starter Kit (PDF)
            </Button>
            <Link href="/templates/genealogy-research-binder" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto text-cream-100 border-cream-100 hover:bg-forest-800 hover:text-white"
              >
                Get 35-Page Binder ($14)
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
