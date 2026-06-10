import Link from "next/link";
import { brand } from "@/lib/constants";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Little Darzi home">
      <span className="relative grid h-12 w-12 place-items-center rounded-2xl border-2 border-darzi-green bg-soft-mint text-lg shadow-sm">
        <span className="font-serif font-black text-darzi-green">LD</span>
        <span className="absolute -right-1 top-2 h-8 w-8 rounded-full border-t-2 border-thread-gold" />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-serif text-2xl font-black text-darzi-green">{brand.name}</span>
          <span className="block text-xs font-semibold tracking-wide text-charcoal-ink/70">{brand.tagline}</span>
        </span>
      )}
    </Link>
  );
}
