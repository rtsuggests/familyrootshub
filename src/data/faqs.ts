import { FaqItem } from "@/types";

export const PRODUCT_FAQS: FaqItem[] = [
  {
    question: "How do I receive my templates after purchasing?",
    answer: "Immediately upon completing checkout, you are redirected to an instant access download hub. Additionally, an encrypted receipt and permanent backup download link is emailed directly to your inbox within seconds. You can download and re-download your files whenever needed with zero recurring fees."
  },
  {
    question: "What paper size are these templates designed for?",
    answer: "Every single template package includes both standard US Letter (8.5 x 11 inches) and International A4 (210 x 297 mm) formats. The margins are intentionally calibrated with an extra 0.75-inch inner gutter allowance so you can hole-punch for 3-ring binders, 4-ring European binders, or comb-binding without clipping any text."
  },
  {
    question: "Can I type directly into these templates, or must they be printed?",
    answer: "Both! The templates are designed with interactive PDF form fields so you can type ancestor details, census lines, and dates directly on your Mac, PC, or iPad using free software like Adobe Acrobat Reader. Alternatively, you can print them out blank and fill them by hand using archival pigment pens."
  },
  {
    question: "What is the Ahnentafel numbering system used in these sheets?",
    answer: "Ahnentafel (German for 'ancestor table') is the universally recognized genealogical standard endorsed by the National Genealogical Society. The root subject is Number 1. Any person's father is double their number (2n), and their mother is double plus one (2n + 1). This mathematical precision ensures you never confuse ancestors with identical names across branches."
  },
  {
    question: "Do these work with GoodNotes, Notability, or other tablet apps?",
    answer: "Yes! Our digital planner editions (and the Master Vault) are optimized vector PDFs featuring over 950 hyperlinked clickable tabs. They work natively with Apple Pencil and stylus in GoodNotes, Notability, Noteshelf, Xodo, and Samsung Notes."
  },
  {
    question: "What is your refund and satisfaction guarantee?",
    answer: "We stand behind the archival craftsmanship of our templates with an unconditional 30-day money-back guarantee. If you don't feel significantly more organized in your research, simply email support@familyrootshub.com for an immediate, courteous 100% refund."
  }
];

export const HOMEPAGE_FAQS: FaqItem[] = [
  ...PRODUCT_FAQS,
  {
    question: "Why maintain a physical binder instead of relying solely on online ancestry websites?",
    answer: "Commercial genealogy platforms change subscription pricing, modify search algorithms, and store your research behind walled gardens that family members might not access after you pass away. A physical, acid-free binder created with archival pigment inks is an heirloom that lives safely in your home and can be held in hands for centuries without passwords or digital obsolescence."
  },
  {
    question: "What type of ink and paper should I use for archival permanence?",
    answer: "For maximum permanence, we recommend printing onto acid-free, lignin-free 28lb or 32lb paper (such as HP Premium 32lb) buffered with calcium carbonate. When handwriting, always use pigmented, waterproof micro-pigment pens (like Sakura Pigma Micron) rather than conventional petroleum dye ballpoint pens."
  }
];
