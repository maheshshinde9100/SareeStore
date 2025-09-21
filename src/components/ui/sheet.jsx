"use client";
import React from "react";

export function Sheet({ open, onClose, side = "right", width = 380, children }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-maroon/20 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`fixed z-50 bg-cream h-full shadow-xl transition-transform ${side === "right" ? "top-0 right-0" : "top-0 left-0"}`}
        style={{ width, transform: `translateX(${open ? 0 : side === "right" ? width : -width}px)` }}
      >
        {children}
      </div>
    </>
  );
}

export function SheetHeader({ children, className = "" }) {
  return <div className={["px-5 py-4 border-b border-maroon/15", className].join(" ")}>{children}</div>;
}
export function SheetContent({ children, className = "" }) {
  return <div className={["p-5", className].join(" ")}>{children}</div>;
}

export default Sheet;
