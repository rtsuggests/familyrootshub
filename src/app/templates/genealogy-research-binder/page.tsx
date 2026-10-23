import React from "react";
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_FAQS } from "@/data/faqs";
import { ProductJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { GenealogyBinderClientView } from "@/components/GenealogyBinderClientView";

const product = PRODUCTS.find((p) => p.id === "genealogy-research-binder")!;
const pageUrl = "https://familyrootshub.com/templates/genealogy-research-binder";

export const metadata: Metadata = {
  title: "35-Page Printable Research Binder",
  description:
    "Download the archival 35-page genealogy binder. Features 5-generation pedigree charts, family group sheets, and census extraction grids.",
  keywords: [
    "genealogy research binder",
    "printable pedigree charts",
    "Ahnentafel binder organization",
    "census extraction worksheets",
    "family history organization system",
    "3 ring binder genealogy templates"
  ],
  openGraph: {
    title: "35-Page Master Genealogy Research Binder | FamilyRootsHub",
    description:
      "Transform centuries of scattered documents into a museum-grade archival research binder. Includes 35 high-resolution printable templates.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: product.coverImage,
        width: 1200,
        height: 630,
        alt: "35-Page Master Genealogy Research Binder System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "35-Page Master Genealogy Research Binder System",
    description: "The complete physical archival system for 3-ring genealogy binders.",
    images: [product.coverImage],
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function GenealogyResearchBinderPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "Templates", url: "https://familyrootshub.com/templates" },
    {
      name: "35-Page Printable Research Binder",
      url: pageUrl,
    },
  ];

  return (
    <>
      <ProductJsonLd product={product} url={pageUrl} />
      <FaqJsonLd faqs={PRODUCT_FAQS} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <GenealogyBinderClientView />
    </>
  );
}
