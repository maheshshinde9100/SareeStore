"use client";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { getProductBySlug, products } from "../../../data/products";
import Button from "../../../components/ui/button";
import { useTrialBag } from "../../../providers/trial-bag";
import Link from "next/link";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const { addItem, items, limit } = useTrialBag();
  const [zoom, setZoom] = useState(false);

  if (!product) {
    return (
      <div className="section-py">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="display-title text-3xl text-maroon">Saree not found</h1>
          <p className="mt-2 text-neutral-700">The saree you are looking for may have moved or is unavailable.</p>
          <div className="mt-4"><Link href="/catalog"><Button>Back to Catalog</Button></Link></div>
        </div>
      </div>
    );
  }

  const inBag = items.some((p) => p.id === product.id);
  const disabled = inBag || items.length >= limit;
  const price = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(product.price);

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="section-py">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden border border-maroon/15 bg-cream shadow-md">
          <div className="relative aspect-[4/5] overflow-hidden group cursor-zoom-in" onClick={() => setZoom(true)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>
        <div>
          <h1 className="display-title text-3xl text-maroon">{product.name}</h1>
          <div className="mt-2 text-neutral-700">{product.fabric} • {product.color} • {product.occasion}</div>
          <div className="mt-3 font-semibold text-maroon text-2xl">{price}</div>
          <p className="mt-4 text-neutral-800">{product.description}</p>
          <div className="mt-6 flex gap-3">
            <Button onClick={() => addItem(product)} disabled={disabled}> {inBag ? "In Trial Bag" : "Add to Trial Bag"} </Button>
            <Button variant="secondary">Buy Now</Button>
          </div>
          <div className="mt-6 text-sm text-neutral-700">
            <div className="font-medium text-maroon">Care</div>
            <p>{product.care}</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mx-auto max-w-6xl px-4 mt-12">
          <h2 className="display-title text-2xl text-maroon mb-4">Related Sarees</h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {related.map((p) => (
              <Link key={p.id} href={`/product/${p.slug}`} className="rounded-xl overflow-hidden border border-maroon/15 bg-cream shadow-sm block">
                <div className="aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <div className="text-maroon font-medium line-clamp-1">{p.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {zoom && (
        <div className="fixed inset-0 z-50 bg-maroon/25 backdrop-blur-sm flex items-center justify-center" onClick={() => setZoom(false)}>
          <div className="max-w-4xl w-full mx-4">
            <div className="relative rounded-xl overflow-hidden bg-cream">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} className="w-full h-auto" />
              <button className="absolute top-3 right-3 text-maroon text-xl bg-cream/90 rounded-full w-8 h-8 flex items-center justify-center" aria-label="Close" onClick={() => setZoom(false)}>✕</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
