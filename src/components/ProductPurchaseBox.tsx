"use client";

import React, { useState } from "react";
import { ShoppingBag, Download, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import confetti from "canvas-confetti";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Button } from "./Button";

interface ProductPurchaseBoxProps {
  product: Product;
}

export const ProductPurchaseBox: React.FC<ProductPurchaseBoxProps> = ({ product }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const getPdfDownloadPath = (slug: string) => {
    switch (slug) {
      case "census-extraction-worksheets":
        return "/downloads/FamilyRootsHub-Federal-Census-1790-1950-Extraction-Worksheets.pdf";
      case "cemetery-vital-records-kit":
        return "/downloads/FamilyRootsHub-Cemetery-and-Vital-Records-Field-Dossier.pdf";
      case "master-heritage-vault":
        return "/downloads/FamilyRootsHub-Master-Heritage-Vault-Complete.pdf";
      case "goodnotes-digital-planner":
        return "/downloads/FamilyRootsHub-GoodNotes-Digital-Planner.pdf";
      case "free-starter-kit":
        return "/downloads/FamilyRootsHub-Free-Starter-Kit.pdf";
      default:
        return "/downloads/FamilyRootsHub-35-Page-Research-Binder.pdf";
    }
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#1E3A2F", "#B8860B", "#F5EDD5"],
      });

      setIsPurchased(true);
    } catch (e) {
      console.error(e);
      setIsPurchased(true);
    } finally {
      setIsCheckingOut(false);
    }
  };

  const pdfUrl = getPdfDownloadPath(product.slug);

  return (
    <div className="space-y-3 pt-2">
      {!isPurchased ? (
        <Button
          onClick={handleCheckout}
          variant="secondary"
          size="xl"
          isLoading={isCheckingOut}
          className="w-full shadow-lg"
          leftIcon={<ShoppingBag className="w-5 h-5 text-forest-950" />}
        >
          <span>Buy Instant Access &bull; {formatPrice(product.price)}</span>
        </Button>
      ) : (
        <div className="bg-forest-100 border border-forest-300 p-5 rounded-xl text-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-forest-900 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-forest-800" />
            <span>Order Confirmed! Digital Access Ready</span>
          </div>
          <p className="text-xs text-charcoal-700">
            Thank you! Your official archival PDF kit is compiled and ready for immediate download:
          </p>
          <a
            href={pdfUrl}
            download={pdfUrl.split("/").pop()}
            className="inline-flex items-center justify-center w-full bg-forest-800 hover:bg-forest-700 text-cream-50 font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all space-x-2"
          >
            <Download className="w-4 h-4 text-bronze-300" />
            <span>Download {product.name} (PDF)</span>
          </a>
        </div>
      )}

      <div className="flex items-center justify-center space-x-4 text-[11px] text-charcoal-500 pt-1">
        <span className="flex items-center">
          <ShieldCheck className="w-3.5 h-3.5 text-forest-700 mr-1" />
          30-Day Money Back Guarantee
        </span>
        <span>&bull;</span>
        <span className="flex items-center">
          <Zap className="w-3.5 h-3.5 text-bronze-600 mr-1" />
          Instant PDF Delivery
        </span>
      </div>
    </div>
  );
};
