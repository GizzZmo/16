import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { TIMELINE } from "@/data/catalog";

export const Route = createFileRoute("/timeline")({
  component: TimelinePage,
  head: () => ({
    meta: [{ title: "Timeline — Pax Atlas" }],
  }),
});

function TimelinePage() {
  return (
    <main id="main" className="pb-20">
      <Container className="py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Timeline</p>
        <h1 className="mt-2 max-w-2xl text-3xl">Accords that changed the room</h1>
        <p className="mt-4 max-w-2xl text-muted">
          A short history of the documents, missions, and resolutions that still structure how the world tries not to fight. Incomplete by design — a spine, not an encyclopedia.
        </p>
      </Container>

      <Container>
        <ol className="relative border-l border-border pl-6 sm:pl-10">
          {TIMELINE.map((event, index) => (
            <li key={event.year} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[1.6875rem] top-1.5 size-2.5 rounded-full bg-primary sm:-left-[2.6875rem]" />
              <p className="font-display text-xl tabular-nums">{event.year}</p>
              <h2 className="mt-1 font-display text-2xl">{event.title}</h2>
              <p className="mt-1 text-sm text-subtle">{event.place}</p>
              <p className="mt-3 max-w-2xl text-muted">{event.text}</p>
              {index === TIMELINE.length - 1 ? null : (
                <span className="sr-only">Then</span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-16 rounded-xl bg-surface px-6 py-10 shadow-[var(--shadow-border)] sm:px-10">
          <h2 className="font-display text-2xl">The present is not a coda</h2>
          <p className="mt-3 max-w-xl text-muted">
            Treaties do not keep themselves. The atlas is the living half of this timeline — missions, campaigns, and communities still at work.
          </p>
          <Button asChild className="mt-6">
            <Link to="/initiatives">Browse initiatives</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
