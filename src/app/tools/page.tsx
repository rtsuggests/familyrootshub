import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Calendar,
  Search,
  Binary,
  Users,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Free Genealogy Tools & Calculators | FamilyRootsHub",
  description:
    "Free interactive genealogical tools: Gravestone Birth Date Calculator (8870 method), NARA Soundex Generator, Ahnentafel Lineage Decoder, and Cousin DNA Calculator.",
  alternates: {
    canonical: "https://familyrootshub.com/tools",
  },
  openGraph: {
    title: "Free Archival Genealogy Calculators & Utilities | FamilyRootsHub",
    description:
      "Decode headstone inscriptions, convert surnames to Soundex codes, trace Ahnentafel ancestor numbers, and calculate cousin degrees and shared centimorgans.",
    url: "https://familyrootshub.com/tools",
    type: "website",
  },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", item: "https://familyrootshub.com" },
  { name: "Free Tools", item: "https://familyrootshub.com/tools" },
];

const TOOLS = [
  {
    title: "Gravestone Birth Date Calculator",
    slug: "gravestone-birth-date-calculator",
    badge: "8870 Method",
    icon: Calendar,
    description:
      "Calculate an ancestor's exact birth date from cemetery headstone death dates and inscribed ages (years, months, and days). Includes step-by-step 8870 math explanation.",
    cta: "Calculate Birth Date",
  },
  {
    title: "NARA Soundex Code Generator",
    slug: "soundex-code-generator",
    badge: "Official Census Rules",
    icon: Search,
    description:
      "Instantly encode any surname into its official 4-character National Archives Soundex code. Handles H/W rules, consonant clustering, and 1880–1930 census indexing.",
    cta: "Generate Soundex Code",
  },
  {
    title: "Ahnentafel Lineage Number Calculator",
    slug: "ahnentafel-calculator",
    badge: "Sosa-Stradonitz Standard",
    icon: Binary,
    description:
      "Decode ancestor numbers 1 to 1,000,000+. Discover exact generation titles, kinship relations, father (2N), mother (2N+1), and binary branch pathways.",
    cta: "Decode Ancestor Number",
  },
  {
    title: "Cousin Relationship & DNA Calculator",
    slug: "cousin-relationship-calculator",
    badge: "Shared cM Matrix",
    icon: Users,
    description:
      "Clarify 'once removed' cousin degrees and compare autosomal DNA matches against Blaine Bettinger's Shared cM Project average and range benchmarks.",
    cta: "Calculate Cousin Kinship",
  },
];

export default function ToolsIndexPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-10 sm:py-16">
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-300">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            <span>Complimentary Archival Utilities</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            Free Genealogy Calculators &amp; Research Tools
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Professional-grade calculation utilities to help family historians decode weathered tombstones, transcribe census microfilm, and navigate complex ancestral lineages with archival precision.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.slug}
                className="bg-cream-50 rounded-2xl border border-sepiaBorder p-7 sm:p-8 flex flex-col justify-between hover:shadow-heritage-lg hover:border-forest-700/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-50 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-bronze-300" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-700 bg-bronze-100 px-3 py-1 rounded-full border border-bronze-200">
                      {tool.badge}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-forest-900 group-hover:text-forest-700 transition-colors">
                    <Link href={`/tools/${tool.slug}`}>{tool.title}</Link>
                  </h2>

                  <p className="text-sm text-charcoal-700 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sepiaBorder flex items-center justify-between">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center text-sm font-bold text-forest-900 group-hover:text-bronze-700 transition-colors"
                  >
                    <span>{tool.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-xs text-charcoal-500 font-medium">100% Free • No Signup</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-forest-900 text-cream-50 rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-vault">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-bronze-400">
              Complete Archival Preservation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
              Ready to Archive Your Discoveries on Physical Paper?
            </h2>
            <p className="text-sm sm:text-base text-cream-200 leading-relaxed">
              Don&apos;t let your calculations stay trapped in browser tabs. Download our standardized, acid-free compatible 35-page research binder templates, census extraction worksheets, and cemetery dossiers to build an enduring family archive.
            </p>
            <div className="pt-2">
              <Link
                href="/templates"
                className="inline-flex items-center space-x-2 bg-bronze-500 hover:bg-bronze-400 text-forest-950 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <span>Browse Archival Template Kits</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
