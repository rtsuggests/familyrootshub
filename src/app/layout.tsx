import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { GumroadOverlay } from "@/components/GumroadOverlay";

export const viewport: Viewport = {
  themeColor: "#1E3A2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://familyrootshub.com"),
  title: {
    default: "FamilyRootsHub — Archival Genealogy Templates",
    template: "%s | FamilyRootsHub",
  },
  description:
    "Turn family records into an organized heritage vault. Download archival pedigree charts, census extraction worksheets, and GoodNotes digital planners.",
  authors: [{ name: "David Vance, Lead Archival Researcher" }],
  creator: "FamilyRootsHub",
  publisher: "FamilyRootsHub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://familyrootshub.com",
    siteName: "FamilyRootsHub",
    title: "FamilyRootsHub — Specialized Genealogy Templates & Archival Vault",
    description:
      "Turn centuries of family clutter into an organized heritage vault. Museum-grade printable archival systems & research templates.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "FamilyRootsHub Archival Genealogy Research Binder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FamilyRootsHub — Specialized Genealogy Templates & Vault",
    description:
      "Turn centuries of family clutter into an organized heritage vault. Download archival pedigree charts and census sheets.",
    images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlef26005d12fedc1e0",
    other: {
      "p:domain_verify": "1487d8b1e5c03d3f2af979e80678f996",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="p:domain_verify" content="1487d8b1e5c03d3f2af979e80678f996" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context File" />
        <OrganizationJsonLd />
      </head>
      <body>
        <GumroadOverlay />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
