import type { Metadata } from "next";
import { HomeClientView } from "@/components/HomeClientView";
import { WebSiteJsonLd, FaqJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { FEATURED_PRODUCTS } from "@/data/products";
import { HOMEPAGE_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Archival Genealogy Binders, Worksheets & Census Kits | FamilyRootsHub",
  description:
    "Preserve your family history for centuries with museum-grade printable genealogy binders, Ahnentafel pedigree charts, and NARA census worksheets.",
  alternates: {
    canonical: "https://familyrootshub.com",
  },
  openGraph: {
    title: "Archival Genealogy Binders, Worksheets & Census Kits | FamilyRootsHub",
    description:
      "Preserve your family history for centuries with museum-grade printable genealogy binders, Ahnentafel pedigree charts, and NARA census worksheets.",
    url: "https://familyrootshub.com",
    siteName: "FamilyRootsHub",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "The 35-Page Master Genealogy Research Binder",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archival Genealogy Binders, Worksheets & Census Kits | FamilyRootsHub",
    description:
      "Preserve your family history for centuries with museum-grade printable genealogy binders, Ahnentafel pedigree charts, and NARA census worksheets.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <WebSiteJsonLd />
      <FaqJsonLd faqs={HOMEPAGE_FAQS} />
      <ItemListJsonLd
        name="Featured Archival Genealogy Systems"
        description="Preservation-grade printable pedigree charts, research binders, and digital planners."
        items={FEATURED_PRODUCTS.map((p, idx) => ({
          name: p.name,
          url:
            p.slug === "free-starter-kit"
              ? "https://familyrootshub.com/free-starter-kit"
              : `https://familyrootshub.com/templates/${p.slug}`,
          position: idx + 1,
        }))}
      />
      <HomeClientView />
    </>
  );
}
