import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bookmark, Menu, X } from "lucide-react";
import { OliveMark } from "@/components/olive-mark";
import { Button } from "@/components/ui/button";
import { useSaved } from "@/lib/saved";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/pact", label: "The Pact" },
  { to: "/atlas", label: "Atlas" },
  { to: "/initiatives", label: "Initiatives" },
  { to: "/timeline", label: "Timeline" },
  { to: "/act", label: "Act" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const savedCount = useSaved((s) => s.slugs.length);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-fg" onClick={() => setOpen(false)}>
          <OliveMark className="size-7" />
          <span className="font-display text-lg tracking-tight">Pax Atlas</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors duration-[var(--motion-quick)] ease-[var(--ease-out)]",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/initiatives"
            search={savedCount > 0 ? { saved: true } : {}}
            className="relative ml-1 flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:text-fg"
            aria-label={`Saved initiatives, ${savedCount}`}
          >
            <Bookmark className={cn("size-4", savedCount > 0 && "fill-primary text-primary")} />
            {savedCount > 0 ? (
              <span className="absolute right-1.5 top-1.5 min-w-4 rounded-full bg-primary px-1 text-center text-[10px] leading-4 text-primary-fg tabular-nums">
                {savedCount}
              </span>
            ) : null}
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <nav
          className="border-t border-border bg-bg px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-md px-3 text-base text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/initiatives"
              search={savedCount > 0 ? { saved: true } : {}}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center gap-2 rounded-md px-3 text-base text-fg"
            >
              <Bookmark className="size-4" />
              Saved{savedCount > 0 ? ` (${savedCount})` : ""}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
