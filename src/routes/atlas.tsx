import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { InitiativeCard } from "@/components/initiative-card";
import { REGIONS, INITIATIVES, initiativesForRegion, type RegionId } from "@/data/catalog";
import { cn } from "@/lib/utils";

const REGION_IMAGE: Record<RegionId, string> = {
  global: "/images/hero.jpg",
  africa: "/images/grassroots.jpg",
  americas: "/images/climate.jpg",
  "asia-pacific": "/images/education.jpg",
  europe: "/images/diplomacy.jpg",
  "middle-east": "/images/peacekeeping.jpg",
};

function isRegion(v: unknown): v is RegionId {
  return typeof v === "string" && REGIONS.some((r) => r.id === v);
}

export const Route = createFileRoute("/atlas")({
  validateSearch: (search: Record<string, unknown>): { region?: RegionId } =>
    isRegion(search.region) ? { region: search.region } : {},
  component: AtlasPage,
  head: () => ({
    meta: [{ title: "Atlas — Pax Atlas" }],
  }),
});

function AtlasPage() {
  const { region } = Route.useSearch();
  const active = region ?? "global";
  const current = REGIONS.find((r) => r.id === active) ?? REGIONS[0];
  const list = active === "global" ? INITIATIVES : initiativesForRegion(active);

  return (
    <main id="main" className="pb-20">
      <Container className="py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Atlas</p>
        <h1 className="mt-2 max-w-2xl text-3xl">A map of where peace is practiced</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Choose a region. Global entries appear everywhere they work; local architectures stay close to home.
        </p>
      </Container>

      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((item) => {
            const count = item.id === "global" ? INITIATIVES.length : initiativesForRegion(item.id).length;
            const selected = item.id === active;
            return (
              <Link
                key={item.id}
                to="/atlas"
                search={{ region: item.id }}
                className={cn(
                  "group relative aspect-[16/10] overflow-hidden rounded-xl transition-[box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
                  selected ? "shadow-[var(--shadow-border-hover)] ring-2 ring-ring ring-offset-2 ring-offset-bg" : "shadow-[var(--shadow-border)]",
                )}
              >
                <img
                  src={REGION_IMAGE[item.id]}
                  alt=""
                  className="size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-hero-scrim/75" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h2 className="font-display text-xl text-primary-fg">{item.label}</h2>
                  <p className="text-sm text-primary-fg/80">
                    {count} {count === 1 ? "initiative" : "initiatives"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>

      <Container className="mt-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl">{current.label}</h2>
          <p className="mt-3 text-muted">{current.summary}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {list.map((item) => (
            <InitiativeCard key={item.slug} initiative={item} />
          ))}
        </div>
      </Container>
    </main>
  );
}
