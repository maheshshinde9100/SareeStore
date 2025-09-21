"use client";
import React from "react";

export function Separator({ className = "" }) {
  return <div className={["h-px w-full bg-maroon/15", className].join(" ")} />;
}
export default Separator;
