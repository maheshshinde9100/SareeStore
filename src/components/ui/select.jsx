"use client";
import React from "react";

export function Select({ className = "", children, ...props }) {
  return (
    <select
      className={[
        "flex h-10 w-full rounded-md border border-maroon/30 bg-white px-3 py-2 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-maroon/60",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </select>
  );
}
export default Select;
