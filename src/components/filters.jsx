"use client";
import { useState, useMemo } from "react";
import Input from "./ui/input";
import Select from "./ui/select";
import Label from "./ui/label";

export default function Filters({ onChange, initial = {} }) {
  const [color, setColor] = useState(initial.color || "");
  const [fabric, setFabric] = useState(initial.fabric || "");
  const [occasion, setOccasion] = useState(initial.occasion || "");
  const [min, setMin] = useState(initial.min || "");
  const [max, setMax] = useState(initial.max || "");
  const [sort, setSort] = useState(initial.sort || "");

  useMemo(() => {
    const f = { color, fabric, occasion, min, max, sort };
    onChange?.(f);
  }, [color, fabric, occasion, min, max, sort]);

  return (
    <div className="rounded-xl border border-maroon/15 bg-cream p-4 shadow-sm">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="color">Color</Label>
          <Input id="color" placeholder="e.g., Maroon" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="fabric">Fabric</Label>
          <Select id="fabric" value={fabric} onChange={(e) => setFabric(e.target.value)}>
            <option value="">Any</option>
            <option>Silk</option>
            <option>Pure Silk</option>
            <option>Silk Blend</option>
            <option>Linen</option>
            <option>Cotton</option>
            <option>Georgette</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="occasion">Occasion</Label>
          <Select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="">Any</option>
            <option>Wedding</option>
            <option>Casual</option>
            <option>Party</option>
          </Select>
        </div>
        <div>
          <Label>Price Min</Label>
          <Input type="number" placeholder="0" value={min} onChange={(e) => setMin(e.target.value)} />
        </div>
        <div>
          <Label>Price Max</Label>
          <Input type="number" placeholder="20000" value={max} onChange={(e) => setMax(e.target.value)} />
        </div>
        <div>
          <Label>Sort By</Label>
          <Select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="new">New Arrivals</option>
          </Select>
        </div>
      </div>
    </div>
  );
}
