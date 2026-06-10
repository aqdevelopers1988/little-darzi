import { PrismaClient, Gender } from "@prisma/client";
import { categories } from "../lib/constants";
import { products, slugify } from "../lib/sample-data";

const prisma = new PrismaClient();

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: slugify(category) },
      update: {},
      create: { name: category, slug: slugify(category), description: `${category} by Little Darzi` }
    });
  }

  for (const product of products) {
    const category = await prisma.category.findUniqueOrThrow({ where: { slug: slugify(product.category) } });
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        fabric: product.fabric,
        gender: product.gender === "Boy" ? Gender.BOY : product.gender === "Girl" ? Gender.GIRL : Gender.UNISEX,
        isPublished: true,
        isBestSeller: Boolean(product.bestSeller),
        isExportLeftover: product.category === "Export Leftover",
        categoryId: category.id,
        images: { create: [{ url: product.image, alt: product.name }] },
        variants: { create: product.sizes.map((size) => ({ size, color: product.colors[0], ageGroup: product.ageGroups[0], stock: 10 })) }
      }
    });
  }
}

main().finally(async () => prisma.$disconnect());
