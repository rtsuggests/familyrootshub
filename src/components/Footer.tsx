import React from "react";
import Link from "next/link";
import { TreePine, ShieldCheck, Zap, Award, Heart, Mail, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-cream-100 border-t border-forest-800">
      {/* Trust Badges Banner */}
      <div className="border-b border-forest-900 bg-forest-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-forest-800/80 border border-bronze-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-bronze-400" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-cream-50">30-Day Archival Guarantee</h4>
                <p className="text-xs text-charcoal-300">Unconditional 100% refund if not completely organized.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-forest-800/80 border border-bronze-500/30 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-bronze-400" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-cream-50">Instant Digital Delivery</h4>
                <p className="text-xs text-charcoal-300">Instant PDF download links emailed immediately upon purchase.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-forest-800/80 border border-bronze-500/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-bronze-400" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-cream-50">Certified Archival Formats</h4>
                <p className="text-xs text-charcoal-300">Built to NARA and National Genealogical Society guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-bronze-500 text-forest-950 flex items-center justify-center font-bold">
                <TreePine className="w-6 h-6 text-forest-950" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                FamilyRoots<span className="text-bronze-400">Hub</span>
              </span>
            </div>
            <p className="text-sm text-charcoal-200 leading-relaxed max-w-sm">
              Dedicated to rescuing family history from digital decay and scattered shoeboxes. We craft archival-standard printable research systems, census worksheets, and digital tablet vaults designed to endure for centuries.
            </p>
            <div className="pt-2 text-xs text-bronze-300/80 flex items-center space-x-2">
              <Heart className="w-3.5 h-3.5 text-bronze-400 fill-current" />
              <span>Crafted for genealogists, family scribes & archival keepers.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-semibold tracking-wider text-bronze-300 uppercase">
              Templates & Hub
            </h5>
            <ul className="space-y-2 text-sm text-charcoal-300">
              <li>
                <Link href="/templates" className="hover:text-cream-100 transition-colors">
                  All Printable Templates
                </Link>
              </li>
              <li>
                <Link href="/templates/genealogy-research-binder" className="hover:text-cream-100 transition-colors">
                  35-Page Master Binder
                </Link>
              </li>
              <li>
                <Link href="/templates?category=Census+Extractors" className="hover:text-cream-100 transition-colors">
                  Federal Census Extractors
                </Link>
              </li>
              <li>
                <Link href="/templates?category=Digital+Planners+(GoodNotes)" className="hover:text-cream-100 transition-colors">
                  GoodNotes Digital Planners
                </Link>
              </li>
              <li>
                <Link href="/free-starter-kit" className="hover:text-cream-100 transition-colors flex items-center">
                  <span>Free Pedigree Starter Kit</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 text-bronze-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Tools & Guides */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-semibold tracking-wider text-bronze-300 uppercase">
              Free Utilities & Guides
            </h5>
            <ul className="space-y-2 text-sm text-charcoal-300">
              <li>
                <Link href="/#cousin-calculator" className="hover:text-cream-100 transition-colors">
                  Interactive Cousin Calculator
                </Link>
              </li>
              <li>
                <Link href="/#archival-gear" className="hover:text-cream-100 transition-colors">
                  Recommended Archival Gear
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cream-100 transition-colors">
                  Archival Methodology & E-E-A-T
                </Link>
              </li>
              <li>
                <Link href="/templates/genealogy-research-binder#system-guide" className="hover:text-cream-100 transition-colors">
                  Binder Setup Guide
                </Link>
              </li>
              <li>
                <Link href="/#faq-section" className="hover:text-cream-100 transition-colors">
                  Genealogy FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-semibold tracking-wider text-bronze-300 uppercase">
              Archival Standards
            </h5>
            <p className="text-xs text-charcoal-300 leading-normal">
              All forms adhere to ISO 11108 archival permanence conventions, Ahnentafel ancestral numbering, and US National Archives (NARA) transcription protocols.
            </p>
            <div className="pt-2 text-xs text-charcoal-400 space-y-1">
              <p>Support: <a href="mailto:support@familyrootshub.com" className="underline hover:text-cream-100">support@familyrootshub.com</a></p>
              <p>Hours: Mon–Fri, 9am–5pm EST</p>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-forest-900 flex flex-col md:flex-row items-center justify-between text-xs text-charcoal-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} FamilyRootsHub.com. All rights reserved.
          </p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-charcoal-400">
            <strong>Affiliate Disclosure:</strong> FamilyRootsHub is reader-supported. When you purchase recommended archival pens, paper, or binders through our links, we may earn an affiliate commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};
