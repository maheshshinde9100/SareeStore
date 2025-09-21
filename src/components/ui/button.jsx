"use client";
import React from "react";

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none gap-2";

const variants = {
  default:
    "bg-maroon text-cream hover:bg-maroon/90 focus-visible:ring-maroon/60 ring-offset-cream",
  outline:
    "border border-maroon text-maroon hover:bg-maroon/10 focus-visible:ring-maroon/40 ring-offset-cream",
  ghost:
    "text-maroon hover:bg-maroon/10",
  secondary:
    "bg-gold text-maroon hover:bg-gold/90 focus-visible:ring-gold/60 ring-offset-cream",
};

const sizes = {
  sm: "h-9 px-3",
  md: "h-10 px-4",
  lg: "h-12 px-6 text-base",
};

export function Button({ className = "", variant = "default", size = "md", ...props }) {
  return (
    <button className={[base, variants[variant] || variants.default, sizes[size] || sizes.md, className].join(" ")} {...props} />
  );
}

export default Button;
