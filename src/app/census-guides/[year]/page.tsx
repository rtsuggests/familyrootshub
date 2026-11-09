import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  User,
  Users,
  Film,
  Compass,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  HelpCircle,
  FileText,
  CheckCircle2,
  Clock,
  Landmark,
} from "lucide-react";
import { CENSUS_YEARS, CensusYearGuide } from "@/data/censusYears";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

interface CensusYearPageProps {
  params: {
    year: string;
  };
}

export async function generateStaticParams() {
  return CENSUS_YEARS.map((c) => ({
    year: c.year,
  }));
}

export async function generateMetadata({ params }: CensusYearPageProps): Promise<Metadata> {
  const guide = CENSUS_YEARS.find((c) => c.year === params.year);

  if (!guide) {
    return {
      title: "Census Year Guide Not Found | FamilyRootsHub",
    };
  }

  const title = `${guide.year} US Census Guide: Column Schedule & Research Tips`;
  const description = `Complete genealogical guide to the ${guide.year} US Federal Census. Census Day (${guide.censusDay.split("(")[0].trim()}), full column headings, enumerator rules, and NARA microfilm numbers.`;

  return {
    title,
    description: description.slice(0, 155),
    alternates: {
      canonical: `https://familyrootshub.com/census-guides/${guide.year}`,
    },
    openGraph: {
      title: `${guide.year} US Federal Census Column Schedule & Archival Guide`,
      description,
      url: `https://familyrootshub.com/census-guides/${guide.year}`,
      type: "article",
    },
  };
}

export default function CensusYearDetailPage({ params }: CensusYearPageProps) {
  const guide = CENSUS_YEARS.find((c) => c.year === params.year);

  if (!guide) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", item: "https://familyrootshub.com" },
    { name: "Census Year Guides", item: "https://familyrootshub.com/census-guides" },
    { name: `${guide.year} US Federal Census`, item: `https://familyrootshub.com/census-guides/${guide.year}` },
  ];

  // Previous and next census years
  const currentIndex = CENSUS_YEARS.findIndex((c) => c.year === guide.year);
  const prevCensus = currentIndex > 0 ? CENSUS_YEARS[currentIndex - 1] : null;
  const nextCensus = currentIndex < CENSUS_YEARS.length - 1 ? CENSUS_YEARS[currentIndex + 1] : null;

  return (
    <div className="bg-cream-100 min-h-screen py-10 sm:py-16">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FaqJsonLd faqs={guide.faqs} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-charcoal-600">
          <Link href="/" className="hover:text-forest-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-charcoal-400" />
          <Link href="/census-guides" className="hover:text-forest-800 transition-colors">
            Census Year Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-charcoal-400" />
          <span className="font-semibold text-forest-900" aria-current="page">
            {guide.year} Federal Census
          </span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center space-x-1.5 bg-bronze-100 text-bronze-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-300">
              <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
              <span>{guide.era}</span>
            </span>
            <span className="bg-forest-800 text-cream-50 text-xs font-bold px-3 py-1 rounded-full border border-forest-900">
              {guide.naraMicrofilm}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            {guide.year} US Federal Census Research Guide
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-3xl">
            {guide.tagline}. Full column schedules, statutory Census Day instructions, genealogical interpretation tips, and National Archives microfilm citations.
          </p>
        </div>

        {/* Quick Facts Stat Banner */}
        <div className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-7 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-600 flex items-center">
              <Calendar className="w-3.5 h-3.5 text-bronze-700 mr-1.5" />
              Official Census Day
            </span>
            <div className="text-sm sm:text-base font-serif font-bold text-forest-900">
              {guide.censusDay.split("(")[0].trim()}
            </div>
            <span className="text-[11px] text-charcoal-500 block">
              Historical reference anchor
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-600 flex items-center">
              <Landmark className="w-3.5 h-3.5 text-bronze-700 mr-1.5" />
              Serving President
            </span>
            <div className="text-sm sm:text-base font-serif font-bold text-forest-900">
              {guide.president}
            </div>
            <span className="text-[11px] text-charcoal-500 block">
              Administration era
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-600 flex items-center">
              <Users className="w-3.5 h-3.5 text-bronze-700 mr-1.5" />
              National Population
            </span>
            <div className="text-sm sm:text-base font-serif font-bold text-forest-900">
              {guide.population}
            </div>
            <span className="text-[11px] text-charcoal-500 block">
              {guide.statesCount.split("(")[0].trim()}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-600 flex items-center">
              <Film className="w-3.5 h-3.5 text-bronze-700 mr-1.5" />
              NARA Catalog
            </span>
            <div className="text-sm sm:text-base font-serif font-bold text-forest-900">
              {guide.naraMicrofilm.split("(")[0].trim()}
            </div>
            <span className="text-[11px] text-charcoal-500 block">
              National Archives microfilm
            </span>
          </div>
        </div>

        {/* Overview & Historical Context */}
        <section className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-8 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-forest-900">
            Historical Overview &amp; Archival Context
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
            {guide.overview}
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="font-serif font-bold text-base text-forest-900">
              Key Historical Circumstances of the {guide.year} Enumeration:
            </h3>
            <ul className="text-xs sm:text-sm text-charcoal-700 space-y-2 list-disc pl-5">
              {guide.historicalContext.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Records Survival Alert */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl space-y-1">
            <div className="flex items-center space-x-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              <span>Archival Survival Status</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {guide.recordsSurvival}
            </p>
          </div>
        </section>

        {/* Official Enumerator Instructions */}
        <section className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-forest-800 text-cream-50 flex items-center justify-center">
              <FileText className="w-4 h-4 text-bronze-300" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-forest-900">
              Official Instructions to {guide.year} Enumerators
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Federal law strictly governed what marshals and enumerators were instructed to record. Understanding these guidelines prevents modern researchers from misinterpreting tick marks and abbreviations:
          </p>

          <div className="space-y-3 pt-2">
            {guide.enumeratorInstructions.map((inst, idx) => (
              <div key={idx} className="bg-cream-100 p-4 rounded-xl border border-sepiaBorder flex items-start space-x-3">
                <span className="w-5 h-5 rounded-full bg-forest-800 text-cream-50 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                  {inst}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Column Schedule Table */}
        <section className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                Complete {guide.year} Column Headings &amp; Schedules
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                Every column asked on the original {guide.year} Federal population return, with archival interpretation notes:
              </p>
            </div>
            <span className="bg-bronze-100 text-bronze-800 border border-bronze-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start sm:self-auto shrink-0">
              {guide.columns.length} Total Columns
            </span>
          </div>

          <div className="overflow-x-auto border border-sepiaBorder rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-forest-900 text-cream-50 uppercase text-[11px] tracking-wider border-b border-forest-800">
                <tr>
                  <th scope="col" className="px-4 py-3.5 w-16 text-center font-bold">
                    Col #
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold w-1/3">
                    Heading / Question Asked
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold">
                    Description &amp; Genealogical Significance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sepiaBorder bg-cream-50">
                {guide.columns.map((col, idx) => (
                  <tr key={idx} className="hover:bg-cream-100/80 transition-colors">
                    <td className="px-4 py-3.5 text-center font-mono font-bold text-forest-900 bg-cream-100/50">
                      {col.number}
                    </td>
                    <td className="px-4 py-3.5 font-serif font-bold text-forest-900 align-top">
                      {col.name}
                      <span className="block font-sans font-normal text-xs text-charcoal-600 mt-1">
                        {col.description}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-charcoal-800 text-xs sm:text-sm align-top leading-relaxed">
                      {col.genealogicalSignificance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Genealogical Tips */}
        <section className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-forest-900">
            Genealogical Analysis Tips for the {guide.year} Census
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guide.genealogicalTips.map((tip, idx) => (
              <div key={idx} className="bg-cream-100 p-4 rounded-xl border border-sepiaBorder space-y-1.5">
                <div className="flex items-center space-x-2 text-forest-900 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>Research Protocol #{idx + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Embedded Buy Card for $12 Census Kit */}
        <div className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 text-cream-50 rounded-3xl p-8 sm:p-10 border border-forest-700 shadow-vault">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-forest-800 text-bronze-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-700">
                <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
                <span>Pre-Printed Archival Extraction Master</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                Transcribe the {guide.year} Census onto Authentic Worksheets
              </h3>
              <p className="text-sm sm:text-base text-cream-200 leading-relaxed">
                Reading faded cursive on microfilm is hard enough. Our <strong>Federal Census Extraction Worksheets Kit ($12)</strong> includes a dedicated, pre-formatted extraction sheet for the {guide.year} census matching every column heading line-for-line. Preserves household order, enumerator notes, and page numbers with 0.75&quot; 3-ring binder margins.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-cream-200">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>Includes {guide.year} Exact Layout</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>Covers All 17 Years (1790–1950)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                  <span>300-DPI Vector Print PDF</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-forest-950/70 rounded-2xl border border-forest-700 text-center space-y-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-bronze-400 block mb-1">
                  Instant PDF Download
                </span>
                <div className="text-3xl font-serif font-bold text-cream-50">$12.00</div>
                <span className="text-[11px] text-cream-300">Complete 9-Template System</span>
              </div>

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
                Inspect All 9 Census Template Previews →
              </Link>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-8 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-forest-900">
            Frequently Asked Questions about the {guide.year} US Census
          </h2>
          <div className="space-y-4">
            {guide.faqs.map((faq, idx) => (
              <div key={idx} className="bg-cream-100 p-5 rounded-xl border border-sepiaBorder space-y-2">
                <h3 className="font-serif font-bold text-base text-forest-900">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next Pagination */}
        <div className="flex items-center justify-between pt-6 border-t border-sepiaBorder">
          {prevCensus ? (
            <Link
              href={`/census-guides/${prevCensus.year}`}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-forest-900 hover:text-bronze-700 transition-colors bg-cream-50 px-4 py-2.5 rounded-xl border border-sepiaBorder shadow-sm"
            >
              <span>← {prevCensus.year} Census Guide</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/census-guides"
            className="text-xs font-bold uppercase tracking-wider text-charcoal-600 hover:text-forest-900 transition-colors"
          >
            All 17 Census Guides
          </Link>

          {nextCensus ? (
            <Link
              href={`/census-guides/${nextCensus.year}`}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-forest-900 hover:text-bronze-700 transition-colors bg-cream-50 px-4 py-2.5 rounded-xl border border-sepiaBorder shadow-sm"
            >
              <span>{nextCensus.year} Census Guide →</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
