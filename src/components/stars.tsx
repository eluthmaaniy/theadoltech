import { cn } from "@/lib/utils";

export function Stars({ count, className }: { count: number; className?: string }) {
  return (
    <div className={cn("inline-flex items-center", className)} aria-label={`${count} of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={cn(
            "text-sm",
            i < count ? "ri-star-fill text-gold" : "ri-star-line text-muted-foreground",
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}
