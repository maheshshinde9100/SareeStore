"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../components/ui/button";

const steps = [
  { title: "Cocoon & Silk Threads", desc: "Finest silk threads sourced and prepared for weaving.", img: "https://images.unsplash.com/photo-1581291518667-3d4b3c38a9a0?q=80&w=1200&auto=format&fit=crop", icon: "🧵" },
  { title: "Natural Dyeing", desc: "Threads bathed in earthy dyes to achieve rich tones.", img: "https://images.unsplash.com/photo-1545156521-77bd85671dce?q=80&w=1200&auto=format&fit=crop", icon: "🎨" },
  { title: "Loom Setup", desc: "The loom is readied with warp and weft for the pattern.", img: "https://images.unsplash.com/photo-1621264448267-52d5a9bfe045?q=80&w=1200&auto=format&fit=crop", icon: "🛠️" },
  { title: "Hand Weaving", desc: "Master weavers craft intricate textures with precision.", img: "https://images.unsplash.com/photo-1593629718768-bfd3b0fb192d?q=80&w=1200&auto=format&fit=crop", icon: "🪡" },
  { title: "Zari Work", desc: "Traditional zari brings regal maroon and gold elegance.", img: "https://images.unsplash.com/photo-1617050355875-0b2f43fa4627?q=80&w=1200&auto=format&fit=crop", icon: "✨" },
  { title: "Finishing & Quality", desc: "Borders pressed, tassels tied, and quality perfected.", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop", icon: "✅" },
  { title: "Drape & Celebrate", desc: "The saree comes alive in elegant Maharashtrian drape.", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop", icon: "🥻" },
];

export default function AnimatedLanding() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden section-py motif-bg">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full gradient-gold opacity-30 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full gradient-maroon opacity-20 blur-3xl animate-float" style={{animationDelay:'1s'}} />

        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <div className="ornament-corners inline-block mb-3 px-3 py-1 text-sm text-maroon bg-cream/70 border border-maroon/15 rounded-md">Maharashtrian Handloom Heritage</div>
            <h1 className="display-title text-4xl md:text-5xl text-maroon font-semibold">The Journey of a Saree</h1>
            <div className="gold-divider" />
            <p className="mt-4 text-neutral-700 max-w-prose">Walk through the soulful process—from silk threads to zari-kissed borders—crafted with devotion and grace.</p>
            <div className="mt-6 flex gap-3">
              <Link href="#flow"><Button size="lg" className="hover:lift hover:shadow-gold">See the Flow</Button></Link>
              <Link href="/home"><Button size="lg" variant="secondary" className="hover:lift">Enter Store</Button></Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2, duration:0.8 }} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-maroon/15 shadow-md">
            <div className="absolute inset-0 animate-subtle-zoom" style={{ backgroundImage: `url(${steps[4].img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/60 to-transparent" />
            <div className="absolute bottom-3 left-3 text-cream bg-maroon/80 px-3 py-1 rounded-md text-sm">Maroon • Gold • Zari</div>
          </motion.div>
        </div>
      </section>

      {/* Flow timeline */}
      <section id="flow" className="section-py">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="display-title text-3xl text-maroon mb-2">From Threads to Tradition</h2>
          <div className="gold-divider mb-6" />

          <div className="grid gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-2xl border border-maroon/15 bg-cream shadow-sm grid md:grid-cols-12 items-stretch ${i % 2 === 0 ? '' : ''}`}
              >
                <div className="md:col-span-5 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-maroon/85 text-cream text-sm px-2 py-0.5 rounded-md shadow-sm">{s.icon}</div>
                </div>
                <div className="md:col-span-7 p-6">
                  <h3 className="text-2xl text-maroon font-semibold">{s.title}</h3>
                  <p className="mt-2 text-neutral-700">{s.desc}</p>
                  <div className="mt-3 text-sm text-neutral-600">Step {i + 1} of {steps.length}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/home"><Button size="lg" variant="secondary" className="hover:lift">Proceed to Store</Button></Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-pastel-pink/40">
        <div className="mx-auto max-w-6xl px-4 grid sm:grid-cols-3 gap-5">
          {["Craft", "Culture", "Care"].map((v, i) => (
            <motion.div key={v} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-maroon/15 bg-cream p-5 shadow-sm">
              <div className="text-maroon font-semibold text-lg">{v}</div>
              <p className="text-sm text-neutral-700 mt-1">Our promise to weave beauty with responsibility and heartfelt service.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
