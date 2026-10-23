import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Compass,
  FileCheck,
  CheckCircle2,
  TreePine,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/Button";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "About Our Archival Mission",
  description:
    "Learn why FamilyRootsHub builds museum-grade, acid-free genealogy binders and worksheets designed to protect family history for centuries.",
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "About & Archival Methodology", url: "https://familyrootshub.com/about" },
  ];

  const standards = [
    {
      title: "National Archives & Records Administration (NARA)",
      convention: "Transcription & Extraction Protocols",
      description:
        "Every single census extraction grid in our catalog faithfully follows NARA decennial schedules from 1790 through 1950. We preserve historical column groupings—such as Soundex phonetic coding, alien registration, and real estate valuation columns—without omitting historical nuances.",
      icon: Award,
    },
    {
      title: "Ahnentafel Ancestral Mathematical Numbering",
      convention: "National Genealogical Society (NGS) Recommended",
      description:
        "Also known as the Eytzinger or Sosa-Stradonitz method, our binder systems establish a deterministic integer for every forebear. Male ancestors are always 2n, and female ancestors are 2n + 1. This prevents identity confusion across branches that share identical surnames.",
      icon: Compass,
    },
    {
      title: "ISO 11108 & ANSI/NISO Z39.48 Permanence",
      convention: "Paper Preservation & Acid-Free Workflow",
      description:
        "Standard pulp paper produces sulfuric acid as lignin breaks down, causing pages to yellow and become brittle within 25 years. We calibrate our margins, line weights, and ink densities specifically for 28lb–32lb alkaline-buffered papers guaranteed to remain stable for over two centuries.",
      icon: ShieldCheck,
    },
    {
      title: "Evidence Explained Citation Framework",
      convention: "Elizabeth Shown Mills Standard",
      description:
        "Our source logging sheets distinguish between original vs. derivative records, primary vs. secondary information, and direct vs. indirect evidence. This ensures any future genealogist reviewing your binder can trace your citations back to specific courthouse deed books, parish rolls, or microfilms.",
      icon: FileCheck,
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      <div className="bg-cream-100 min-h-screen pb-20">
        {/* Header Hero */}
        <section className="bg-forest-900 text-cream-100 py-16 sm:py-20 border-b border-forest-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-xs text-charcoal-300 mb-3" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-cream-50">
                  Home
                </Link>
                <span>/</span>
                <span className="text-bronze-300 font-medium">About &amp; Methodology</span>
              </nav>

              <div className="inline-flex items-center space-x-2 bg-forest-800 text-bronze-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-700 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
                <span>E-E-A-T Archival Integrity</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-cream-50 leading-tight">
                Built on Archival Science, Not Short-Lived Trends
              </h1>

              <p className="text-sm sm:text-base text-charcoal-200 mt-4 leading-relaxed">
                Why we created FamilyRootsHub, the standards we enforce across every template, and how we ensure your lifetime of ancestral discoveries endures for generations.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION STATEMENT SECTION */}
        <section className="py-16 sm:py-20 border-b border-sepiaBorder">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
                  Our Mission: Rescuing Family History from Digital Obsolescence
                </h2>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  Over the past twenty years, millions of families transferred their precious genealogy records into commercial cloud platforms. But cloud logins expire, monthly subscription paywalls go unpaid when researchers pass away, and digital file formats become obsolete.
                </p>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  We believe that while digital search engines are incredible for <em>discovery</em>, your <em>permanent archive</em> must exist in physical, archival-grade physical binders that your children and grandchildren can hold in their hands without passwords or software subscriptions.
                </p>
                <div className="p-4 bg-cream-50 rounded-xl border border-sepiaBorder italic text-xs text-charcoal-800 border-l-4 border-l-bronze-500">
                  &ldquo;A computer crash can wipe thirty years of research in seconds. An acid-free archival binder placed on a living room shelf endures for centuries.&rdquo;
                </div>
              </div>

              <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-forest-800 shadow-vault">
                <Image
                  src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80"
                  alt="Archival genealogy research with magnifying glass and historic documents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Founder Personal Story & Passion */}
            <div className="mt-14 pt-12 border-t border-sepiaBorder space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-bronze-700 bg-bronze-100 px-3 py-1 rounded-full border border-bronze-200">
                Founder&apos;s Origin Story
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 leading-tight">
                The Water-Damaged Shoebox in My Grandmother&apos;s Attic
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-charcoal-700 leading-relaxed">
                <p>
                  FamilyRootsHub started fifteen years ago after my maternal grandmother passed away. In the rafters of her upstate New York attic sat a cardboard boot box taped together with yellowed masking tape. Inside were original 1870 cabinet cards, civil war discharge papers, and handwritten German baptismal slips. But the acidic wood-pulp cardboard and sulfurous adhesive had begun eating through the paper edges.
                </p>
                <p>
                  I realized that millions of family historians face the exact same heartbreak. We spend hundreds of hours deciphering census microfilms and interviewing elderly aunts, only to leave our findings scattered across random spiral notebooks or locked behind commercial monthly subscriptions that our heirs will cancel when we are gone.
                </p>
                <p>
                  I teamed up with archival preservationists, certified genealogists, and graphic designers to build a complete family records system that is both beautiful and bulletproof. Every line weight, margin gutter, and column header in our templates was engineered to make physical family history intuitive, permanent, and accessible to anyone.
                </p>
                <p>
                  Today, FamilyRootsHub serves thousands of dedicated family historians, genealogists, and descendants across North America, the UK, and Australia. We are deeply grateful to be a small part of your family legacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T STANDARDS & METHODOLOGY GRID */}
        <section className="py-16 sm:py-20 bg-cream-50 border-b border-sepiaBorder">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-200 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
                <span>Methodology Framework</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-forest-900 tracking-tight">
                Our 4 Pillars of Archival Precision
              </h2>
              <p className="text-sm text-charcoal-700 mt-2">
                Every form and planner in the FamilyRootsHub catalog is crafted to satisfy stringent archival criteria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standards.map((std, idx) => {
                const Icon = std.icon;
                return (
                  <div
                    key={idx}
                    className="bg-cream-100 rounded-2xl border border-sepiaBorder p-6 sm:p-8 space-y-3 shadow-heritage"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-forest-800 text-cream-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-bronze-300" />
                      </div>
                      <span className="text-[11px] uppercase font-bold text-bronze-700 bg-bronze-100 border border-bronze-200 px-2.5 py-0.5 rounded-full">
                        {std.convention}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-forest-900 pt-2">
                      {std.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                      {std.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RESEARCH CHECKLIST */}
        <section className="py-16 sm:py-20 bg-cream-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="bg-forest-900 text-cream-100 rounded-2xl border border-forest-800 p-8 sm:p-10 shadow-vault">
              <h3 className="font-serif text-2xl font-bold text-cream-50 mb-4">
                The FamilyRootsHub Archival Promise
              </h3>
              <p className="text-sm text-charcoal-200 leading-relaxed mb-6">
                When you compile an ancestral volume using our system, you can rest assured knowing:
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Vendor Lock-In:</strong> All files are standard open-format vector PDFs. You can print them on any computer, at any copy shop, forever.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Gutter-Spaced for Binding:</strong> Extra 0.75-inch inner margins ensure standard 3-ring and European 4-ring punches never damage ancestor dates or names.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-bronze-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Cross-Generational Clarity:</strong> Pre-formatted child matrices and Ahnentafel numbers make it easy for future family members with zero genealogical training to understand their pedigree.
                  </span>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center gap-4">
                <Link href="/templates/genealogy-research-binder" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                    leftIcon={<BookOpen className="w-5 h-5 text-forest-950" />}
                  >
                    Explore 35-Page Master Binder
                  </Button>
                </Link>
                <Link href="/free-starter-kit" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-cream-100 border-cream-100 hover:bg-forest-800"
                  >
                    Get Free Starter Kit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
