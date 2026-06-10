import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return <span className={cn("inline-flex rounded-full bg-soft-mint px-3 py-1 text-xs font-bold uppercase tracking-wide text-darzi-green", className)}>{children}</span>;
}
