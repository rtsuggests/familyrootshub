"use client";

import React from "react";
import { ModalProvider, useModal } from "./ModalContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const LayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { openLeadModal } = useModal();

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
