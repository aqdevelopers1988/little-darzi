import { notFound } from "next/navigation";
import { ProductCard } from "@/components/commerce/product-card";
import { categories } from "@/lib/constants";
import { getProductsByCategory, slugify } from "@/lib/sample-data";

export function generateStaticParams() { return categories.map((category) => ({ slug: slugify(category) })); }

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = categories.find((category) => slugify(category) === slug);
  const items = getProductsByCategory(slug);
  if (!title) notFound();
  return <section className="darzi-container py-12"><h1 className="font-serif text-5xl font-black text-darzi-green">{title}</h1><p className="mt-3 text-charcoal-ink/70">Curated {title.toLowerCase()} pieces with custom sizing, COD checkout, and future saved measurement support.</p><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{items.length ? items.map((product) => <ProductCard key={product.id} product={product} />) : <p>No products mapped yet. Admin uploads will populate this category.</p>}</div></section>;
}
