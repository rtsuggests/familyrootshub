import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Users,
  Film,
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  FileText,
  Clock,
  Landmark,
} from "lucide-react";
import { CENSUS_YEARS, CENSUS_ERAS } from "@/data/censusYears";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "US Federal Census Year Guides (1790–1950) | FamilyRootsHub",
  description:
    "Complete genealogical reference for all 17 US Federal Census years (1790 to 1950). Official Census Days, column schedules, enumerator rules, and NARA microfilm reels.",
  alternates: {
    canonical: "https://familyrootshub.com/census-guides",
  },
  openGraph: {
    title: "US Federal Census Year Guides (1790–1950) | FamilyRootsHub",
    description:
      "Master all 17 decennial US censuses. Historical statutory dates, complete column schedules, enumerator instructions, and NARA archival extraction tips.",
    url: "https://familyrootshub.com/census-guides",
    type: "website",
  },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", item: "https://familyrootshub.com" },
  { name: "Census Year Guides", item: "https://familyrootshub.com/census-guides" },
];

export default function CensusGuidesIndexPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-10 sm:py-16">
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-300">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            <span>National Archives &amp; Records Administration (NARA) Standards</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            US Federal Census Year Guides (1790–1950)
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Every decennial United States Federal population census had unique statutory rules, distinct Census Days, and evolving column questions. Explore our exhaustive year-by-year guides to decode census returns with archival precision.
          </p>
        </div>

        {/* Grouped by Historical Eras */}
        <div className="space-y-14">
          {CENSUS_ERAS.map((era) => {
            const eraYears = CENSUS_YEARS.filter((c) => era.years.includes(c.year));

            return (
              <section key={era.name} className="space-y-6">
                <div className="border-b-2 border-forest-800/30 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-bronze-700">
                      Historical Classification
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                      {era.name}
                    </h2>
                  </div>
                  <span className="text-xs text-charcoal-600 font-medium">
                    {era.years.join(" • ")}
                  </span>
                </div>
                <p className="text-sm text-charcoal-700 max-w-3xl">
                  {era.description}
                </p>

                {/* Years Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eraYears.map((guide) => (
                    <div
                      key={guide.year}
                      className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 flex flex-col justify-between hover:shadow-heritage-lg hover:border-forest-700/50 transition-all group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-3xl font-bold text-forest-900 group-hover:text-forest-700 transition-colors">
                            {guide.year}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-800 bg-bronze-100 px-2.5 py-0.5 rounded-full border border-bronze-200">
                            {guide.naraMicrofilm.split("(")[0].trim()}
                          </span>
                        </div>

                        <div className="space-y-1 text-xs text-charcoal-600 border-t border-sepiaBorder pt-3">
                          <div className="flex items-center space-x-1.5">
                            <Calendar className="w-3.5 h-3.5 text-bronze-700 shrink-0" />
                            <span>
                              Census Day: <strong>{guide.censusDay.split("(")[0].trim()}</strong>
                            </span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Landmark className="w-3.5 h-3.5 text-bronze-700 shrink-0" />
                            <span>
                              President: <strong>{guide.president}</strong>
                            </span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Users className="w-3.5 h-3.5 text-bronze-700 shrink-0" />
                            <span>
                              Population: <strong>{guide.population}</strong>
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-charcoal-700 leading-relaxed pt-1 line-clamp-3">
                          {guide.tagline}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-sepiaBorder flex items-center justify-between">
                        <Link
                          href={`/census-guides/${guide.year}`}
                          className="inline-flex items-center text-xs font-bold text-forest-900 group-hover:text-bronze-700 transition-colors"
                        >
                          <span>Explore {guide.year} Schedule</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <span className="text-[11px] text-charcoal-500 font-mono">
                          {guide.columns.length} Cols
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Archival Kit Banner */}
        <div className="bg-forest-900 text-cream-50 rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-vault">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-400">
                Official Extraction Masters
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                Transcribe Federal Census Returns Without Misaligned Lines
              </h2>
              <p className="text-sm sm:text-base text-cream-200 leading-relaxed">
                Generic notebook paper causes transcription errors when logging complex multi-column returns. Our <strong>Federal Census Extraction Worksheets Kit ($12)</strong> delivers 9 customized layouts spanning 1790 to 1950, with exact column headers and margins tailored for standard 3-ring research binders.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-cream-200">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>Covers All 17 Years</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>US Letter &amp; A4 Vector PDF</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>Lifetime Free Updates</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-forest-950/70 rounded-2xl border border-forest-700 text-center space-y-4">
              <div className="text-3xl font-serif font-bold text-cream-50">$12.00</div>
              <a
                href="https://familyrootshub.gumroad.com/l/census-worksheets?wanted=true"
                className="gumroad-button w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-400 text-forest-950 font-bold text-sm uppercase tracking-wider transition-all shadow-md active:scale-95"
                data-gumroad-single-product="true"
              >
                Get 9-Template Census Kit ($12)
              </a>
              <Link
                href="/templates/census-extraction-worksheets"
                className="text-xs text-bronze-300 hover:text-bronze-200 underline font-medium"
              >
                View Detailed Census Kit Previews →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
