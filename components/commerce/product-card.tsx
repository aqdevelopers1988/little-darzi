import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/sample-data";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-soft-mint">
        <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <Badge className="absolute left-4 top-4 bg-warm-cream/90">{product.tags[0]}</Badge>
      </Link>
      <CardContent className="space-y-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-festive-terracotta">{product.category}</p>
          <Link href={`/product/${product.slug}`} className="mt-1 block font-serif text-xl font-bold text-darzi-green">{product.name}</Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-charcoal-ink">{formatPrice(product.price)}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label="Add to wishlist"><Heart className="h-4 w-4" /></Button>
            <Button variant="gold" size="icon" aria-label="Add to cart"><ShoppingBag className="h-4 w-4" /></Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
