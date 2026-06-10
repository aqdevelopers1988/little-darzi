import { Card, CardContent } from "@/components/ui/card";

const modules = [
  "Products",
  "Categories",
  "Product images",
  "Variants",
  "Try outfit model images",
  "Preview mappings",
  "Orders",
  "Blog posts",
  "Pages",
  "Newsletter subscribers"
];

export default function AdminPage() {
  return (
    <section className="darzi-container py-12">
      <h1 className="font-serif text-5xl font-black text-darzi-green">Admin backend</h1>
      <p className="mt-3 text-charcoal-ink/70">Operational dashboard structure for Supabase Auth protected staff users.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Card key={module}>
            <CardContent>
              <h2 className="font-serif text-2xl font-bold text-darzi-green">{module}</h2>
              <p className="mt-2 text-sm text-charcoal-ink/70">Upload, edit, publish, and manage {module.toLowerCase()}.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
