import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles, Binary, Compass, BookOpen, Layers } from "lucide-react";
import { AhnentafelCalculator } from "@/components/calculators/AhnentafelCalculator";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Ahnentafel Calculator | Sosa-Stradonitz Kinship Decoder",
  description:
    "Convert any Ahnentafel ancestor number into exact generation, kinship title, parent numbers, and binary branch pathway. Free genealogy calculation tool.",
  alternates: {
    canonical: "https://familyrootshub.com/tools/ahnentafel-calculator",
  },
  openGraph: {
    title: "Ahnentafel Ancestor Number Calculator | FamilyRootsHub",
    description:
      "Instant Sosa-Stradonitz genealogical decoder. Converts numbers 1 to 1,000,000+ into exact generational relationships and father/mother branches.",
    url: "https://familyrootshub.com/tools/ahnentafel-calculator",
    type: "website",
  },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", item: "https://familyrootshub.com" },
  { name: "Free Tools", item: "https://familyrootshub.com/tools" },
  { name: "Ahnentafel Calculator", item: "https://familyrootshub.com/tools/ahnentafel-calculator" },
];

const FAQS = [
  {
    question: "What is an Ahnentafel number in genealogy?",
    answer:
      "An Ahnentafel (German for 'ancestor table'), also known as the Sosa-Stradonitz system, is a mathematical numbering scheme for pedigree charts. Person #1 is the starting subject (proband). For any person N, their father is always 2N, their mother is always 2N + 1, and their child is floor(N / 2). Even numbers are male; odd numbers (except #1) are female.",
  },
  {
    question: "How does the binary path trick work for Ahnentafel numbers?",
    answer:
      "Convert any Ahnentafel number into binary. Drop the leading 1 (which represents the root individual #1). The remaining binary digits tell you the exact branch pathway from you to that ancestor: 0 represents taking the father's branch, and 1 represents taking the mother's branch. For example, #14 in binary is 1110. Dropping the first 1 leaves 110: Mother (1) → Mother (1) → Father (0) = Your maternal grandmother's father.",
  },
  {
    question: "What happens when cousins marry (pedigree collapse)?",
    answer:
      "When cousins marry, an individual ancestor appears in multiple locations on the family tree and receives more than one Ahnentafel number. While biological ancestors remain fixed, each branch slot has its own unique Ahnentafel designation.",
  },
];

export default function AhnentafelCalculatorPage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ahnentafel Lineage Number Calculator",
    operatingSystem: "All",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free genealogical tool to convert any Ahnentafel ancestor number into exact lineage relationship, generation, and parent/child numbers.",
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
            Ahnentafel Calculator
          </span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-300">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            <span>Sosa-Stradonitz Mathematical Standard</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            Ahnentafel Lineage Number Calculator
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Enter any ancestral number from your pedigree chart to instantly identify their exact generation, kinship relationship, father &amp; mother numbers, and step-by-step binary branch pathway.
          </p>
        </div>

        {/* Interactive Calculator */}
        <AhnentafelCalculator />

        {/* Educational Content & Archival Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-sepiaBorder">
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                How the Sosa-Stradonitz Ahnentafel System Works
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                First formulated by Franciscan friar Jérôme de Sosa in 1676 and later popularized by Stephan Kekulé von Stradonitz in 1898, the Ahnentafel method provides a universally recognized, computer-friendly numerical standard for family historians.
              </p>
              <div className="bg-cream-50 p-6 rounded-2xl border border-sepiaBorder space-y-3">
                <h3 className="font-serif font-bold text-base text-forest-900">
                  Core Mathematical Axioms:
                </h3>
                <ul className="text-xs sm:text-sm text-charcoal-700 space-y-2 list-disc pl-5">
                  <li>
                    <strong>Father Equation:</strong> Double any individual&apos;s number (<code className="font-mono bg-cream-200 px-1.5 py-0.5 rounded text-xs font-bold">2N</code>) to reach their biological father.
                  </li>
                  <li>
                    <strong>Mother Equation:</strong> Double any individual&apos;s number and add one (<code className="font-mono bg-cream-200 px-1.5 py-0.5 rounded text-xs font-bold">2N + 1</code>) to reach their biological mother.
                  </li>
                  <li>
                    <strong>Child Equation:</strong> Divide any ancestor&apos;s number by two and round down (<code className="font-mono bg-cream-200 px-1.5 py-0.5 rounded text-xs font-bold">floor(N / 2)</code>) to find their child in the preceding generation.
                  </li>
                  <li>
                    <strong>Gender Rule:</strong> All even numbers represent male ancestors. All odd numbers (except the proband #1, whose gender is arbitrary) represent female ancestors.
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                Frequently Asked Ahnentafel Questions
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
                    href="/blog/ahnentafel-numbering-system-guide"
                    className="font-bold text-forest-900 hover:text-bronze-700 block transition-colors"
                  >
                    Deep-Dive Ahnentafel Guide →
                  </Link>
                  <span className="text-charcoal-600 text-xs">
                    Read our full guide to organizing 5 generations without digital software.
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
                    Calculate shared centimorgans across collateral branches.
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
              </ul>
            </div>

            <div className="bg-forest-900 text-cream-50 p-6 rounded-2xl border border-forest-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-400 block">
                Archival Physical System
              </span>
              <h4 className="font-serif font-bold text-base text-cream-50">
                35-Page Master Research Binder ($14)
              </h4>
              <p className="text-xs text-cream-200 leading-relaxed">
                Pre-printed Ahnentafel charts (#1 to #31), index tab margins, and 0.75&quot; acid-free hole punch spacing.
              </p>
              <Link
                href="/templates/genealogy-research-binder"
                className="inline-flex items-center text-xs font-bold text-bronze-300 hover:text-bronze-200 underline pt-1"
              >
                Explore 35-Page Binder System →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
