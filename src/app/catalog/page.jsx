"use client";
import { useMemo, useState } from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/product-card";
import Filters from "../../components/filters";
import { useSearchParams } from "next/navigation";

export default function CatalogPage() {
  const search = useSearchParams();
  const categoryFromQuery = search.get("category") || "";
  const [filter, setFilter] = useState({});

  const list = useMemo(() => {
    let arr = [...products];
    const color = (filter.color || "").toLowerCase();
    const fabric = filter.fabric || "";
    const occasion = filter.occasion || "";
    const min = Number(filter.min || 0);
    const max = Number(filter.max || Infinity);

    if (categoryFromQuery) arr = arr.filter((p) => p.category === categoryFromQuery);
    if (color) arr = arr.filter((p) => p.color.toLowerCase().includes(color));
    if (fabric) arr = arr.filter((p) => p.fabric === fabric);
    if (occasion) arr = arr.filter((p) => p.occasion === occasion);
    arr = arr.filter((p) => p.price >= min && p.price <= max);

    if (filter.sort === "price-asc") arr.sort((a, b) => a.price - b.price);
    if (filter.sort === "new") arr = arr.reverse();

    return arr;
  }, [filter, categoryFromQuery]);

  return (
    <div className="section-py">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="display-title text-3xl text-maroon mb-4">Catalog</h1>
        <Filters onChange={setFilter} />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          {list.length === 0 && (
            <div className="col-span-full text-center text-neutral-700">No sarees match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
}
