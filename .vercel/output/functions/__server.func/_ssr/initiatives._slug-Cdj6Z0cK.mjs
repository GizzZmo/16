import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Container } from "./container-Bvb8fu0C.mjs";
import { l as ArrowLeft, s as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { _ as relatedInitiatives, g as regionById, n as Route, o as Button, v as themeById } from "./router-Cy3-gOdm.mjs";
import { n as InitiativeCard, r as SaveButton, t as Badge } from "./initiative-card-sAEmIPF-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/initiatives._slug-Cdj6Z0cK.js
var import_jsx_runtime = require_jsx_runtime();
function InitiativeDetail() {
	const { initiative } = Route.useLoaderData();
	const theme = themeById(initiative.theme);
	const related = relatedInitiatives(initiative.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[42vh] min-h-64 overflow-hidden sm:h-[52vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: initiative.image,
					alt: initiative.imageAlt,
					className: "size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-scrim/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "absolute inset-x-0 bottom-0 pb-8 pt-16",
					children: [
						theme ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "border-0 bg-primary-fg/12 text-primary-fg",
							children: theme.label
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-3xl text-primary-fg",
							children: initiative.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-primary-fg/80",
							children: ["Founded ", initiative.founded]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						className: "pl-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/initiatives",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), "All initiatives"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, { slug: initiative.slug })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-fg",
								children: initiative.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 space-y-5 text-muted",
								children: initiative.body.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para.slice(0, 24)))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-xl",
										children: "How to engage"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted",
										children: initiative.engage
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "mt-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: initiative.url,
											target: "_blank",
											rel: "noreferrer",
											children: ["Visit official site", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
										})
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
							children: "Facts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-3 divide-y divide-border",
							children: initiative.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-subtle",
									children: fact.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm",
									children: fact.value
								})]
							}, fact.label))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
							children: "Regions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: initiative.regions.map((id) => {
								const region = regionById(id);
								return region ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/atlas",
									search: { region: id },
									className: "inline-flex min-h-11 items-center rounded-full px-3 text-sm shadow-[var(--shadow-border)] hover:bg-surface",
									children: region.label
								}) }, id) : null;
							})
						})] })]
					})]
				}),
				related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Related"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-6 md:grid-cols-3",
						children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitiativeCard, { initiative: item }, item.slug))
					})]
				}) : null
			]
		})]
	});
}
//#endregion
export { InitiativeDetail as component };
