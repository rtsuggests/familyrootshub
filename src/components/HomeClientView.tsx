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
import { useModal } from "@/components/ModalContext";
import { FEATURED_PRODUCTS, PRODUCTS } from "@/data/products";
import { HOMEPAGE_FAQS } from "@/data/faqs";
import { Product } from "@/types";
import { generateStarterKitBlob } from "@/lib/utils";

const leadSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function HomeClientView() {
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
                <Sparkles className="w-3.5 h-3.5 text-bronze-800" />
                <span>Museum-Grade Archival Organization System</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold text-forest-900 leading-[1.12] tracking-tight">
                Turn Centuries of Family Clutter into an{" "}
                <span className="text-bronze-800 underline decoration-bronze-400 decoration-wavy decoration-2">
                  Organized Heritage Vault
                </span>
              </h1>

              <p className="text-base sm:text-lg text-charcoal-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Acid-free, standardized genealogy binder worksheets, Ahnentafel numbering trackers, and federal census extraction forms designed according to National Archives (NARA) specifications. Built to protect your family&apos;s discoveries for the next 200 years.
              </p>

              {/* Trust Badge Bar */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-charcoal-600 font-medium">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-forest-800" />
                  <span>NARA Census Layouts (1790–1950)</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-800" />
                  <span>35-Page Master Binder System</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-forest-800" />
                  <span>Ahnentafel Math Verified</span>
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  onClick={() => openLeadModal()}
                  variant="secondary"
                  size="xl"
                  leftIcon={<Download className="w-5 h-5" />}
                  className="w-full sm:w-auto shadow-vault group"
                >
                  Download Free Starter Kit (PDF)
                </Button>
                <Link href="/templates" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="xl"
                    rightIcon={<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                    className="w-full sm:w-auto text-forest-800 border-forest-800 hover:bg-forest-50"
                  >
                    Explore Template Catalog
                  </Button>
                </Link>
              </div>

              {/* Sub-text Guarantee */}
              <div className="text-xs text-charcoal-500 flex items-center justify-center lg:justify-start space-x-2">
                <Lock className="w-3.5 h-3.5 text-forest-800" />
                <span>Instant Vector PDF Downloads &bull; Letter &amp; A4 Ready &bull; 100% Unconditional Guarantee</span>
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

                  {/* Specification Feature List */}
                  <div className="space-y-2.5 text-xs text-charcoal-700">
                    <div className="flex items-center justify-between py-1 border-b border-sepiaBorder/60">
                      <span className="font-medium">Margin Calibration:</span>
                      <span className="font-bold text-forest-900">0.75&quot; Standard 3-Ring Binder Gutter</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-sepiaBorder/60">
                      <span className="font-medium">Paper Permanence:</span>
                      <span className="font-bold text-forest-900">Engineered for 28lb–32lb Acid-Free Paper</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-sepiaBorder/60">
                      <span className="font-medium">Census Fidelity:</span>
                      <span className="font-bold text-forest-900">Matches All 17 Federal Census Schedules</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="font-medium">Delivery Format:</span>
                      <span className="font-bold text-forest-900">Vector Print-Ready PDF (Letter &amp; A4)</span>
                    </div>
                  </div>

                  {/* Direct Buy Bar inside Hero Card */}
                  <div className="mt-5 pt-4 border-t border-sepiaBorder flex items-center justify-between">
                    <div>
                      <span className="text-xs text-charcoal-500 block">Single Complete Binder</span>
                      <span className="text-xl font-serif font-bold text-forest-900">$14.00</span>
                    </div>
                    <Link href="/templates/genealogy-research-binder">
                      <Button variant="primary" size="sm" className="font-bold shadow-sm">
                        View 35-Page Kit
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Subtle floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-forest-800 text-cream-100 p-3 rounded-xl shadow-heritage border border-forest-700 hidden sm:flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center text-bronze-300 font-serif font-bold">
                    17
                  </div>
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold block">17 Decennial Censuses</span>
                    <span className="text-cream-300">1790 to 1950 Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FREE LEAD CAPTURE STRIP */}
      <section className="bg-forest-900 text-cream-100 py-10 border-b border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-bronze-300">
                <Flame className="w-3.5 h-3.5 text-bronze-400" />
                <span>Zero Cost Starter Kit</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream-50">
                Claim Your Free 4-Generation Pedigree &amp; Research Checklist
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-300">
                Instant vector PDF download with calibrated 0.75&quot; binder margins and archival font hierarchy.
              </p>
            </div>

            <div className="lg:col-span-5">
              {!leadSuccess ? (
                <form
                  onSubmit={handleSubmit(onLeadBannerSubmit)}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      aria-label="Email address for free starter kit"
                      className="w-full px-4 py-2.5 rounded-lg text-sm bg-cream-50 text-charcoal-900 border border-sepiaBorder placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-bronze-400 shadow-inner"
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
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                    leftIcon={<Download className="w-4 h-4 text-bronze-300" />}
                    className="shrink-0 font-bold shadow-md"
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
                <span>Privacy guaranteed. Zero spam. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP PRODUCT CATALOG GRID */}
      <section className="py-16 sm:py-24 bg-cream-100 border-b border-sepiaBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-200 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-forest-700" />
                <span>Archival Template Catalog</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
                Specialized Lineage &amp; Research Systems
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 mt-2 max-w-xl">
                Every template is calibrated with 0.75&quot; 3-ring binder margins, formatted for acid-free paper, and designed to match official historical records.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link href="/templates">
                <Button
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="border-forest-700 text-forest-800 hover:bg-forest-50 font-semibold"
                >
                  View All 6 Specialized Packages
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION: WHY ARCHIVAL PHYSICAL BINDERS */}
      <section className="py-16 sm:py-24 bg-cream-50 border-b border-sepiaBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-200 mb-3">
              <Award className="w-3.5 h-3.5 text-bronze-800" />
              <span>The Physical Heritage Imperative</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
              Why Cloud Genealogy Platforms Put Your Life&apos;s Work at Risk
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 mt-3 leading-relaxed">
              Subscription sites are wonderful for searching, but perilous for preservation. Here is why serious family historians maintain physical archival research binders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-7 space-y-4 shadow-heritage hover:shadow-heritage-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-900">
                1. Immunity from Paywalls &amp; Password Lockouts
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                When you pass away or cancel a $400/year cloud subscription, your family loses access. A physical binder sits safely on your living room bookshelf, readable without passwords, servers, or proprietary software.
              </p>
            </div>

            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-7 space-y-4 shadow-heritage hover:shadow-heritage-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center shadow-sm">
                <Compass className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-900">
                2. Elimination of Identity Clones &amp; Ancestor Duplication
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Online hints routinely graft wrong individuals with identical names into your tree. Physical Ahnentafel pedigree numbering assigns a deterministic integer to every direct ancestor, eliminating duplicate branch chaos forever.
              </p>
            </div>

            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-7 space-y-4 shadow-heritage hover:shadow-heritage-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center shadow-sm">
                <FileSpreadsheet className="w-6 h-6 text-bronze-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-900">
                3. High-Fidelity NARA Census Schedule Alignment
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Automated online transcriptions frequently mangle immigrant spellings and omit vital marginal notes. Our extraction worksheets reproduce the exact column headings published by NARA from 1790 to 1950.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE COUSIN RELATIONSHIP CALCULATOR WIDGET */}
      <section className="py-16 sm:py-24 bg-cream-100 border-b border-sepiaBorder">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CousinCalculator />
        </div>
      </section>

      {/* 6. ARCHIVAL QUALITY STANDARDS & SPECIFICATIONS */}
      <section className="py-16 sm:py-24 bg-cream-50 border-b border-sepiaBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-200 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
              <span>Authentic Archival Standards</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
              Engineered to Preservation Specifications
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 mt-3 leading-relaxed">
              Family history documents must endure across generations. Here are the archival manufacturing and layout specifications embedded in every template we publish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-7 space-y-4 shadow-heritage">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                Official NARA Schedules (1790–1950)
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Every extraction grid is formatted to match the published federal census schedules from the National Archives, including Soundex codes, infant mortality columns, and foreign-born parentage queries.
              </p>
            </div>

            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-7 space-y-4 shadow-heritage">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center">
                <Layers className="w-5 h-5 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                0.75&quot; Three-Ring Binder Gutters
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Standard office sheets get text punched out by binder rings. Our layouts provide an asymmetric 0.75&quot; left-margin gutter so your ancestor data is never obscured or punctured.
              </p>
            </div>

            <div className="bg-cream-100 rounded-2xl border border-sepiaBorder p-7 space-y-4 shadow-heritage">
              <div className="w-10 h-10 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-bronze-300" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">
                30-Day Unconditional Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                We believe in genuine preservation without friction. If any template does not exceed your research standards, contact us within 30 days for a prompt, 100% unconditional refund.
              </p>
            </div>
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
