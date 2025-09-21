"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/button";
import { useTrialBag } from "../providers/trial-bag";

export default function ProductCard({ product }) {
  const { addItem, items, limit } = useTrialBag();
  const inBag = items.some((p) => p.id === product.id);
  const disabled = inBag || items.length >= limit;
  const price = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(product.price);

  return (
    <div className="group rounded-xl overflow-hidden border border-maroon/15 bg-cream shadow-sm flex flex-col transition-transform hover:lift hover:shadow-gold animate-fade-up">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-2 left-2 text-cream bg-maroon/85 px-2 py-0.5 rounded text-xs shadow-sm">{product.fabric}</div>
        </div>
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link href={`/product/${product.slug}`} className="font-medium text-maroon hover:underline line-clamp-2">{product.name}</Link>
        <div className="mt-1 text-neutral-700 text-sm">{product.fabric} • {product.color}</div>
        <div className="mt-2 font-semibold text-maroon">{price}</div>
        <div className="mt-3 flex gap-2">
          <Button onClick={() => addItem(product)} disabled={disabled} size="sm">{inBag ? "In Trial Bag" : "Add to Trial Bag"}</Button>
          <Link href={`/product/${product.slug}`}><Button size="sm" variant="outline">View</Button></Link>
        </div>
      </div>
    </div>
  );
}
