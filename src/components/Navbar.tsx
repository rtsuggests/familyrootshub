"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TreePine, Menu, X, Download, BookOpen, Calculator, Sparkles, Compass, Newspaper } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenLeadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Template Catalog", href: "/templates", icon: BookOpen },
    { name: "35-Page Binder", href: "/templates/genealogy-research-binder", icon: Sparkles, badge: "Flagship" },
    { name: "Blog / Guides", href: "/blog", icon: Newspaper },
    { name: "Cousin Calculator", href: "/#cousin-calculator", icon: Calculator },
    { name: "Archival Standards", href: "/about", icon: Compass },
    { name: "Free Kit (PDF)", href: "/free-starter-kit", icon: Download, highlight: true },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200 border-b",
        isScrolled
          ? "bg-cream-100/95 backdrop-blur-md border-sepiaBorder shadow-sm py-2.5"
          : "bg-cream-100 border-sepiaBorder/60 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group text-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-forest-800 text-cream-100 flex items-center justify-center shadow-inner group-hover:bg-forest-700 transition-colors">
              <TreePine className="w-6 h-6 text-bronze-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest-900 group-hover:text-forest-700 transition-colors">
                FamilyRoots<span className="text-bronze-800">Hub</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-charcoal-500 font-sans font-semibold">
                Archival Genealogy Vault
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 flex items-center space-x-1.5",
                    isActive
                      ? "text-forest-800 bg-forest-100/60 font-semibold"
                      : "text-charcoal-700 hover:text-forest-900 hover:bg-cream-200/70"
                  )}
                >
                  <Icon className="w-4 h-4 text-charcoal-500" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="ml-1 text-[10px] uppercase font-bold bg-bronze-100 text-bronze-700 px-1.5 py-0.5 rounded-full border border-bronze-200">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              onClick={() => {
                if (onOpenLeadModal) {
                  onOpenLeadModal();
                } else {
                  window.location.href = "/free-starter-kit";
                }
              }}
              variant="secondary"
              size="sm"
              leftIcon={<Download className="w-4 h-4" />}
            >
              Get Free Starter Kit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-charcoal-700 hover:text-forest-900 hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-forest-600"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden bg-cream-50 border-b border-sepiaBorder px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium",
                  isActive
                    ? "bg-forest-100 text-forest-900 font-semibold"
                    : "text-charcoal-800 hover:bg-cream-200"
                )}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-bronze-600" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="text-xs bg-bronze-100 text-bronze-700 px-2 py-0.5 rounded-full font-semibold">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-3">
            <Button
              onClick={() => {
                setIsOpen(false);
                if (onOpenLeadModal) {
                  onOpenLeadModal();
                } else {
                  window.location.href = "/free-starter-kit";
                }
              }}
              variant="secondary"
              size="md"
              className="w-full"
              leftIcon={<Download className="w-4 h-4" />}
            >
              Download Free Starter Kit (PDF)
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
