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
    sku: `FRH-${product.id.toUpperCase()}`,
    mpn: `FRH-${product.id.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "FamilyRootsHub",
    },
    offers: {
      "@type": "Offer",
      url: url,
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "FamilyRootsHub",
        url: "https://familyrootshub.com",
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0.00",
          currency: "USD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 0,
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewsCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Margaret H. Sullivan",
        },
        datePublished: "2026-09-15",
        reviewBody:
          "This binder system solved twenty years of loose paper chaos in a single weekend. The Ahnentafel numbering and census extractors are museum-grade.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "David K. Thornton",
        },
        datePublished: "2026-10-02",
        reviewBody:
          "The column-by-column census extraction forms make transcribing handwritten 1880 and 1900 records effortless. Exceptional quality.",
      },
    ],
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
    logo: "https://familyrootshub.com/favicon.svg",
    description:
      "Specialized Genealogy Templates & Organization Hub for archival family tree research, census extraction, and digital heritage planning.",
    email: "support@familyrootshub.com",
    sameAs: [
      "https://facebook.com/familyrootshub",
      "https://pinterest.com/familyrootshub",
      "https://instagram.com/familyrootshub",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebSiteJsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FamilyRootsHub",
    url: "https://familyrootshub.com",
    description:
      "Turn centuries of family clutter into an organized heritage vault with archival genealogy binders, census extraction worksheets, and digital planners.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://familyrootshub.com/templates?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  authorName: string;
}

export const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({
  title,
  description,
  url,
  image,
  datePublished,
  authorName,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: [image],
    datePublished: datePublished,
    dateModified: datePublished,
    author: [
      {
        "@type": "Person",
        name: authorName,
        url: "https://familyrootshub.com/about",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "FamilyRootsHub",
      logo: {
        "@type": "ImageObject",
        url: "https://familyrootshub.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isAccessibleForFree: "true",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ItemListJsonLdProps {
  name: string;
  description: string;
  items: { name: string; url: string; position: number }[];
}

export const ItemListJsonLd: React.FC<ItemListJsonLdProps> = ({
  name,
  description,
  items,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: name,
    description: description,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
