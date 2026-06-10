import { ageGroups, genders } from "@/lib/constants";
import { products } from "@/lib/sample-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TryOutfitPage() {
  return (
    <section className="darzi-container py-12">
      <div className="max-w-3xl">
        <p className="font-bold uppercase tracking-wide text-thread-gold">MVP preview system</p>
        <h1 className="font-serif text-5xl font-black text-darzi-green">Try Outfit</h1>
        <p className="mt-3 text-charcoal-ink/70">
          Select gender, age group, a pre-uploaded AI model image, and an outfit. Admin-mapped preview images show how the product appears on that model; no live AI generation is required for the MVP.
        </p>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
        <Card>
          <CardContent className="space-y-5">
            <div>
              <h2 className="font-bold text-darzi-green">Gender</h2>
              <div className="mt-2 flex gap-2">
                {genders.map((gender) => <Button key={gender} variant="outline">{gender}</Button>)}
              </div>
            </div>
            <div>
              <h2 className="font-bold text-darzi-green">Age group</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {ageGroups.map((age) => <Button key={age} variant="outline">{age}</Button>)}
              </div>
            </div>
            <div>
              <h2 className="font-bold text-darzi-green">Outfit</h2>
              <select className="mt-2 h-11 w-full rounded-full border bg-white px-4 text-sm">
                {products.map((product) => <option key={product.id}>{product.name}</option>)}
              </select>
            </div>
            <Button className="w-full" variant="gold">Show preview</Button>
          </CardContent>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-soft-mint">
            <CardContent className="grid min-h-[460px] place-items-center">
              <div className="text-center">
                <div className="mx-auto h-64 w-40 rounded-t-full bg-warm-cream ring-4 ring-thread-gold" />
                <p className="mt-4 font-bold text-darzi-green">Model image placeholder</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid min-h-[460px] place-items-center">
              <div className="text-center">
                <div className="mx-auto h-64 w-44 rounded-[2rem] bg-gradient-to-b from-soft-mint to-warm-cream ring-4 ring-darzi-green" />
                <p className="mt-4 font-bold text-darzi-green">Mapped product preview</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
