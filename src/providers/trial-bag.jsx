"use client";
import React, { createContext, useContext, useMemo, useState, useCallback } from "react";

const TrialBagContext = createContext(null);

export function TrialBagProvider({ children, limit = 5 }) {
  const [items, setItems] = useState([]);

  const addItem = useCallback((product) => {
    setItems((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev; // no duplicates
      if (prev.length >= limit) return prev; // enforce limit
      return [...prev, product];
    });
  }, [limit]);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => ({ items, addItem, removeItem, clear, limit }), [items, addItem, removeItem, clear, limit]);

  return <TrialBagContext.Provider value={value}>{children}</TrialBagContext.Provider>;
}

export function useTrialBag() {
  const ctx = useContext(TrialBagContext);
  if (!ctx) throw new Error("useTrialBag must be used within TrialBagProvider");
  return ctx;
}
