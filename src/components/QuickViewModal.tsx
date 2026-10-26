"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2, Star, Download, ShoppingBag, Layers, ExternalLink } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Button } from "./Button";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onPurchase?: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onPurchase,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-cream-50 rounded-2xl border border-sepiaBorder shadow-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-cream-100/90 text-charcoal-700 hover:text-forest-900 p-2 rounded-full border border-sepiaBorder shadow-sm transition-colors"
          aria-label="Close preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Cover & Gallery Side */}
          <div className="relative aspect-square md:aspect-auto w-full bg-cream-200">
            <Image
              src={product.coverImage}
              alt={product.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-forest-950/80 backdrop-blur-sm rounded-lg p-3 text-cream-100 text-xs">
              <span className="font-bold text-bronze-300 block mb-0.5">Format:</span>
              <span>{product.format}</span>
            </div>
          </div>

          {/* Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs">
                <span className="font-bold uppercase tracking-wider text-bronze-800 bg-bronze-100/70 px-2 py-0.5 rounded">
                  {product.category}
                </span>
                <span className="text-charcoal-400">&bull;</span>
                <div className="flex items-center text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current mr-1" />
                  <span>{product.rating}</span>
                  <span className="text-charcoal-400 text-xs font-normal ml-1">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 id="quickview-title" className="font-serif text-2xl font-bold text-forest-900 leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-charcoal-500 italic">
                {product.tagline}
              </p>

              <div className="flex items-baseline space-x-3 pt-1 border-b border-sepiaBorder pb-3">
                <span className="font-serif text-3xl font-bold text-forest-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-charcoal-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-xs text-forest-700 font-semibold bg-forest-100 px-2 py-0.5 rounded">
                  Instant Archival PDF
                </span>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* What's included checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-forest-900 flex items-center">
                  <Layers className="w-3.5 h-3.5 text-bronze-600 mr-1.5" />
                  Included Templates ({product.includedTemplates.length}):
                </div>
                <div className="max-h-36 overflow-y-auto space-y-1.5 pr-2">
                  {product.includedTemplates.map((item, idx) => (
                    <div key={idx} className="flex items-start text-xs text-charcoal-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5 mr-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-sepiaBorder mt-6 space-y-2">
              <div className="flex items-center space-x-3">
                {product.price === 0 ? (
                  <Link href="/free-starter-kit" className="w-full">
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full"
                      leftIcon={<Download className="w-4 h-4" />}
                    >
                      Download Free Kit
                    </Button>
                  </Link>
                ) : product.gumroadUrl ? (
                  <a
                    href={product.gumroadUrl}
                    className="gumroad-button w-full"
                    data-gumroad-single-product="true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      className="w-full"
                      leftIcon={<ShoppingBag className="w-4 h-4" />}
                    >
                      Buy Instant Download &bull; {formatPrice(product.price)}
                    </Button>
                  </a>
                ) : (
                  <Button
                    onClick={() => {
                      if (onPurchase) onPurchase(product);
                    }}
                    variant="primary"
                    size="md"
                    className="w-full"
                    leftIcon={<ShoppingBag className="w-4 h-4" />}
                  >
                    Buy Instant Download &bull; {formatPrice(product.price)}
                  </Button>
                )}
              </div>

              <div className="text-center">
                <Link
                  href={`/templates/${product.slug}`}
                  className="text-xs font-semibold text-forest-800 hover:text-forest-600 inline-flex items-center space-x-1"
                >
                  <span>Read Full Archival System Guide</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
