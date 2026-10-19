import React from "react";
import { Product, FaqItem } from "@/types";

interface ProductJsonLdProps {
  product: Product;
  url: string;
}

export const ProductJsonLd: React.FC<ProductJsonLdProps> = ({ product, url }) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [product.coverImage, ...(product.galleryImages || [])],
    description: product.fullDescription || product.shortDescription,
    sku: product.id,
    mpn: `FRH-${product.id.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "FamilyRootsHub",
    },
    offers: {
      "@type": "Offer",
      url: url,
      priceCurrency: "USD",
      price: product.price,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "FamilyRootsHub",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface FaqJsonLdProps {
  faqs: FaqItem[];
}

export const FaqJsonLd: React.FC<FaqJsonLdProps> = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const OrganizationJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FamilyRootsHub",
    url: "https://familyrootshub.com",
    logo: "https://familyrootshub.com/logo.png",
    description: "Specialized Genealogy Templates & Organization Hub for archival family tree research.",
    sameAs: [
      "https://facebook.com/familyrootshub",
      "https://pinterest.com/familyrootshub",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
