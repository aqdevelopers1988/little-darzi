export const brand = {
  name: "Little Darzi",
  tagline: "Custom Pakistani Kidswear",
  promise: "Custom pieces. Little moments. Big memories.",
  colors: {
    darziGreen: "#1E5A4D",
    threadGold: "#D99A2B",
    warmCream: "#FFF6E7",
    softMint: "#DDEEE7",
    festiveTerracotta: "#B85C38",
    charcoalInk: "#263238"
  }
};

export const categories = [
  "Boys Kurta Pajama",
  "Boys Kameez Shalwar",
  "Boys Kurta Trouser",
  "Boys Waistcoat Set",
  "Girls Shalwar Kameez",
  "Girls Kurti Trouser",
  "Girls Farshi Shalwar",
  "Girls Gharara / Sharara",
  "Girls Frock / Angrakha",
  "Sibling Matching",
  "Eid Collection",
  "Wedding Collection",
  "Export Leftover",
  "New Arrivals",
  "Best Sellers"
] as const;

export const ageGroups = ["0–1", "1–2", "2–4", "4–6", "6–8", "8–14"] as const;
export const genders = ["Boy", "Girl"] as const;

export const orderStatuses = [
  "Pending",
  "Confirmed",
  "Measurement Confirmed",
  "In Stitching",
  "Quality Check",
  "Ready to Ship",
  "Shipped",
  "Delivered",
  "Cancelled"
] as const;

export const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/category/eid-collection", label: "Eid" },
  { href: "/category/wedding-collection", label: "Wedding" },
  { href: "/export-leftover", label: "Export Leftover" },
  { href: "/blog", label: "Blog" }
];
