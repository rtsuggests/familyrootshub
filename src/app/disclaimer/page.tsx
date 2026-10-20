import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, HelpCircle, ShieldAlert, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer & Affiliate Disclosure — FamilyRootsHub",
  description:
    "Official FTC affiliate disclosure, archival research disclaimer, and educational purpose statement for FamilyRootsHub.com.",
  openGraph: {
    title: "Disclaimer & Affiliate Disclosure | FamilyRootsHub",
    description: "Read our full FTC affiliate disclosure and genealogical research disclaimer.",
  },
};

export default function DisclaimerPage() {
  const lastUpdated = "October 20, 2026";

  return (
    <div className="bg-cream-100 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-sepiaBorder pb-8 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300 mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Transparency & Disclosure</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
            Disclaimer & Affiliate Disclosure
          </h1>
          <p className="text-xs text-charcoal-500 mt-2">
            Last Updated: <span className="font-semibold text-charcoal-700">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-10 shadow-sm space-y-8 text-charcoal-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">1. FTC Affiliate Disclosure</h2>
            <p>
              In compliance with Federal Trade Commission (FTC) guidelines, please assume that certain outbound links on <strong>FamilyRootsHub.com</strong> (specifically in our Curated Archival Gear section and blog guides) are affiliate links.
            </p>
            <p>
              This means that if you click on an outbound link to purchase recommended archival supplies—such as Sakura Pigma Micron archival pens, 32lb acid-free cotton paper, Mylar polyester sleeves, or linen-bound D-ring binders—FamilyRootsHub may earn a small referral commission at <strong>no additional cost to you</strong>.
            </p>
            <div className="bg-cream-100 p-4 rounded-xl border border-sepiaBorder space-y-2">
              <h3 className="font-bold text-forest-900 text-xs uppercase tracking-wider">
                Our Editorial Integrity Guarantee:
              </h3>
              <p className="text-xs text-charcoal-600">
                We only recommend physical archival products and tools that meet the rigorous conservation standards of the Library of Congress and the US National Archives (NARA). We never accept paid compensation for favorable product reviews or biased recommendations.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">2. Advertising & Google AdSense Disclosure</h2>
            <p>
              This website may display advertisements served by Google AdSense and other advertising networks. These third-party ad networks may use cookies and web beacons to serve personalized advertisements based on your prior browsing history. FamilyRootsHub does not control the specific advertisements displayed by these automated networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">3. Genealogical & Historical Research Disclaimer</h2>
            <p>
              The content published on FamilyRootsHub.com—including historical census extraction methodologies, Ahnentafel numbering tutorials, grave iconography guides, and relationship calculators—is intended solely for educational, archival organization, and research assistance purposes.
            </p>
            <p>
              Genealogical conclusions require rigorous primary source verification in accordance with the Genealogical Proof Standard (GPS). FamilyRootsHub does not guarantee that using our templates will resolve genealogical brick walls or definitively prove biological lineage without verified historical documentation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">4. Third-Party Websites & External Repositories</h2>
            <p>
              Our guides frequently reference external repositories and archives (e.g., NARA, FamilySearch, FindAGrave, Library of Congress). We have no control over the content, availability, or privacy practices of these independent organizations, and we assume no responsibility for external content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">5. Questions & Feedback</h2>
            <p>
              If you have any questions regarding our disclosures or editorial guidelines, please contact us at:
            </p>
            <div className="p-4 bg-cream-100 rounded-xl border border-sepiaBorder text-xs text-charcoal-700">
              <p><strong>Email:</strong> <a href="mailto:support@familyrootshub.com" className="underline text-forest-800">support@familyrootshub.com</a></p>
              <p className="mt-1"><strong>Help Desk:</strong> <Link href="/contact" className="underline text-forest-800">familyrootshub.com/contact</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
