# FamilyRootsHub.com — Specialized Genealogy Templates & Archival Organization Hub

A high-converting, SEO-optimized web application for **FamilyRootsHub.com**, engineered to transform family clutter into an heirloom-grade physical and digital heritage vault.

---

## 🏛️ Design Aesthetic & Color Palette

Designed specifically for family scribes, certified genealogists, and heritage hobbyists. The visual language evokes archival documents, leather-bound library tomes, and acid-free permanence.

- **Warm Cream / Off-White Background**: `#FAF8F5` (`bg-cream-100`)
- **Deep Forest Green Primary**: `#1E3A2F` (`bg-forest-800` / `text-forest-900`)
- **Muted Bronze / Gold Accent**: `#B8860B` (`text-bronze-500` / `bg-bronze-500`)
- **Charcoal Primary Text**: `#2C3531` (`text-charcoal-800`)
- **Typography**: Editorial Serif (`Georgia`, `Cambria`) paired with crisp Modern Sans (`Inter`)

---

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom archival tokens and responsive utilities
- **Icons**: Lucide-React
- **Form Handling & Validation**: React Hook Form with Zod schemas
- **Interactive Confetti**: Canvas-Confetti for celebratory download and checkout triggers
- **SEO & Structured Data**: Built-in JSON-LD for Schema.org (`Product`, `FAQPage`, `BreadcrumbList`, `Organization`)

---

## 📁 Key Routes & Pages

| Route | Purpose | Key Features |
|-------|---------|--------------|
| `/` | **Homepage** | Hero with 35-page physical mockup, lead magnet banner, 3-tier product showcase, feature breakdown (Ahnentafel, acid-free, census grids), testimonials, curated archival gear, interactive cousin calculator, and FAQ accordion. |
| `/templates` | **Shop / Catalog** | Filterable by category ("Pedigree & Trees", "Census Extractors", "Digital Planners", "Cemetery & Vital Records"), real-time search, and interactive Quick-View modal. |
| `/templates/genealogy-research-binder` | **Product Detail / Long-Form SEO Sales Page** | High-ranking sales page with binder photography, 300+ word "How to use this system" guide, 5-phase breakdown of all 35 templates, FAQPage schema, and sticky checkout bar on scroll. |
| `/free-starter-kit` | **Freebie Download & Thank You Page** | Direct instant download trigger for the 4-Generation Pedigree Chart & Research Log, plus a One-Time-Offer (OTO) tripwire banner (40% off $9 upgrade) with countdown urgency timer. |
| `/about` | **About & Archival Methodology** | E-E-A-T credibility page citing National Archives and Records Administration (NARA), National Genealogical Society (NGS), and ISO 11108 paper permanence conventions. |
| `/api/lead-capture` | **Lead Capture API** | Stores email opt-ins to client storage & simulates CRM ingestion (ConvertKit / Beehiiv ready). |
| `/api/checkout` | **Checkout API** | Payment session dispatcher prepared for LemonSqueezy and Stripe webhooks. |

---

## 🧮 Interactive Features

1. **Cousin Relationship Explainer & Calculator**:
   - Computes degrees of separation and "removed" generations between any two relatives.
   - Correlates with Blaine Bettinger's *Shared cM Project* to display expected centimorgan (cM) DNA ranges.
   - Visual generational split branch diagram with one-click clipboard sharing.
2. **Instant Archival Document Generator**:
   - Generates and triggers instant downloads of client-side formatted printable HTML/PDF pedigree starter kits.
3. **Sticky Quick Purchase Bar**:
   - Smoothly reveals on scroll on the product detail page, ensuring frictionless checkout at any reading depth.
4. **Quick-View Preview Modal**:
   - Allows users to preview specs, formats, and included worksheets without leaving the catalog page.

---

## 🛠️ Local Development & Production Run

```bash
# Install dependencies
npm install

# Start Next.js development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start -- -p 3000
```
