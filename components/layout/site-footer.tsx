import Link from "next/link";
import { brand, categories } from "@/lib/constants";
import { Logo } from "@/components/layout/logo";

const footerLinks = ["About", "Contact", "Size Guide", "Return Policy", "Privacy Policy", "Terms", "Blog", "Export Leftover"];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-darzi-green text-warm-cream">
      <div className="darzi-container grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-md text-sm text-warm-cream/80">{brand.promise} Custom Pakistani kidswear stitched with thoughtful measurements, festive trims, and parent-friendly ordering.</p>
        </div>
        <div>
          <h3 className="font-bold text-thread-gold">Shop</h3>
          <div className="mt-4 grid gap-2 text-sm text-warm-cream/80">
            {categories.slice(0, 8).map((category) => <Link key={category} href="/shop">{category}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-thread-gold">Help</h3>
          <div className="mt-4 grid gap-2 text-sm text-warm-cream/80">
            {footerLinks.map((link) => <Link key={link} href={`/${link.toLowerCase().replaceAll(" ", "-")}`}>{link}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
