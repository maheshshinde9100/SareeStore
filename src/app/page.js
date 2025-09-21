import Hero from "../components/hero";
import CategoryGrid from "../components/category-grid";
import Testimonials from "../components/testimonials";
import Button from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <section className="section-py">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden border border-maroon/15 shadow-md aspect-[4/3]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1604335399105-a0c02c8bd01f?q=80&w=1200&auto=format&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
          <div>
            <h2 className="display-title text-3xl text-maroon">Phygital Trial Experience</h2>
            <p className="mt-3 text-neutral-700">
              Book a home trial to touch, feel and try sarees with a stylist. We blend digital convenience with traditional elegance so you can make confident choices without the rush.
            </p>
            <div className="mt-5 flex gap-3">
              <Link href="/booking"><Button>Book a Trial</Button></Link>
              <Link href="/catalog"><Button variant="outline">Browse Catalog</Button></Link>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
