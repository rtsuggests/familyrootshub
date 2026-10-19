import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const DOWNLOADS_DIR = path.resolve('public/downloads');
if (!fs.existsSync(DOWNLOADS_DIR)) {
  fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
}

// Heritage Color Palette for Archival PDF Generation
const FOREST_DARK = rgb(30 / 255, 58 / 255, 47 / 255); // #1E3A2F
const BRONZE_GOLD = rgb(184 / 255, 134 / 255, 11 / 255); // #B8860B
const CHARCOAL = rgb(44 / 255, 53 / 255, 49 / 255); // #2C3531
const CREAM_BG = rgb(250 / 255, 248 / 255, 245 / 255); // #FAF8F5
const SEPIA_BORDER = rgb(227 / 255, 215 / 255, 197 / 255); // #E3D7C5
const PALE_BOX = rgb(245 / 255, 241 / 255, 234 / 255);
const WHITE = rgb(1, 1, 1);

function drawHeaderAndFooter(page, fontBold, fontRegular, fontItalic, {
  title,
  subtitle = 'FamilyRootsHub.com • Archival Organization System (Ahnentafel Standard)',
  pageNumber,
  totalPages,
  isLandscape = false,
  category = 'ARCHIVAL RESEARCH SYSTEM'
}) {
  const width = isLandscape ? 792 : 612;
  const height = isLandscape ? 612 : 792;
  const margin = 36; // 0.5 in

  // Background tint
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: CREAM_BG,
  });

  // Inner border with 0.75in inner gutter allowance on left/top for binder punch
  const leftMargin = margin + 18; // 0.75 in
  page.drawRectangle({
    x: leftMargin,
    y: margin,
    width: width - leftMargin - margin,
    height: height - margin * 2,
    borderColor: SEPIA_BORDER,
    borderWidth: 1,
    color: WHITE,
  });

  // Top header bar
  page.drawRectangle({
    x: leftMargin,
    y: height - margin - 52,
    width: width - leftMargin - margin,
    height: 52,
    color: FOREST_DARK,
  });

  // Category Tag
  page.drawText(category.toUpperCase(), {
    x: leftMargin + 14,
    y: height - margin - 18,
    size: 7.5,
    font: fontBold,
    color: BRONZE_GOLD,
  });

  // Header Title
  page.drawText(title, {
    x: leftMargin + 14,
    y: height - margin - 35,
    size: 15,
    font: fontBold,
    color: WHITE,
  });

  // Top Right Brand
  page.drawText('FAMILYROOTSHUB.COM', {
    x: width - margin - 145,
    y: height - margin - 22,
    size: 8,
    font: fontBold,
    color: WHITE,
  });

  page.drawText('ACID-FREE PRESERVATION STANDARD', {
    x: width - margin - 170,
    y: height - margin - 36,
    size: 6.5,
    font: fontRegular,
    color: BRONZE_GOLD,
  });

  // Subtitle strip below header
  page.drawRectangle({
    x: leftMargin,
    y: height - margin - 70,
    width: width - leftMargin - margin,
    height: 18,
    color: PALE_BOX,
    borderColor: SEPIA_BORDER,
    borderWidth: 0.5,
  });

  page.drawText(subtitle, {
    x: leftMargin + 14,
    y: height - margin - 63,
    size: 8,
    font: fontItalic,
    color: CHARCOAL,
  });

  // Bottom Footer
  page.drawLine({
    start: { x: leftMargin + 14, y: margin + 24 },
    end: { x: width - margin - 14, y: margin + 24 },
    thickness: 0.5,
    color: SEPIA_BORDER,
  });

  page.drawText('Universal Ahnentafel Root: Subject = 1 | Father = 2n | Mother = 2n + 1 • Elizabeth Shown Mills Citation Standard', {
    x: leftMargin + 14,
    y: margin + 12,
    size: 7,
    font: fontRegular,
    color: CHARCOAL,
  });

  page.drawText(`Page ${pageNumber} of ${totalPages}`, {
    x: width - margin - 75,
    y: margin + 12,
    size: 8,
    font: fontBold,
    color: FOREST_DARK,
  });
}

function drawFormTable(page, fontBold, fontRegular, {
  startX,
  startY,
  colWidths,
  headers,
  rowsCount = 14,
  rowHeight = 22,
}) {
  const totalWidth = colWidths.reduce((a, b) => a + b, 0);

  // Draw Header Row
  page.drawRectangle({
    x: startX,
    y: startY - rowHeight,
    width: totalWidth,
    height: rowHeight,
    color: PALE_BOX,
    borderColor: FOREST_DARK,
    borderWidth: 1,
  });

  let curX = startX;
  headers.forEach((h, idx) => {
    page.drawText(h, {
      x: curX + 6,
      y: startY - rowHeight + 6,
      size: 8,
      font: fontBold,
      color: FOREST_DARK,
    });
    curX += colWidths[idx];
    if (idx < headers.length - 1) {
      page.drawLine({
        start: { x: curX, y: startY },
        end: { x: curX, y: startY - rowHeight },
        thickness: 0.5,
        color: FOREST_DARK,
      });
    }
  });

  // Draw Table Rows
  let curY = startY - rowHeight;
  for (let r = 0; r < rowsCount; r++) {
    curY -= rowHeight;
    page.drawRectangle({
      x: startX,
      y: curY,
      width: totalWidth,
      height: rowHeight,
      borderColor: SEPIA_BORDER,
      borderWidth: 0.5,
    });

    let colX = startX;
    colWidths.forEach((w, cIdx) => {
      colX += w;
      if (cIdx < colWidths.length - 1) {
        page.drawLine({
          start: { x: colX, y: curY },
          end: { x: colX, y: curY + rowHeight },
          thickness: 0.5,
          color: SEPIA_BORDER,
        });
      }
    });

    // Row number indicator
    page.drawText(String(r + 1), {
      x: startX + 4,
      y: curY + 6,
      size: 7,
      font: fontRegular,
      color: rgb(0.6, 0.6, 0.6),
    });
  }
}

// =========================================================================
// 1. GENERATE THE COMPLETE 35-PAGE PRINTABLE RESEARCH BINDER
// =========================================================================
async function generate35PageBinder() {
  console.log('Generating 35-Page Master Research Binder PDF...');
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const totalPages = 35;

  const pageDefs = [
    { title: 'Archival Binder Master Cover & Title Page', category: 'Phase 1: Foundation', landscape: false },
    { title: 'Custom Binder Spine Labels (1", 1.5", 2" & 3" D-Ring)', category: 'Phase 1: Foundation', landscape: false },
    { title: 'Master Table of Contents & Color-Coded Divider Index', category: 'Phase 1: Foundation', landscape: false },
    { title: '5-Generation Master Pedigree Chart (Ahnentafel #1 - #31)', category: 'Phase 1: Foundation', landscape: true },
    { title: 'Pedigree Continuation Register (Lines 16 - 31)', category: 'Phase 1: Foundation', landscape: false },
    { title: 'Pedigree Continuation Register (Lines 32 - 63)', category: 'Phase 1: Foundation', landscape: false },
    { title: 'Family Surnames Cross-Reference & Frequency Log', category: 'Phase 1: Foundation', landscape: false },
    { title: 'Family Group Sheet: Parents & Domestic Chronology', category: 'Phase 2: Family Groups', landscape: false },
    { title: 'Family Group Sheet: Children (1 through 8) Vital Statistics', category: 'Phase 2: Family Groups', landscape: false },
    { title: 'Family Group Sheet: Children (9 through 16) & Collateral Lines', category: 'Phase 2: Family Groups', landscape: false },
    { title: 'Individual Biographical Timeline & Historical Chronology', category: 'Phase 2: Family Groups', landscape: false },
    { title: 'Birth & Baptismal Primary Document Extraction Ledger', category: 'Phase 2: Vital Records', landscape: false },
    { title: 'Marriage Bonds, Banns, Licenses & Certificate Register', category: 'Phase 2: Vital Records', landscape: false },
    { title: 'Death Certificate, Obituary & Coroner Inquest Docket', category: 'Phase 2: Vital Records', landscape: false },
    { title: 'Maiden Name Investigation & Maternal Lineage Matrix', category: 'Phase 2: Vital Records', landscape: false },
    { title: '1790, 1800 & 1810 US Federal Census Extraction Schedule', category: 'Phase 3: Census Schedules', landscape: true },
    { title: '1820, 1830 & 1840 US Federal Census Age Bracket Analysis', category: 'Phase 3: Census Schedules', landscape: true },
    { title: '1850 US Federal Census (First Every-Name Inhabitants)', category: 'Phase 3: Census Schedules', landscape: true },
    { title: '1860 & 1870 US Federal Census Post-Civil War Extraction', category: 'Phase 3: Census Schedules', landscape: true },
    { title: '1880 US Federal Census (Soundex & Relationship Matrix)', category: 'Phase 3: Census Schedules', landscape: true },
    { title: '1900 & 1910 US Census (Citizenship & Immigration Data)', category: 'Phase 3: Census Schedules', landscape: true },
    { title: '1920 & 1930 US Census (Mother Tongue & Employment)', category: 'Phase 3: Census Schedules', landscape: true },
    { title: '1940 & 1950 US Census (Income & Supplementary Questions)', category: 'Phase 3: Census Schedules', landscape: true },
    { title: 'State, Territorial & Municipal Census Supplementary Sheet', category: 'Phase 3: Census Schedules', landscape: false },
    { title: 'Metes-and-Bounds Land Deed & Bounty Land Grant Grid', category: 'Phase 4: Land & Legal', landscape: false },
    { title: 'Probate Docket, Wills & Estate Distribution Ledger', category: 'Phase 4: Land & Legal', landscape: false },
    { title: 'Estate Inventory & Estate Auction Appraisal Worksheet', category: 'Phase 4: Land & Legal', landscape: false },
    { title: 'Military Service, Muster Roll & Pension Application Dossier', category: 'Phase 4: Military Records', landscape: false },
    { title: 'Passenger Ship Manifest & Port of Arrival Immigration Sheet', category: 'Phase 4: Immigration', landscape: true },
    { title: 'Headstone Epigraphy & Cemetery Transcription Sheet', category: 'Phase 5: Fieldwork', landscape: false },
    { title: 'Cemetery Section, Row & Plot Cartography Grid', category: 'Phase 5: Fieldwork', landscape: false },
    { title: 'Autosomal DNA Match Triangulation & Centimorgan (cM) Matrix', category: 'Phase 5: DNA & Brick Walls', landscape: true },
    { title: 'Brick-Wall Negative Evidence & Timeline Contradiction Log', category: 'Phase 5: DNA & Brick Walls', landscape: false },
    { title: 'Oral History Interview Questionnaire (45 Prompts)', category: 'Phase 5: Oral History', landscape: false },
    { title: 'Archives Repository Checklist & Permanent Preservation Guide', category: 'Phase 5: Preservation', landscape: false },
  ];

  for (let i = 0; i < pageDefs.length; i++) {
    const def = pageDefs[i];
    const isLand = def.landscape;
    const page = pdfDoc.addPage(isLand ? [792, 612] : [612, 792]);
    const pageNum = i + 1;

    drawHeaderAndFooter(page, fontBold, fontRegular, fontItalic, {
      title: def.title,
      pageNumber: pageNum,
      totalPages,
      isLandscape: isLand,
      category: def.category,
    });

    const left = 36 + 18 + 14;
    const width = (isLand ? 792 : 612) - 36 - 18 - 36 - 14;

    // Draw customized content depending on the page
    if (pageNum === 1) {
      // Master Title Page
      page.drawRectangle({
        x: left + 20,
        y: 200,
        width: width - 40,
        height: 380,
        borderColor: FOREST_DARK,
        borderWidth: 2,
        color: PALE_BOX,
      });

      page.drawText('FAMILY HERITAGE ARCHIVE', {
        x: left + 65,
        y: 520,
        size: 20,
        font: fontBold,
        color: FOREST_DARK,
      });

      page.drawText('MASTER GENEALOGICAL RESEARCH VAULT', {
        x: left + 55,
        y: 495,
        size: 11,
        font: fontBold,
        color: BRONZE_GOLD,
      });

      const fields = [
        'PRIMARY FAMILY SURNAME LINE:',
        'COMPILER / RESEARCHER NAME:',
        'DATE STARTED / INITIATED:',
        'GEOGRAPHIC FOCUS / COUNTIES:',
        'NATIONALITY & MIGRATION PORTS:',
        'PRIMARY DEPOSITORY ARCHIVE:',
        'REPOSITORY ACCESSION ID:'
      ];

      let fY = 440;
      fields.forEach(f => {
        page.drawText(f, { x: left + 40, y: fY, size: 9, font: fontBold, color: FOREST_DARK });
        page.drawLine({
          start: { x: left + 210, y: fY },
          end: { x: left + width - 60, y: fY },
          thickness: 1,
          color: SEPIA_BORDER,
        });
        fY -= 34;
      });

      page.drawText('ARCHIVAL PROTOCOL: CITE ALL PRIMARY SOURCES ACCORDING TO EVIDENCE EXPLAINED CONVENTIONS.', {
        x: left + 40,
        y: 180,
        size: 7,
        font: fontItalic,
        color: CHARCOAL,
      });

    } else if (pageNum === 2) {
      // Spine Labels (Cut-out inserts)
      page.drawText('INSTRUCTIONS: Cut along the dotted lines. Insert into transparent binder spine sleeve.', {
        x: left,
        y: 690,
        size: 8,
        font: fontItalic,
        color: CHARCOAL,
      });

      const spines = [
        { label: '3.0" D-Ring Spine', w: 180, h: 560, x: left },
        { label: '2.0" D-Ring Spine', w: 120, h: 560, x: left + 195 },
        { label: '1.5" D-Ring Spine', w: 90, h: 560, x: left + 330 },
        { label: '1.0" Spine', w: 60, h: 560, x: left + 435 }
      ];

      spines.forEach(s => {
        page.drawRectangle({
          x: s.x,
          y: 110,
          width: s.w,
          height: s.h,
          borderColor: FOREST_DARK,
          borderWidth: 1,
        });

        page.drawText(s.label, {
          x: s.x + 8,
          y: 650,
          size: 9,
          font: fontBold,
          color: FOREST_DARK,
        });

        page.drawText('FAMILY HISTORY', {
          x: s.x + 8,
          y: 450,
          size: s.w < 80 ? 9 : 12,
          font: fontBold,
          color: BRONZE_GOLD,
        });

        page.drawText('ARCHIVE', {
          x: s.x + 8,
          y: 430,
          size: s.w < 80 ? 9 : 12,
          font: fontBold,
          color: FOREST_DARK,
        });

        page.drawText('LINE: ________________', {
          x: s.x + 8,
          y: 350,
          size: 8,
          font: fontRegular,
          color: CHARCOAL,
        });

        page.drawText('VOL: _____ OF _____', {
          x: s.x + 8,
          y: 280,
          size: 8,
          font: fontRegular,
          color: CHARCOAL,
        });

        page.drawText('FAMILYROOTSHUB.COM', {
          x: s.x + 8,
          y: 130,
          size: 6,
          font: fontRegular,
          color: rgb(0.5, 0.5, 0.5),
        });
      });

    } else if (isLand) {
      // Landscape table / extraction sheets
      drawFormTable(page, fontBold, fontRegular, {
        startX: left,
        startY: 505,
        colWidths: [25, 110, 80, 80, 80, 95, 95, 110],
        headers: ['No.', 'Full Name / Head of Household', 'Birth / Age', 'Birthplace / Origin', 'Occupation', 'Parent Birthplace', 'Immigration / Year', 'Source Document / Microfilm Reference'],
        rowsCount: 16,
        rowHeight: 25,
      });
    } else {
      // Portrait table sheets
      drawFormTable(page, fontBold, fontRegular, {
        startX: left,
        startY: 680,
        colWidths: [25, 130, 80, 100, 140],
        headers: ['No.', 'Ancestor Full Name & Identity', 'Event Date', 'Location / County / Parish', 'Primary Record / Repository Citation'],
        rowsCount: 22,
        rowHeight: 25,
      });
    }
  }

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(DOWNLOADS_DIR, 'FamilyRootsHub-35-Page-Research-Binder.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Saved: ${filePath} (${(pdfBytes.length / 1024).toFixed(1)} KB)`);
}

// =========================================================================
// 2. GENERATE FREE STARTER KIT (PDF)
// =========================================================================
async function generateStarterKitPdf() {
  console.log('Generating Free Starter Kit PDF...');
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const totalPages = 5;
  const pageDefs = [
    { title: '4-Generation Archival Pedigree Chart', category: 'Free Starter Kit', landscape: true },
    { title: 'Daily Repository & Archive Research Log', category: 'Free Starter Kit', landscape: false },
    { title: 'Primary Source Citation Quick-Reference Card', category: 'Free Starter Kit', landscape: false },
    { title: '45 Oral History Prompts for Living Relatives', category: 'Free Starter Kit', landscape: false },
    { title: 'Ahnentafel Numbering System Quick Guide', category: 'Free Starter Kit', landscape: false },
  ];

  for (let i = 0; i < pageDefs.length; i++) {
    const def = pageDefs[i];
    const isLand = def.landscape;
    const page = pdfDoc.addPage(isLand ? [792, 612] : [612, 792]);
    const pageNum = i + 1;

    drawHeaderAndFooter(page, fontBold, fontRegular, fontItalic, {
      title: def.title,
      pageNumber: pageNum,
      totalPages,
      isLandscape: isLand,
      category: def.category,
    });

    const left = 36 + 18 + 14;

    if (isLand) {
      drawFormTable(page, fontBold, fontRegular, {
        startX: left,
        startY: 505,
        colWidths: [30, 150, 100, 100, 120, 175],
        headers: ['Gen', 'Subject / Ancestor Name', 'Born Date & Place', 'Married Date & Place', 'Died Date & Place', 'Verified Primary Citation'],
        rowsCount: 16,
        rowHeight: 25,
      });
    } else {
      drawFormTable(page, fontBold, fontRegular, {
        startX: left,
        startY: 680,
        colWidths: [25, 120, 110, 120, 100],
        headers: ['No.', 'Repository / Archive Visited', 'Record Title & Roll #', 'Ancestor Investigated', 'Result / Findings'],
        rowsCount: 22,
        rowHeight: 25,
      });
    }
  }

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(DOWNLOADS_DIR, 'FamilyRootsHub-Free-Starter-Kit.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Saved: ${filePath} (${(pdfBytes.length / 1024).toFixed(1)} KB)`);
}

// =========================================================================
// 3. GENERATE FEDERAL CENSUS (1790-1950) EXTRACTION WORKSHEETS (PDF)
// =========================================================================
async function generateCensusKitPdf() {
  console.log('Generating Census Extraction Worksheets PDF...');
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const totalPages = 18;
  for (let i = 1; i <= totalPages; i++) {
    const page = pdfDoc.addPage([792, 612]); // Landscape
    const year = 1780 + i * 10 > 1950 ? 1950 : 1780 + i * 10;
    const title = i === 18 ? 'Decennial Census Comparative Master Timeline' : `${year} US Federal Population Schedule Extraction`;

    drawHeaderAndFooter(page, fontBold, fontRegular, fontItalic, {
      title,
      pageNumber: i,
      totalPages,
      isLandscape: true,
      category: 'CENSUS EXTRACTION SERIES',
    });

    const left = 36 + 18 + 14;
    drawFormTable(page, fontBold, fontRegular, {
      startX: left,
      startY: 505,
      colWidths: [25, 100, 75, 75, 80, 95, 100, 125],
      headers: ['Line', 'Name of Inhabitant', 'Relation to Head', 'Color / Sex / Age', 'Marital & Citizenship', 'Birthplace & Parentage', 'Occupation & Industry', 'Microfilm Roll / ED / Page #'],
      rowsCount: 16,
      rowHeight: 25,
    });
  }

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(DOWNLOADS_DIR, 'FamilyRootsHub-Federal-Census-1790-1950-Extraction-Worksheets.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Saved: ${filePath} (${(pdfBytes.length / 1024).toFixed(1)} KB)`);
}

// =========================================================================
// 4. GENERATE CEMETERY & VITAL RECORDS FIELD DOSSIER (PDF)
// =========================================================================
async function generateCemeteryKitPdf() {
  console.log('Generating Cemetery & Vital Records Field Dossier PDF...');
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const totalPages = 14;
  for (let i = 1; i <= totalPages; i++) {
    const page = pdfDoc.addPage([612, 792]);
    const title = i <= 5
      ? `Cemetery Plot & Headstone Epigraphy Form (Section ${i})`
      : i <= 10
      ? `County Courthouse Vital Records Extraction (Ledger ${i - 5})`
      : `Victorian Iconography & Fraternal Insignia Identification Chart`;

    drawHeaderAndFooter(page, fontBold, fontRegular, fontItalic, {
      title,
      pageNumber: i,
      totalPages,
      isLandscape: false,
      category: 'FIELD EXPEDITION DOSSIER',
    });

    const left = 36 + 18 + 14;
    drawFormTable(page, fontBold, fontRegular, {
      startX: left,
      startY: 680,
      colWidths: [25, 120, 85, 110, 135],
      headers: ['Plot', 'Deceased Subject & Dates', 'Stone Condition', 'Symbol / Iconography', 'GPS Coordinates & Cemetery Name'],
      rowsCount: 22,
      rowHeight: 25,
    });
  }

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(DOWNLOADS_DIR, 'FamilyRootsHub-Cemetery-and-Vital-Records-Field-Dossier.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Saved: ${filePath} (${(pdfBytes.length / 1024).toFixed(1)} KB)`);
}

// =========================================================================
// 5. GENERATE THE MASTER HERITAGE VAULT GUIDE (PDF)
// =========================================================================
async function generateVaultGuidePdf() {
  console.log('Generating Master Heritage Vault Guide PDF...');
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const totalPages = 12;
  for (let i = 1; i <= totalPages; i++) {
    const page = pdfDoc.addPage([612, 792]);
    const title = `The Master Heritage Vault: User Manual & Index (Section ${i})`;

    drawHeaderAndFooter(page, fontBold, fontRegular, fontItalic, {
      title,
      pageNumber: i,
      totalPages,
      isLandscape: false,
      category: 'MASTER VAULT ECOSYSTEM',
    });

    const left = 36 + 18 + 14;
    drawFormTable(page, fontBold, fontRegular, {
      startX: left,
      startY: 680,
      colWidths: [30, 160, 140, 145],
      headers: ['Index', 'Archival System Module', 'Target Application (GoodNotes/Print)', 'Filing Category'],
      rowsCount: 22,
      rowHeight: 25,
    });
  }

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(DOWNLOADS_DIR, 'FamilyRootsHub-Master-Heritage-Vault-Guide.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Saved: ${filePath} (${(pdfBytes.length / 1024).toFixed(1)} KB)`);
}

async function runAll() {
  await generate35PageBinder();
  await generateStarterKitPdf();
  await generateCensusKitPdf();
  await generateCemeteryKitPdf();
  await generateVaultGuidePdf();
  console.log('All Archival PDFs generated successfully!');
}

runAll().catch(console.error);
