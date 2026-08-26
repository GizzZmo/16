import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Container } from "./container-Bvb8fu0C.mjs";
import { m as TIMELINE, o as Button } from "./router-Cy3-gOdm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline-DBzFeqYW.js
var import_jsx_runtime = require_jsx_runtime();
function TimelinePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
					children: "Timeline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-2xl text-3xl",
					children: "Accords that changed the room"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "A short history of the documents, missions, and resolutions that still structure how the world tries not to fight. Incomplete by design — a spine, not an encyclopedia."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative border-l border-border pl-6 sm:pl-10",
			children: TIMELINE.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative pb-12 last:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[1.6875rem] top-1.5 size-2.5 rounded-full bg-primary sm:-left-[2.6875rem]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl tabular-nums",
						children: event.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl",
						children: event.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-subtle",
						children: event.place
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: event.text
					}),
					index === TIMELINE.length - 1 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Then"
					})
				]
			}, event.year))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 rounded-xl bg-surface px-6 py-10 shadow-[var(--shadow-border)] sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "The present is not a coda"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "Treaties do not keep themselves. The atlas is the living half of this timeline — missions, campaigns, and communities still at work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/initiatives",
						children: "Browse initiatives"
					})
				})
			]
		})] })]
	});
}
//#endregion
export { TimelinePage as component };
