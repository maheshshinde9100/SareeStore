"use client";
import Link from "next/link";
import { useState } from "react";
import { useTrialBag } from "../providers/trial-bag";
import Button from "./ui/button";

export default function Navbar() {
  const { items } = useTrialBag();
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-cream border-b border-maroon/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-maroon" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            ☰
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-maroon flex items-center justify-center text-cream text-lg">S</div>
            <div className="leading-tight">
              <div className="font-semibold text-maroon text-lg">Saree Store</div>
              <div className="text-xs text-neutral-600">Aesthetic • Traditional • Modern</div>
            </div>
          </Link>
        </div>
        <nav className={`md:flex items-center gap-5 ${open ? "block" : "hidden md:flex"}`}>
          <Link className="text-sm text-maroon hover:underline" href="/">Home</Link>
          <Link className="text-sm text-maroon hover:underline" href="/catalog">Catalog</Link>
          <Link className="text-sm text-maroon hover:underline" href="/about">About Us</Link>
          <Link className="text-sm text-maroon hover:underline" href="/contact">Contact</Link>
          <Link className="text-sm text-maroon hover:underline" href="/orders">My Orders</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/trial-bag">
            <Button variant="secondary" size="sm">Trial Bag ({items.length})</Button>
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
