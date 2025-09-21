export default function AboutPage() {
  return (
    <div className="section-py">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-maroon/15 shadow-md aspect-[4/3]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1549216963-72c1712c1193?q=80&w=1200&auto=format&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div>
          <h1 className="display-title text-3xl text-maroon">About Saree Store</h1>
          <p className="mt-3 text-neutral-800">
            We celebrate India's rich textile heritage through a curated selection of wedding, handloom, designer and everyday sarees. Our aesthetic blends soft pastel tones with maroon and gold accents, honoring tradition with a modern sensibility.
          </p>
          <p className="mt-3 text-neutral-800">
            Our phygital experience lets you try sarees at home with a stylist, so you can feel the fabric, see the drape, and choose with confidence.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-maroon/15 bg-cream p-4">
              <div className="text-maroon font-semibold">Craftsmanship</div>
              <p className="text-sm text-neutral-700 mt-1">Hand-picked weaves and artisanal detailing from trusted looms.</p>
            </div>
            <div className="rounded-xl border border-maroon/15 bg-cream p-4">
              <div className="text-maroon font-semibold">Phygital Care</div>
              <p className="text-sm text-neutral-700 mt-1">Seamless online browsing with in-person home trials.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
