import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { SaveButton } from "@/components/save-button";
import { themeById, type Initiative } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function InitiativeCard({
  initiative,
  featured = false,
}: {
  initiative: Initiative;
  featured?: boolean;
}) {
  const theme = themeById(initiative.theme);

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]",
        featured && "md:flex-row",
      )}
    >
      <Link
        to="/initiatives/$slug"
        params={{ slug: initiative.slug }}
        className={cn("block overflow-hidden", featured ? "md:w-[46%] md:min-h-[280px]" : "aspect-[3/2]")}
      >
        <img
          src={initiative.image}
          alt={initiative.imageAlt}
          className="size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />
      </Link>
      <div className={cn("flex flex-1 flex-col p-5", featured && "md:p-8")}>
        <div className="flex items-start justify-between gap-3">
          <Badge>{theme?.label}</Badge>
          <SaveButton slug={initiative.slug} />
        </div>
        <h3 className={cn("mt-3 font-display tracking-tight", featured ? "text-2xl" : "text-xl")}>
          <Link to="/initiatives/$slug" params={{ slug: initiative.slug }} className="hover:underline">
            {initiative.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted">{initiative.founded}</p>
        <p className={cn("mt-3 text-muted", featured ? "text-base" : "text-sm")}>{initiative.summary}</p>
        <p className="mt-auto pt-4 text-sm text-fg">
          <Link to="/initiatives/$slug" params={{ slug: initiative.slug }} className="underline-offset-4 hover:underline">
            Read the profile
          </Link>
        </p>
      </div>
    </article>
  );
}
