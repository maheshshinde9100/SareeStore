"use client";
import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={[
        "flex h-10 w-full rounded-md border border-maroon/30 bg-white px-3 py-2 text-sm placeholder:text-neutral-500",
        "focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-maroon/60",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
export default Input;
