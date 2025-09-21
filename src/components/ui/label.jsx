"use client";
import React from "react";

export function Label({ className = "", ...props }) {
  return (
    <label className={["text-sm text-maroon font-medium", className].join(" ")} {...props} />
  );
}
export default Label;
