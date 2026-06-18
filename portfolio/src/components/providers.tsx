"use client";

import { type ReactNode } from "react";
import { ContactModalProvider } from "@/hooks/use-contact-modal";
import ContactModal from "@/components/contact-modal";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModal />
      <Toaster
        position="top-right"
        richColors
        closeButton
        theme="dark"
      />
    </ContactModalProvider>
  );
}
