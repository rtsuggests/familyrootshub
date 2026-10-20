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

export const FreeStarterKitClientView: React.FC = () => {
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
    <div className="bg-cream-100 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Step 1: Thank You & Download Trigger Box */}
        <section className="bg-cream-50 rounded-3xl border-2 border-forest-800 shadow-vault p-6 sm:p-10 text-center space-y-6">
          <div className="w-16 h-16 bg-forest-800 text-cream-100 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9 text-bronze-300" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-forest-800 bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
              Download Initialized
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
              Your Free 4-Generation Starter Kit is Ready!
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              If your download didn&apos;t start automatically, click the button below to save your high-resolution printable charts immediately:
            </p>
          </div>

          {/* Action Trigger Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/downloads/FamilyRootsHub-Free-Starter-Kit.pdf"
              download="FamilyRootsHub-Free-Starter-Kit.pdf"
              className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3.5 bg-forest-800 hover:bg-forest-900 text-cream-50 font-bold rounded-xl shadow-md transition-all text-sm"
            >
              <Download className="w-4 h-4 text-bronze-300" />
              <span>Download Free Archival PDF</span>
            </a>
            <button
              onClick={handleDirectDownload}
              className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-5 py-3.5 bg-cream-100 hover:bg-cream-200 text-charcoal-700 font-semibold rounded-xl border border-sepiaBorder text-xs transition-colors"
            >
              <FileCheck className="w-4 h-4 text-forest-800" />
              <span>Download HTML / Vector Template</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-sepiaBorder text-left text-xs text-charcoal-600">
            <div className="flex items-start space-x-2">
              <Printer className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
              <span>Formatted for standard home printing (Letter & A4)</span>
            </div>
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
              <span>Tested for 3-ring binder margin allowance</span>
            </div>
            <div className="flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
              <span>Includes 4-generation pedigree chart & research log</span>
            </div>
          </div>
        </section>

        {/* Step 2: One-Time-Offer (OTO) Tripwire Banner */}
        <section className="bg-gradient-to-br from-forest-950 via-forest-900 to-forest-950 text-cream-100 rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-bronze-500/40 relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-44 h-44 bg-bronze-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* OTO Header with Timer */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-forest-800/80 pb-4 gap-4">
            <div className="flex items-center space-x-2.5">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-300">
                Exclusive One-Time Welcome Offer
              </span>
            </div>

            {/* Live Countdown Badge */}
            <div className="flex items-center space-x-2 bg-forest-800/90 border border-bronze-500/40 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-amber-300">
              <Clock className="w-4 h-4 text-bronze-400" />
              <span>Special Price Expires in: {formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* OTO Details (Left) */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-400/40 px-3 py-0.5 rounded-full text-xs font-bold">
                <Flame className="w-3.5 h-3.5" />
                <span>Save 40% Today Only — $9 Instead of $14</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-tight">
                Wait! Upgrade to the Complete 35-Page Master Genealogy Research Binder
              </h2>

              <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed font-sans">
                The free starter kit gives you 4 generations. But what happens when you hit great-grandparents and 19th-century census records? The <strong>Master Binder System</strong> includes all 35 printable templates: 5-generation pedigree spreads, census extraction grids (1790–1950), cemetery mapping dossiers, and Ahnentafel tab labels.
              </p>

              <div className="space-y-2 text-xs text-charcoal-100 pt-1">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 mr-2 shrink-0" />
                  <span>All 35 Physical Binder Templates (US Letter + A4)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 mr-2 shrink-0" />
                  <span>Decennial Federal Census Worksheets (1790 to 1950)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 mr-2 shrink-0" />
                  <span>3-Hole Binder Spine & Tab Inserts (Ahnentafel numbered)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 mr-2 shrink-0" />
                  <span>Lifetime Unlimited Reprint License for your whole family</span>
                </div>
              </div>
            </div>

            {/* OTO Pricing & Action (Right) */}
            <div className="md:col-span-5 bg-forest-800/80 backdrop-blur-sm rounded-2xl border border-bronze-500/40 p-6 text-center space-y-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-forest-700 bg-forest-900 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                  alt="35-Page Research Binder Upgrade"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="font-serif text-4xl font-bold text-amber-300">$9</span>
                  <span className="text-sm text-charcoal-400 line-through">$14</span>
                  <span className="text-xs uppercase font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                    40% Off
                  </span>
                </div>
                <p className="text-[11px] text-charcoal-300 mt-1">One-time payment &bull; Instant digital delivery</p>
              </div>

              {/* Live Gumroad Button for seamless overlay checkout */}
              <div className="space-y-2">
                <a
                  href="https://familyrootshub.gumroad.com/l/research-binder?wanted=true"
                  className="gumroad-button block w-full"
                  data-gumroad-single-product="true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full shadow-lg"
                    leftIcon={<ShoppingBag className="w-4 h-4 text-forest-950" />}
                  >
                    <span>Upgrade to Master Kit for $9</span>
                  </Button>
                </a>

                {upgradeSuccess && (
                  <div className="p-3 bg-emerald-900/80 border border-emerald-500/60 rounded-xl text-xs text-cream-100">
                    <p className="font-bold text-emerald-300">Upgrade Successful!</p>
                    <a
                      href="/downloads/FamilyRootsHub-35-Page-Research-Binder.pdf"
                      download="FamilyRootsHub-35-Page-Research-Binder.pdf"
                      className="underline font-bold text-cream-50 block mt-1"
                    >
                      Click here to download your Master Binder (PDF) &rarr;
                    </a>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center space-x-3 text-[10px] text-charcoal-300">
                <div className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-bronze-400 mr-1" />
                  <span>30-Day Guarantee</span>
                </div>
                <span>&bull;</span>
                <span>Immediate PDF Download</span>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/templates"
              className="text-xs text-charcoal-400 hover:text-cream-200 underline"
            >
              No thanks, I will stick with the free starter kit for now &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
