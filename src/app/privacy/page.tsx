import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for FamilyRootsHub. Learn how we handle your personal data, Google AdSense cookies, and digital purchase security.",
  openGraph: {
    title: "Privacy Policy | FamilyRootsHub",
    description: "Learn how FamilyRootsHub protects your personal data and respects user privacy.",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 20, 2026";

  return (
    <div className="bg-cream-100 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-sepiaBorder pb-8 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-forest-200 mb-3">
            <Lock className="w-3.5 h-3.5 text-forest-700" />
            <span>Legal & Data Security</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal-500 mt-2">
            Last Updated: <span className="font-semibold text-charcoal-700">{lastUpdated}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-cream-50 rounded-2xl border border-sepiaBorder p-6 sm:p-10 shadow-sm space-y-8 text-charcoal-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">1. Introduction & Overview</h2>
            <p>
              Welcome to <strong>FamilyRootsHub</strong> (&quot;FamilyRootsHub.com&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal privacy when you visit our website, download our genealogy templates, subscribe to our newsletter, or purchase archival research guides.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how it is stored and processed, and your legal rights under applicable privacy legislation, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">2. Information We Collect</h2>
            <p>We may collect information directly from you or automatically through your use of the website:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Personal Information Provided Voluntarily:</strong> When you subscribe to receive our Free 4-Generation Starter Kit, contact our archival support team, or complete an order via Gumroad, we collect your name, email address, and any messages submitted.
              </li>
              <li>
                <strong>Payment & Transaction Information:</strong> All financial transactions and digital order processing are handled through third-party secure payment processors (e.g., Gumroad, Stripe). FamilyRootsHub never receives, handles, or stores your credit card numbers or banking credentials.
              </li>
              <li>
                <strong>Automatically Collected Technical Data:</strong> Like most websites, our web servers collect non-personally identifiable log files, including Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), referring/exit pages, operating system, and date/time stamps.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">3. Cookies, Web Beacons & Advertising Partners</h2>
            <p>
              FamilyRootsHub uses standard browser cookies and local storage to preserve your preferences, remember modal interactions, and optimize website performance.
            </p>
            <div className="bg-cream-100 p-4 rounded-xl border border-sepiaBorder/70 space-y-2">
              <h3 className="font-bold text-forest-900 text-xs uppercase tracking-wider">
                Google AdSense & DoubleClick Cookie Notice:
              </h3>
              <p className="text-xs text-charcoal-600">
                Google, as a third-party vendor, uses cookies to serve ads on this website. Google&apos;s use of advertising cookies (including the DoubleClick DART cookie) enables it and its partners to serve ads to users based on their visits to FamilyRootsHub.com and/or other sites on the Internet.
              </p>
              <p className="text-xs text-charcoal-600">
                Users may opt out of personalized advertising by visiting the{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-forest-800 font-semibold"
                >
                  Google Ads Settings
                </a>{" "}
                or opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-forest-800 font-semibold"
                >
                  www.aboutads.info
                </a>.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">4. How We Use Your Information</h2>
            <p>We use the data we collect solely for lawful, legitimate purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To deliver requested digital genealogy PDF kits and starter files.</li>
              <li>To respond to your inquiries and offer genealogical customer assistance.</li>
              <li>To provide educational blog articles, methodology guides, and archival tips.</li>
              <li>To detect and prevent fraudulent transactions or security incidents.</li>
              <li>To comply with regulatory and legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">5. Data Sharing & Third Parties</h2>
            <p>
              We do <strong>not</strong> sell, rent, trade, or monetize your personal email address or contact details to third parties. We may disclose data to trusted service providers who assist us in operating our website:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Gumroad / Stripe:</strong> For secure digital checkout and file fulfillment.</li>
              <li><strong>Hosting & CDN:</strong> For web page delivery and infrastructure stability.</li>
              <li><strong>Legal Authorities:</strong> Only when required by law or to protect our legal rights.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">6. GDPR & CCPA Rights</h2>
            <p>Depending on your geographic residency, you possess rights over your personal data:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The right to request access to personal data we hold about you.</li>
              <li>The right to request that we correct inaccurate or incomplete data.</li>
              <li>The right to request deletion of your information from our email lists.</li>
              <li>The right to withdraw consent at any time without penalty.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact our privacy officer at{" "}
              <a href="mailto:privacy@familyrootshub.com" className="underline text-forest-800 font-semibold">
                privacy@familyrootshub.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">7. Children&apos;s Online Privacy (COPPA)</h2>
            <p>
              FamilyRootsHub does not knowingly collect personally identifiable information from children under the age of 13. If you believe your child has submitted personal details on our site, please contact us immediately so we can promptly delete such records from our databases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-900">8. Contact Information</h2>
            <p>
              If you have any questions, comments, or concerns regarding this Privacy Policy, please contact us:
            </p>
            <div className="p-4 bg-cream-100 rounded-xl border border-sepiaBorder text-xs text-charcoal-700 space-y-1">
              <p><strong>Website:</strong> FamilyRootsHub.com</p>
              <p><strong>Email:</strong> <a href="mailto:support@familyrootshub.com" className="underline text-forest-800">support@familyrootshub.com</a></p>
              <p><strong>Support Inquiries:</strong> <Link href="/contact" className="underline text-forest-800">Visit our Contact Page</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
