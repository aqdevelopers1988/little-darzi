import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/sample-data";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const item = products[0];
  return <section className="darzi-container py-12"><h1 className="font-serif text-5xl font-black text-darzi-green">Cart</h1><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]"><Card><CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center"><div className="h-28 w-24 rounded-2xl bg-soft-mint" /><div className="flex-1"><h2 className="font-serif text-2xl font-bold text-darzi-green">{item.name}</h2><p className="text-sm text-charcoal-ink/70">Custom size · Soft Mint · COD eligible</p></div><p className="font-bold">{formatPrice(item.price)}</p></CardContent></Card><Card><CardContent className="space-y-4"><h2 className="font-serif text-3xl font-bold text-darzi-green">Order summary</h2><div className="flex justify-between"><span>Subtotal</span><b>{formatPrice(item.price)}</b></div><div className="flex justify-between"><span>Payment</span><b>Cash on Delivery</b></div><Button asChild className="w-full" variant="gold"><Link href="/checkout">COD Checkout</Link></Button></CardContent></Card></div></section>;
}
