import Link from "next/link";
import { categories } from "@/lib/constants";
import { collections, products, slugify } from "@/lib/sample-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/commerce/product-card";
import { Hero } from "@/components/home/hero";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="darzi-container py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div><p className="font-bold uppercase tracking-wide text-thread-gold">Shop by category</p><h2 className="font-serif text-4xl font-black text-darzi-green">Every Pakistani kidswear silhouette</h2></div>
          <Button asChild variant="outline"><Link href="/shop">View all</Link></Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => <Link key={category} href={`/category/${slugify(category)}`} className="rounded-2xl border bg-white/70 p-4 text-sm font-bold text-darzi-green transition hover:-translate-y-1 hover:bg-soft-mint">{category}</Link>)}
        </div>
      </section>
      <section className="darzi-container grid gap-5 py-10 md:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => (
          <Card key={collection.title} className="bg-gradient-to-br from-white to-soft-mint">
            <CardContent className="min-h-48 p-6">
              <h3 className="font-serif text-3xl font-black text-darzi-green">{collection.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal-ink/70">{collection.copy}</p>
              <Button asChild className="mt-6" variant="gold"><Link href={collection.href}>Explore</Link></Button>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="darzi-container py-10">
        <div className="mb-6"><p className="font-bold uppercase tracking-wide text-thread-gold">Best sellers</p><h2 className="font-serif text-4xl font-black text-darzi-green">Parent-loved custom pieces</h2></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="darzi-container py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="bg-festive-terracotta text-white"><CardContent className="p-8"><h2 className="font-serif text-4xl font-black">Export leftover edits</h2><p className="mt-3 text-white/85">Ready-stock premium surplus kidswear in limited quantities for quick gifting and everyday wear.</p><Button asChild className="mt-6" variant="gold"><Link href="/export-leftover">Shop leftovers</Link></Button></CardContent></Card>
          <Card className="bg-darzi-green text-warm-cream"><CardContent className="p-8"><h2 className="font-serif text-4xl font-black">Eid & wedding orders</h2><p className="mt-3 text-warm-cream/80">Plan ahead with saved measurements, sibling matching, and staged order statuses from stitching to delivery.</p><Button asChild className="mt-6" variant="gold"><Link href="/category/wedding-collection">Book festive wear</Link></Button></CardContent></Card>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
