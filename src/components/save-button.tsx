import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSaved } from "@/lib/saved";
import { cn } from "@/lib/utils";

export function SaveButton({ slug, className }: { slug: string; className?: string }) {
  const slugs = useSaved((s) => s.slugs);
  const toggle = useSaved((s) => s.toggle);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const saved = ready && slugs.includes(slug);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn("shrink-0", className)}
      aria-pressed={saved}
      aria-label={saved ? "Remove from saved" : "Save initiative"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
    >
      <Bookmark className={cn("size-4", saved && "fill-primary text-primary")} />
    </Button>
  );
}
