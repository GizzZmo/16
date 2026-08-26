import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { InitiativeCard } from "@/components/initiative-card";
import { Button } from "@/components/ui/button";
import { INITIATIVES, REGIONS, STATS, THEMES, TIMELINE, initiativesForRegion } from "@/data/catalog";

export const Route = createFileRoute("/")({ component: Home });

const REGION_IMAGE: Record<string, string> = {
  global: "/images/hero.jpg",
  africa: "/images/grassroots.jpg",
  americas: "/images/climate.jpg",
  "asia-pacific": "/images/education.jpg",
  europe: "/images/diplomacy.jpg",
  "middle-east": "/images/peacekeeping.jpg",
};

function Home() {
  const featured = INITIATIVES.filter((i) => i.featured);
  const rest = INITIATIVES.filter((i) => !i.featured).slice(0, 4);
  const timelinePreview = TIMELINE.slice(0, 4);

  return (
    <main id="main">
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="An ancient olive grove at first light, mist between the trunks."
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-scrim" />
        <Container className="relative flex min-h-[78vh] flex-col justify-end pb-12 pt-28 sm:pb-16">
          <p className="rise-in text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-primary-fg/80">
            An independent guide
          </p>
          <h1 className="rise-in rise-in-1 mt-4 max-w-3xl font-display text-3xl text-primary-fg">
            The work that holds the world together
          </h1>
          <p className="rise-in rise-in-2 mt-5 max-w-xl text-base text-primary-fg/85 sm:text-lg">
            From UN missions and nuclear treaties to unarmed civilian protection and village mediation — a living atlas of peace.
          </p>
          <div className="rise-in rise-in-3 mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/pact">
                Read the pact
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-0 bg-primary-fg/10 text-primary-fg shadow-none hover:bg-primary-fg/15">
              <Link to="/atlas">Explore the atlas</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-surface">
        <Container className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl tabular-nums tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">The Pact</p>
            <h2 className="mt-2 text-2xl">To All Who Share This Earth</h2>
            <p className="mt-4 text-muted">
              A standing offer initiated by Jon Constantine: a personal pledge of non-aggression, shared stewardship, and restorative dialogue. It carries equal weight whether signed by one person or one billion.
            </p>
            <blockquote className="mt-6 border-l-2 border-primary pl-4 font-display text-xl italic">
              Peace is not the absence of conflict, but the deliberate decision to meet it without destruction.
            </blockquote>
            <Button asChild className="mt-6">
              <Link to="/pact" hash="sign">
                Affix your name
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <Link to="/pact" className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src="/images/women.jpg"
              alt="An empty hall in morning light, an olive sprig in a glass of water."
              className="size-full object-cover"
            />
          </Link>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Featured</p>
              <h2 className="mt-2 text-2xl">Where the work is happening</h2>
            </div>
            <Button asChild variant="link">
              <Link to="/initiatives">
                All initiatives
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6">
            {featured[0] ? <InitiativeCard initiative={featured[0]} featured /> : null}
            <div className="grid gap-6 md:grid-cols-2">
              {featured.slice(1).map((item) => (
                <InitiativeCard key={item.slug} initiative={item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">By practice</p>
          <h2 className="mt-2 max-w-xl text-2xl">Seven ways peace is actually made</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {THEMES.map((theme) => (
              <Link
                key={theme.id}
                to="/initiatives"
                search={{ theme: theme.id }}
                className="rounded-xl bg-bg p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]"
              >
                <h3 className="font-display text-xl">{theme.label}</h3>
                <p className="mt-2 text-sm text-muted">{theme.blurb}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Atlas</p>
              <h2 className="mt-2 text-2xl">Six regions, one map</h2>
            </div>
            <Button asChild variant="link">
              <Link to="/atlas">
                Open the atlas
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {REGIONS.map((region) => {
              const count = initiativesForRegion(region.id).length;
              return (
                <Link
                  key={region.id}
                  to="/atlas"
                  search={{ region: region.id }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <img
                    src={REGION_IMAGE[region.id]}
                    alt=""
                    className="size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-hero-scrim/80" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="font-display text-xl text-primary-fg">{region.label}</h3>
                    <p className="text-sm text-primary-fg/80">{count} initiatives</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Also in the atlas</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {rest.map((item) => (
              <InitiativeCard key={item.slug} initiative={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">History</p>
            <h2 className="mt-2 text-2xl">Accords that changed the room</h2>
            <p className="mt-4 text-muted">
              Peace has a memory. Treaties, missions, and resolutions that still structure how the world tries not to fight.
            </p>
            <Button asChild className="mt-6">
              <Link to="/timeline">
                Full timeline
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <ol className="divide-y divide-border">
            {timelinePreview.map((event) => (
              <li key={event.year} className="grid grid-cols-[4.5rem_1fr] gap-4 py-4 first:pt-0 last:pb-0">
                <p className="font-display text-lg tabular-nums">{event.year}</p>
                <div>
                  <h3 className="font-sans text-base font-medium">{event.title}</h3>
                  <p className="mt-1 text-sm text-muted">{event.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border bg-primary px-4 py-16 text-primary-fg sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl text-primary-fg">Peace is a practice. Start with your name.</h2>
          <p className="mt-4 text-primary-fg/80">
            Sign the pact, then pick a door: fund a local mediator, learn the laws of war, or sit with the Global Peace Index.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary-fg text-primary hover:opacity-90">
              <Link to="/pact" hash="sign">
                Sign the pact
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-0 bg-primary-fg/10 text-primary-fg shadow-none hover:bg-primary-fg/15">
              <Link to="/act">Ways to act</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
