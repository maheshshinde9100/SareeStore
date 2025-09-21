"use client";
import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={[
        "w-full min-h-24 rounded-md border border-maroon/30 bg-white px-3 py-2 text-sm placeholder:text-neutral-500",
        "focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-maroon/60",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
export default Textarea;
