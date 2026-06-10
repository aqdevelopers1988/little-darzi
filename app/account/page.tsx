import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { orderStatuses } from "@/lib/constants";

export default function AccountPage() {
  return <section className="darzi-container py-12"><h1 className="font-serif text-5xl font-black text-darzi-green">Customer dashboard</h1><div className="mt-8 grid gap-6 lg:grid-cols-3"><Card><CardContent><h2 className="font-serif text-2xl font-bold text-darzi-green">Kids profiles</h2><p className="mt-2 text-sm text-charcoal-ink/70">Save measurements for multiple children.</p><Button asChild className="mt-4" variant="gold"><Link href="/account/kids">Manage kids</Link></Button></CardContent></Card><Card className="lg:col-span-2"><CardContent><h2 className="font-serif text-2xl font-bold text-darzi-green">Order journey</h2><div className="mt-4 grid gap-2 sm:grid-cols-3">{orderStatuses.map((status) => <span key={status} className="rounded-full bg-soft-mint px-3 py-2 text-xs font-bold text-darzi-green">{status}</span>)}</div></CardContent></Card></div></section>;
}
