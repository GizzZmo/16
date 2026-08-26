import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Container } from "./container-Bvb8fu0C.mjs";
import { c as ArrowRight } from "../_libs/lucide-react.mjs";
import { l as ACTIONS } from "./router-Cy3-gOdm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/act-B4Ioi5nP.js
var import_jsx_runtime = require_jsx_runtime();
function ActPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "py-12 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
						children: "Act"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 max-w-2xl text-3xl",
						children: "Six doors, none of them abstract"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Peace is not a mood. Start by signing the pact. Then fund a mediator, learn a convention, join a treaty campaign, or sit with a map of how violent your country still is."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pact",
					hash: "sign",
					className: "group flex flex-col overflow-hidden rounded-xl bg-primary text-primary-fg shadow-[var(--shadow-border)] md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/8] md:aspect-auto md:w-[42%]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/women.jpg",
							alt: "",
							className: "size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col justify-center p-6 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-primary-fg/70",
								children: "The standing offer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl text-primary-fg",
								children: "Sign To All Who Share This Earth"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-primary-fg/80",
								children: "Jon Constantine’s open pact of non-aggression, stewardship, and restorative dialogue. Affix your name."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 inline-flex items-center gap-2 text-sm",
								children: ["Open the document", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "grid gap-6 md:grid-cols-2",
				children: ACTIONS.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/initiatives/$slug",
					params: { slug: action.slug },
					className: "group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/8] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: action.image,
							alt: "",
							className: "size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: action.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: action.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 inline-flex items-center gap-2 text-sm",
								children: [action.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				}, action.id))
			})
		]
	});
}
//#endregion
export { ActPage as component };
