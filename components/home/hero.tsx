import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="darzi-container grid gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
      <div className="flex flex-col justify-center">
        <Badge>Custom Pakistani Kidswear</Badge>
        <h1 className="mt-5 font-serif text-5xl font-black leading-tight text-darzi-green md:text-7xl">Little outfits stitched for big family moments.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal-ink/75">Shop custom shalwar kameez, kurta pajama, gharara, frocks, waistcoat sets, sibling matching outfits, Eid edits, wedding wear, and curated export leftovers.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg"><Link href="/shop">Shop Kidswear</Link></Button>
          <Button asChild size="lg" variant="gold"><Link href="/try-outfit"><Sparkles className="h-5 w-5" /> Try Outfit</Link></Button>
        </div>
      </div>
      <div className="relative rounded-[2rem] border-4 border-darzi-green bg-soft-mint p-6 shadow-2xl">
        <div className="thread-arc mx-auto h-28 w-4/5" />
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[2rem] bg-warm-cream p-5 shadow-inner"><div className="h-72 rounded-[1.5rem] bg-[linear-gradient(160deg,#DDEEE7,#FFF6E7)] p-5"><div className="mx-auto h-12 w-16 rounded-t-full bg-darzi-green" /><div className="mx-auto mt-2 h-40 w-28 rounded-b-[3rem] rounded-t-xl border-2 border-darzi-green bg-soft-mint" /><div className="mx-auto mt-2 h-20 w-32 rounded-b-full bg-soft-mint" /></div><p className="mt-4 text-center font-bold text-darzi-green">Boys Kurta Pajama</p></div>
          <div className="rounded-[2rem] bg-warm-cream p-5 shadow-inner"><div className="h-72 rounded-[1.5rem] bg-[linear-gradient(160deg,#FFF6E7,#DDEEE7)] p-5"><div className="mx-auto h-12 w-16 rounded-t-full bg-darzi-green" /><div className="mx-auto mt-2 h-48 w-32 rounded-t-3xl bg-warm-cream ring-2 ring-thread-gold" /><div className="mx-auto mt-2 h-8 w-28 rounded-b-full bg-soft-mint" /></div><p className="mt-4 text-center font-bold text-darzi-green">Girls Angrakha</p></div>
        </div>
        <div className="stitch-border mx-auto mt-6 w-56" />
      </div>
    </section>
  );
}
