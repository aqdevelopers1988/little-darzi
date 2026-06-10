import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="darzi-container py-12">
      <div className="rounded-[2rem] bg-darzi-green p-8 text-warm-cream md:p-12">
        <div className="grid gap-6 md:grid-cols-[1fr_.9fr] md:items-center">
          <div>
            <h2 className="font-serif text-4xl font-black">Join the Little Darzi list</h2>
            <p className="mt-3 text-warm-cream/80">Get Eid drops, wedding capsule alerts, measurement tips, and export leftover restock notes.</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input type="email" placeholder="Parent email address" className="bg-white text-charcoal-ink" />
            <Button variant="gold">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
