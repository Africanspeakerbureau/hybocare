import React, { createContext, useContext, useState } from 'react';

const InfoRequestContext = createContext(null);

export function InfoRequestProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };

  return (
    <InfoRequestContext.Provider value={value}>
      {children}
    </InfoRequestContext.Provider>
  );
}

export function useInfoRequest() {
  const context = useContext(InfoRequestContext);
  if (!context) {
    throw new Error('useInfoRequest must be used within an InfoRequestProvider');
  }
  return context;
}

export default InfoRequestContext;
