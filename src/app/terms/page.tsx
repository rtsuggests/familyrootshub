import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Scale, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service and digital purchase license agreement for FamilyRootsHub genealogy templates, printables, and guides.",
  openGraph: {
    title: "Terms of Service | FamilyRootsHub",
    description: "Read the terms governing use of FamilyRootsHub and our digital archival products.",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "October 20, 2026";

  return (
    <div className="bg-cream-100 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-sepiaBorder pb-8 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-forest-200 mb-3">
            <Scale className="w-3.5 h-3.5 text-forest-700" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-charcoal-500 mt-2">
            Last Updated: <span className="font-semibold text-charcoal-700">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-10 shadow-sm space-y-8 text-charcoal-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, downloading, or purchasing digital products from <strong>FamilyRootsHub.com</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;the Site&quot;), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must refrain from using the website and its services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">2. Intellectual Property & Digital License</h2>
            <p>
              All materials available on FamilyRootsHub.com—including printable PDF templates, pedigree charts, census extraction forms, digital planner layouts, text, graphics, and instructional guides—are the proprietary intellectual property of FamilyRootsHub and are protected by United States and international copyright laws.
            </p>
            <div className="bg-cream-100 p-4 rounded-xl border border-sepiaBorder space-y-2">
              <h3 className="font-bold text-forest-900 text-xs uppercase tracking-wider">
                Personal Non-Commercial License:
              </h3>
              <p className="text-xs text-charcoal-600">
                When you download or purchase a template from FamilyRootsHub, you receive a non-exclusive, non-transferable, revocable license to print and use the files for your own personal, family, or educational genealogy research.
              </p>
              <ul className="text-xs text-charcoal-600 list-disc pl-5 space-y-1">
                <li>You <strong>MAY</strong> print unlimited copies for your personal family binders.</li>
                <li>You <strong>MAY</strong> share printed charts with immediate family members.</li>
                <li>You <strong>MAY NOT</strong> resell, redistribute, sub-license, upload to public cloud drives, or repackage our digital PDF files for commercial gain.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">3. Digital Delivery & Refund Policy</h2>
            <p>
              All paid products sold through FamilyRootsHub are digital downloads delivered immediately upon purchase via email and on-screen download links.
            </p>
            <p>
              <strong>30-Day Archival Satisfaction Guarantee:</strong> We stand behind the quality of our archival research systems. If you purchase any paid template kit and find that it does not help you organize your family research, simply email <a href="mailto:support@familyrootshub.com" className="underline text-forest-800 font-semibold">support@familyrootshub.com</a> within 30 days of purchase with your order receipt, and we will issue a full 100% refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">4. Prohibited Uses</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Use the Site in any way that violates applicable federal, state, local, or international law.</li>
              <li>Engage in automated scraping, data mining, or extraction of website content without prior written permission.</li>
              <li>Attempt to interfere with the proper functioning of the website or bypass any security features.</li>
              <li>Impersonate or attempt to impersonate FamilyRootsHub, an employee, or any other user.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">5. Disclaimer of Warranties</h2>
            <p>
              Our templates, calculation widgets (such as the Cousin Calculator), and blog guides are provided on an &quot;as is&quot; and &quot;as available&quot; basis for educational and research organization purposes. While we strive for extreme historical accuracy, FamilyRootsHub makes no warranties regarding the completeness, timeliness, or accuracy of third-party public records or census images referenced.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">6. Limitation of Liability</h2>
            <p>
              In no event shall FamilyRootsHub, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or digital products.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">8. Contact Information</h2>
            <p>
              For legal inquiries or questions regarding these terms, please contact:
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
