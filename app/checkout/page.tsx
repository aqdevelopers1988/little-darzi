import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function CheckoutPage() {
  return <section className="darzi-container py-12"><h1 className="font-serif text-5xl font-black text-darzi-green">COD Checkout</h1><p className="mt-3 text-charcoal-ink/70">MVP accepts Cash on Delivery only. The payment abstraction is modeled for future payment gateways.</p><div className="mt-8 grid gap-6 lg:grid-cols-2"><Card><CardContent className="space-y-4"><h2 className="font-serif text-3xl font-bold text-darzi-green">Delivery details</h2><Input placeholder="Parent full name" /><Input placeholder="Phone / WhatsApp" /><Input placeholder="Street address" /><Input placeholder="City" /></CardContent></Card><Card><CardContent className="space-y-4"><h2 className="font-serif text-3xl font-bold text-darzi-green">Payment method</h2><div className="rounded-2xl border bg-soft-mint p-4 font-bold text-darzi-green">Cash on Delivery</div><Button variant="gold" className="w-full">Place COD order</Button></CardContent></Card></div></section>;
}
