"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2, Eye, Download, ShoppingBag, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "./Button";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onPurchase?: (product: Product) => void;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onPurchase,
  featured = false,
}) => {
  const isFree = product.price === 0;

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-cream-50 rounded-2xl border transition-all duration-300 overflow-hidden shadow-heritage hover:shadow-heritage-lg",
        featured
          ? "border-bronze-400/80 ring-2 ring-bronze-400/20"
          : "border-sepiaBorder hover:border-forest-700/40"
      )}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-20">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm border",
              isFree
                ? "bg-forest-800 text-cream-100 border-forest-900"
                : "bg-bronze-500 text-white border-bronze-600"
            )}
          >
            {product.badge}
          </span>
        </div>
      )}

      {/* Image Container with Quick View Hover */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <Image
          src={product.coverImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Quick View Button on Image */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 right-3 z-20 bg-cream-100/90 hover:bg-cream-100 text-forest-900 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md flex items-center space-x-1.5 backdrop-blur-sm transition-transform active:scale-95"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5 text-forest-800" />
            <span>Quick View</span>
          </button>
        )}

        <div className="absolute bottom-3 left-3 z-10 text-cream-100 text-xs font-medium bg-forest-950/70 px-2 py-0.5 rounded backdrop-blur-sm">
          {product.format.split("+")[0].trim()}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-charcoal-500 mb-2">
            <span className="font-semibold text-bronze-600 uppercase tracking-wider text-[11px]">
              {product.category}
            </span>
            <div className="flex items-center space-x-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold text-charcoal-800 text-xs">{product.rating}</span>
              <span className="text-charcoal-500 text-[11px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-900 group-hover:text-forest-700 transition-colors line-clamp-1">
            <Link href={`/templates/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-charcoal-500 italic mt-0.5 mb-3 line-clamp-1">
            {product.tagline}
          </p>

          <p className="text-sm text-charcoal-700 line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Key Bullet Features */}
          <div className="space-y-1.5 pt-2 border-t border-sepiaBorder/60 mb-5">
            {product.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start text-xs text-charcoal-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5 mr-2" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="pt-4 border-t border-sepiaBorder flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="font-serif text-2xl font-bold text-forest-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-charcoal-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[11px] text-charcoal-500 block">
              {product.pagesCount} Pages &bull; Lifetime Access
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {isFree ? (
              <Link href="/free-starter-kit">
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<Download className="w-3.5 h-3.5" />}
                >
                  Download Free
                </Button>
              </Link>
            ) : (
              <Button
                onClick={() => {
                  if (onPurchase) {
                    onPurchase(product);
                  } else {
                    window.location.href = `/templates/${product.slug}`;
                  }
                }}
                variant={featured ? "secondary" : "primary"}
                size="sm"
                leftIcon={<ShoppingBag className="w-3.5 h-3.5" />}
              >
                Get Access
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
