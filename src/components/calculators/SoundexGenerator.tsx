"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  HelpCircle,
  FileSpreadsheet,
  Info
} from "lucide-react";
import { generateSoundexCode, SoundexResult } from "@/utils/genealogyCalculators";
import { Button } from "@/components/Button";

interface Preset {
  surname: string;
  code: string;
  note: string;
}

const PRESETS: Preset[] = [
  { surname: "Washington", code: "W252", note: "W + S(2) + N(5) + G(2)" },
  { surname: "Smith", code: "S530", note: "S + M(5) + T(3) + padded 0" },
  { surname: "Gutten", code: "G350", note: "Adjacent double 'TT' collapsed to 3" },
  { surname: "Ashcraft", code: "A261", note: "S and C separated by silent H collapsed to 2" },
  { surname: "Pfister", code: "P236", note: "Adjacent P and F collapsed to P; S(2), T(3), R(6)" },
  { surname: "Lee", code: "L000", note: "L + vowels dropped + padded with three 0s" }
];

export const SoundexGenerator: React.FC = () => {
  const [surname, setSurname] = useState<string>("Washington");
  const [copied, setCopied] = useState<boolean>(false);

  const result: SoundexResult = generateSoundexCode(surname);

  const handleCopy = () => {
    const text = `NARA Soundex Code for ${result.surname || surname}: ${result.soundexCode}\nGenerated via FamilyRootsHub.com Soundex Generator`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Interactive Tool Card */}
      <div className="bg-cream-50 rounded-3xl border-2 border-forest-800/70 shadow-vault overflow-hidden">
        {/* Card Header */}
        <div className="bg-forest-900 text-cream-100 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-forest-800">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 text-bronze-300 flex items-center justify-center border border-forest-700 shadow-inner">
              <Search className="w-6 h-6 text-bronze-300" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-cream-50">
                Official NARA Soundex Code Generator
              </h2>
              <p className="text-xs text-charcoal-300 mt-0.5">
                Converts any family surname into its exact National Archives Soundex index code in real time.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center space-x-2 bg-bronze-900/60 text-bronze-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-bronze-700/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NARA Census Standard</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Preset Buttons */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
              Test Common Surname Phonetic Presets:
            </label>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSurname(p.surname)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all text-left ${
                    surname.toUpperCase() === p.surname.toUpperCase()
                      ? "bg-forest-900 text-cream-100 border-forest-800 shadow-sm"
                      : "bg-cream-100 hover:bg-cream-200 text-forest-900 border-sepiaBorder"
                  }`}
                >
                  <span className="font-bold">{p.surname}</span>{" "}
                  <span className="text-[11px] opacity-80 font-mono">({p.code})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Input */}
          <div className="bg-cream-100/70 p-6 sm:p-8 rounded-2xl border border-sepiaBorder space-y-4">
            <label htmlFor="surname-input" className="block text-xs font-bold uppercase tracking-wider text-forest-900">
              Enter Any Family Surname / Last Name:
            </label>
            <div className="relative">
              <input
                id="surname-input"
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="e.g. Washington, Ashcraft, O'Brien, Fitzpatrick..."
                className="w-full px-5 py-4 bg-cream-50 border-2 border-forest-800/60 rounded-xl text-lg sm:text-xl font-serif font-bold text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700 shadow-sm uppercase placeholder:normal-case placeholder:font-sans placeholder:font-normal"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-charcoal-500 font-mono hidden sm:block">
                Press any key to calculate
              </div>
            </div>
            <p className="text-xs text-charcoal-600">
              Spaces, hyphens, and apostrophes are automatically sanitized according to National Archives standards.
            </p>
          </div>

          {/* Live Soundex Output Banner */}
          <div className="bg-forest-950 text-cream-50 rounded-2xl p-6 sm:p-8 border border-forest-800 shadow-heritage space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-forest-800/80 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-bronze-400 block mb-1">
                  Official NARA Soundex Code:
                </span>
                <div className="flex items-baseline space-x-3">
                  <span className="font-mono text-5xl sm:text-6xl font-bold tracking-widest text-amber-300">
                    {result.soundexCode}
                  </span>
                  <span className="text-xs sm:text-sm text-charcoal-300 font-sans">
                    For surname: <strong className="text-cream-100">{result.surname || "(blank)"}</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={handleCopy}
                  variant="secondary"
                  size="sm"
                  leftIcon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                >
                  {copied ? "Copied Code!" : "Copy Soundex Code"}
                </Button>
              </div>
            </div>

            {/* Step-by-Step Character Transformation Matrix */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-bronze-300 flex items-center">
                <Sparkles className="w-4 h-4 mr-1.5 text-bronze-400" />
                Character-by-Character Phonetic Encoding Breakdown
              </h4>

              <div className="overflow-x-auto rounded-xl border border-forest-800/80">
                <table className="min-w-full divide-y divide-forest-800 text-left text-xs">
                  <thead className="bg-forest-900 text-charcoal-300 font-bold uppercase text-[10px]">
                    <tr>
                      <th className="px-4 py-2.5">Letter</th>
                      <th className="px-4 py-2.5">Assigned Digit</th>
                      <th className="px-4 py-2.5">NARA Phonetic Rule Applied</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-forest-800/60 bg-forest-950/60 font-mono">
                    {result.steps.map((st, i) => (
                      <tr key={i} className={i === 0 ? "bg-forest-900/40 text-amber-200 font-bold" : ""}>
                        <td className="px-4 py-2 text-sm">{st.char}</td>
                        <td className="px-4 py-2 text-sm font-bold text-amber-300">{st.code}</td>
                        <td className="px-4 py-2 font-sans text-xs text-charcoal-200">{st.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Soundex Table Reference */}
            <div className="p-4 bg-forest-900/70 rounded-xl border border-forest-800 text-xs text-charcoal-200 space-y-2">
              <span className="font-bold text-cream-100 block">NARA Soundex Key Chart:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-[11px] font-mono">
                <div className="bg-forest-950/80 p-2 rounded border border-forest-800 text-center">
                  <strong className="text-amber-300 block text-sm">1</strong>
                  <span>B, F, P, V</span>
                </div>
                <div className="bg-forest-950/80 p-2 rounded border border-forest-800 text-center">
                  <strong className="text-amber-300 block text-sm">2</strong>
                  <span>C, G, J, K, Q, S, X, Z</span>
                </div>
                <div className="bg-forest-950/80 p-2 rounded border border-forest-800 text-center">
                  <strong className="text-amber-300 block text-sm">3</strong>
                  <span>D, T</span>
                </div>
                <div className="bg-forest-950/80 p-2 rounded border border-forest-800 text-center">
                  <strong className="text-amber-300 block text-sm">4</strong>
                  <span>L</span>
                </div>
                <div className="bg-forest-950/80 p-2 rounded border border-forest-800 text-center">
                  <strong className="text-amber-300 block text-sm">5</strong>
                  <span>M, N</span>
                </div>
                <div className="bg-forest-950/80 p-2 rounded border border-forest-800 text-center">
                  <strong className="text-amber-300 block text-sm">6</strong>
                  <span>R</span>
                </div>
              </div>
              <p className="text-[11px] text-charcoal-400 italic pt-1">
                Letters A, E, I, O, U, Y, W, and H are not assigned a code number, but vowels act as separators between consonants sharing the same code digit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded High-Converting Buy Card: $12 Federal Census Extraction Kit */}
      <div className="bg-gradient-to-br from-cream-50 via-cream-100 to-cream-50 rounded-3xl border-2 border-forest-800 p-6 sm:p-10 shadow-vault">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-bronze-300">
              <FileSpreadsheet className="w-3.5 h-3.5 text-bronze-800" />
              <span>Recommended Census Research Companion</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
              Transcribe Every US Census Schedule with Precision
            </h3>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              Now that you have your ancestor&apos;s Soundex code, locate and transcribe their federal census records with our <strong>9-Template Federal Census Extraction Kit ($12)</strong>. Features pre-printed column headers matching every decennial schedule from 1790 through 1950, margin allowances for 3-ring binder hole punching, and Soundex code reference tables on every sheet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-charcoal-800">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-forest-800 shrink-0" />
                <span>All 17 Decennial schedules (1790–1950)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Pre-printed column headers &amp; code keys</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-forest-800 shrink-0" />
                <span>3-Ring binder margin allowances</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Fillable digital PDF fields included</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-cream-50 p-6 rounded-2xl border border-sepiaBorder shadow-sm text-center space-y-4">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="font-serif text-4xl font-bold text-forest-900">$12</span>
              <span className="text-sm text-charcoal-500 line-through">$22</span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                Save $10
              </span>
            </div>
            <span className="text-xs text-charcoal-600 block">
              9-Template Kit &bull; Instant Archival PDF
            </span>

            <a
              href="https://familyrootshub.gumroad.com/l/census-worksheets?wanted=true"
              className="gumroad-button block w-full"
              data-gumroad-single-product="true"
            >
              <Button
                variant="secondary"
                size="md"
                className="w-full shadow-md hover:shadow-lg"
                leftIcon={<ShoppingBag className="w-4 h-4 text-forest-950" />}
              >
                <span>Get Census Kit &bull; $12</span>
              </Button>
            </a>

            <Link
              href="/templates/census-extraction-worksheets"
              className="inline-flex items-center text-xs text-forest-800 hover:text-forest-600 font-semibold underline"
            >
              <span>View Full 9-Template Breakdown</span>
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
