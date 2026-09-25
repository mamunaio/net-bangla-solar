"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  openQuoteModal: (initialFacility?: string) => void;
  closeQuoteModal: () => void;
  preselectedFacility: string;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedFacility, setPreselectedFacility] = useState("industrial");

  const openQuoteModal = (initialFacility?: string) => {
    if (initialFacility) {
      setPreselectedFacility(initialFacility);
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuoteModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        openQuoteModal,
        closeQuoteModal,
        preselectedFacility,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
