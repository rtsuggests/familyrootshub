import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles, BookOpen, Compass, ShieldCheck } from "lucide-react";
import { GravestoneCalculator } from "@/components/calculators/GravestoneCalculator";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Gravestone Birth Date Calculator | 8870 Tombstone Formula",
  description:
    "Calculate exact ancestor birth date from cemetery headstone death date and age in years, months, and days. Includes step-by-step 8870 formula breakdown.",
  alternates: {
    canonical: "https://familyrootshub.com/tools/gravestone-birth-date-calculator",
  },
  openGraph: {
    title: "Gravestone Birth Date Calculator — The 8870 Method | FamilyRootsHub",
    description:
      "Decode 19th-century cemetery headstones with precision. Calculate exact birth dates from age at death using the proven genealogical 8870 subtraction method.",
    url: "https://familyrootshub.com/tools/gravestone-birth-date-calculator",
    type: "website",
  },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", item: "https://familyrootshub.com" },
  { name: "Free Tools", item: "https://familyrootshub.com/tools" },
  { name: "Gravestone Birth Date Calculator", item: "https://familyrootshub.com/tools/gravestone-birth-date-calculator" },
];

const FAQS = [
  {
    question: "What is the 8870 method in genealogy?",
    answer:
      "The 8870 method is a classic mathematical shortcut used by genealogists to calculate an ancestor's birth date using standard 8-digit pocket calculators. When subtracting an age formatted as YYMMDD from a death date formatted as YYYYMMDD, calendar borrow differences (12 months in a year and 30/31 days in a month vs decimal borrowing) necessitate subtracting 8870 (or 8800 or 70 depending on whether days, months, or both crossed month boundaries).",
  },
  {
    question: "Why does headstone math often differ by one day from actual birth records?",
    answer:
      "Historical headstone carvers often counted both the day of birth and the day of death inclusive, or assumed standard 30-day lunar months rather than the exact calendar month length of that specific year. Additionally, the Gregorian calendar reform of 1752 shifted dates by 11 days across Britain and American colonies.",
  },
  {
    question: "How do I verify cemetery headstone inscriptions?",
    answer:
      "Never rely solely on a photograph of a weathered headstone. Cross-reference the calculated birth date against decennial Federal census returns, church baptismal registers, sexton burial records, and mortuary daybooks. Our $10 Cemetery & Vital Records Field Dossier provides standardized transcription logs for this purpose.",
  },
];

export default function GravestoneCalculatorPage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gravestone Birth Date Calculator (8870 Method)",
    operatingSystem: "All",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free genealogical tool to calculate exact birth dates from cemetery headstone death dates and inscribed ages (years, months, days).",
  };

  return (
    <div className="bg-cream-100 min-h-screen py-10 sm:py-16">
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <FaqJsonLd faqs={FAQS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-charcoal-600">
          <Link href="/" className="hover:text-forest-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-charcoal-400" />
          <Link href="/tools" className="hover:text-forest-800 transition-colors">
            Free Tools
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-charcoal-400" />
          <span className="font-semibold text-forest-900" aria-current="page">
            Gravestone Birth Date Calculator
          </span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-300">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            <span>Archival Headstone Decryption Engine</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            Gravestone Birth Date Calculator
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Enter the date of death and the exact age in years, months, and days inscribed on your ancestor&apos;s monument. Our engine solves the exact calendar arithmetic and reveals the step-by-step mathematical 8870 deduction.
          </p>
        </div>

        {/* Interactive Calculator Component */}
        <GravestoneCalculator />

        {/* Educational Content & Archival Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-sepiaBorder">
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                The Mathematics of the 8870 Tombstone Formula
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                Before digitized databases, genealogical field researchers standing in rural parish cemeteries utilized hand-held four-function calculators to compute birth dates. Inscriptions almost universally recorded age in the format: <em>&quot;Died Oct 14, 1883, Aged 68 Yrs, 4 Mos, 18 Dys&quot;</em>.
              </p>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                When treating dates as single eight-digit numbers (<code className="font-mono bg-cream-200 px-1.5 py-0.5 rounded text-xs font-bold">YYYYMMDD</code>), direct subtraction fails because our standard number system is base-10, whereas months are base-12 and calendar days are base-28, 29, 30, or 31.
              </p>
              <div className="bg-cream-50 p-6 rounded-2xl border border-sepiaBorder space-y-3">
                <h3 className="font-serif font-bold text-base text-forest-900">
                  Why 8870 Works:
                </h3>
                <ul className="text-xs sm:text-sm text-charcoal-700 space-y-2 list-disc pl-5">
                  <li>
                    <strong>Day Borrowing (70):</strong> In base-10, borrowing 1 from the tens column provides 100 units instead of 30 days. Subtracting 70 reconciles the decimal surplus (100 - 30 = 70).
                  </li>
                  <li>
                    <strong>Month Borrowing (8800):</strong> Borrowing 1 from the year column in base-10 supplies 10,000 units instead of 1,200 (12 months). Subtracting 8,800 reconciles the calendar deficit (10,000 - 1,200 = 8,800).
                  </li>
                  <li>
                    <strong>Combined Compound Borrow (8870):</strong> When both days and months require borrowing across month and year boundaries, 8,800 + 70 = <strong>8,870</strong>.
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                Frequently Asked Inscription Questions
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="bg-cream-50 p-5 rounded-2xl border border-sepiaBorder space-y-2">
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
          </div>

          {/* Sidebar: Related Tools & Archival Kits */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-cream-50 p-6 rounded-2xl border border-sepiaBorder shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-forest-900 flex items-center">
                <Compass className="w-5 h-5 text-bronze-700 mr-2" />
                More Free Archival Calculators
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/tools/soundex-code-generator"
                    className="font-bold text-forest-900 hover:text-bronze-700 block transition-colors"
                  >
                    NARA Soundex Code Generator →
                  </Link>
                  <span className="text-charcoal-600 text-xs">
                    Transcribe variant surname spellings for Federal census reels.
                  </span>
                </li>
                <li>
                  <Link
                    href="/tools/ahnentafel-calculator"
                    className="font-bold text-forest-900 hover:text-bronze-700 block transition-colors"
                  >
                    Ahnentafel Lineage Decoder →
                  </Link>
                  <span className="text-charcoal-600 text-xs">
                    Binary branch navigation for ancestor numbers 1 to 1,000,000+.
                  </span>
                </li>
                <li>
                  <Link
                    href="/tools/cousin-relationship-calculator"
                    className="font-bold text-forest-900 hover:text-bronze-700 block transition-colors"
                  >
                    Cousin Kinship &amp; DNA Calculator →
                  </Link>
                  <span className="text-charcoal-600 text-xs">
                    Decode &quot;removed&quot; cousins and Blaine Bettinger shared cMs.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-forest-900 text-cream-50 p-6 rounded-2xl border border-forest-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-400 block">
                Archival Standard
              </span>
              <h4 className="font-serif font-bold text-base text-cream-50">
                14-Page Cemetery Dossier ($10)
              </h4>
              <p className="text-xs text-cream-200 leading-relaxed">
                Take organized cemetery field logs with pre-printed headstone rubbing grids, plot mapping grids, and sexton interview checklists.
              </p>
              <Link
                href="/templates/cemetery-vital-records-kit"
                className="inline-flex items-center text-xs font-bold text-bronze-300 hover:text-bronze-200 underline pt-1"
              >
                View 14-Page Cemetery Dossier Kit →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
