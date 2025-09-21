export const categories = [
  { id: "wedding", name: "Wedding Sarees" },
  { id: "casual", name: "Casual Sarees" },
  { id: "handloom", name: "Handloom Sarees" },
  { id: "designer", name: "Designer Sarees" },
];

export const products = [
  {
    id: "kanjivaram-gold-maroon",
    slug: "kanjivaram-gold-maroon",
    name: "Kanjivaram Silk — Gold & Maroon",
    price: 12999,
    category: "wedding",
    fabric: "Pure Silk",
    color: "Maroon",
    occasion: "Wedding",
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c02c8bd01f?q=80&w=1974&auto=format&fit=crop",
    description:
      "Regal Kanjivaram saree with rich zari work in gold and deep maroon. An heirloom piece for your grand occasions.",
    care: "Dry clean only. Store in a muslin cloth.",
  },
  {
    id: "banarasi-pastel-rose",
    slug: "banarasi-pastel-rose",
    name: "Banarasi Brocade — Pastel Rose",
    price: 9999,
    category: "wedding",
    fabric: "Silk Blend",
    color: "Pink",
    occasion: "Wedding",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop",
    description:
      "Delicate pastel rose Banarasi with traditional motifs and subtle zari, perfect for day functions.",
    care: "Dry clean recommended.",
  },
  {
    id: "linen-casual-mint",
    slug: "linen-casual-mint",
    name: "Handloom Linen — Mint Breeze",
    price: 4499,
    category: "handloom",
    fabric: "Linen",
    color: "Mint",
    occasion: "Casual",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop",
    description:
      "Breathable handloom linen saree in soothing mint, ideal for everyday elegance.",
    care: "Gentle hand wash separately.",
  },
  {
    id: "cotton-casual-sky",
    slug: "cotton-casual-sky",
    name: "Cotton Weave — Sky Blue",
    price: 2999,
    category: "casual",
    fabric: "Cotton",
    color: "Blue",
    occasion: "Casual",
    image:
      "https://images.unsplash.com/photo-1545486332-9e0999c535b0?q=80&w=1974&auto=format&fit=crop",
    description:
      "Soft cotton weave in sky blue with minimal border for a graceful daily look.",
    care: "Machine wash cold, do not tumble dry.",
  },
  {
    id: "georgette-designer-ivory",
    slug: "georgette-designer-ivory",
    name: "Designer Georgette — Ivory Pearl",
    price: 7999,
    category: "designer",
    fabric: "Georgette",
    color: "Ivory",
    occasion: "Party",
    image:
      "https://images.unsplash.com/photo-1549216963-72c1712c1193?q=80&w=2070&auto=format&fit=crop",
    description:
      "Flowy georgette with pearl embellishments, crafted for modern soirées.",
    care: "Dry clean only.",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
