import { i as __toESM } from "../_runtime.mjs";
import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Container } from "./container-Bvb8fu0C.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as Search, t as X } from "../_libs/lucide-react.mjs";
import { a as useSaved, c as cn, d as REGIONS, o as Button, p as THEMES, r as Route$1, u as INITIATIVES } from "./router-Cy3-gOdm.mjs";
import { n as InitiativeCard } from "./initiative-card-sAEmIPF-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/initiatives.index-DTFRzDbI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InitiativesPage() {
	const search = Route$1.useSearch();
	const navigate = Route$1.useNavigate();
	const savedSlugs = useSaved((s) => s.slugs);
	const [draft, setDraft] = (0, import_react.useState)(search.q ?? "");
	const query = (search.q ?? "").trim().toLowerCase();
	const list = INITIATIVES.filter((item) => {
		if (search.theme && item.theme !== search.theme) return false;
		if (search.region && !item.regions.includes(search.region)) return false;
		if (search.saved && !savedSlugs.includes(item.slug)) return false;
		if (query) {
			if (!`${item.name} ${item.summary} ${item.shortName}`.toLowerCase().includes(query)) return false;
		}
		return true;
	});
	function patch(update) {
		navigate({ search: (prev) => {
			const next = {
				...prev,
				...update
			};
			Object.keys(next).forEach((key) => {
				if (next[key] === void 0 || next[key] === false) delete next[key];
			});
			return next;
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
					children: "Initiatives"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-2xl text-3xl",
					children: "Sixteen efforts, one atlas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Missions, treaties, campaigns, and communities. Filter by practice or region, or save a shortlist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "relative mt-8 max-w-md",
					onSubmit: (e) => {
						e.preventDefault();
						patch({ q: draft.trim() || void 0 });
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "search",
							value: draft,
							onChange: (e) => setDraft(e.target.value),
							placeholder: "Search by name or idea",
							"aria-label": "Search initiatives",
							className: "h-11 w-full rounded-md bg-surface pl-10 pr-10 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ring"
						}),
						draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm text-muted",
							"aria-label": "Clear search",
							onClick: () => {
								setDraft("");
								patch({ q: void 0 });
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: !search.theme,
						onClick: () => patch({ theme: void 0 }),
						children: "All practices"
					}), THEMES.map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: search.theme === theme.id,
						onClick: () => patch({ theme: theme.id }),
						children: theme.label
					}, theme.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: !search.region,
							onClick: () => patch({ region: void 0 }),
							children: "All regions"
						}),
						REGIONS.map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: search.region === region.id,
							onClick: () => patch({ region: region.id }),
							children: region.label
						}, region.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: Boolean(search.saved),
							onClick: () => patch({ saved: search.saved ? void 0 : true }),
							children: "Saved"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: [
				list.length,
				" ",
				list.length === 1 ? "initiative" : "initiatives"
			]
		}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-xl bg-surface px-6 py-14 text-center shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl",
					children: "Nothing matches yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Clear a filter, or save an initiative from a profile page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/initiatives",
						children: "Reset filters"
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-6 md:grid-cols-2",
			children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitiativeCard, { initiative: item }, item.slug))
		})] })]
	});
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: cn("min-h-11 rounded-full px-3.5 text-sm transition-[background-color,color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]", active ? "bg-primary text-primary-fg" : "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface"),
		children
	});
}
//#endregion
export { InitiativesPage as component };
