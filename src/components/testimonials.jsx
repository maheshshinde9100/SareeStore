export default function Testimonials() {
  const items = [
    { quote: "The trial-at-home made choosing my wedding saree so easy!", name: "Aishwarya" },
    { quote: "Beautiful curation and premium quality. Loved the pastel collection.", name: "Neha" },
    { quote: "Swift booking and friendly stylist. Highly recommend!", name: "Priya" },
  ];
  return (
    <section className="section-py bg-pastel-pink/40">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="display-title text-3xl text-maroon mb-6">What Customers Say</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="rounded-xl border border-maroon/15 bg-cream p-5 shadow-sm">
              <p className="text-neutral-800 italic">“{t.quote}”</p>
              <p className="mt-3 text-maroon font-medium">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
