import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUpPage() {
  return <section className="darzi-container grid min-h-[60vh] place-items-center py-12"><Card className="w-full max-w-md"><CardContent className="space-y-4 p-8"><h1 className="font-serif text-4xl font-black text-darzi-green">Create account</h1><Input placeholder="Parent name" /><Input type="email" placeholder="Email" /><Input type="password" placeholder="Password" /><Button className="w-full" variant="gold">Create Supabase account</Button></CardContent></Card></section>;
}
