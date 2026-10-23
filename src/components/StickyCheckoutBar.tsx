"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, Star, Zap, ShieldCheck } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "./Button";

interface StickyCheckoutBarProps {
  product: Product;
  onCheckout?: () => void;
}

export const StickyCheckoutBar: React.FC<StickyCheckoutBarProps> = ({
  product,
  onCheckout,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick purchase bar"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-cream-50/95 backdrop-blur-md border-t border-sepiaBorder shadow-vault transition-transform duration-300 py-3 px-4 sm:px-8",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Product Thumbnail & Title */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-sepiaBorder shrink-0 bg-cream-200">
            <Image
              src={product.coverImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif text-sm sm:text-base font-bold text-forest-900 line-clamp-1">
                {product.name}
              </span>
              <span className="hidden md:inline-flex text-[10px] uppercase font-bold bg-bronze-100 text-bronze-700 px-2 py-0.5 rounded-full border border-bronze-200">
                {product.badge || "Instant Download"}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-charcoal-500">
              <div className="flex items-center text-amber-500">
                <Star className="w-3 h-3 fill-current" />
                <span className="ml-1 font-bold text-charcoal-700">{product.rating}</span>
              </div>
              <span>&bull;</span>
              <span className="text-forest-700 font-semibold">{product.pagesCount} Archival Pages</span>
            </div>
          </div>
        </div>

        {/* Right: Pricing & CTA */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="text-right">
            <div className="flex items-baseline space-x-1.5 sm:space-x-2">
              <span className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-charcoal-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="hidden sm:flex items-center text-[10px] text-forest-700 justify-end">
              <ShieldCheck className="w-3 h-3 mr-1" />
              <span>30-Day Guarantee</span>
            </div>
          </div>

          {product.gumroadUrl ? (
            <a
              href={product.gumroadUrl}
              className="gumroad-button shrink-0"
              data-gumroad-single-product="true"
            >
              <Button
                variant="secondary"
                size="md"
                className="shadow-lg hover:shadow-xl shrink-0"
                leftIcon={<ShoppingBag className="w-4 h-4" />}
              >
                <span>Get Instant Access</span>
              </Button>
            </a>
          ) : (
            <Button
              onClick={onCheckout}
              variant="secondary"
              size="md"
              className="shadow-lg hover:shadow-xl shrink-0"
              leftIcon={<ShoppingBag className="w-4 h-4" />}
            >
              <span>Get Instant Access</span>
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
};
