import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Button, u as INITIATIVES } from "./router-Cy3-gOdm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/initiatives._slug-BPvSHsgh.js
var import_jsx_runtime = require_jsx_runtime();
function NotFoundInitiative() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "flex flex-1 flex-col items-center justify-center px-6 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl",
				children: "This profile is not in the atlas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-md text-muted",
				children: [
					"The link may be old. There are ",
					INITIATIVES.length,
					" initiatives on the main list."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/initiatives",
					children: "Browse initiatives"
				})
			})
		]
	});
}
//#endregion
export { NotFoundInitiative as notFoundComponent };
