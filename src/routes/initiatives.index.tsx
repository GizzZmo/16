import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Container } from "@/components/container";
import { InitiativeCard } from "@/components/initiative-card";
import { Button } from "@/components/ui/button";
import { INITIATIVES, REGIONS, THEMES, type RegionId, type ThemeId } from "@/data/catalog";
import { useSaved } from "@/lib/saved";
import { cn } from "@/lib/utils";

function isTheme(v: unknown): v is ThemeId {
  return typeof v === "string" && THEMES.some((t) => t.id === v);
}
function isRegion(v: unknown): v is RegionId {
  return typeof v === "string" && REGIONS.some((r) => r.id === v);
}

export type InitiativesSearch = {
  theme?: ThemeId;
  region?: RegionId;
  q?: string;
  saved?: boolean;
};

function parseInitiativesSearch(search: Record<string, unknown>): InitiativesSearch {
  const next: InitiativesSearch = {};
  if (isTheme(search.theme)) next.theme = search.theme;
  if (isRegion(search.region)) next.region = search.region;
  if (typeof search.q === "string" && search.q.length > 0) next.q = search.q;
  if (search.saved === true || search.saved === "true") next.saved = true;
  return next;
}

export const Route = createFileRoute("/initiatives/")({
  validateSearch: parseInitiativesSearch,
  component: InitiativesPage,
  head: () => ({
    meta: [{ title: "Initiatives — Pax Atlas" }],
  }),
});

function InitiativesPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const savedSlugs = useSaved((s) => s.slugs);
  const [draft, setDraft] = useState(search.q ?? "");

  const query = (search.q ?? "").trim().toLowerCase();
  const list = INITIATIVES.filter((item) => {
    if (search.theme && item.theme !== search.theme) return false;
    if (search.region && !item.regions.includes(search.region)) return false;
    if (search.saved && !savedSlugs.includes(item.slug)) return false;
    if (query) {
      const hay = `${item.name} ${item.summary} ${item.shortName}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  function patch(update: InitiativesSearch) {
    void navigate({
      search: (prev) => {
        const next: InitiativesSearch = { ...prev, ...update };
        (Object.keys(next) as (keyof InitiativesSearch)[]).forEach((key) => {
          if (next[key] === undefined || next[key] === false) delete next[key];
        });
        return next;
      },
    });
  }

  return (
    <main id="main" className="pb-20">
      <Container className="py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Initiatives</p>
        <h1 className="mt-2 max-w-2xl text-3xl">Sixteen efforts, one atlas</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Missions, treaties, campaigns, and communities. Filter by practice or region, or save a shortlist.
        </p>

        <form
          className="relative mt-8 max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            patch({ q: draft.trim() || undefined });
          }}
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
          <input
            type="search"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Search by name or idea"
            aria-label="Search initiatives"
            className="h-11 w-full rounded-md bg-surface pl-10 pr-10 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {draft ? (
            <button
              type="button"
              className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm text-muted"
              aria-label="Clear search"
              onClick={() => {
                setDraft("");
                patch({ q: undefined });
              }}
            >
              <X className="size-4" />
            </button>
          ) : null}
        </form>

        <div className="mt-6 flex flex-wrap gap-2">
          <FilterChip active={!search.theme} onClick={() => patch({ theme: undefined })}>
            All practices
          </FilterChip>
          {THEMES.map((theme) => (
            <FilterChip key={theme.id} active={search.theme === theme.id} onClick={() => patch({ theme: theme.id })}>
              {theme.label}
            </FilterChip>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <FilterChip active={!search.region} onClick={() => patch({ region: undefined })}>
            All regions
          </FilterChip>
          {REGIONS.map((region) => (
            <FilterChip
              key={region.id}
              active={search.region === region.id}
              onClick={() => patch({ region: region.id })}
            >
              {region.label}
            </FilterChip>
          ))}
          <FilterChip active={Boolean(search.saved)} onClick={() => patch({ saved: search.saved ? undefined : true })}>
            Saved
          </FilterChip>
        </div>
      </Container>

      <Container>
        <p className="text-sm text-muted">
          {list.length} {list.length === 1 ? "initiative" : "initiatives"}
        </p>
        {list.length === 0 ? (
          <div className="mt-8 rounded-xl bg-surface px-6 py-14 text-center shadow-[var(--shadow-border)]">
            <p className="font-display text-xl">Nothing matches yet</p>
            <p className="mt-2 text-sm text-muted">Clear a filter, or save an initiative from a profile page.</p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/initiatives">Reset filters</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {list.map((item) => (
              <InitiativeCard key={item.slug} initiative={item} />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-11 rounded-full px-3.5 text-sm transition-[background-color,color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
        active ? "bg-primary text-primary-fg" : "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface",
      )}
    >
      {children}
    </button>
  );
}
