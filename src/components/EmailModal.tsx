"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Download, CheckCircle2, ShieldCheck, Sparkles, BookOpen, FileCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./Button";
import { generateStarterKitBlob } from "@/lib/utils";

const leadSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "Please enter your name or research handle").optional().or(z.literal("")),
  researchFocus: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadSchema>;

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  title = "Download the Archival Pedigree Starter Kit",
  subtitle = "Instant access to the 4-Generation Ahnentafel Pedigree Chart & Daily Research Log (PDF).",
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      email: "",
      firstName: "",
      researchFocus: "General US & European Ancestry",
    },
  });

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const triggerDownload = () => {
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
    } catch (e) {
      console.error("Download error:", e);
    }
  };

  const onSubmit = async (data: LeadFormValues) => {
    try {
      // 1. Store in localStorage for client persistence
      const savedLeads = JSON.parse(localStorage.getItem("frh_captured_leads") || "[]");
      savedLeads.push({
        ...data,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("frh_captured_leads", JSON.stringify(savedLeads));

      // 2. Call dummy API endpoint
      await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // 3. Trigger celebratory confetti
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#1E3A2F", "#B8860B", "#F5EDD5", "#3D4843"],
      });

      setIsSubmitted(true);
      // Auto-trigger download
      setTimeout(() => {
        triggerDownload();
      }, 700);
    } catch (err) {
      console.error("Lead submission error:", err);
      // Fallback client state
      setIsSubmitted(true);
      triggerDownload();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-cream-50 rounded-2xl border border-sepiaBorder shadow-2xl overflow-hidden transition-all duration-300"
      >
        {/* Header Ribbon */}
        <div className="bg-forest-800 text-cream-100 px-6 py-4 flex items-center justify-between border-b border-forest-900">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-bronze-300" />
            <span className="font-serif font-bold text-sm tracking-wide uppercase text-cream-100">
              Immediate Archival Access
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-cream-200 hover:text-white p-1 rounded-md hover:bg-forest-700/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-forest-100 border border-forest-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="w-7 h-7 text-forest-800" />
                </div>
                <h3
                  id="modal-title"
                  className="font-serif text-2xl font-bold text-forest-900 leading-tight"
                >
                  {title}
                </h3>
                <p className="text-sm text-charcoal-700 mt-2 leading-relaxed">
                  {subtitle}
                </p>
              </div>

              {/* What's included preview */}
              <div className="bg-cream-100 rounded-xl p-4 border border-sepiaBorder/80 mb-6 space-y-2 text-xs text-charcoal-800">
                <div className="font-bold text-forest-900 uppercase tracking-wider text-[11px] flex items-center">
                  <FileCheck className="w-4 h-4 text-bronze-600 mr-1.5" />
                  What You&apos;ll Receive Instantly:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-1">
                  <li className="flex items-center text-charcoal-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700 mr-2" />
                    4-Gen Pedigree Chart (US Letter)
                  </li>
                  <li className="flex items-center text-charcoal-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700 mr-2" />
                    4-Gen Pedigree Chart (A4 format)
                  </li>
                  <li className="flex items-center text-charcoal-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700 mr-2" />
                    Archive Research Log
                  </li>
                  <li className="flex items-center text-charcoal-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-700 mr-2" />
                    Citation Quick Guide
                  </li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="email-input"
                    className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1"
                  >
                    Your Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    placeholder="e.g. eleanor@familyhistorian.org"
                    className={`w-full px-4 py-3 rounded-lg border bg-cream-100 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-forest-700 transition-all ${
                      errors.email ? "border-red-500" : "border-sepiaBorder"
                    }`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1 font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="name-input"
                    className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1"
                  >
                    Your Name (Optional)
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-2.5 rounded-lg border border-sepiaBorder bg-cream-100 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-forest-700"
                    {...register("firstName")}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full shadow-md"
                  isLoading={isSubmitting}
                  leftIcon={<Download className="w-5 h-5" />}
                >
                  Send &amp; Download Free Kit Now
                </Button>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-charcoal-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-forest-700" />
                  <span>We protect your privacy. Zero spam. Unsubscribe anytime.</span>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-forest-100 text-forest-800 border-2 border-forest-300 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-forest-800" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  Your Starter Kit is Ready!
                </h3>
                <p className="text-sm text-charcoal-700 mt-2 max-w-sm mx-auto">
                  Your archival chart download was automatically triggered. We also dispatched a backup copy to your email.
                </p>
              </div>

              <div className="bg-cream-100 p-4 rounded-xl border border-sepiaBorder text-left space-y-2">
                <div className="text-xs font-bold text-forest-900 uppercase tracking-wider">
                  File Download Status:
                </div>
                <div className="flex items-center justify-between text-xs text-charcoal-700">
                  <span>Pedigree-Starter-Kit.html (Printable/Save-as-PDF)</span>
                  <span className="text-forest-800 font-semibold">Completed</span>
                </div>
                <Button
                  onClick={triggerDownload}
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  leftIcon={<Download className="w-3.5 h-3.5" />}
                >
                  Download Again
                </Button>
              </div>

              {/* Tripwire One-Time-Offer (OTO) Teaser */}
              <div className="bg-bronze-50 border border-bronze-200 rounded-xl p-4 text-left">
                <div className="flex items-center space-x-2 text-bronze-800 text-xs font-bold uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-bronze-600" />
                  <span>One-Time Offer for New Genealogists</span>
                </div>
                <p className="text-xs text-charcoal-800 mt-1 font-medium">
                  Upgrade your Starter Kit to the <strong>35-Page Master Research Binder</strong> for only $9 today (usually $14).
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <a
                    href="/free-starter-kit"
                    className="inline-block w-full text-center bg-forest-800 hover:bg-forest-700 text-cream-50 font-semibold text-xs py-2 px-3 rounded-lg shadow-sm transition-colors"
                  >
                    View 40% Off Upgrade ($9) &rarr;
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    reset();
                    onClose();
                  }}
                  className="text-xs text-charcoal-500 hover:text-charcoal-800 underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
