"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  id?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our printable and digital archival templates.",
  id = "faq-section",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id={id} className="py-16 sm:py-24 bg-cream-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-forest-700" />
            <span>Research Confidence &amp; Clarity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "bg-cream-50 rounded-xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-forest-700/60 shadow-sm"
                    : "border-sepiaBorder hover:border-forest-600/40"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-forest-600 rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-forest-900 pr-2">
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                      isOpen ? "bg-forest-800 text-cream-100 rotate-180" : "bg-cream-200 text-charcoal-700"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm text-charcoal-700 leading-relaxed border-t border-sepiaBorder/40 animate-fadeIn"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
