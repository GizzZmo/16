import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { format } from "date-fns";
import { Printer } from "lucide-react";
import { Container } from "@/components/container";
import { OliveMark } from "@/components/olive-mark";
import { Button } from "@/components/ui/button";
import { PACT } from "@/data/pact";
import { usePact } from "@/lib/pact";

export const Route = createFileRoute("/pact")({
  component: PactPage,
  head: () => ({
    meta: [
      { title: "The Pact — Pax Atlas" },
      {
        name: "description",
        content:
          "To All Who Share This Earth — a standing peace agreement initiated by Jon Constantine, open for any person to sign.",
      },
    ],
  }),
});

function PactPage() {
  const signatures = usePact((s) => s.signatures);
  const sign = usePact((s) => s.sign);
  const withdraw = usePact((s) => s.withdraw);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [justSigned, setJustSigned] = useState<string | null>(null);

  useEffect(() => setReady(true), []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = sign(name);
    if (!result.ok) {
      setError(result.error);
      setJustSigned(null);
      return;
    }
    setError(null);
    setJustSigned(name.trim());
    setName("");
  }

  return (
    <main id="main" className="pb-20">
      <Container className="py-12 sm:py-16 print:hidden">
        <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">The Pact</p>
        <h1 className="mt-2 max-w-2xl text-3xl">A standing offer of peace</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Initiated by Jon Constantine. Not a treaty of states — a personal declaration you may affix your name to, on this device.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => window.print()}
        >
          <Printer />
          Print the document
        </Button>
      </Container>

      <Container>
        <article className="pact-sheet mx-auto max-w-3xl rounded-2xl bg-bg px-6 py-10 shadow-[var(--shadow-border)] sm:px-12 sm:py-14">
          <header className="flex flex-col items-center text-center">
            <OliveMark className="size-10" />
            <p className="mt-4 text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">
              Universal declaration of intent
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl">{PACT.title}</h2>
          </header>

          <p className="mt-10 text-lg text-fg">{PACT.preamble}</p>

          {PACT.articles.map((article) => (
            <section key={article.number} className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">
                Article {article.number}
              </p>
              <h3 className="mt-1 font-display text-xl">{article.title}</h3>
              {article.kind === "prose" ? <p className="mt-4 text-muted">{article.body}</p> : null}
              {article.kind === "clauses" ? (
                <>
                  <p className="mt-4 text-muted">{article.intro}</p>
                  <ul className="mt-5 space-y-4">
                    {article.clauses.map((clause) => (
                      <li key={clause.title}>
                        <p className="font-medium">{clause.title}</p>
                        <p className="mt-1 text-muted">{clause.text}</p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </section>
          ))}

          <blockquote className="mt-12 border-l-2 border-primary pl-5">
            <p className="font-display text-xl italic text-fg">{PACT.epigraph}</p>
          </blockquote>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">
                Represented and initiated by
              </p>
              <p className="mt-3 font-display text-2xl">{PACT.initiator}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">
                Accepted and signed by
              </p>
              {ready && signatures.length > 0 ? (
                <ul className="mt-4 space-y-4">
                  {signatures.map((entry) => (
                    <li key={entry.signedAt} className="border-b border-border pb-3">
                      <p className="font-display text-xl italic">{entry.name}</p>
                      <p className="mt-1 text-sm text-subtle">
                        {format(new Date(entry.signedAt), "d MMMM yyyy")}
                      </p>
                      <button
                        type="button"
                        className="mt-2 text-sm text-muted underline-offset-4 hover:underline print:hidden"
                        onClick={() => withdraw(entry.signedAt)}
                      >
                        Withdraw this name
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted">No names on this device yet.</p>
              )}
            </div>
          </div>
        </article>

        <section className="mx-auto mt-10 max-w-3xl scroll-mt-24 print:hidden" id="sign">
          <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
            <h2 className="font-display text-xl">Affix your name</h2>
            <p className="mt-2 text-sm text-muted">
              Your name stays on this device. It is a personal pledge, not a government filing, and not a public ledger.
            </p>
            {justSigned ? (
              <p className="mt-4 text-sm text-fg" role="status">
                {justSigned} is on the pact.
              </p>
            ) : null}
            <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end" onSubmit={onSubmit}>
              <label className="flex-1">
                <span className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">
                  Name (print)
                </span>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError(null);
                  }}
                  autoComplete="name"
                  maxLength={80}
                  required
                  className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </label>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Sign the pact
              </Button>
            </form>
            {error ? (
              <p className="mt-3 text-sm text-muted" role="alert">
                {error}
              </p>
            ) : (
              <p className="mt-3 text-xs text-subtle">Date is recorded at the moment you sign.</p>
            )}
          </div>
        </section>
      </Container>
    </main>
  );
}
