import { Link } from "@tanstack/react-router";
import { OliveMark } from "@/components/olive-mark";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface print:hidden">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <OliveMark className="size-6" />
            <span className="font-display text-lg">Pax Atlas</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted">
            An independent editorial guide to the missions, treaties, and people building peace. Not affiliated with the United Nations or the organizations profiled.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/pact" className="text-fg hover:underline">
                The Pact
              </Link>
            </li>
            <li>
              <Link to="/atlas" className="text-fg hover:underline">
                Atlas
              </Link>
            </li>
            <li>
              <Link to="/initiatives" className="text-fg hover:underline">
                Initiatives
              </Link>
            </li>
            <li>
              <Link to="/timeline" className="text-fg hover:underline">
                Timeline
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle">Participate</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/pact" hash="sign" className="text-fg hover:underline">
                Sign the pact
              </Link>
            </li>
            <li>
              <Link to="/act" className="text-fg hover:underline">
                Ways to act
              </Link>
            </li>
            <li>
              <Link to="/initiatives" search={{ saved: true }} className="text-fg hover:underline">
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-subtle sm:px-6">
          Facts current as of 2026. External links leave Pax Atlas.
        </p>
      </div>
    </footer>
  );
}
