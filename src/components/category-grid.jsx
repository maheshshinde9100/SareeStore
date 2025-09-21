import Link from "next/link";
import { categories } from "../data/products";

export default function CategoryGrid() {
  const images = {
    wedding: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
    casual: "https://images.unsplash.com/photo-1545486332-9e0999c535b0?q=80&w=1200&auto=format&fit=crop",
    handloom: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop",
    designer: "https://images.unsplash.com/photo-1549216963-72c1712c1193?q=80&w=1200&auto=format&fit=crop",
  };
  return (
    <section className="section-py">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="display-title text-3xl text-maroon mb-6">Featured Categories</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.id} href={{ pathname: "/catalog", query: { category: c.id } }}>
              <div className="group rounded-xl overflow-hidden border border-maroon/15 bg-cream shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${images[c.id]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  />
                </div>
                <div className="p-3 text-center text-maroon font-medium">{c.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
