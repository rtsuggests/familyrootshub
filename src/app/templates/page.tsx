import React from "react";
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/JsonLd";
import { TemplatesCatalogClientView } from "@/components/TemplatesCatalogClientView";

export const metadata: Metadata = {
  title: "Printable Genealogy Templates, Pedigree Charts & Census Worksheets — FamilyRootsHub",
  description:
    "Browse our complete catalog of certified archival genealogy printables: 35-page physical research binders, decennial census extraction worksheets (1790-1950), cemetery mapping kits, and GoodNotes digital planners.",
  keywords: [
    "printable genealogy templates",
    "pedigree charts pdf",
    "census extraction worksheets",
    "GoodNotes genealogy planner",
    "cemetery research dossier",
    "family history printables"
  ],
  openGraph: {
    title: "Printable Genealogy Templates & Archival Planners | FamilyRootsHub",
    description:
      "Explore certified archival family history systems designed for 3-ring physical binders and digital tablet planners.",
    url: "https://familyrootshub.com/templates",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "FamilyRootsHub Genealogy Templates Catalog",
      },
    ],
  },
  alternates: {
    canonical: "https://familyrootshub.com/templates",
  },
};

export default function TemplatesCatalogPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "Templates & Planners", url: "https://familyrootshub.com/templates" },
  ];

  const catalogItems = PRODUCTS.map((p, idx) => ({
    name: p.name,
    url: p.slug === "free-starter-kit" ? "https://familyrootshub.com/free-starter-kit" : `https://familyrootshub.com/templates/${p.slug}`,
    position: idx + 1,
  }));

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ItemListJsonLd
        name="FamilyRootsHub Archival Genealogy Templates Catalog"
        description="Certified archival printable templates, pedigree charts, census grids, and digital planners."
        items={catalogItems}
      />
      <TemplatesCatalogClientView />
    </>
  );
}
