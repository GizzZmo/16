import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { InitiativeCard } from "@/components/initiative-card";
import { SaveButton } from "@/components/save-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  INITIATIVES,
  initiativeBySlug,
  relatedInitiatives,
  themeById,
  regionById,
} from "@/data/catalog";

export const Route = createFileRoute("/initiatives/$slug")({
  loader: ({ params }) => {
    const initiative = initiativeBySlug(params.slug);
    if (!initiative) throw notFound();
    return { initiative };
  },
  component: InitiativeDetail,
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.initiative.name} — Pax Atlas` : "Pax Atlas" },
      {
        name: "description",
        content: loaderData?.initiative.summary ?? "",
      },
    ],
  }),
  notFoundComponent: NotFoundInitiative,
});

function InitiativeDetail() {
  const { initiative } = Route.useLoaderData();
  const theme = themeById(initiative.theme);
  const related = relatedInitiatives(initiative.slug);

  return (
    <main id="main" className="pb-20">
      <div className="relative h-[42vh] min-h-64 overflow-hidden sm:h-[52vh]">
        <img src={initiative.image} alt={initiative.imageAlt} className="size-full object-cover" />
        <div className="absolute inset-0 bg-hero-scrim/70" />
        <Container className="absolute inset-x-0 bottom-0 pb-8 pt-16">
          {theme ? <Badge className="border-0 bg-primary-fg/12 text-primary-fg">{theme.label}</Badge> : null}
          <h1 className="mt-3 max-w-3xl text-3xl text-primary-fg">{initiative.name}</h1>
          <p className="mt-2 text-sm text-primary-fg/80">Founded {initiative.founded}</p>
        </Container>
      </div>

      <Container className="py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="ghost" className="pl-2">
            <Link to="/initiatives">
              <ArrowLeft />
              All initiatives
            </Link>
          </Button>
          <SaveButton slug={initiative.slug} />
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <article className="max-w-2xl">
            <p className="text-lg text-fg">{initiative.summary}</p>
            <div className="mt-8 space-y-5 text-muted">
              {initiative.body.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <div className="mt-10 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <h2 className="font-display text-xl">How to engage</h2>
              <p className="mt-3 text-sm text-muted">{initiative.engage}</p>
              <Button asChild className="mt-5">
                <a href={initiative.url} target="_blank" rel="noreferrer">
                  Visit official site
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          </article>

          <aside className="space-y-8">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Facts</h2>
              <dl className="mt-3 divide-y divide-border">
                {initiative.facts.map((fact) => (
                  <div key={fact.label} className="py-3">
                    <dt className="text-xs text-subtle">{fact.label}</dt>
                    <dd className="mt-1 text-sm">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Regions</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {initiative.regions.map((id) => {
                  const region = regionById(id);
                  return region ? (
                    <li key={id}>
                      <Link
                        to="/atlas"
                        search={{ region: id }}
                        className="inline-flex min-h-11 items-center rounded-full px-3 text-sm shadow-[var(--shadow-border)] hover:bg-surface"
                      >
                        {region.label}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-2xl">Related</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <InitiativeCard key={item.slug} initiative={item} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </main>
  );
}

function NotFoundInitiative() {
  return (
    <main id="main" className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-2xl">This profile is not in the atlas</h1>
      <p className="mt-3 max-w-md text-muted">
        The link may be old. There are {INITIATIVES.length} initiatives on the main list.
      </p>
      <Button asChild className="mt-8">
        <Link to="/initiatives">Browse initiatives</Link>
      </Button>
    </main>
  );
}
