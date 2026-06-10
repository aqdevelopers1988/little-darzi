import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/layout/logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-warm-cream/90 backdrop-blur-xl">
      <div className="darzi-container flex h-20 items-center gap-4">
        <div className="md:hidden"><Logo compact /></div>
        <div className="hidden md:block"><Logo /></div>
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-charcoal-ink/80 hover:text-darzi-green">
              {link.label}
            </Link>
          ))}
        </nav>
        <form className="hidden max-w-xs flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-darzi-green" />
            <Input className="pl-10" placeholder="Search kurta, gharara..." />
          </div>
        </form>
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Button asChild variant="ghost" size="icon"><Link href="/wishlist" aria-label="Wishlist"><Heart className="h-5 w-5" /></Link></Button>
          <Button asChild variant="ghost" size="icon"><Link href="/cart" aria-label="Cart"><ShoppingBag className="h-5 w-5" /></Link></Button>
          <Button asChild variant="outline" className="hidden sm:inline-flex"><Link href="/auth/sign-in"><UserRound className="h-4 w-4" /> Sign in</Link></Button>
          <Button asChild variant="gold" className="hidden md:inline-flex"><Link href="/try-outfit">Try Outfit</Link></Button>
          <Button variant="ghost" size="icon" className="lg:hidden"><Menu className="h-5 w-5" /></Button>
        </div>
      </div>
      <div className="stitch-border" />
    </header>
  );
}
