import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles, BookOpen, Search, Compass, ShieldCheck } from "lucide-react";
import { SoundexGenerator } from "@/components/calculators/SoundexGenerator";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NARA Soundex Code Generator | Official Census Rules",
  description:
    "Convert any surname into its official National Archives (NARA) Soundex code in real time. Full breakdown of H/W rules, consonant clustering, and 1880-1930 census indexing.",
  alternates: {
    canonical: "https://familyrootshub.com/tools/soundex-code-generator",
  },
  openGraph: {
    title: "NARA Soundex Code Generator — Official Census Indexing | FamilyRootsHub",
    description:
      "Instant phonographic Soundex converter for American Federal Census research. Matches National Archives microfilm rolls from 1880, 1900, 1910, 1920, and 1930.",
    url: "https://familyrootshub.com/tools/soundex-code-generator",
    type: "website",
  },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", item: "https://familyrootshub.com" },
  { name: "Free Tools", item: "https://familyrootshub.com/tools" },
  { name: "Soundex Code Generator", item: "https://familyrootshub.com/tools/soundex-code-generator" },
];

const FAQS = [
  {
    question: "What is the NARA Soundex System?",
    answer:
      "Soundex is a coded surname indexing system based on how a name sounds rather than how it is spelled. Developed by Robert C. Russell and Margaret Odell in the early 20th century, the National Archives and Records Administration (NARA) used Soundex cards (Miracode) to index millions of households across the 1880, 1900, 1910, 1920, and 1930 US Federal Censuses.",
  },
  {
    question: "Why are the letters H and W treated differently in Soundex?",
    answer:
      "Under official NARA Rule 3, the letters H and W are completely ignored and do not separate two consonants with identical Soundex numbers. For example, in the surname 'Ashcraft', the 'S' and 'C' both have code 2 and are separated by 'h'; because 'h' is silent, they collapse into a single 2, yielding A-261. In contrast, vowels separate identical consonants.",
  },
  {
    question: "Which US Federal Censuses have Soundex indexes?",
    answer:
      "The 1880 census has partial Soundex (households with children 10 and under). The 1900, 1920, and portions of the 1910 and 1930 censuses have complete Soundex or Miracode card indexes on microfilm. Soundex is also used for immigration passenger manifests and naturalization records.",
  },
];

export default function SoundexGeneratorPage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NARA Soundex Code Generator",
    operatingSystem: "All",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Converts any ancestral surname into its official 4-character National Archives Soundex code with letter-by-letter rule explanation.",
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
            Soundex Code Generator
          </span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-300">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            <span>National Archives (NARA) Standard</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            NARA Soundex Code Generator
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Convert any family surname into its official 4-character Soundex index code (<code className="font-mono bg-cream-200 px-1.5 py-0.5 rounded text-xs font-bold">Letter + 3 Digits</code>). Decode spelling variants across 1880–1930 US Federal Census microfilm.
          </p>
        </div>

        {/* Interactive Soundex Tool */}
        <SoundexGenerator />

        {/* Educational Content & Archival Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-sepiaBorder">
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                Official National Archives Soundex Encoding Rules
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                When enumerators knocked on doors between 1790 and 1950, illiterate ancestors spoke their surnames aloud, and clerks transcribed them phonetically. A single family could appear as <em>Birk</em>, <em>Burke</em>, or <em>Bourke</em> across three decennial returns. Soundex groups names by phonetic consonant sounds.
              </p>

              <div className="bg-cream-50 p-6 rounded-2xl border border-sepiaBorder space-y-3">
                <h3 className="font-serif font-bold text-base text-forest-900">
                  Standard Soundex Consonant Value Key:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder">
                    <strong className="text-forest-900 font-bold block text-sm">1: B, F, P, V</strong>
                    <span className="text-charcoal-600">Labials (lips/teeth)</span>
                  </div>
                  <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder">
                    <strong className="text-forest-900 font-bold block text-sm">2: C, G, J, K, Q, S, X, Z</strong>
                    <span className="text-charcoal-600">Gutturals &amp; Sibilants</span>
                  </div>
                  <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder">
                    <strong className="text-forest-900 font-bold block text-sm">3: D, T</strong>
                    <span className="text-charcoal-600">Dentals</span>
                  </div>
                  <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder">
                    <strong className="text-forest-900 font-bold block text-sm">4: L</strong>
                    <span className="text-charcoal-600">Long liquids</span>
                  </div>
                  <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder">
                    <strong className="text-forest-900 font-bold block text-sm">5: M, N</strong>
                    <span className="text-charcoal-600">Nasals</span>
                  </div>
                  <div className="bg-cream-100 p-2.5 rounded-lg border border-sepiaBorder">
                    <strong className="text-forest-900 font-bold block text-sm">6: R</strong>
                    <span className="text-charcoal-600">Short liquids</span>
                  </div>
                </div>
                <p className="text-xs text-charcoal-600 pt-2">
                  <strong>Ignored Letters:</strong> A, E, I, O, U, Y, W, and H are never assigned a code number, but vowels act as separators between two consonants that share identical digits.
                </p>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                Frequently Asked Soundex Questions
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

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-cream-50 p-6 rounded-2xl border border-sepiaBorder shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-forest-900 flex items-center">
                <Compass className="w-5 h-5 text-bronze-700 mr-2" />
                Related Archival Tools
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/census-guides"
                    className="font-bold text-forest-900 hover:text-bronze-700 block transition-colors"
                  >
                    1790–1950 US Census Year Guides →
                  </Link>
                  <span className="text-charcoal-600 text-xs">
                    Every statutory date, column heading, and research tip.
                  </span>
                </li>
                <li>
                  <Link
                    href="/tools/gravestone-birth-date-calculator"
                    className="font-bold text-forest-900 hover:text-bronze-700 block transition-colors"
                  >
                    Gravestone Birth Date Calculator →
                  </Link>
                  <span className="text-charcoal-600 text-xs">
                    Calculate birth dates with the classic 8870 cemetery formula.
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
              </ul>
            </div>

            <div className="bg-forest-900 text-cream-50 p-6 rounded-2xl border border-forest-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-400 block">
                NARA Microfilm Extraction
              </span>
              <h4 className="font-serif font-bold text-base text-cream-50">
                9-Template Census Kit ($12)
              </h4>
              <p className="text-xs text-cream-200 leading-relaxed">
                Log your ancestors directly into pre-printed 1790 to 1950 census sheets matching original federal schedules line-for-line.
              </p>
              <Link
                href="/templates/census-extraction-worksheets"
                className="inline-flex items-center text-xs font-bold text-bronze-300 hover:text-bronze-200 underline pt-1"
              >
                View 9-Template Census Extraction Kit →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
