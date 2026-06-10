# Little Darzi

Custom Next.js MVP for **Little Darzi**, a Pakistani kidswear e-commerce brand for boys and girls.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4 styling with shadcn/ui-style primitives
- Supabase Auth, Postgres, and Storage integration points
- Prisma ORM schema for catalog, accounts, orders, kids measurements, and Try Outfit previews

## MVP Routes

- `/` homepage with hero, category shopping, collections, export leftover, best sellers, and newsletter
- `/shop`, `/category/[slug]`, `/product/[slug]`
- `/cart`, `/wishlist`, `/checkout`
- `/auth/sign-in`, `/auth/sign-up`, `/account`, `/account/kids`
- `/try-outfit`
- `/admin`
- Static content pages: About, Contact, Size Guide, Return Policy, Privacy Policy, Terms, Blog, Export Leftover

## Local setup

```bash
cp .env.example .env
npm install
npm run prisma:generate
npm run dev
```

> Note: the current environment blocked npm registry access with HTTP 403 during dependency installation, so lockfile generation and local Next.js build could not be completed here.

## Prisma

The schema in `prisma/schema.prisma` includes products, categories, variants, product images, customer profiles, wishlist, cart, COD orders, kids profiles, measurements, Try Outfit model images, Try Outfit preview mappings, blog posts, pages, and newsletter subscribers.

Seed demo data after configuring `DATABASE_URL`:

```bash
npm run seed
```
