import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };

const InfoRequestCtx = createContext<Ctx | null>(null);

export function InfoRequestProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <InfoRequestCtx.Provider value={{ open, close, isOpen }}>
      {children}
    </InfoRequestCtx.Provider>
  );
}

export function useInfoRequest() {
  const ctx = useContext(InfoRequestCtx);
  if (!ctx) throw new Error("useInfoRequest must be used within InfoRequestProvider");
  return ctx;
}
