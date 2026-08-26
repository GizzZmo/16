import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Container } from "./container-Bvb8fu0C.mjs";
import { c as cn, d as REGIONS, h as initiativesForRegion, i as Route$5, u as INITIATIVES } from "./router-Cy3-gOdm.mjs";
import { n as InitiativeCard } from "./initiative-card-sAEmIPF-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atlas-0aIh9S86.js
var import_jsx_runtime = require_jsx_runtime();
var REGION_IMAGE = {
	global: "/images/hero.jpg",
	africa: "/images/grassroots.jpg",
	americas: "/images/climate.jpg",
	"asia-pacific": "/images/education.jpg",
	europe: "/images/diplomacy.jpg",
	"middle-east": "/images/peacekeeping.jpg"
};
function AtlasPage() {
	const { region } = Route$5.useSearch();
	const active = region ?? "global";
	const current = REGIONS.find((r) => r.id === active) ?? REGIONS[0];
	const list = active === "global" ? INITIATIVES : initiativesForRegion(active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "py-12 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
						children: "Atlas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 max-w-2xl text-3xl",
						children: "A map of where peace is practiced"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Choose a region. Global entries appear everywhere they work; local architectures stay close to home."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: REGIONS.map((item) => {
					const count = item.id === "global" ? INITIATIVES.length : initiativesForRegion(item.id).length;
					const selected = item.id === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/atlas",
						search: { region: item.id },
						className: cn("group relative aspect-[16/10] overflow-hidden rounded-xl transition-[box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)]", selected ? "shadow-[var(--shadow-border-hover)] ring-2 ring-ring ring-offset-2 ring-offset-bg" : "shadow-[var(--shadow-border)]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: REGION_IMAGE[item.id],
								alt: "",
								className: "size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-scrim/75" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col justify-end p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl text-primary-fg",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-primary-fg/80",
									children: [
										count,
										" ",
										count === 1 ? "initiative" : "initiatives"
									]
								})]
							})
						]
					}, item.id);
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: current.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: current.summary
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2",
					children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitiativeCard, { initiative: item }, item.slug))
				})]
			})
		]
	});
}
//#endregion
export { AtlasPage as component };
