import React from "react";
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { ProductJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { FreeStarterKitClientView } from "@/components/FreeStarterKitClientView";

const freeProduct = PRODUCTS.find((p) => p.slug === "free-starter-kit")!;
const pageUrl = "https://familyrootshub.com/free-starter-kit";

export const metadata: Metadata = {
  title: "Free 4-Generation Pedigree Starter Kit",
  description:
    "Download your free 4-generation pedigree chart, research extraction log, and oral history interview questionnaire. Instant PDF download.",
  keywords: [
    "free pedigree chart pdf",
    "free genealogy starter kit",
    "printable family tree chart free",
    "family history research log",
    "genealogy interview questions"
  ],
  openGraph: {
    title: "Free 4-Generation Pedigree Starter Kit | FamilyRootsHub",
    description:
      "Get instant access to our certified archival 4-generation pedigree chart and research log. Print at home for free.",
    url: pageUrl,
    images: [
      {
        url: freeProduct.coverImage,
        width: 1200,
        height: 630,
        alt: "Free 4-Generation Pedigree Starter Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 4-Generation Pedigree Starter Kit (PDF)",
    description: "Start tracing your family tree for free with archival-standard pedigree charts.",
    images: [freeProduct.coverImage],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const FREEBIE_FAQS = [
  {
    question: "Is this starter kit truly 100% free?",
    answer: "Yes, completely free. You can download the PDF immediately to print at home or fill out digitally on your tablet or computer.",
  },
  {
    question: "What formats are included in the free download?",
    answer: "The kit includes both standard US Letter (8.5 x 11 inches) and international A4 formats with generous margins for three-hole punch binders.",
  },
  {
    question: "How many generations does the chart cover?",
    answer: "The free chart covers 4 direct generations (you, parents, grandparents, and great-grandparents). For 5+ generations and census extractors, check our 35-Page Master Binder.",
  },
];

export default function FreeStarterKitPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "Free Starter Kit", url: pageUrl },
  ];

  return (
    <>
      <ProductJsonLd product={freeProduct} url={pageUrl} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FaqJsonLd faqs={FREEBIE_FAQS} />
      <FreeStarterKitClientView />
    </>
  );
}
