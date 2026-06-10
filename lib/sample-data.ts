import { categories } from "@/lib/constants";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: (typeof categories)[number];
  price: number;
  compareAtPrice?: number;
  gender: "Boy" | "Girl" | "Unisex";
  ageGroups: string[];
  sizes: string[];
  colors: string[];
  fabric: string;
  description: string;
  image: string;
  tags: string[];
  bestSeller?: boolean;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "mint-boys-kurta-pajama",
    name: "Mint Boys Kurta Pajama",
    category: "Boys Kurta Pajama",
    price: 4200,
    gender: "Boy",
    ageGroups: ["2–4", "4–6", "6–8"],
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Soft Mint", "Darzi Green"],
    fabric: "Cotton lawn with thread detail",
    description: "A breathable custom kurta pajama with hand-finished stitch lines for Eid mornings and family dinners.",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=900&auto=format&fit=crop",
    tags: ["Eid", "Custom"],
    bestSeller: true
  },
  {
    id: "p2",
    slug: "floral-girls-angrakha-frock",
    name: "Floral Girls Angrakha Frock",
    category: "Girls Frock / Angrakha",
    price: 6800,
    compareAtPrice: 7600,
    gender: "Girl",
    ageGroups: ["1–2", "2–4", "4–6"],
    sizes: ["1Y", "2Y", "4Y", "6Y"],
    colors: ["Warm Cream", "Thread Gold"],
    fabric: "Cambric cotton with gota inspired trim",
    description: "A twirl-ready angrakha frock inspired by Pakistani floral motifs and made for festive portraits.",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=900&auto=format&fit=crop",
    tags: ["Wedding", "Girls"],
    bestSeller: true
  },
  {
    id: "p3",
    slug: "sibling-mehndi-matching-set",
    name: "Sibling Mehndi Matching Set",
    category: "Sibling Matching",
    price: 11800,
    gender: "Unisex",
    ageGroups: ["2–4", "4–6", "6–8", "8–14"],
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Festive Terracotta", "Thread Gold"],
    fabric: "Cotton silk blend",
    description: "Coordinated boy and girl silhouettes with matching trims for mehndi, nikkah, and family events.",
    image: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=900&auto=format&fit=crop",
    tags: ["Sibling", "Wedding"]
  },
  {
    id: "p4",
    slug: "export-leftover-cotton-kurti",
    name: "Export Leftover Cotton Kurti",
    category: "Export Leftover",
    price: 2100,
    compareAtPrice: 3400,
    gender: "Girl",
    ageGroups: ["6–8", "8–14"],
    sizes: ["6Y", "8Y", "10Y", "12Y"],
    colors: ["Darzi Green", "Warm Cream"],
    fabric: "Premium export surplus cotton",
    description: "Limited stock export leftover pieces curated for everyday comfort at value pricing.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
    tags: ["Ready stock", "Value"]
  }
];

export const collections = [
  { title: "Boys Collection", href: "/category/boys-kurta-pajama", copy: "Kurta pajama, kameez shalwar, waistcoat sets." },
  { title: "Girls Collection", href: "/category/girls-frock-angrakha", copy: "Frocks, gharara, farshi shalwar, kurti trouser." },
  { title: "Eid Collection", href: "/category/eid-collection", copy: "Fresh festive pieces stitched for Eid photos." },
  { title: "Wedding Collection", href: "/category/wedding-collection", copy: "Mehndi, nikkah, baraat and walima outfits." }
];

export function slugify(value: string) {
  return value.toLowerCase().replace(/\/|–/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(slug: string) {
  const label = categories.find((category) => slugify(category) === slug);
  return label ? products.filter((product) => product.category === label || product.tags.some((tag) => slugify(tag) === slug)) : [];
}
