import Link from "next/link";
import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="section-py bg-cream motif-bg">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="display-title text-4xl md:text-5xl text-maroon font-semibold">
            Try Sarees at Home, Shop with Confidence
          </h1>
          <p className="mt-4 text-neutral-700 max-w-prose">
            Experience the elegance of handcrafted sarees with our phygital trial. Curated wedding, handloom, designer and casual collections in soft pastels, maroons and regal gold accents.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/catalog"><Button size="lg">Browse Sarees</Button></Link>
            <Link href="/booking"><Button size="lg" variant="secondary">Book a Trial</Button></Link>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-maroon/15 shadow-md">
          {/* Banner image via CSS to keep repo light */}
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
