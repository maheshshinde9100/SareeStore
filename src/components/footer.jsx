import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-maroon/10 bg-cream motif-bg">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-full bg-maroon flex items-center justify-center text-cream text-base">S</div>
            <div className="font-semibold text-maroon text-lg">Saree Store</div>
          </div>
          <p className="text-sm text-neutral-700">Try Sarees at Home, Shop with Confidence.</p>
        </div>
        <div>
          <h4 className="text-maroon font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/catalog" className="hover:underline">Catalog</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-maroon font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/orders" className="hover:underline">Track Orders</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-maroon font-semibold mb-3">Contact</h4>
          <p className="text-sm">Email: support@sareestore.com</p>
          <p className="text-sm">Phone: +91-90000-00000</p>
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm text-maroon underline">Chat on WhatsApp</a>
          <div className="mt-4 flex gap-3 text-maroon">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-600 pb-6">© {new Date().getFullYear()} Saree Store. All rights reserved.</div>
    </footer>
  );
}
