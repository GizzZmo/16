import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { o as Bookmark } from "../_libs/lucide-react.mjs";
import { a as useSaved, c as cn, o as Button, v as themeById } from "./router-Cy3-gOdm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/initiative-card-sAEmIPF-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide uppercase", {
	variants: { variant: {
		default: "bg-primary text-primary-fg",
		outline: "bg-transparent text-muted shadow-[var(--shadow-border)]",
		surface: "bg-surface text-fg"
	} },
	defaultVariants: { variant: "outline" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function SaveButton({ slug, className }) {
	const slugs = useSaved((s) => s.slugs);
	const toggle = useSaved((s) => s.toggle);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	const saved = ready && slugs.includes(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "outline",
		size: "icon",
		className: cn("shrink-0", className),
		"aria-pressed": saved,
		"aria-label": saved ? "Remove from saved" : "Save initiative",
		onClick: (e) => {
			e.preventDefault();
			e.stopPropagation();
			toggle(slug);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", saved && "fill-primary text-primary") })
	});
}
function InitiativeCard({ initiative, featured = false }) {
	const theme = themeById(initiative.theme);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]", featured && "md:flex-row"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/initiatives/$slug",
			params: { slug: initiative.slug },
			className: cn("block overflow-hidden", featured ? "md:w-[46%] md:min-h-[280px]" : "aspect-[3/2]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: initiative.image,
				alt: initiative.imageAlt,
				className: "size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.03]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-1 flex-col p-5", featured && "md:p-8"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: theme?.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, { slug: initiative.slug })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: cn("mt-3 font-display tracking-tight", featured ? "text-2xl" : "text-xl"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/initiatives/$slug",
						params: { slug: initiative.slug },
						className: "hover:underline",
						children: initiative.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: initiative.founded
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-3 text-muted", featured ? "text-base" : "text-sm"),
					children: initiative.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-auto pt-4 text-sm text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/initiatives/$slug",
						params: { slug: initiative.slug },
						className: "underline-offset-4 hover:underline",
						children: "Read the profile"
					})
				})
			]
		})]
	});
}
//#endregion
export { InitiativeCard as n, SaveButton as r, Badge as t };
