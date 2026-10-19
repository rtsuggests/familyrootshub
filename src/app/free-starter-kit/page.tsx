"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  ShoppingBag,
  FileCheck,
  Printer,
  Flame,
  ArrowRight,
  Star,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/Button";
import { generateStarterKitBlob } from "@/lib/utils";

export default function FreeStarterKitPage() {
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59); // 15-minute countdown
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [upgradeSuccess, setUpgradeSuccess] = useState(false);

  // Auto trigger download on initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      handleDirectDownload();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Urgency timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleDirectDownload = () => {
    try {
      const blob = generateStarterKitBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "FamilyRootsHub-4-Gen-Pedigree-Starter-Kit.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloadTriggered(true);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#1E3A2F", "#B8860B", "#F5EDD5"],
      });
    } catch (e) {
      console.error(e);
      setDownloadTriggered(true);
    }
  };

  const handleUpgradeCheckout = async () => {
    setIsUpgrading(true);
    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: "genealogy-research-binder",
          couponCode: "OTO40",
        }),
      });

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#1E3A2F", "#B8860B", "#F5EDD5"],
      });

      setUpgradeSuccess(true);
    } catch (e) {
      console.error(e);
      setUpgradeSuccess(true);
    } finally {
      setIsUpgrading(false);
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      {/* Top Notification Bar */}
      <div className="bg-forest-900 text-cream-100 py-3 px-4 text-center text-xs sm:text-sm font-medium border-b border-forest-800 flex items-center justify-center space-x-2">
        <Sparkles className="w-4 h-4 text-bronze-300" />
        <span>Your free starter kit download has been initiated below!</span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-10">
        {/* FREE DOWNLOAD CONFIRMATION BOX */}
        <div className="bg-cream-50 rounded-2xl border-2 border-forest-800/40 p-6 sm:p-8 shadow-vault text-center space-y-4">
          <div className="w-16 h-16 bg-forest-100 text-forest-800 border-2 border-forest-300 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10 text-forest-800" />
          </div>

          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
              Your Archival Starter Kit is Ready!
            </h1>
            <p className="text-sm text-charcoal-700 mt-2 max-w-lg mx-auto leading-relaxed">
              We&apos;ve automatically triggered your file download. If your browser blocked the download prompt, click the button below to save it now.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleDirectDownload}
              variant="primary"
              size="lg"
              leftIcon={<Download className="w-5 h-5 text-bronze-300" />}
              className="w-full sm:w-auto shadow-md"
            >
              {downloadTriggered ? "Download Chart Again" : "Download Starter Kit (PDF/HTML)"}
            </Button>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs text-charcoal-700 border-t border-sepiaBorder/60 mt-4">
            <div className="bg-cream-100 p-3 rounded-lg border border-sepiaBorder/60 flex items-center space-x-2">
              <FileCheck className="w-4 h-4 text-forest-700 shrink-0" />
              <span>4-Gen Pedigree Chart (US Letter &amp; A4)</span>
            </div>
            <div className="bg-cream-100 p-3 rounded-lg border border-sepiaBorder/60 flex items-center space-x-2">
              <FileCheck className="w-4 h-4 text-forest-700 shrink-0" />
              <span>Daily Archive Research Log</span>
            </div>
            <div className="bg-cream-100 p-3 rounded-lg border border-sepiaBorder/60 flex items-center space-x-2">
              <Printer className="w-4 h-4 text-forest-700 shrink-0" />
              <span>Acid-Free Print Margins (0.75&quot;)</span>
            </div>
          </div>
        </div>

        {/* ONE-TIME-OFFER (OTO) TRIPWIRE BANNER */}
        <div className="relative bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 text-cream-50 rounded-2xl border-2 border-bronze-500 shadow-vault p-6 sm:p-10 overflow-hidden">
          {/* Urgency Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-forest-800">
            <div className="flex items-center space-x-2 bg-bronze-500 text-forest-950 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              <Flame className="w-4 h-4 text-forest-950 fill-current" />
              <span>One-Time-Offer (OTO) &bull; New Genealogist Exclusive</span>
            </div>

            {/* Countdown Urgency Timer */}
            <div className="flex items-center space-x-2 bg-forest-800/90 border border-bronze-400/50 px-4 py-1.5 rounded-xl text-xs font-mono font-bold text-bronze-300">
              <Clock className="w-4 h-4 text-bronze-400" />
              <span>EXPIRES IN:</span>
              <span className="text-cream-50 text-sm tracking-wider">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Binder Mockup Thumbnail */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-bronze-400/80 shadow-2xl bg-cream-200">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                  alt="35-Page Master Kit Upgrade"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-bronze-500 text-forest-950 text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow">
                  40% Off Tripwire
                </div>
              </div>
            </div>

            {/* Right: Pitch & Upgrade Button */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-bronze-400">
                  Wait! Before you start printing...
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-tight">
                  Upgrade to the Full 35-Page Master Binder for Just $9
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed pt-1">
                  The starter kit gives you 4 generations. But what happens when you hit 1850 censuses, military muster rolls, and lost maiden names? Add the complete 35-page physical system today for 40% off.
                </p>
              </div>

              {/* Price comparison */}
              <div className="flex items-baseline space-x-3 pt-2">
                <span className="font-serif text-3xl font-bold text-cream-50">$9.00</span>
                <span className="text-sm text-charcoal-400 line-through">Regular $14.00</span>
                <span className="text-xs uppercase font-bold text-bronze-300 bg-bronze-900/60 border border-bronze-500/40 px-2 py-0.5 rounded">
                  Instant $5 Discount
                </span>
              </div>

              {/* Features check */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-200">
                <div className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-bronze-400 mr-2 shrink-0" />
                  <span>All 1790–1950 Census Grids</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-bronze-400 mr-2 shrink-0" />
                  <span>Family Group Master Sheets</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-bronze-400 mr-2 shrink-0" />
                  <span>Cemetery Plot &amp; Stone Worksheets</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-bronze-400 mr-2 shrink-0" />
                  <span>Spine Labels (1&quot;, 1.5&quot;, 2&quot;, 3&quot;)</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-3">
                {!upgradeSuccess ? (
                  <Button
                    onClick={handleUpgradeCheckout}
                    variant="secondary"
                    size="lg"
                    isLoading={isUpgrading}
                    className="w-full shadow-lg"
                    leftIcon={<ShoppingBag className="w-5 h-5 text-forest-950" />}
                  >
                    <span>Yes! Add the 35-Page Master Kit for Only $9 &rarr;</span>
                  </Button>
                ) : (
                  <div className="bg-forest-800 border border-bronze-400 p-4 rounded-xl text-center space-y-1">
                    <div className="flex items-center justify-center space-x-2 text-bronze-300 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-bronze-400" />
                      <span>Upgrade Added Successfully!</span>
                    </div>
                    <p className="text-xs text-cream-200">
                      In production, this automatically updates your order via LemonSqueezy / Stripe one-click upsell.
                    </p>
                  </div>
                )}

                <div className="mt-2 text-center text-[11px] text-charcoal-400 flex items-center justify-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-bronze-400" />
                  <span>Backed by our 30-Day Archival Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRINTING & SETUP GUIDE */}
        <div className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-8 space-y-6">
          <h3 className="font-serif text-xl font-bold text-forest-900 border-b border-sepiaBorder pb-3">
            3 Steps to Set Up Your Free Pedigree Chart Today
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-charcoal-700">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-forest-800 text-cream-100 flex items-center justify-center font-bold text-xs">
                1
              </div>
              <h4 className="font-serif font-bold text-base text-forest-900">Print on 32lb Paper</h4>
              <p className="leading-relaxed">
                If available, use 28lb or 32lb acid-free paper. Standard 20lb printer paper will tear at the binder rings after moderate flipping.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-forest-800 text-cream-100 flex items-center justify-center font-bold text-xs">
                2
              </div>
              <h4 className="font-serif font-bold text-base text-forest-900">Use Archival Pigment Ink</h4>
              <p className="leading-relaxed">
                Fill the chart by hand using a fine-point pigment ink pen (like Sakura Pigma Micron 0.25mm) to prevent fading or ink seepage.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-full bg-forest-800 text-cream-100 flex items-center justify-center font-bold text-xs">
                3
              </div>
              <h4 className="font-serif font-bold text-base text-forest-900">Assign Ahnentafel Numbers</h4>
              <p className="leading-relaxed">
                Start with yourself or living grandparent as #1. Father is #2, Mother is #3, Paternal Grandfather is #4, and Paternal Grandmother is #5.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
