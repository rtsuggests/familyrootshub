"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { EmailModal } from "./EmailModal";

interface ModalContextType {
  openLeadModal: (customTitle?: string, customSubtitle?: string) => void;
  closeLeadModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);
  const [modalSubtitle, setModalSubtitle] = useState<string | undefined>(undefined);

  const openLeadModal = (title?: string, subtitle?: string) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}
      <EmailModal
        isOpen={isOpen}
        onClose={closeLeadModal}
        title={modalTitle}
        subtitle={modalSubtitle}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
