// Pure genealogical calculation functions

export interface GravestoneResult {
  birthDateGregorian: Date;
  formattedBirthDate: string;
  deathDate: {
    year: number;
    month: number;
    day: number;
  };
  age: {
    years: number;
    months: number;
    days: number;
  };
  method8870: {
    deathNumber: number; // e.g. 18830914
    ageNumber: number; // e.g. 00680418
    intermediate: number; // 18150496
    needsCorrection: boolean;
    correctedNumber: number; // 18150426
    rawMonth: number;
    rawDay: number;
    explanation: string;
  };
  notes: string[];
}

export function calculateGravestoneBirth(
  deathYear: number,
  deathMonth: number, // 1-12
  deathDay: number,
  ageYears: number,
  ageMonths: number,
  ageDays: number
): GravestoneResult {
  // 1. Precise calendar stepping backwards:
  // Step back years
  let curYear = deathYear - ageYears;
  let curMonth = deathMonth;
  let curDay = deathDay;

  // Step back months
  curMonth -= ageMonths;
  while (curMonth < 1) {
    curMonth += 12;
    curYear -= 1;
  }

  // Step back days
  curDay -= ageDays;
  while (curDay < 1) {
    curMonth -= 1;
    if (curMonth < 1) {
      curMonth = 12;
      curYear -= 1;
    }
    // Number of days in this preceding month
    const daysInPrevMonth = new Date(curYear, curMonth, 0).getDate();
    curDay += daysInPrevMonth;
  }

  const birthDate = new Date(Date.UTC(curYear, curMonth - 1, curDay));
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const formattedBirthDate = `${monthNames[curMonth - 1]} ${curDay}, ${curYear}`;

  // 2. The Historic 8870 / 8800 / 70 Method
  // Death in YYYYMMDD
  const deathNumber = deathYear * 10000 + deathMonth * 100 + deathDay;
  const ageNumber = ageYears * 10000 + ageMonths * 100 + ageDays;
  const intermediate = deathNumber - ageNumber;

  const rawDay = intermediate % 100;
  const rawMonth = Math.floor((intermediate % 10000) / 100);

  const dayBorrowed = rawDay > 31 || deathDay < ageDays;
  const monthBorrowed = rawMonth > 12 || (deathMonth < ageMonths) || (deathMonth === ageMonths && deathDay < ageDays);

  let correctionSubtrahend = 0;
  let explanation = "";

  if (dayBorrowed && monthBorrowed) {
    correctionSubtrahend = 8870; // 8800 for month borrow + 70 for day borrow
    explanation =
      "Both days and months crossed calendar boundaries. Subtracting the full 8870 constant (8,800 month normalization + 70 day normalization) converts base-10 decimal borrowing into calendar months (12) and days (30).";
  } else if (dayBorrowed && !monthBorrowed) {
    correctionSubtrahend = 70;
    explanation =
      "Only the day column borrowed from the month column. Subtracting 70 normalizes the 100-base subtraction into a standard 30-day month.";
  } else if (!dayBorrowed && monthBorrowed) {
    correctionSubtrahend = 8800;
    explanation =
      "Only the month column borrowed from the year column. Subtracting 8,800 normalizes the 100-base subtraction into a standard 12-month calendar year.";
  } else {
    correctionSubtrahend = 0;
    explanation =
      "No borrowing across calendar units was required; direct decimal subtraction matched the calendar dates.";
  }

  const correctedNumber = intermediate - correctionSubtrahend;
  const correctedDay = correctedNumber % 100;
  const correctedMonth = Math.floor((correctedNumber % 10000) / 100);
  const correctedYear = Math.floor(correctedNumber / 10000);

  const notes: string[] = [];
  if (deathYear < 1752) {
    notes.push(
      "Note: Prior to September 1752 in the British Empire and American colonies, the Julian calendar was observed, with the new year starting on Lady Day (March 25). Double-dating (e.g. 1732/3) was common for January–March."
    );
  }
  notes.push(
    "19th-century headstones commonly counted both the day of birth and day of death inclusively, which may occasionally cause a 1-day variance against church baptismal registries."
  );

  return {
    birthDateGregorian: birthDate,
    formattedBirthDate,
    deathDate: { year: deathYear, month: deathMonth, day: deathDay },
    age: { years: ageYears, months: ageMonths, days: ageDays },
    method8870: {
      deathNumber,
      ageNumber,
      intermediate,
      needsCorrection: correctionSubtrahend > 0,
      correctedNumber,
      rawMonth: correctedMonth,
      rawDay: correctedDay,
      explanation,
    },
    notes,
  };
}

// ----------------------------------------------------
// Official NARA Soundex Code Generator
// ----------------------------------------------------
export interface SoundexStep {
  char: string;
  code: string;
  reason: string;
}

export interface SoundexResult {
  surname: string;
  soundexCode: string;
  steps: SoundexStep[];
  rulesApplied: string[];
}

export function generateSoundexCode(rawSurname: string): SoundexResult {
  const clean = rawSurname.trim().toUpperCase().replace(/[^A-Z]/g, "");

  if (!clean) {
    return {
      surname: rawSurname,
      soundexCode: "0000",
      steps: [],
      rulesApplied: ["Enter a surname to generate code"],
    };
  }

  const rulesApplied: string[] = [];
  const steps: SoundexStep[] = [];

  const charCodeMap: Record<string, string> = {
    B: "1", F: "1", P: "1", V: "1",
    C: "2", G: "2", J: "2", K: "2", Q: "2", S: "2", X: "2", Z: "2",
    D: "3", T: "3",
    L: "4",
    M: "5", N: "5",
    R: "6",
  };

  const firstLetter = clean[0];
  steps.push({
    char: firstLetter,
    code: firstLetter,
    reason: "Rule 1: Retain first letter of surname",
  });

  const digits: string[] = [];
  let prevCode = charCodeMap[firstLetter] || "";

  for (let i = 1; i < clean.length; i++) {
    const char = clean[i];
    const code = charCodeMap[char] || "";

    if (char === "H" || char === "W") {
      // Rule: Letters H and W are completely ignored and do not separate duplicate codes
      steps.push({
        char,
        code: "—",
        reason: "Rule: H and W are silent; ignored and do not separate codes",
      });
      continue;
    }

    if (!code) {
      // Vowel (A, E, I, O, U, Y)
      steps.push({
        char,
        code: "—",
        reason: "Rule: Vowels (A, E, I, O, U, Y) dropped, but act as code separators",
      });
      prevCode = ""; // Vowels act as separators between consonants with identical codes
      continue;
    }

    if (code === prevCode) {
      // Rule: Adjacent letters with same code
      steps.push({
        char,
        code: "—",
        reason: `Rule: Adjacent or H/W-separated letter with matching code ${code} is collapsed`,
      });
      rulesApplied.push(`Collapsed adjacent soundex digit ${code} for '${char}'`);
    } else {
      steps.push({
        char,
        code,
        reason: `Mapped consonant '${char}' to Soundex digit ${code}`,
      });
      digits.push(code);
      prevCode = code;
    }
  }

  // Pad or truncate to 3 digits
  while (digits.length < 3) {
    digits.push("0");
  }
  const finalDigits = digits.slice(0, 3).join("");
  const soundexCode = `${firstLetter}${finalDigits}`;

  return {
    surname: clean,
    soundexCode,
    steps,
    rulesApplied,
  };
}

// ----------------------------------------------------
// Ahnentafel Lineage Number Calculator
// ----------------------------------------------------
export interface AhnentafelResult {
  number: number;
  generation: number;
  generationKinship: string;
  exactRelationship: string;
  gender: "Proband" | "Male" | "Female";
  fatherNumber: number;
  motherNumber: number;
  childNumber: number | null;
  binaryPath: string; // e.g. "001"
  pathDescription: string[]; // e.g. ["Father", "Father", "Mother"]
  generationRange: { min: number; max: number };
  totalAncestorsInGen: number;
}

export function calculateAhnentafel(n: number): AhnentafelResult | null {
  if (n < 1 || !Number.isInteger(n) || n > 1000000000) {
    return null;
  }

  const generation = Math.floor(Math.log2(n)) + 1;
  const fatherNumber = n * 2;
  const motherNumber = n * 2 + 1;
  const childNumber = n === 1 ? null : Math.floor(n / 2);

  let gender: "Proband" | "Male" | "Female" = "Proband";
  if (n > 1) {
    gender = n % 2 === 0 ? "Male" : "Female";
  }

  // Binary path decoding
  // Binary string of n without the leading '1'
  const binary = n.toString(2);
  const pathBits = binary.slice(1); // string of 0s and 1s
  const pathDescription: string[] = [];

  for (const bit of pathBits) {
    pathDescription.push(bit === "0" ? "Father" : "Mother");
  }

  // Generation Kinship Term
  const genKinshipNames: Record<number, string> = {
    1: "Root Individual (Proband)",
    2: "Parents",
    3: "Grandparents",
    4: "Great-Grandparents (1st)",
    5: "2nd Great-Grandparents",
    6: "3rd Great-Grandparents",
    7: "4th Great-Grandparents",
    8: "5th Great-Grandparents",
    9: "6th Great-Grandparents",
    10: "7th Great-Grandparents",
  };
  const generationKinship =
    genKinshipNames[generation] ||
    `${generation - 3}th Great-Grandparents`;

  // Exact Specific Relationship
  let exactRelationship = "";
  if (n === 1) {
    exactRelationship = "You (The Root Subject / Proband)";
  } else if (n === 2) {
    exactRelationship = "Father";
  } else if (n === 3) {
    exactRelationship = "Mother";
  } else if (n === 4) {
    exactRelationship = "Paternal Grandfather (Father's Father)";
  } else if (n === 5) {
    exactRelationship = "Paternal Grandmother (Father's Mother)";
  } else if (n === 6) {
    exactRelationship = "Maternal Grandfather (Mother's Father)";
  } else if (n === 7) {
    exactRelationship = "Maternal Grandmother (Mother's Mother)";
  } else {
    // Build descriptive chain: e.g. "Father's Father's Mother"
    const possessive = pathDescription
      .slice(0, -1)
      .map((p) => `${p}'s `)
      .join("");
    const finalAncestor = pathDescription[pathDescription.length - 1];
    const prefix =
      generation === 4
        ? "Great-Grand"
        : `${generation - 3}${getOrdinalSuffix(generation - 3)} Great-Grand`;
    const title = finalAncestor === "Father" ? `${prefix}father` : `${prefix}mother`;
    exactRelationship = `${title} (${possessive}${finalAncestor})`;
  }

  const min = Math.pow(2, generation - 1);
  const max = Math.pow(2, generation) - 1;
  const totalAncestorsInGen = Math.pow(2, generation - 1);

  return {
    number: n,
    generation,
    generationKinship,
    exactRelationship,
    gender,
    fatherNumber,
    motherNumber,
    childNumber,
    binaryPath: pathBits,
    pathDescription,
    generationRange: { min, max },
    totalAncestorsInGen,
  };
}

function getOrdinalSuffix(i: number): string {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}
