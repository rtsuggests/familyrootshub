import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (price === 0) return "Free";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Generates an archival printable SVG/HTML pedigree chart & research log 
 * as a downloadable text/blob so user receives a real physical document immediately!
 */
export function generateStarterKitBlob(): Blob {
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Family Roots Hub — 4-Generation Pedigree Chart & Research Log</title>
<style>
  @page { size: letter landscape; margin: 0.5in; }
  body { font-family: 'Times New Roman', Georgia, serif; color: #1E3A2F; background: #fff; margin: 0; padding: 20px; }
  .header { text-align: center; border-bottom: 2px solid #1E3A2F; padding-bottom: 12px; margin-bottom: 24px; }
  .title { font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; }
  .subtitle { font-size: 13px; color: #B8860B; margin-top: 4px; font-style: italic; }
  .meta-row { display: flex; justify-content: space-between; margin-top: 10px; font-size: 12px; }
  .tree-container { display: flex; justify-content: space-between; position: relative; min-height: 480px; }
  .column { display: flex; flex-direction: column; justify-content: space-around; }
  .box { border: 1.5px solid #1E3A2F; background: #FAF8F5; padding: 8px 12px; width: 170px; border-radius: 4px; box-shadow: 2px 2px 0px rgba(30,58,47,0.1); margin: 6px 0; font-size: 11px; }
  .box strong { display: block; color: #1E3A2F; font-size: 12px; border-bottom: 1px dotted #ccc; padding-bottom: 3px; margin-bottom: 3px; }
  .field { margin: 2px 0; color: #444; }
  .footer { margin-top: 24px; border-top: 1px solid #ddd; padding-top: 10px; font-size: 11px; color: #666; display: flex; justify-content: space-between; }
  .badge { background: #1E3A2F; color: #fff; padding: 2px 8px; border-radius: 12px; font-size: 10px; }
</style>
</head>
<body>
  <div class="header">
    <div class="title">Archival 4-Generation Pedigree Chart</div>
    <div class="subtitle">FamilyRootsHub.com &bull; Certified Archival Organization System (Ahnentafel Standard)</div>
    <div class="meta-row">
      <div><strong>Chart Compiler / Genealogist:</strong> _______________________</div>
      <div><strong>Date Begun:</strong> _________________</div>
      <div><strong>Primary Family Line:</strong> _______________________</div>
      <div><strong>Chart No:</strong> 001</div>
    </div>
  </div>

  <div class="tree-container">
    <!-- Generation 1 -->
    <div class="column" style="width: 22%;">
      <div style="font-weight:bold; font-size:12px; margin-bottom:6px; color:#B8860B;">GEN I: PERSON OF RECORD</div>
      <div class="box" style="width: 100%;">
        <strong>No. 1 &mdash; Person of Record</strong>
        <div class="field">Born: __________________</div>
        <div class="field">At: ____________________</div>
        <div class="field">Married: ________________</div>
        <div class="field">Died: __________________</div>
        <div class="field">Buried: ________________</div>
        <div class="field">Spouse: ________________</div>
      </div>
    </div>

    <!-- Generation 2 -->
    <div class="column" style="width: 24%;">
      <div style="font-weight:bold; font-size:12px; margin-bottom:6px; color:#B8860B;">GEN II: PARENTS</div>
      <div class="box" style="width: 100%;">
        <strong>No. 2 &mdash; Father</strong>
        <div class="field">B: _____________________</div>
        <div class="field">M: _____________________</div>
        <div class="field">D: _____________________</div>
      </div>
      <div class="box" style="width: 100%;">
        <strong>No. 3 &mdash; Mother (Maiden)</strong>
        <div class="field">B: _____________________</div>
        <div class="field">D: _____________________</div>
      </div>
    </div>

    <!-- Generation 3 -->
    <div class="column" style="width: 24%;">
      <div style="font-weight:bold; font-size:12px; margin-bottom:6px; color:#B8860B;">GEN III: GRANDPARENTS</div>
      <div class="box" style="width: 100%;">
        <strong>No. 4 &mdash; Paternal Grandfather</strong>
        <div class="field">B: _____________ D: _____________</div>
      </div>
      <div class="box" style="width: 100%;">
        <strong>No. 5 &mdash; Paternal Grandmother</strong>
        <div class="field">B: _____________ D: _____________</div>
      </div>
      <div class="box" style="width: 100%;">
        <strong>No. 6 &mdash; Maternal Grandfather</strong>
        <div class="field">B: _____________ D: _____________</div>
      </div>
      <div class="box" style="width: 100%;">
        <strong>No. 7 &mdash; Maternal Grandmother</strong>
        <div class="field">B: _____________ D: _____________</div>
      </div>
    </div>

    <!-- Generation 4 -->
    <div class="column" style="width: 24%;">
      <div style="font-weight:bold; font-size:12px; margin-bottom:6px; color:#B8860B;">GEN IV: GREAT-GRANDPARENTS</div>
      <div class="box" style="width: 100%; font-size: 10px; padding: 4px 8px;"><strong>8: Pat. G-GF:</strong> ________________</div>
      <div class="box" style="width: 100%; font-size: 10px; padding: 4px 8px;"><strong>9: Pat. G-GM:</strong> ________________</div>
      <div class="box" style="width: 100%; font-size: 10px; padding: 4px 8px;"><strong>10: Pat. G-GF:</strong> ________________</div>
      <div class="box" style="width: 100%; font-size: 10px; padding: 4px 8px;"><strong>11: Pat. G-GM:</strong> ________________</div>
      <div class="box" style="width: 100%; font-size: 10px; padding: 4px 8px;"><strong>12: Mat. G-GF:</strong> ________________</div>
      <div class="box" style="width: 100%; font-size: 10px; padding: 4px 8px;"><strong>13: Mat. G-GM:</strong> ________________</div>
      <div class="box" style="width: 100%; font-size: 10px; padding: 4px 8px;"><strong>14: Mat. G-GF:</strong> ________________</div>
      <div class="box" style="width: 100%; font-size: 10px; padding: 4px 8px;"><strong>15: Mat. G-GM:</strong> ________________</div>
    </div>
  </div>

  <div class="footer">
    <div>Standard Ahnentafel Root: Male = 2n, Female = 2n + 1. All records must cite primary sources.</div>
    <div>&copy; FamilyRootsHub.com &mdash; Acid-Free Safe Printable System</div>
  </div>
</body>
</html>`;

  return new Blob([content], { type: "text/html" });
}
