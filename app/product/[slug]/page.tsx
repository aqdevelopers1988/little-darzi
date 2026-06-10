import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/lib/sample-data";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <section className="darzi-container grid gap-10 py-12 lg:grid-cols-2"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-soft-mint"><Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div className="space-y-6"><Badge>{product.category}</Badge><div><h1 className="font-serif text-5xl font-black text-darzi-green">{product.name}</h1><div className="mt-3 flex items-center gap-3"><p className="text-3xl font-black text-charcoal-ink">{formatPrice(product.price)}</p>{product.compareAtPrice && <p className="text-lg text-charcoal-ink/50 line-through">{formatPrice(product.compareAtPrice)}</p>}</div></div><p className="text-lg leading-8 text-charcoal-ink/75">{product.description}</p><dl className="grid gap-3 rounded-[1.5rem] border bg-white/70 p-5 sm:grid-cols-2"><div><dt className="text-xs font-bold uppercase text-thread-gold">Sizes</dt><dd>{product.sizes.join(", ")}</dd></div><div><dt className="text-xs font-bold uppercase text-thread-gold">Colors</dt><dd>{product.colors.join(", ")}</dd></div><div><dt className="text-xs font-bold uppercase text-thread-gold">Fabric</dt><dd>{product.fabric}</dd></div><div><dt className="text-xs font-bold uppercase text-thread-gold">Age groups</dt><dd>{product.ageGroups.join(", ")}</dd></div></dl><div className="flex flex-col gap-3 sm:flex-row"><Button size="lg" variant="gold">Add to cart</Button><Button size="lg" variant="outline"><Heart className="h-5 w-5" /> Wishlist</Button><Button asChild size="lg"><Link href={`/try-outfit?product=${product.slug}`}><Sparkles className="h-5 w-5" /> Try Outfit</Link></Button></div></div></section>;
}
