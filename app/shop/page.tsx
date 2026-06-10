import { ProductCard } from "@/components/commerce/product-card";
import { categories } from "@/lib/constants";
import { products, slugify } from "@/lib/sample-data";
import Link from "next/link";

export default function ShopPage() {
  return <section className="darzi-container py-12"><h1 className="font-serif text-5xl font-black text-darzi-green">Shop Little Darzi</h1><p className="mt-3 max-w-2xl text-charcoal-ink/70">Browse custom and ready-stock Pakistani kidswear across boys, girls, Eid, wedding, sibling matching, and export leftover collections.</p><div className="my-8 flex gap-2 overflow-x-auto pb-2">{categories.map((category) => <Link className="shrink-0 rounded-full border bg-white px-4 py-2 text-sm font-bold text-darzi-green" href={`/category/${slugify(category)}`} key={category}>{category}</Link>)}</div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>;
}
