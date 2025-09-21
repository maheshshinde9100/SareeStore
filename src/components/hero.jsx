import Link from "next/link";
import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-py bg-cream motif-bg">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full gradient-gold opacity-30 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full gradient-maroon opacity-20 blur-3xl animate-float" style={{animationDelay:'1s'}} />
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-up">
          <div className="ornament-corners inline-block mb-3 px-3 py-1 text-sm text-maroon bg-cream/70 border border-maroon/15 rounded-md">Premium • Cultural • Modern</div>
          <h1 className="display-title text-4xl md:text-5xl text-maroon font-semibold">
            Try Sarees at Home, Shop with Confidence
          </h1>
          <div className="gold-divider"></div>
          <p className="mt-4 text-neutral-700 max-w-prose">
            Experience the elegance of handcrafted sarees with our phygital trial. Curated wedding, handloom, designer and casual collections in soft pastels, maroons and regal gold accents.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/catalog"><Button size="lg" className="transition-transform hover:lift hover:shadow-gold">Browse Sarees</Button></Link>
            <Link href="/booking"><Button size="lg" variant="secondary" className="transition-transform hover:lift">Book a Trial</Button></Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-maroon/15 shadow-md animate-fade-in">
          <div className="absolute inset-0 animate-subtle-zoom" style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop)",
            backgroundSize: "cover", backgroundPosition: "center"
          }} />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/60 to-transparent" />
          <div className="absolute bottom-3 left-3 text-cream bg-maroon/80 px-3 py-1 rounded-md text-sm">Handcrafted Zari • Silk</div>
        </div>
      </div>
    </section>
  );
}
