import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Container } from "./container-Bvb8fu0C.mjs";
import { c as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as REGIONS, f as STATS, h as initiativesForRegion, m as TIMELINE, o as Button, p as THEMES, u as INITIATIVES } from "./router-Cy3-gOdm.mjs";
import { n as InitiativeCard } from "./initiative-card-sAEmIPF-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ibLpH-ji.js
var import_jsx_runtime = require_jsx_runtime();
var REGION_IMAGE = {
	global: "/images/hero.jpg",
	africa: "/images/grassroots.jpg",
	americas: "/images/climate.jpg",
	"asia-pacific": "/images/education.jpg",
	europe: "/images/diplomacy.jpg",
	"middle-east": "/images/peacekeeping.jpg"
};
function Home() {
	const featured = INITIATIVES.filter((i) => i.featured);
	const rest = INITIATIVES.filter((i) => !i.featured).slice(0, 4);
	const timelinePreview = TIMELINE.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[78vh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero.jpg",
						alt: "An ancient olive grove at first light, mist between the trunks.",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-scrim" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
						className: "relative flex min-h-[78vh] flex-col justify-end pb-12 pt-28 sm:pb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise-in text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-primary-fg/80",
								children: "An independent guide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "rise-in rise-in-1 mt-4 max-w-3xl font-display text-3xl text-primary-fg",
								children: "The work that holds the world together"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise-in rise-in-2 mt-5 max-w-xl text-base text-primary-fg/85 sm:text-lg",
								children: "From UN missions and nuclear treaties to unarmed civilian protection and village mediation — a living atlas of peace."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rise-in rise-in-3 mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/pact",
										children: ["Read the pact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-0 bg-primary-fg/10 text-primary-fg shadow-none hover:bg-primary-fg/15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/atlas",
										children: "Explore the atlas"
									})
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
					className: "grid grid-cols-2 gap-6 py-8 md:grid-cols-4",
					children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl tabular-nums tracking-tight",
						children: stat.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: stat.label
					})] }, stat.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
							children: "The Pact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl",
							children: "To All Who Share This Earth"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "A standing offer initiated by Jon Constantine: a personal pledge of non-aggression, shared stewardship, and restorative dialogue. It carries equal weight whether signed by one person or one billion."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-6 border-l-2 border-primary pl-4 font-display text-xl italic",
							children: "Peace is not the absence of conflict, but the deliberate decision to meet it without destruction."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/pact",
								hash: "sign",
								children: ["Affix your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pact",
						className: "relative aspect-[4/3] overflow-hidden rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/women.jpg",
							alt: "An empty hall in morning light, an olive sprig in a glass of water.",
							className: "size-full object-cover"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
						children: "Featured"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl",
						children: "Where the work is happening"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/initiatives",
							children: ["All initiatives", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6",
					children: [featured[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitiativeCard, {
						initiative: featured[0],
						featured: true
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: featured.slice(1).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitiativeCard, { initiative: item }, item.slug))
					})]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-surface py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
						children: "By practice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-xl text-2xl",
						children: "Seven ways peace is actually made"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: THEMES.map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/initiatives",
							search: { theme: theme.id },
							className: "rounded-xl bg-bg p-5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: theme.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: theme.blurb
							})]
						}, theme.id))
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
						children: "Atlas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl",
						children: "Six regions, one map"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/atlas",
							children: ["Open the atlas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-3",
					children: REGIONS.map((region) => {
						const count = initiativesForRegion(region.id).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/atlas",
							search: { region: region.id },
							className: "group relative aspect-[4/3] overflow-hidden rounded-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: REGION_IMAGE[region.id],
									alt: "",
									className: "size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-scrim/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col justify-end p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl text-primary-fg",
										children: region.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-primary-fg/80",
										children: [count, " initiatives"]
									})]
								})
							]
						}, region.id);
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-surface py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
					children: "Also in the atlas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2",
					children: rest.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitiativeCard, { initiative: item }, item.slug))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
							children: "History"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl",
							children: "Accords that changed the room"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "Peace has a memory. Treaties, missions, and resolutions that still structure how the world tries not to fight."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/timeline",
								children: ["Full timeline", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "divide-y divide-border",
						children: timelinePreview.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[4.5rem_1fr] gap-4 py-4 first:pt-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg tabular-nums",
								children: event.year
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-base font-medium",
								children: event.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: event.text
							})] })]
						}, event.year))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-primary px-4 py-16 text-primary-fg sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl text-primary-fg",
							children: "Peace is a practice. Start with your name."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-primary-fg/80",
							children: "Sign the pact, then pick a door: fund a local mediator, learn the laws of war, or sit with the Global Peace Index."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "bg-primary-fg text-primary hover:opacity-90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/pact",
									hash: "sign",
									children: ["Sign the pact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-0 bg-primary-fg/10 text-primary-fg shadow-none hover:bg-primary-fg/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/act",
									children: "Ways to act"
								})
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
