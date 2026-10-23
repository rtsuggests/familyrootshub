"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ModalProvider, useModal } from "./ModalContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const LayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { openLeadModal } = useModal();
  const pathname = usePathname();

  // Ensure Gumroad's in-page overlay hooks attach across Next.js client-side route transitions
  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as any;
      if (typeof win.createGumroadOverlay === "function") {
        win.createGumroadOverlay();
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-charcoal-800 selection:bg-forest-800 selection:text-cream-50">
      <Navbar onOpenLeadModal={() => openLeadModal()} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ModalProvider>
      <LayoutContent>{children}</LayoutContent>
    </ModalProvider>
  );
};
