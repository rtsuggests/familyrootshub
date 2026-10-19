import React from "react";
import { ARCHIVAL_GEAR } from "@/data/archivalGear";
import { ExternalLink, Star, Shield, Award, PenTool, FileText, BookOpen, ShieldCheck } from "lucide-react";

export const ArchivalGearGrid: React.FC = () => {
  const getIcon = (name?: string) => {
    switch (name) {
      case "PenTool":
        return <PenTool className="w-6 h-6 text-bronze-600" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-bronze-600" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-bronze-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-bronze-600" />;
    }
  };

  return (
    <section id="archival-gear" className="py-16 sm:py-24 bg-cream-50 border-b border-sepiaBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-200 mb-3">
              <Award className="w-3.5 h-3.5 text-forest-700" />
              <span>NARA &amp; Library of Congress Certified</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
              Curated Archival Supplies &amp; Gear
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 mt-2 leading-relaxed">
              Standard office supplies destroy historical paper over time. We tested dozens of brands to recommend these acid-free, lignin-free preservation tools designed to safeguard your research for 200+ years.
            </p>
          </div>
          <div className="text-xs text-charcoal-500 bg-cream-100 border border-sepiaBorder p-3 rounded-lg max-w-xs">
            <span className="font-semibold text-charcoal-800">Affiliate Indicator:</span> Outbound links marked with an affiliate badge may earn us a small commission to maintain this free research hub.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARCHIVAL_GEAR.map((item) => (
            <div
              key={item.id}
              className="bg-cream-100/90 rounded-2xl border border-sepiaBorder p-6 flex flex-col justify-between hover:border-forest-700/60 hover:shadow-heritage transition-all duration-200"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 border border-forest-200/80 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider bg-bronze-100 text-bronze-800 border border-bronze-200 px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
                  {item.category}
                </div>

                <h3 className="font-serif text-base font-bold text-forest-900 leading-snug mb-2 line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Why Archival Box */}
                <div className="bg-cream-200/70 p-3 rounded-lg border border-sepiaBorder/60 mb-4 text-[11px] text-charcoal-700 space-y-1">
                  <div className="font-bold text-forest-900 flex items-center">
                    <Shield className="w-3 h-3 text-bronze-600 mr-1" />
                    Why It Matters:
                  </div>
                  <div className="italic leading-normal text-charcoal-600">
                    {item.whyArchival}
                  </div>
                </div>
              </div>

              <div>
                {/* Rating & Price */}
                <div className="flex items-center justify-between text-xs text-charcoal-600 border-t border-sepiaBorder/60 pt-3 mb-3">
                  <div className="flex items-center space-x-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-bold text-charcoal-800">{item.rating}</span>
                    <span className="text-charcoal-500 text-[10px]">({item.reviewsCount})</span>
                  </div>
                  <span className="font-semibold text-forest-900">{item.priceRange}</span>
                </div>

                {/* Affiliate Outbound Link */}
                <a
                  href={item.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full bg-cream-50 hover:bg-forest-800 hover:text-cream-50 text-forest-900 border border-forest-800/40 rounded-lg py-2 px-3 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors group"
                >
                  <span>View Archival Specs</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
