"use client";
import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={["rounded-xl border border-maroon/15 bg-cream/60 shadow-sm", className].join(" ")}>{children}</div>
  );
}

export function CardHeader({ className = "", children }) {
  return <div className={["px-5 pt-5", className].join(" ")}>{children}</div>;
}

export function CardContent({ className = "", children }) {
  return <div className={["px-5 pb-5", className].join(" ")}>{children}</div>;
}

export default Card;
