import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function KidsProfilesPage() {
  return <section className="darzi-container py-12"><h1 className="font-serif text-5xl font-black text-darzi-green">Kids profiles & measurements</h1><div className="mt-8 grid gap-6 lg:grid-cols-2"><Card><CardContent className="space-y-4"><h2 className="font-serif text-2xl font-bold text-darzi-green">Add child</h2><Input placeholder="Child name" /><Input placeholder="Gender" /><Input placeholder="Age group" /><Input placeholder="Height, chest, waist, shoulder, sleeve" /><Button variant="gold">Save profile</Button></CardContent></Card><Card><CardContent><h2 className="font-serif text-2xl font-bold text-darzi-green">Saved measurements</h2><p className="mt-2 text-charcoal-ink/70">Profiles will be stored in Supabase Postgres and reused at checkout for custom orders.</p></CardContent></Card></div></section>;
}
