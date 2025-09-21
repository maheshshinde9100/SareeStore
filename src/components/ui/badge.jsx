"use client";
import React from "react";

export function Badge({ className = "", children, variant = "maroon" }) {
  const styles = {
    maroon: "bg-maroon text-cream",
    gold: "bg-gold text-maroon",
    outline: "border border-maroon text-maroon",
  };
  return (
    <span className={["inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", styles[variant], className].join(" ")}>{children}</span>
  );
}
export default Badge;
