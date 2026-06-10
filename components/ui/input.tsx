import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn("h-11 w-full rounded-full border bg-white/80 px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-thread-gold", className)}
      {...props}
    />
  );
}
