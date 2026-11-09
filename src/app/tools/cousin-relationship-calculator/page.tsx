import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles, Compass, Dna, GitBranch, Layers, ShieldCheck } from "lucide-react";
import { CousinCalculator } from "@/components/CousinCalculator";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cousin Relationship Calculator | DNA Centimorgans (cM)",
  description:
    "Calculate exact cousin relationships (1st, 2nd, 3rd cousin once/twice removed) and expected shared DNA centimorgans based on Blaine Bettinger's Shared cM Project.",
  alternates: {
    canonical: "https://familyrootshub.com/tools/cousin-relationship-calculator",
  },
  openGraph: {
    title: "Cousin Relationship Calculator & DNA Centimorgan Chart | FamilyRootsHub",
    description:
      "Decode 'removed' cousins instantly. Discover exactly how many generations separate you and how many centimorgans (cM) of autosomal DNA you should share.",
    url: "https://familyrootshub.com/tools/cousin-relationship-calculator",
    type: "website",
  },
};

const BREADCRUMB_ITEMS = [
  { name: "Home", item: "https://familyrootshub.com" },
  { name: "Free Tools", item: "https://familyrootshub.com/tools" },
  { name: "Cousin Relationship Calculator", item: "https://familyrootshub.com/tools/cousin-relationship-calculator" },
];

const FAQS = [
  {
    question: "What does 'once removed' or 'twice removed' mean in cousin relationships?",
    answer:
      "The word 'removed' simply means a generational difference between you and your relative. If you and your cousin belong to the exact same generation (e.g., you both share grandparents), you are full first cousins with zero removals. If your cousin is one generation further down (e.g., your first cousin's child), they are your first cousin once removed (1C1R).",
  },
  {
    question: "How many centimorgans (cM) do first, second, and third cousins share?",
    answer:
      "Based on Blaine Bettinger's Shared cM Project, full first cousins share an average of 874 cM (range: 396–1,397 cM, approx. 12.5% DNA). Second cousins share an average of 229 cM (range: 41–592 cM, approx. 3.13% DNA). Third cousins share an average of 73 cM (range: 0–234 cM, approx. 0.78% DNA).",
  },
  {
    question: "Can third or fourth cousins share zero DNA?",
    answer:
      "Yes! Due to random genetic recombination during meiosis, approximately 10% of third cousins and roughly 50% of fourth cousins share zero detectable autosomal DNA segments despite sharing documented paper-trail ancestors.",
  },
];

export default function CousinCalculatorPage() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cousin Relationship and Shared DNA Calculator",
    operatingSystem: "All",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Interactive genealogical tool to calculate collateral cousin relationships and expected shared DNA centimorgans.",
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
            Cousin Relationship Calculator
          </span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-300">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            <span>Shared cM Project &amp; Kinship Matrix</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-900 tracking-tight leading-tight">
            Cousin Relationship &amp; DNA Centimorgan Calculator
          </h1>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            Confused by &quot;2nd Cousin Once Removed&quot; or evaluating AncestryDNA, 23andMe, or MyHeritage match lists? Select your common ancestor below to decode collateral generational math and expected shared centimorgan ranges.
          </p>
        </div>

        {/* Interactive Calculator */}
        <CousinCalculator />

        {/* Educational Content & Archival Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-sepiaBorder">
          <div className="lg:col-span-8 space-y-8">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                How to Calculate Cousin Removals in Family History
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                The secret to understanding cousin relationships is a simple two-step rule:
              </p>
              <div className="bg-cream-50 p-6 rounded-2xl border border-sepiaBorder space-y-3">
                <ol className="text-xs sm:text-sm text-charcoal-700 space-y-3 list-decimal pl-5">
                  <li>
                    <strong>Find the Closest Generation (Cousin Degree):</strong> Count the generations from the shared ancestor down to whichever of you is <em>closer</em> in generations. If the common ancestor is a grandparent to one of you, you are in the <strong>1st Cousin</strong> category. If a great-grandparent, you are in the <strong>2nd Cousin</strong> category.
                  </li>
                  <li>
                    <strong>Count the Difference in Generations (Times Removed):</strong> Count the difference in generations between you and your relative. If you are on the same generational tier, there is <strong>zero removal</strong>. If one of you is one generation further down, you are <strong>Once Removed (1R)</strong>.
                  </li>
                </ol>
              </div>
            </section>

            {/* FAQs */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-900">
                Frequently Asked Kinship &amp; DNA Questions
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
                    href="/tools/ahnentafel-calculator"
                    className="font-bold text-forest-900 hover:text-bronze-700 block transition-colors"
                  >
                    Ahnentafel Lineage Decoder →
                  </Link>
                  <span className="text-charcoal-600 text-xs">
                    Decode direct-line ancestor numbers 1 to 1,000,000+.
                  </span>
                </li>
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
                Keep collateral lines, sibling groups, and cousin charts cleanly organized in acid-free 3-ring binder spreads.
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
