"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  HelpCircle,
  Clock,
  Info
} from "lucide-react";
import { calculateGravestoneBirth, GravestoneResult } from "@/utils/genealogyCalculators";
import { Button } from "@/components/Button";

interface Preset {
  label: string;
  deathYear: number;
  deathMonth: number;
  deathDay: number;
  ageYears: number;
  ageMonths: number;
  ageDays: number;
  description: string;
}

const PRESETS: Preset[] = [
  {
    label: "1883 Civil War Veteran",
    deathYear: 1883,
    deathMonth: 9,
    deathDay: 14,
    ageYears: 68,
    ageMonths: 4,
    ageDays: 18,
    description: "Tombstone: 'Died Sept 14, 1883, Aged 68 Yrs, 4 Mos, 18 Dys'"
  },
  {
    label: "1845 Oregon Pioneer",
    deathYear: 1845,
    deathMonth: 11,
    deathDay: 3,
    ageYears: 42,
    ageMonths: 8,
    ageDays: 22,
    description: "Tombstone: 'Died Nov 3, 1845, Aged 42 Y, 8 M, 22 D'"
  },
  {
    label: "1912 Victorian Matriarch",
    deathYear: 1912,
    deathMonth: 4,
    deathDay: 16,
    ageYears: 84,
    ageMonths: 2,
    ageDays: 11,
    description: "Tombstone: 'Died Apr 16, 1912, Aged 84 Yrs, 2 Mos, 11 Days'"
  }
];

export const GravestoneCalculator: React.FC = () => {
  const [deathYear, setDeathYear] = useState<number>(1883);
  const [deathMonth, setDeathMonth] = useState<number>(9);
  const [deathDay, setDeathDay] = useState<number>(14);
  const [ageYears, setAgeYears] = useState<number>(68);
  const [ageMonths, setAgeMonths] = useState<number>(4);
  const [ageDays, setAgeDays] = useState<number>(18);
  const [copied, setCopied] = useState<boolean>(false);

  const result: GravestoneResult = calculateGravestoneBirth(
    deathYear || 1800,
    deathMonth || 1,
    deathDay || 1,
    ageYears || 0,
    ageMonths || 0,
    ageDays || 0
  );

  const handleCopy = () => {
    const text = `Gravestone Birth Date Calculation:\nDate of Death: ${deathYear}-${String(deathMonth).padStart(2, "0")}-${String(deathDay).padStart(2, "0")}\nAge at Death: ${ageYears} Years, ${ageMonths} Months, ${ageDays} Days\nCalculated Birth Date: ${result.formattedBirthDate}\nFormula (8870 Method Result): ${result.method8870.correctedNumber}\nCalculated via FamilyRootsHub.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPreset = (p: Preset) => {
    setDeathYear(p.deathYear);
    setDeathMonth(p.deathMonth);
    setDeathDay(p.deathDay);
    setAgeYears(p.ageYears);
    setAgeMonths(p.ageMonths);
    setAgeDays(p.ageDays);
  };

  return (
    <div className="space-y-10">
      {/* Interactive Tool Card */}
      <div className="bg-cream-50 rounded-3xl border-2 border-forest-800/70 shadow-vault overflow-hidden">
        {/* Card Header */}
        <div className="bg-forest-900 text-cream-100 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-forest-800">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 text-bronze-300 flex items-center justify-center border border-forest-700 shadow-inner">
              <Calendar className="w-6 h-6 text-bronze-300" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-cream-50">
                Gravestone Exact Birth Date &amp; 8870 Calculator
              </h2>
              <p className="text-xs text-charcoal-300 mt-0.5">
                Calculates Gregorian birth date and breaks down the traditional 8870 epigraphy formula.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center space-x-2 bg-bronze-900/60 text-bronze-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-bronze-700/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual Calendar + 8870 Engine</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Presets */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
              Quick Inscription Presets:
            </label>
            <div className="flex flex-wrap gap-2.5">
              {PRESETS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => applyPreset(p)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-cream-100 hover:bg-cream-200 text-forest-900 border border-sepiaBorder transition-all text-left shadow-sm hover:border-forest-700/60"
                >
                  <span className="font-bold block">{p.label}</span>
                  <span className="text-[11px] text-charcoal-500">{p.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Date of Death Inputs */}
            <div className="bg-cream-100/70 p-6 rounded-2xl border border-sepiaBorder space-y-4">
              <div className="flex items-center justify-between border-b border-sepiaBorder pb-2">
                <span className="font-serif font-bold text-sm text-forest-900 flex items-center">
                  <Calendar className="w-4 h-4 text-bronze-700 mr-1.5" />
                  Date of Death (From Inscription)
                </span>
                <span className="text-[11px] text-charcoal-500">YYYY-MM-DD</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label htmlFor="death-year" className="block text-[11px] font-bold uppercase text-charcoal-600 mb-1">
                    Year
                  </label>
                  <input
                    id="death-year"
                    type="number"
                    min="1500"
                    max="2050"
                    value={deathYear || ""}
                    onChange={(e) => setDeathYear(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-cream-50 border border-sepiaBorder rounded-lg text-sm font-semibold text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700"
                    placeholder="1883"
                  />
                </div>
                <div>
                  <label htmlFor="death-month" className="block text-[11px] font-bold uppercase text-charcoal-600 mb-1">
                    Month
                  </label>
                  <select
                    id="death-month"
                    value={deathMonth}
                    onChange={(e) => setDeathMonth(parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-cream-50 border border-sepiaBorder rounded-lg text-sm font-semibold text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700"
                  >
                    {[
                      "Jan (01)", "Feb (02)", "Mar (03)", "Apr (04)", "May (05)", "Jun (06)",
                      "Jul (07)", "Aug (08)", "Sep (09)", "Oct (10)", "Nov (11)", "Dec (12)"
                    ].map((m, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="death-day" className="block text-[11px] font-bold uppercase text-charcoal-600 mb-1">
                    Day
                  </label>
                  <input
                    id="death-day"
                    type="number"
                    min="1"
                    max="31"
                    value={deathDay || ""}
                    onChange={(e) => setDeathDay(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-cream-50 border border-sepiaBorder rounded-lg text-sm font-semibold text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700"
                    placeholder="14"
                  />
                </div>
              </div>
            </div>

            {/* Right: Age at Death Inputs */}
            <div className="bg-cream-100/70 p-6 rounded-2xl border border-sepiaBorder space-y-4">
              <div className="flex items-center justify-between border-b border-sepiaBorder pb-2">
                <span className="font-serif font-bold text-sm text-forest-900 flex items-center">
                  <Clock className="w-4 h-4 text-bronze-700 mr-1.5" />
                  Age at Death (Yrs, Mos, Dys)
                </span>
                <span className="text-[11px] text-charcoal-500">From Inscription</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label htmlFor="age-years" className="block text-[11px] font-bold uppercase text-charcoal-600 mb-1">
                    Years (Y)
                  </label>
                  <input
                    id="age-years"
                    type="number"
                    min="0"
                    max="125"
                    value={ageYears !== undefined ? ageYears : ""}
                    onChange={(e) => setAgeYears(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-cream-50 border border-sepiaBorder rounded-lg text-sm font-semibold text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700"
                    placeholder="68"
                  />
                </div>
                <div>
                  <label htmlFor="age-months" className="block text-[11px] font-bold uppercase text-charcoal-600 mb-1">
                    Months (M)
                  </label>
                  <input
                    id="age-months"
                    type="number"
                    min="0"
                    max="11"
                    value={ageMonths !== undefined ? ageMonths : ""}
                    onChange={(e) => setAgeMonths(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-cream-50 border border-sepiaBorder rounded-lg text-sm font-semibold text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700"
                    placeholder="4"
                  />
                </div>
                <div>
                  <label htmlFor="age-days" className="block text-[11px] font-bold uppercase text-charcoal-600 mb-1">
                    Days (D)
                  </label>
                  <input
                    id="age-days"
                    type="number"
                    min="0"
                    max="31"
                    value={ageDays !== undefined ? ageDays : ""}
                    onChange={(e) => setAgeDays(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-cream-50 border border-sepiaBorder rounded-lg text-sm font-semibold text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-700"
                    placeholder="18"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-forest-950 text-cream-50 rounded-2xl p-6 sm:p-8 border border-forest-800 shadow-heritage space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-forest-800/80 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-bronze-400 block mb-1">
                  Calculated Ancestral Birth Date:
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-cream-50 text-amber-200">
                  {result.formattedBirthDate}
                </div>
                <p className="text-xs text-charcoal-300 mt-1">
                  Calculated via Gregorian reverse calendar stepping algorithm.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={handleCopy}
                  variant="secondary"
                  size="sm"
                  leftIcon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                >
                  {copied ? "Copied Citation!" : "Copy Result"}
                </Button>
              </div>
            </div>

            {/* 8870 Method Mathematical Breakdown */}
            <div className="bg-forest-900/80 rounded-xl p-5 border border-forest-800 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-bronze-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-bronze-400" />
                <span>The Historic 8870 Method Step-by-Step Breakdown</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="bg-forest-950/70 p-3 rounded-lg border border-forest-800">
                  <span className="text-charcoal-400 block text-[10px]">1. Death Date (YYYYMMDD)</span>
                  <span className="text-base text-cream-100 font-bold">{result.method8870.deathNumber}</span>
                </div>
                <div className="bg-forest-950/70 p-3 rounded-lg border border-forest-800">
                  <span className="text-charcoal-400 block text-[10px]">2. Age at Death (YYMMDD)</span>
                  <span className="text-base text-cream-100 font-bold">
                    {String(result.method8870.ageNumber).padStart(8, "0")}
                  </span>
                </div>
                <div className="bg-forest-950/70 p-3 rounded-lg border border-forest-800">
                  <span className="text-charcoal-400 block text-[10px]">3. 8870 Result</span>
                  <span className="text-base text-amber-300 font-bold">{result.method8870.correctedNumber}</span>
                </div>
              </div>

              <p className="text-xs text-charcoal-200 leading-relaxed font-sans pt-1">
                {result.method8870.explanation}
              </p>
            </div>

            {/* Archival Epigraphy Field Notes */}
            <div className="text-xs text-charcoal-300 space-y-1.5 pt-2 border-t border-forest-800/60">
              {result.notes.map((note, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <Info className="w-3.5 h-3.5 text-bronze-400 shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded High-Converting Buy Card: $10 Cemetery & Vital Records Field Dossier */}
      <div className="bg-gradient-to-br from-cream-50 via-cream-100 to-cream-50 rounded-3xl border-2 border-forest-800 p-6 sm:p-10 shadow-vault">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-bronze-100 text-bronze-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-bronze-300">
              <ShieldCheck className="w-3.5 h-3.5 text-bronze-800" />
              <span>Recommended Archival Fieldwork Companion</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900">
              Never Guess on a Weathered Headstone Again
            </h3>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              Equip your research expedition with our <strong>14-Page Cemetery &amp; Vital Records Field Dossier ($10)</strong>. Includes clipboard-ready epigraphy transcription sheets, Victorian gravestone symbol decoding keys (willows, clasped hands, Masonic/fraternal emblems), plot cartography grids, and courthouse vital records extraction logs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-charcoal-800">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Epigraphy transcription &amp; condition logs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Victorian funerary symbol decoding guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Family burial plot cartography grid</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-forest-800 shrink-0" />
                <span>Courthouse deed &amp; vital records extractors</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-cream-50 p-6 rounded-2xl border border-sepiaBorder shadow-sm text-center space-y-4">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="font-serif text-4xl font-bold text-forest-900">$10</span>
              <span className="text-sm text-charcoal-500 line-through">$18</span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                Save $8
              </span>
            </div>
            <span className="text-xs text-charcoal-600 block">
              14-Page Field Dossier &bull; Instant Archival PDF
            </span>

            <a
              href="https://familyrootshub.gumroad.com/l/cemetery-vital-records?wanted=true"
              className="gumroad-button block w-full"
              data-gumroad-single-product="true"
            >
              <Button
                variant="secondary"
                size="md"
                className="w-full shadow-md hover:shadow-lg"
                leftIcon={<ShoppingBag className="w-4 h-4 text-forest-950" />}
              >
                <span>Get Field Dossier &bull; $10</span>
              </Button>
            </a>

            <Link
              href="/templates/cemetery-vital-records-kit"
              className="inline-flex items-center text-xs text-forest-800 hover:text-forest-600 font-semibold underline"
            >
              <span>View Full 14-Page Breakdown</span>
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
