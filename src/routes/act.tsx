import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { ACTIONS } from "@/data/catalog";

export const Route = createFileRoute("/act")({
  component: ActPage,
  head: () => ({
    meta: [{ title: "Act — Pax Atlas" }],
  }),
});

function ActPage() {
  return (
    <main id="main" className="pb-20">
      <Container className="py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Act</p>
        <h1 className="mt-2 max-w-2xl text-3xl">Six doors, none of them abstract</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Peace is not a mood. Start by signing the pact. Then fund a mediator, learn a convention, join a treaty campaign, or sit with a map of how violent your country still is.
        </p>
      </Container>

      <Container className="mb-6">
        <Link
          to="/pact"
          hash="sign"
          className="group flex flex-col overflow-hidden rounded-xl bg-primary text-primary-fg shadow-[var(--shadow-border)] md:flex-row"
        >
          <div className="aspect-[16/8] md:aspect-auto md:w-[42%]">
            <img
              src="/images/women.jpg"
              alt=""
              className="size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-primary-fg/70">
              The standing offer
            </p>
            <h2 className="mt-2 font-display text-2xl text-primary-fg">Sign To All Who Share This Earth</h2>
            <p className="mt-3 text-sm text-primary-fg/80">
              Jon Constantine’s open pact of non-aggression, stewardship, and restorative dialogue. Affix your name.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm">
              Open the document
              <ArrowRight className="size-4" />
            </p>
          </div>
        </Link>
      </Container>

      <Container className="grid gap-6 md:grid-cols-2">
        {ACTIONS.map((action) => (
          <Link
            key={action.id}
            to="/initiatives/$slug"
            params={{ slug: action.slug }}
            className="group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]"
          >
            <div className="aspect-[16/8] overflow-hidden">
              <img
                src={action.image}
                alt=""
                className="size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl">{action.title}</h2>
              <p className="mt-3 text-sm text-muted">{action.text}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm">
                {action.cta}
                <ArrowRight className="size-4" />
              </p>
            </div>
          </Link>
        ))}
      </Container>
    </main>
  );
}
