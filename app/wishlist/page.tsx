import { ProductCard } from "@/components/commerce/product-card";
import { products } from "@/lib/sample-data";

export default function WishlistPage() {
  return <section className="darzi-container py-12"><h1 className="font-serif text-5xl font-black text-darzi-green">Wishlist</h1><p className="mt-3 text-charcoal-ink/70">Save outfits while planning Eid, weddings, sibling matching, and future measurements.</p><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 2).map((product) => <ProductCard key={product.id} product={product} />)}</div></section>;
}
