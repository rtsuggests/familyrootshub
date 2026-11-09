"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Binary,
  Layers,
  ArrowRight,
  GitBranch,
  Sparkles,
  Info,
  CheckCircle2,
  Share2,
  BookOpen,
  User,
  Users,
} from "lucide-react";
import { calculateAhnentafel, AhnentafelResult } from "@/utils/genealogyCalculators";

const PRESET_NUMBERS = [
  { n: 1, label: "#1 You (Proband)" },
  { n: 4, label: "#4 Father's Father" },
  { n: 7, label: "#7 Mother's Mother" },
  { n: 14, label: "#14 Mother's Paternal Grandfather" },
  { n: 25, label: "#25 Paternal 2nd Great-Grandmother" },
  { n: 63, label: "#63 Maternal Line Matriarch" },
];

export function AhnentafelCalculator() {
  const [inputVal, setInputVal] = useState<string>("14");
  const [copied, setCopied] = useState<boolean>(false);

  const num = parseInt(inputVal, 10);
  const result: AhnentafelResult | null = !isNaN(num) && num > 0 ? calculateAhnentafel(num) : null;

  const handleCopy = () => {
    if (!result) return;
    const text = `Ahnentafel #${result.number}: ${result.exactRelationship} (Generation ${result.generation}: ${result.generationKinship}). Binary Path: ${result.pathDescription.join(" → ") || "Root"}. Calculated at FamilyRootsHub.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Interactive Tool Card */}
      <div className="bg-cream-50 rounded-3xl border-2 border-forest-800/80 shadow-vault overflow-hidden">
        {/* Header Bar */}
        <div className="bg-forest-900 text-cream-50 px-6 sm:px-8 py-5 border-b border-forest-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-forest-800 border border-forest-700 flex items-center justify-center text-bronze-300">
              <Binary className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-cream-50">
                Ahnentafel Ancestor Number Decoder
              </h2>
              <p className="text-xs text-cream-200">
                Mathematical Sosa-Stradonitz System &amp; Binary Branch Pathway
              </p>
            </div>
          </div>
          <div className="inline-flex items-center space-x-1.5 bg-forest-800 px-3 py-1 rounded-full text-xs text-bronze-300 border border-forest-700 self-start sm:self-auto font-medium">
            <Sparkles className="w-3.5 h-3.5 text-bronze-400" />
            <span>Instant Pedigree Lookup</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Input Section */}
          <div className="bg-cream-100/80 p-6 rounded-2xl border border-sepiaBorder space-y-4">
            <label
              htmlFor="ahnentafel-number-input"
              className="block text-xs font-bold uppercase tracking-wider text-forest-900"
            >
              Enter Any Ahnentafel / Sosa Number (1 to 1,000,000+):
            </label>
            <div className="relative max-w-md">
              <input
                id="ahnentafel-number-input"
                type="number"
                min="1"
                max="1000000000"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="e.g. 14, 25, 48..."
                aria-label="Enter Ahnentafel Ancestor Number"
                className="w-full px-5 py-3.5 bg-cream-50 border-2 border-forest-800/60 rounded-xl text-xl font-serif font-bold text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700 shadow-sm"
              />
            </div>

            {/* Presets */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[11px] font-bold uppercase text-charcoal-600 block">
                Quick Historical Presets:
              </span>
              <div className="flex flex-wrap gap-2">
                {PRESET_NUMBERS.map((p) => (
                  <button
                    key={p.n}
                    type="button"
                    onClick={() => setInputVal(p.n.toString())}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      inputVal === p.n.toString()
                        ? "bg-forest-800 text-cream-50 border-forest-900 font-bold shadow-sm"
                        : "bg-cream-50 text-charcoal-700 border-sepiaBorder hover:border-forest-700/60"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display */}
          {result ? (
            <div className="space-y-6">
              {/* Main Headline Result Card */}
              <div className="bg-forest-950 text-cream-50 rounded-2xl p-6 sm:p-8 border border-forest-800 shadow-heritage space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-forest-800/80 pb-6">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-bronze-400 mb-2">
                      <span>Ahnentafel #{result.number}</span>
                      <span>•</span>
                      <span className="bg-forest-900 px-2.5 py-0.5 rounded border border-forest-700 text-cream-100">
                        Generation {result.generation}
                      </span>
                      <span>•</span>
                      <span className="text-cream-200">{result.gender}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
                      {result.exactRelationship}
                    </h3>
                    <p className="text-sm text-cream-200 mt-1">
                      Group Kinship: <strong>{result.generationKinship}</strong>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center space-x-2 bg-bronze-500 hover:bg-bronze-400 text-forest-950 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 self-start md:self-center"
                    aria-label="Copy Ahnentafel lineage breakdown"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-forest-950" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4 text-forest-950" />
                        <span>Copy Lineage Card</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mathematical Tree Relations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-forest-900/80 p-4 rounded-xl border border-forest-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cream-200 block mb-1">
                      Father (2N)
                    </span>
                    <div className="text-2xl font-serif font-bold text-bronze-300">
                      #{result.fatherNumber}
                    </div>
                    <span className="text-[11px] text-cream-200 mt-1 block">
                      {result.number} × 2 = #{result.fatherNumber}
                    </span>
                  </div>

                  <div className="bg-forest-900/80 p-4 rounded-xl border border-forest-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cream-200 block mb-1">
                      Mother (2N + 1)
                    </span>
                    <div className="text-2xl font-serif font-bold text-bronze-300">
                      #{result.motherNumber}
                    </div>
                    <span className="text-[11px] text-cream-200 mt-1 block">
                      ({result.number} × 2) + 1 = #{result.motherNumber}
                    </span>
                  </div>

                  <div className="bg-forest-900/80 p-4 rounded-xl border border-forest-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cream-200 block mb-1">
                      Child (Floor N / 2)
                    </span>
                    <div className="text-2xl font-serif font-bold text-bronze-300">
                      {result.childNumber ? `#${result.childNumber}` : "None (Root Proband)"}
                    </div>
                    <span className="text-[11px] text-cream-200 mt-1 block">
                      {result.childNumber ? `Floor(${result.number} / 2) = #${result.childNumber}` : "Root subject"}
                    </span>
                  </div>
                </div>

                {/* Binary Lineage Pathway */}
                {result.pathDescription.length > 0 && (
                  <div className="bg-forest-900/50 p-5 rounded-xl border border-forest-800/80 space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-bronze-400">
                      <GitBranch className="w-4 h-4 text-bronze-300" />
                      <span>Binary Step-by-Step Traversal from Proband (#1):</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="bg-cream-100 text-forest-900 px-3 py-1 rounded-lg text-xs font-bold">
                        #1 You (Start)
                      </span>
                      {result.pathDescription.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <ArrowRight className="w-3.5 h-3.5 text-bronze-400 shrink-0" />
                          <span
                            className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                              step === "Father"
                                ? "bg-forest-800 text-cream-100 border-forest-700"
                                : "bg-bronze-900 text-bronze-200 border-bronze-700"
                            }`}
                          >
                            {step}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="text-xs text-cream-200 pt-1">
                      Binary representation: <code className="font-mono bg-forest-950 px-2 py-0.5 rounded text-bronze-300 font-bold">{result.number.toString(2)}</code>. Dropping the root leading 1 leaves binary sequence <code className="font-mono bg-forest-950 px-2 py-0.5 rounded text-bronze-300">{result.binaryPath}</code> (where 0 = Father branch, 1 = Mother branch).
                    </p>
                  </div>
                )}
              </div>

              {/* Generation Scope Card */}
              <div className="bg-cream-100 p-5 rounded-2xl border border-sepiaBorder flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center">
                    <Layers className="w-4 h-4 text-bronze-700 mr-1.5" />
                    Generation {result.generation} Statistics
                  </span>
                  <p className="text-xs text-charcoal-700">
                    Ahnentafel numbers in this tier span from <strong>#{result.generationRange.min}</strong> to <strong>#{result.generationRange.max}</strong>.
                  </p>
                </div>
                <div className="bg-cream-50 px-4 py-2 rounded-xl border border-sepiaBorder text-right shrink-0">
                  <span className="text-[11px] text-charcoal-500 uppercase block font-semibold">
                    Theoretical Ancestors in Gen
                  </span>
                  <span className="text-lg font-serif font-bold text-forest-900">
                    {result.totalAncestorsInGen.toLocaleString()} Persons
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center bg-cream-100 rounded-2xl border border-dashed border-sepiaBorder">
              <p className="text-sm text-charcoal-600">
                Please enter a positive whole number greater than or equal to 1 to calculate Ahnentafel kinship.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Embedded Product Pitch for $14 35-Page Binder */}
      <div className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 text-cream-50 rounded-3xl p-8 sm:p-10 border border-forest-700 shadow-vault">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-forest-800 text-bronze-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-forest-700">
              <BookOpen className="w-3.5 h-3.5 text-bronze-400" />
              <span>Standardized Ahnentafel Binder System</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
              Never Lose Track of Ancestor Numbers on Paper
            </h3>
            <p className="text-sm sm:text-base text-cream-200 leading-relaxed">
              Our <strong>35-Page Master Genealogy Research Binder ($14)</strong> features pre-indexed Ahnentafel pedigree spreads, generation margin tabs, and cross-referenced family group sheets. Designed to National Archives (NARA) standard specifications so every ancestor from #1 to #31 maps directly into acid-free physical folders.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-cream-200">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>5-Generation Pre-Numbered</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>0.75&quot; 3-Ring Hole Spacing</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-bronze-400 shrink-0" />
                <span>US Letter &amp; A4 Formats</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-forest-950/70 rounded-2xl border border-forest-700 text-center space-y-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-bronze-400 block mb-1">
                Instant Archival Download
              </span>
              <div className="text-3xl font-serif font-bold text-cream-50">$14.00</div>
              <span className="text-[11px] text-cream-300">Lifetime access • Free future updates</span>
            </div>

            <a
              href="https://familyrootshub.gumroad.com/l/research-binder?wanted=true"
              className="gumroad-button w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-bronze-500 hover:bg-bronze-400 text-forest-950 font-bold text-sm uppercase tracking-wider transition-all shadow-md active:scale-95"
              data-gumroad-single-product="true"
            >
              Get 35-Page Binder ($14)
            </a>

            <Link
              href="/templates/genealogy-research-binder"
              className="text-xs text-bronze-300 hover:text-bronze-200 underline font-medium"
            >
              Explore Complete Binder Specifications →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
