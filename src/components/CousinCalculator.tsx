"use client";

import React, { useState } from "react";
import { Users, GitBranch, Share2, HelpCircle, Sparkles, Check, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface GenerationOption {
  value: number;
  label: string;
  ancestorTitle: string;
  generationSteps: string;
}

const GENERATION_OPTIONS: GenerationOption[] = [
  { value: 1, label: "My Parent", ancestorTitle: "Parent", generationSteps: "1 generation back" },
  { value: 2, label: "My Grandparent", ancestorTitle: "Grandparent", generationSteps: "2 generations back" },
  { value: 3, label: "My Great-Grandparent", ancestorTitle: "Great-Grandparent", generationSteps: "3 generations back" },
  { value: 4, label: "My 2nd Great-Grandparent", ancestorTitle: "2nd Great-Grandparent", generationSteps: "4 generations back" },
  { value: 5, label: "My 3rd Great-Grandparent", ancestorTitle: "3rd Great-Grandparent", generationSteps: "5 generations back" },
  { value: 6, label: "My 4th Great-Grandparent", ancestorTitle: "4th Great-Grandparent", generationSteps: "6 generations back" },
];

export const CousinCalculator: React.FC = () => {
  const [genA, setGenA] = useState<number>(2); // Default Grandparent
  const [genB, setGenB] = useState<number>(3); // Default Great-Grandparent
  const [copied, setCopied] = useState<boolean>(false);

  // Compute relationship
  const getRelationshipDetails = (a: number, b: number) => {
    const minGen = Math.min(a, b);
    const diff = Math.abs(a - b);

    let title = "";
    let shortName = "";
    let explanation = "";
    let avgCm = "";
    let cmRange = "";

    if (a === 1 && b === 1) {
      title = "Brother / Sister (Full Sibling)";
      shortName = "Sibling";
      explanation = "You and your relative share the exact same parents.";
      avgCm = "2,600 cM";
      cmRange = "2,209 – 3,384 cM (approx. 50% shared DNA)";
    } else if (minGen === 1) {
      if (diff === 1) {
        title = a < b ? "Aunt / Uncle to Niece / Nephew" : "Niece / Nephew to Aunt / Uncle";
        shortName = a < b ? "Niece or Nephew" : "Aunt or Uncle";
        explanation = "The common ancestor is a parent to one person and a grandparent to the other.";
        avgCm = "1,750 cM";
        cmRange = "1,349 – 2,175 cM (approx. 25% shared DNA)";
      } else if (diff === 2) {
        title = a < b ? "Great-Aunt/Uncle to Grand-Niece/Nephew" : "Grand-Niece/Nephew to Great-Aunt/Uncle";
        shortName = a < b ? "Grand-Niece/Nephew" : "Great-Aunt/Uncle";
        explanation = "The common ancestor is a parent to one and a great-grandparent to the other.";
        avgCm = "850 cM";
        cmRange = "251 – 2,108 cM (approx. 12.5% shared DNA)";
      } else {
        title = `${diff - 1}x Great-Aunt/Uncle to Grand-Niece/Nephew`;
        shortName = "Extended Collateral Relative";
        explanation = `The common ancestor is separated by ${diff} generations along the collateral line.`;
        avgCm = "400 cM";
        cmRange = "50 – 850 cM";
      }
    } else {
      // Cousin calculation
      const cousinOrdinal = minGen - 1; // 1 = 1st cousin, 2 = 2nd cousin, etc.
      const ordinals = ["", "1st", "2nd", "3rd", "4th", "5th", "6th"];
      const cousinStr = `${ordinals[cousinOrdinal]} Cousin`;

      if (diff === 0) {
        title = `${cousinStr} (Same Generation)`;
        shortName = cousinStr;
        explanation = `You both share common ${GENERATION_OPTIONS.find((g) => g.value === minGen)?.ancestorTitle}s and sit on the exact same generational branch.`;
        if (cousinOrdinal === 1) {
          avgCm = "874 cM";
          cmRange = "396 – 1,397 cM (approx. 12.5% shared DNA)";
        } else if (cousinOrdinal === 2) {
          avgCm = "229 cM";
          cmRange = "41 – 592 cM (approx. 3.13% shared DNA)";
        } else if (cousinOrdinal === 3) {
          avgCm = "73 cM";
          cmRange = "0 – 234 cM (approx. 0.78% shared DNA)";
        } else if (cousinOrdinal === 4) {
          avgCm = "35 cM";
          cmRange = "0 – 139 cM (approx. 0.20% shared DNA)";
        } else {
          avgCm = "15 cM";
          cmRange = "0 – 80 cM (under 0.1% shared DNA)";
        }
      } else {
        const removedTimes = diff === 1 ? "Once" : diff === 2 ? "Twice" : `${diff} Times`;
        title = `${cousinStr} ${removedTimes} Removed (${cousinOrdinal}C${diff}R)`;
        shortName = `${cousinStr} ${removedTimes} Removed`;
        const direction = a < b ? "descending down 1 generation" : "ascending up 1 generation";
        explanation = `You share common ${GENERATION_OPTIONS.find((g) => g.value === minGen)?.ancestorTitle}s. The word "removed" simply means you are on different generational rungs, separated by ${diff} generation(s).`;

        if (cousinOrdinal === 1 && diff === 1) {
          avgCm = "433 cM";
          cmRange = "102 – 980 cM (approx. 6.25% shared DNA)";
        } else if (cousinOrdinal === 1 && diff === 2) {
          avgCm = "225 cM";
          cmRange = "33 – 541 cM";
        } else if (cousinOrdinal === 2 && diff === 1) {
          avgCm = "122 cM";
          cmRange = "14 – 353 cM";
        } else if (cousinOrdinal === 2 && diff === 2) {
          avgCm = "62 cM";
          cmRange = "0 – 244 cM";
        } else {
          avgCm = "30 cM";
          cmRange = "0 – 120 cM";
        }
      }
    }

    return { title, shortName, explanation, avgCm, cmRange, minGen, diff };
  };

  const rel = getRelationshipDetails(genA, genB);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Genealogy Relationship: ${rel.title}\nAverage Shared DNA: ${rel.avgCm} (${rel.cmRange})\nCalculated at FamilyRootsHub.com`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cousin-calculator" className="py-16 sm:py-24 bg-cream-100 border-t border-b border-sepiaBorder">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-bronze-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-bronze-600" />
            <span>Free Archival Utility Tool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight">
            Interactive Cousin Relationship Explainer
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 mt-3 leading-relaxed">
            Confused by &quot;2nd Cousin Once Removed&quot; or wondering how many centimorgans (cM) of DNA you should share? Select your shared common ancestor below to instantly decode the genealogical math.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="bg-cream-50 rounded-2xl border border-sepiaBorder shadow-vault overflow-hidden">
          {/* Top banner */}
          <div className="bg-forest-800 text-cream-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-forest-900">
            <div className="flex items-center space-x-2.5">
              <GitBranch className="w-5 h-5 text-bronze-300" />
              <span className="font-serif font-bold text-base text-cream-50">
                Ahnentafel Generation Matrix Calculator
              </span>
            </div>
            <div className="text-xs text-cream-200 bg-forest-900/60 px-3 py-1 rounded-full border border-forest-700">
              Correlated with Blaine Bettinger&apos;s Shared cM Project
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Person A Selector */}
              <div className="bg-cream-100/90 p-5 rounded-xl border border-sepiaBorder/80 space-y-3">
                <label
                  htmlFor="user-relationship-select"
                  className="block text-xs font-bold uppercase tracking-wider text-forest-900"
                >
                  Step 1: Your Relationship to the Common Ancestor
                </label>
                <p className="text-xs text-charcoal-600">
                  Who is the most recent shared ancestor to <strong>YOU</strong>?
                </p>
                <select
                  id="user-relationship-select"
                  name="userRelationship"
                  aria-label="Step 1: Your Relationship to the Common Ancestor"
                  value={genA}
                  onChange={(e) => setGenA(Number(e.target.value))}
                  className="w-full bg-cream-50 border border-sepiaBorder rounded-lg px-4 py-3 text-sm font-medium text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700 shadow-sm"
                >
                  {GENERATION_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label} ({opt.generationSteps})
                    </option>
                  ))}
                </select>
                <div className="text-[11px] text-charcoal-600 italic">
                  E.g. If you share your grandfather, select &quot;My Grandparent&quot;.
                </div>
              </div>

              {/* Person B Selector */}
              <div className="bg-cream-100/90 p-5 rounded-xl border border-sepiaBorder/80 space-y-3">
                <label
                  htmlFor="relative-relationship-select"
                  className="block text-xs font-bold uppercase tracking-wider text-forest-900"
                >
                  Step 2: Their Relationship to that Same Ancestor
                </label>
                <p className="text-xs text-charcoal-600">
                  Who is that exact same person to your <strong>RELATIVE</strong>?
                </p>
                <select
                  id="relative-relationship-select"
                  name="relativeRelationship"
                  aria-label="Step 2: Their Relationship to that Same Ancestor"
                  value={genB}
                  onChange={(e) => setGenB(Number(e.target.value))}
                  className="w-full bg-cream-50 border border-sepiaBorder rounded-lg px-4 py-3 text-sm font-medium text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700 shadow-sm"
                >
                  {GENERATION_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label} ({opt.generationSteps})
                    </option>
                  ))}
                </select>
                <div className="text-[11px] text-charcoal-600 italic">
                  E.g. If that person is their great-grandparent, select &quot;My Great-Grandparent&quot;.
                </div>
              </div>
            </div>

            {/* Results Display Box */}
            <div className="mt-8 bg-forest-950 text-cream-50 rounded-xl p-6 sm:p-8 border border-forest-800 shadow-heritage">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-bronze-400">
                    Official Genealogical Relationship:
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-tight">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-charcoal-200 leading-relaxed">
                    {rel.explanation}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-forest-800/80">
                    <div>
                      <span className="text-xs text-bronze-300 block font-semibold">
                        Average Shared DNA:
                      </span>
                      <span className="font-mono text-lg font-bold text-cream-100">
                        {rel.avgCm}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-bronze-300 block font-semibold">
                        Expected cM Range (99th percentile):
                      </span>
                      <span className="font-mono text-sm text-charcoal-300">
                        {rel.cmRange}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual Tree Branch Mini Diagram */}
                <div className="bg-forest-900/90 rounded-lg p-5 border border-forest-800 lg:w-72 shrink-0 text-center">
                  <div className="text-[11px] uppercase tracking-wider text-bronze-400 font-bold mb-3">
                    Generational Split
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-forest-800 py-1.5 px-3 rounded border border-forest-700 font-serif font-bold text-cream-100">
                      Most Recent Common Ancestor
                    </div>
                    <div className="flex justify-center items-center py-1 text-bronze-400">
                      &darr; &nbsp; &nbsp; &nbsp; &nbsp; &darr;
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="bg-forest-800/60 p-2 rounded border border-forest-700/60">
                        <span className="block text-bronze-300 font-bold">You</span>
                        <span>{genA} gen{genA > 1 ? "s" : ""}</span>
                      </div>
                      <div className="bg-forest-800/60 p-2 rounded border border-forest-700/60">
                        <span className="block text-bronze-300 font-bold">Relative</span>
                        <span>{genB} gen{genB > 1 ? "s" : ""}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="mt-4 w-full bg-bronze-400 hover:bg-bronze-300 text-forest-950 font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-forest-950" /> : <Share2 className="w-3.5 h-3.5 text-forest-950" />}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Relationship Data"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Explanatory Guide note */}
            <div className="mt-6 flex items-start space-x-3 text-xs text-charcoal-600 bg-cream-200/50 p-4 rounded-xl border border-sepiaBorder/60">
              <HelpCircle className="w-5 h-5 text-forest-800 shrink-0 mt-0.5" />
              <div>
                <strong>Why does &quot;Once Removed&quot; matter?</strong> When researchers hit a genealogical brick wall, recognizing that second and third cousins once removed still share significant chunks of autosomal DNA allows you to triangulate elusive maiden names and immigration ports. Our <strong>35-Page Master Binder</strong> includes dedicated DNA Triangulation worksheets specifically mapped to this chart.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
