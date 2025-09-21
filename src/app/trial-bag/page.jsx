"use client";
import Link from "next/link";
import Button from "../../components/ui/button";
import { useTrialBag } from "../../providers/trial-bag";

export default function TrialBagPage() {
  const { items, removeItem, clear, limit } = useTrialBag();
  const total = items.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="section-py">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="display-title text-3xl text-maroon">Your Trial Bag</h1>
        <p className="mt-2 text-neutral-700">Select up to {limit} sarees for an at-home trial.</p>

        {items.length === 0 ? (
          <div className="mt-8 rounded-xl border border-maroon/15 bg-cream p-6 text-center">
            <p className="text-neutral-700">Your trial bag is empty.</p>
            <Link href="/catalog" className="inline-block mt-4"><Button>Browse Sarees</Button></Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-4">
            {items.map((p) => (
              <div key={p.id} className="flex items-center gap-4 rounded-xl border border-maroon/15 bg-cream p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="h-24 w-20 object-cover rounded-md" />
                <div className="flex-1">
                  <div className="font-medium text-maroon">{p.name}</div>
                  <div className="text-sm text-neutral-700">{p.fabric} • {p.color}</div>
                </div>
                <Button variant="outline" onClick={() => removeItem(p.id)}>Remove</Button>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2">
              <div className="text-neutral-700">Estimated value: <span className="font-semibold text-maroon">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(total)}</span></div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={clear}>Clear</Button>
                <Link href="/booking"><Button variant="secondary">Proceed to Booking</Button></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
