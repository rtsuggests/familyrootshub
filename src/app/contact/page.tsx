import React from "react";
import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ContactClientView } from "@/components/ContactClientView";

export const metadata: Metadata = {
  title: "Contact Archival Support",
  description:
    "Get in touch with FamilyRootsHub's archival team for order assistance, template questions, or pedigree research inquiries.",
  alternates: {
    canonical: "https://familyrootshub.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://familyrootshub.com" },
    { name: "Contact Support", url: "https://familyrootshub.com/contact" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ContactClientView />
    </>
  );
}
