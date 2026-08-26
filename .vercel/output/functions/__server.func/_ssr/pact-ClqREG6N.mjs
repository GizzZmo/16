import { i as __toESM } from "../_runtime.mjs";
import { z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Container } from "./container-Bvb8fu0C.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as Printer } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { o as Button, s as OliveMark } from "./router-Cy3-gOdm.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pact-ClqREG6N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PACT = {
	title: "To All Who Share This Earth",
	preamble: "This document serves as a universal declaration of intent, goodwill, and enduring quiet: a respective peace agreement established on behalf of Jon Constantine, offered to every individual across all nations, borders, and territories who chooses to set their name alongside it.",
	articles: [
		{
			number: "I",
			title: "The Scope of Jurisdiction",
			kind: "prose",
			body: "This agreement acknowledges no boundaries, political demarcations, or sovereign limits. It applies strictly to the global territorial jurisdiction—the shared atmosphere, land, and water of our collective home. In signing, an individual aligns their personal jurisdiction with the universal right to exist free from violence, coercion, and state-sanctioned hostility."
		},
		{
			number: "II",
			title: "The Pact of Individual Sovereignty",
			kind: "clauses",
			intro: "Peace does not begin in war rooms or assemblies; it manifests in the daily decisions of the individual.",
			clauses: [
				{
					title: "Mutual Non-Aggression",
					text: "Every signatory pledges to forgo violence, physical intimidation, and systematic harm against any fellow person, recognizing that human dignity transcends geopolitical rivalries."
				},
				{
					title: "Shared Stewardship",
					text: "Signatories commit to protecting the common resources of the planet, ensuring that land, air, and water remain preserved for successive generations rather than weaponized or degraded."
				},
				{
					title: "Restorative Dialogue",
					text: "In moments of friction, signatories agree to seek resolution through mediation, direct conversation, and mutual understanding rather than escalation."
				}
			]
		},
		{
			number: "III",
			title: "The Standing Offer",
			kind: "prose",
			body: "This text is not a top-down mandate; it is an open-ended invitation. It carries equal weight whether signed by one person or one billion. By affixing your name, you declare your personal sovereignty to be an instrument of peace, aligning your actions with the protection of life across the entire globe."
		}
	],
	epigraph: "Peace is not the absence of conflict, but the deliberate decision to meet it without destruction.",
	initiator: "Jon Constantine"
};
function cleanName(raw) {
	return raw.replace(/\s+/g, " ").trim();
}
function isValidName(name) {
	if (name.length < 2 || name.length > 80) return false;
	if (/https?:\/\//i.test(name) || /[<>]/.test(name)) return false;
	return true;
}
var usePact = create()(persist((set, get) => ({
	signatures: [],
	sign: (raw) => {
		const name = cleanName(raw);
		if (!isValidName(name)) return {
			ok: false,
			error: "Enter a name between 2 and 80 characters."
		};
		const existing = get().signatures;
		if (existing.some((s) => s.name.toLowerCase() === name.toLowerCase())) return {
			ok: false,
			error: "That name is already on this device."
		};
		if (existing.length >= 12) return {
			ok: false,
			error: "This device has reached its local signature list."
		};
		set({ signatures: [...existing, {
			name,
			signedAt: (/* @__PURE__ */ new Date()).toISOString()
		}] });
		return { ok: true };
	},
	withdraw: (signedAt) => set((state) => ({ signatures: state.signatures.filter((s) => s.signedAt !== signedAt) }))
}), { name: "pax-atlas-pact" }));
function PactPage() {
	const signatures = usePact((s) => s.signatures);
	const sign = usePact((s) => s.sign);
	const withdraw = usePact((s) => s.withdraw);
	const [name, setName] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [justSigned, setJustSigned] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => setReady(true), []);
	function onSubmit(e) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-12 sm:py-16 print:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
					children: "The Pact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-2xl text-3xl",
					children: "A standing offer of peace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Initiated by Jon Constantine. Not a treaty of states — a personal declaration you may affix your name to, on this device."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					className: "mt-6",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "Print the document"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "pact-sheet mx-auto max-w-3xl rounded-2xl bg-bg px-6 py-10 shadow-[var(--shadow-border)] sm:px-12 sm:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OliveMark, { className: "size-10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
							children: "Universal declaration of intent"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl sm:text-3xl",
							children: PACT.title
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-lg text-fg",
					children: PACT.preamble
				}),
				PACT.articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
							children: ["Article ", article.number]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl",
							children: article.title
						}),
						article.kind === "prose" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: article.body
						}) : null,
						article.kind === "clauses" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: article.intro
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-4",
							children: article.clauses.map((clause) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: clause.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted",
								children: clause.text
							})] }, clause.title))
						})] }) : null
					]
				}, article.number)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-12 border-l-2 border-primary pl-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl italic text-fg",
						children: PACT.epigraph
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-10 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
						children: "Represented and initiated by"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl",
						children: PACT.initiator
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
						children: "Accepted and signed by"
					}), ready && signatures.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: signatures.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-border pb-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl italic",
									children: entry.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-subtle",
									children: format(new Date(entry.signedAt), "d MMMM yyyy")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "mt-2 text-sm text-muted underline-offset-4 hover:underline print:hidden",
									onClick: () => withdraw(entry.signedAt),
									children: "Withdraw this name"
								})
							]
						}, entry.signedAt))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "No names on this device yet."
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto mt-10 max-w-3xl scroll-mt-24 print:hidden",
			id: "sign",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Affix your name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Your name stays on this device. It is a personal pledge, not a government filing, and not a public ledger."
					}),
					justSigned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-fg",
						role: "status",
						children: [justSigned, " is on the pact."]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 flex flex-col gap-4 sm:flex-row sm:items-end",
						onSubmit,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
								children: "Name (print)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => {
									setName(e.target.value);
									setError(null);
								},
								autoComplete: "name",
								maxLength: 80,
								required: true,
								className: "mt-2 h-11 w-full rounded-md bg-bg px-3 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ring",
								placeholder: "Your name"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full sm:w-auto",
							children: "Sign the pact"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						role: "alert",
						children: error
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-subtle",
						children: "Date is recorded at the moment you sign."
					})
				]
			})
		})] })]
	});
}
//#endregion
export { PactPage as component };
