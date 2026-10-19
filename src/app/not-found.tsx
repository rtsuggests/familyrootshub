import React from "react";
import Link from "next/link";
import { TreePine, Home, BookOpen, Compass, Search } from "lucide-react";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-cream-100 px-4 py-16">
      <div className="max-w-md w-full bg-cream-50 rounded-2xl border border-sepiaBorder p-8 text-center shadow-vault space-y-6">
        <div className="w-16 h-16 rounded-full bg-forest-100 border border-forest-300 flex items-center justify-center mx-auto text-forest-800">
          <TreePine className="w-8 h-8 text-bronze-600" />
        </div>

        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-bronze-600 bg-bronze-100 px-3 py-1 rounded-full border border-bronze-200">
            Error 404 &bull; Missing Record
          </span>
          <h1 className="font-serif text-3xl font-bold text-forest-900 mt-3">
            Branch Not Found in the Archives
          </h1>
          <p className="text-sm text-charcoal-600 mt-2 leading-relaxed">
            The pedigree chart or genealogical record you were looking for seems to have moved or does not exist in our catalog.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Return to Vault Home
            </Button>
          </Link>
          <Link href="/templates" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="md"
              leftIcon={<BookOpen className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Browse Templates
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
