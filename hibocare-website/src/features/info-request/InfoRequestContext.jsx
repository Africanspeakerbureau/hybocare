import React, {createContext, useContext, useState, useCallback} from "react";

const Ctx = createContext(null);

export function InfoRequestProvider({children}) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  return (
    <Ctx.Provider value={{open, openModal, closeModal}}>
      {children}
    </Ctx.Provider>
  );
}

export function useInfoRequest() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useInfoRequest must be used within InfoRequestProvider");
  return v;
}
