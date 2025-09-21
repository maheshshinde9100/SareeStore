"use client";
import Link from "next/link";
import { useState } from "react";
import { useTrialBag } from "../providers/trial-bag";
import Button from "./ui/button";

export default function Navbar() {
  const { items } = useTrialBag();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-cream/80 backdrop-blur-md border-b border-maroon/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-maroon" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            ☰
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-maroon flex items-center justify-center text-cream text-lg shadow-sm">S</div>
            <div className="leading-tight">
              <div className="font-semibold text-maroon text-lg">Saree Store</div>
              <div className="text-xs text-neutral-600">Aesthetic • Traditional • Modern</div>
            </div>
          </Link>
        </div>
        <nav className={`md:flex items-center gap-6 ${open ? "block" : "hidden md:flex"}`}>
          {[
            { href: "/home", label: "Home" },
            { href: "/catalog", label: "Catalog" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
            { href: "/orders", label: "My Orders" },
          ].map((l) => (
            <Link key={l.href} className="relative text-sm text-maroon group" href={l.href}>
              <span className="group-hover:underline">{l.label}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gold group-hover:w-full transition-all" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/trial-bag">
            <Button variant="secondary" size="sm" className="transition-transform hover:lift">Trial Bag ({items.length})</Button>
          </Link>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline text-sm text-maroon underline"
          >WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
