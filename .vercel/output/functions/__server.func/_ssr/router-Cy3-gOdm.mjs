import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as notFound, _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as Menu, n as TriangleAlert, o as Bookmark, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-CM8p1-EP.js
var THEMES = [
	{
		id: "diplomacy",
		label: "Diplomacy",
		blurb: "Talks, institutions, and the rooms where ceasefires are written."
	},
	{
		id: "humanitarian",
		label: "Humanitarian",
		blurb: "Protecting civilians and upholding the laws of war."
	},
	{
		id: "disarmament",
		label: "Disarmament",
		blurb: "Treaties and campaigns that take weapons off the table."
	},
	{
		id: "education",
		label: "Education",
		blurb: "Youth encounters, research, and the culture of peace."
	},
	{
		id: "climate",
		label: "Climate",
		blurb: "Shared water, land, and a warming planet as peace work."
	},
	{
		id: "grassroots",
		label: "Grassroots",
		blurb: "Local mediators doing the daily work of repair."
	},
	{
		id: "women",
		label: "Women & security",
		blurb: "The Women, Peace and Security agenda in practice."
	}
];
var REGIONS = [
	{
		id: "global",
		label: "Global",
		summary: "Treaties, campaigns, and institutions that span every continent."
	},
	{
		id: "africa",
		label: "Africa",
		summary: "Continental security architecture and community mediation."
	},
	{
		id: "americas",
		label: "Americas",
		summary: "From election observation to negotiated ends of civil war."
	},
	{
		id: "asia-pacific",
		label: "Asia–Pacific",
		summary: "Unarmed protection, nuclear bans, and local peacebuilding."
	},
	{
		id: "europe",
		label: "Europe",
		summary: "Humanitarian law, private diplomacy, and post-conflict accords."
	},
	{
		id: "middle-east",
		label: "Middle East",
		summary: "Youth encounter, ceasefire missions, and long mediation."
	}
];
var INITIATIVES = [
	{
		slug: "un-peacekeeping",
		name: "United Nations Peacekeeping",
		shortName: "UN Peacekeeping",
		founded: "1948",
		theme: "diplomacy",
		regions: [
			"global",
			"africa",
			"middle-east",
			"asia-pacific"
		],
		summary: "The UN’s principal tool for helping countries move from conflict to peace — protecting civilians, supporting political processes, and monitoring ceasefires.",
		body: [
			"The first UN peacekeeping mission, UNTSO, was established in 1948. Since then more than two million people from 125 countries have served in 71 operations. As of 2026, eleven missions remain active, with around 53,000 personnel deployed from 117 countries. Nepal, Rwanda, Bangladesh, India, and Pakistan are among the largest troop contributors.",
			"Modern missions are multidimensional. Beyond observing a ceasefire they may protect civilians, support elections, assist disarmament and reintegration of former combatants, and help restore the rule of law. Independent research has found peacekeeping associated with fewer civilian deaths and a lower chance that war recurs — though results depend on mandate, consent, and politics.",
			"The 2025–2026 peacekeeping budget was approved at about $5.4 billion. In 2018 the UN launched Action for Peacekeeping (A4P) to renew political commitment to missions; A4P+ followed. The Woman, Peace and Security agenda and a growing Climate, Peace and Security workstream sit inside the same architecture. Peacekeeping is not a standing army: it is a volunteer coalition, renewed mission by mission, under the Security Council."
		],
		facts: [
			{
				label: "First mission",
				value: "UNTSO, 1948"
			},
			{
				label: "Active operations",
				value: "11 (as of 2026)"
			},
			{
				label: "Personnel",
				value: "~53,000 from 117 countries"
			},
			{
				label: "Nobel Peace Prize",
				value: "1988 (UN peacekeeping forces)"
			}
		],
		image: "/images/peacekeeping.jpg",
		imageAlt: "A remote ridgeline outpost at dusk, a winding road and pale buildings under a wide sky.",
		url: "https://peacekeeping.un.org/en",
		engage: "Follow mission reports, support troop-contributing countries’ accountability debates, and read the Action for Peacekeeping commitments.",
		featured: true
	},
	{
		slug: "icrc",
		name: "International Committee of the Red Cross",
		shortName: "ICRC",
		founded: "1863",
		theme: "humanitarian",
		regions: [
			"global",
			"europe",
			"africa",
			"middle-east",
			"asia-pacific",
			"americas"
		],
		summary: "The guardian of international humanitarian law: visiting detainees, restoring family links, and insisting that even wars have rules.",
		body: [
			"Founded in Geneva in 1863 after Henry Dunant’s account of the Battle of Solferino, the ICRC helped write the first Geneva Convention a year later. It is a private Swiss organization with a public international mandate: to protect and assist people affected by armed conflict and other situations of violence, and to promote respect for the laws of war.",
			"Delegates visit prisoners of war and civilian detainees, trace missing relatives, support hospitals, and confidentially remind parties of their obligations. The organization has received the Nobel Peace Prize three times (1917, 1944, and 1963, the last shared with the Red Cross movement). Its power is unusual: access depends on neutrality, independence, and the consent of the parties — not on naming and shaming.",
			"The Geneva Conventions of 1949 and their Additional Protocols remain the backbone of international humanitarian law. In an era of urban warfare, sieges, and digital operations, the ICRC’s work is as much legal and diplomatic as it is medical. Peace, in this tradition, begins with the idea that a wounded enemy is no longer an enemy."
		],
		facts: [
			{
				label: "Founded",
				value: "Geneva, 1863"
			},
			{
				label: "Legal core",
				value: "Geneva Conventions, 1949"
			},
			{
				label: "Nobel Peace Prize",
				value: "1917, 1944, 1963"
			},
			{
				label: "Method",
				value: "Confidential humanitarian diplomacy"
			}
		],
		image: "/images/humanitarian.jpg",
		imageAlt: "Plain field tents on a highland plain at dusk, a single lantern glowing inside.",
		url: "https://www.icrc.org/",
		engage: "Learn the Geneva Conventions, support national Red Cross and Red Crescent societies, and follow ICRC reporting on current conflicts."
	},
	{
		slug: "unsc-1325",
		name: "Women, Peace and Security",
		shortName: "UNSCR 1325",
		founded: "2000",
		theme: "women",
		regions: ["global"],
		summary: "Security Council Resolution 1325 made women’s participation, protection, and relief a matter of international peace and security — not a side programme.",
		body: ["On 31 October 2000 the UN Security Council unanimously adopted Resolution 1325. It was the first Council text to recognize that war is gendered: women and girls are affected differently, and durable peace requires their participation in prevention, negotiation, and reconstruction. Subsequent resolutions (including 1820, 1888, 1889, 1960, 2106, 2122, 2242, 2467, and 2493) built the Women, Peace and Security (WPS) agenda.", "The agenda has four pillars: participation, protection, prevention, and relief and recovery. National Action Plans translate it into domestic policy; more than a hundred countries have adopted one. In peacekeeping, WPS shows up as women’s protection advisers, gender-responsive analysis, and efforts to increase the number of women in uniform and in mediation teams."],
		facts: [
			{
				label: "Adopted",
				value: "31 October 2000"
			},
			{
				label: "Council",
				value: "Unanimous UNSC vote"
			},
			{
				label: "Pillars",
				value: "Participation, protection, prevention, relief"
			},
			{
				label: "National plans",
				value: "100+ countries"
			}
		],
		image: "/images/women.jpg",
		imageAlt: "An empty assembly hall in morning light, an olive sprig in a glass of water on the table.",
		url: "https://www.un.org/womenwatch/osagi/wps/",
		engage: "Read your country’s National Action Plan, support women mediators, and track whether peace talks include women as delegates, not only witnesses.",
		featured: true
	},
	{
		slug: "search-for-common-ground",
		name: "Search for Common Ground",
		shortName: "Search",
		founded: "1982",
		theme: "grassroots",
		regions: [
			"global",
			"africa",
			"asia-pacific",
			"middle-east",
			"americas"
		],
		summary: "The largest organization dedicated solely to peacebuilding — using radio, sports, dialogue, and media to shift how communities handle conflict.",
		body: ["Search for Common Ground was founded in 1982 to change the way people deal with conflict: away from adversarial approaches and toward collaboration. It is now one of the world’s largest dedicated peacebuilding organizations, with programmes across Africa, Asia, the Middle East, and elsewhere.", "The method is cultural as much as political. Search produces radio dramas, trains journalists, convenes unlikely interlocutors, and works with religious leaders, youth, and security forces. The bet is that peace is a set of habits — how a talk show frames the other side, how a police unit treats a protest, how a school handles a rumor — not only a signature on a treaty."],
		facts: [
			{
				label: "Founded",
				value: "1982"
			},
			{
				label: "Focus",
				value: "Conflict transformation"
			},
			{
				label: "Tools",
				value: "Media, dialogue, training"
			},
			{
				label: "Scale",
				value: "Dozens of countries"
			}
		],
		image: "/images/grassroots.jpg",
		imageAlt: "Wooden stools in a circle under a tree, ceramic cups on a cloth, a meeting just paused.",
		url: "https://www.sfcg.org/",
		engage: "Support independent peace media in divided societies, and look for programmes that work with all sides of a conflict rather than one constituency."
	},
	{
		slug: "ican",
		name: "International Campaign to Abolish Nuclear Weapons",
		shortName: "ICAN",
		founded: "2007",
		theme: "disarmament",
		regions: [
			"global",
			"europe",
			"asia-pacific"
		],
		summary: "A coalition that shifted nuclear weapons from a strategic abstraction to a humanitarian fact — and won a treaty to prohibit them.",
		body: ["ICAN was launched in 2007 as a coalition of civil-society groups. Its argument was simple and disruptive: nuclear weapons are not only a matter of deterrence theory; they are a humanitarian catastrophe waiting to happen. The campaign partnered with survivors of Hiroshima and Nagasaki, physicians, and governments willing to negotiate outside the usual nuclear clubs.", "That work produced the Treaty on the Prohibition of Nuclear Weapons (TPNW), adopted at the United Nations in 2017. ICAN received the Nobel Peace Prize the same year. The treaty is now in force among its states parties, even as nuclear-armed states and most of their allies remain outside it. The campaign continues to push for signatures, assistance to victims, and a stigmatization of the bomb comparable to the bans on landmines and cluster munitions."],
		facts: [
			{
				label: "Founded",
				value: "2007, Melbourne"
			},
			{
				label: "Treaty",
				value: "TPNW adopted 2017"
			},
			{
				label: "Nobel Peace Prize",
				value: "2017"
			},
			{
				label: "Approach",
				value: "Humanitarian disarmament"
			}
		],
		image: "/images/disarmament.jpg",
		imageAlt: "White paper cranes hanging in a quiet wooden hall, lit by a single window.",
		url: "https://www.icanw.org/",
		engage: "See whether your country has signed the TPNW. Cities, universities, and banks can also adopt nuclear-weapon-free policies.",
		featured: true
	},
	{
		slug: "seeds-of-peace",
		name: "Seeds of Peace",
		shortName: "Seeds of Peace",
		founded: "1993",
		theme: "education",
		regions: [
			"middle-east",
			"asia-pacific",
			"americas",
			"global"
		],
		summary: "A summer camp and a lifetime network: young people from conflict regions living together long enough to make the other side a person.",
		body: ["Seeds of Peace was founded in 1993, in the wake of the Oslo Accords, by journalist John Wallach. Its signature programme brings teenagers from conflict regions — originally Israel, Palestine, and neighbouring countries, later South Asia and elsewhere — to a camp in Maine. They share bunks, compete in sports, and sit in daily facilitated dialogue.", "The point is not a week of goodwill. Alumni (called Seeds) return home to political reality, then stay in a network of leadership programmes, local hubs, and professional paths in diplomacy, journalism, and civic life. The organization treats encounter as a long investment: if a generation of people who have argued in good faith later sit across a table, the table is different."],
		facts: [
			{
				label: "Founded",
				value: "1993"
			},
			{
				label: "Method",
				value: "Camp, dialogue, alumni network"
			},
			{
				label: "Origin",
				value: "Maine, United States"
			},
			{
				label: "Horizon",
				value: "Lifelong leadership, not a single summit"
			}
		],
		image: "/images/education.jpg",
		imageAlt: "An empty sunlit classroom, wooden desks and a beam of afternoon light through open shutters.",
		url: "https://www.seedsofpeace.org/",
		engage: "Support youth encounter programmes with serious facilitation — not tourism — and follow alumni work in their home communities."
	},
	{
		slug: "peace-direct",
		name: "Peace Direct",
		shortName: "Peace Direct",
		founded: "2004",
		theme: "grassroots",
		regions: [
			"global",
			"africa",
			"asia-pacific",
			"americas"
		],
		summary: "An international charity that funds and amplifies local peacebuilders rather than substituting for them.",
		body: ["Peace Direct was founded in 2004 on a blunt observation: people closest to a conflict often have the best analysis and the least money. The organization partners with local groups — women mediators, youth networks, community radio, early-warning committees — and channels funds, research, and policy access toward them.", "Its public platform, Peace Insight, maps local organizations that outsiders rarely see. Peace Direct also argues, in donor capitals, that international interventions fail when they bypass local agency. The ethic is accompaniment: not speaking for communities, and not treating peace as a project that ends when the grant does."],
		facts: [
			{
				label: "Founded",
				value: "2004"
			},
			{
				label: "Base",
				value: "United Kingdom"
			},
			{
				label: "Method",
				value: "Partner, fund, amplify"
			},
			{
				label: "Platform",
				value: "Peace Insight"
			}
		],
		image: "/images/grassroots.jpg",
		imageAlt: "A village meeting circle of stools beneath a spreading tree in late light.",
		url: "https://www.peacedirect.org/",
		engage: "Give to local peacebuilding funds, read Peace Insight before assuming an outside intervention is the first tool, and ask aid agencies who their local partners are."
	},
	{
		slug: "nonviolent-peaceforce",
		name: "Nonviolent Peaceforce",
		shortName: "Nonviolent Peaceforce",
		founded: "2002",
		theme: "humanitarian",
		regions: [
			"global",
			"africa",
			"asia-pacific",
			"middle-east"
		],
		summary: "Unarmed civilian protection: trained teams who live alongside communities, deter violence, and open space for local peace work.",
		body: ["Nonviolent Peaceforce was founded in 2002 to professionalize a simple, radical idea: civilians can protect civilians without weapons. International and national protection officers — unarmed, clearly identified, trained in accompaniment, rumor control, and protective presence — deploy at the invitation of local partners.", "The work has included South Sudan, Myanmar, the Philippines, and other crises. Teams escort people to fields and clinics, support women-led protection groups, and intervene at checkpoints and displacement sites. The theory is deterrence by witness: many armed actors calculate differently when an unarmed third party is standing there, taking notes, and refusing to leave."],
		facts: [
			{
				label: "Founded",
				value: "2002"
			},
			{
				label: "Method",
				value: "Unarmed civilian protection"
			},
			{
				label: "Teams",
				value: "National and international officers"
			},
			{
				label: "Ethic",
				value: "Invitation, nonpartisanship, presence"
			}
		],
		image: "/images/humanitarian.jpg",
		imageAlt: "Field tents on open ground at dusk, a lantern burning in one of them.",
		url: "https://nonviolentpeaceforce.org/",
		engage: "Learn unarmed protection as a professional field, support deployments, and ask governments to fund civilian protection alongside military missions."
	},
	{
		slug: "interpeace",
		name: "Interpeace",
		shortName: "Interpeace",
		founded: "1994",
		theme: "diplomacy",
		regions: [
			"global",
			"africa",
			"americas",
			"asia-pacific",
			"europe"
		],
		summary: "Born as a UN project on war-torn societies, now an independent organization that helps societies rebuild trust from the inside.",
		body: ["Interpeace began in 1994 as the War-torn Societies Project, a United Nations initiative to help countries emerging from war understand their own recovery. Early field work included Eritrea, Mozambique, Guatemala, and Somalia. It became an independent peacebuilding organization in 2000, still in close partnership with the UN.", "The method is participatory research and locally owned strategy: bringing political, civic, and security actors into a shared reading of the conflict, then accompanying the institutions that result. Interpeace treats peace as a process of trust — between citizens and the state, and among groups that have fought — rather than a template imported from the last mission."],
		facts: [
			{
				label: "Origin",
				value: "UN War-torn Societies Project, 1994"
			},
			{
				label: "Independent",
				value: "2000"
			},
			{
				label: "HQ",
				value: "Geneva"
			},
			{
				label: "Method",
				value: "Participatory, locally owned"
			}
		],
		image: "/images/diplomacy.jpg",
		imageAlt: "An empty round conference table in a sunlit room, chairs drawn in, papers waiting.",
		url: "https://www.interpeace.org/",
		engage: "Support locally led political dialogue and be wary of peace plans that have not been written with the people who have to live them."
	},
	{
		slug: "au-peace-security",
		name: "African Union Peace and Security Architecture",
		shortName: "AU APSA",
		founded: "2002",
		theme: "diplomacy",
		regions: ["africa"],
		summary: "Africa’s own system for preventing, managing, and resolving conflict — a Peace and Security Council, early warning, and a standby force still being built.",
		body: ["When the Organization of African Unity became the African Union, it also accepted a more interventionist security mandate. The Protocol Relating to the Establishment of the Peace and Security Council was adopted in 2002 and the Council became operational in 2004. Around it sits the African Peace and Security Architecture (APSA): a Continental Early Warning System, a Panel of the Wise, the African Standby Force, and a special fund.", "The AU has authorized and run peace support operations from Burundi and Darfur to Somalia (AMISOM, later ATMIS). UN Security Council Resolution 2719 (2023) created a framework for UN assessed contributions to AU-led operations — a long-sought shift toward predictable financing. APSA is unfinished, underfunded, and political. It is also the most ambitious attempt by a regional body to treat African conflicts as African public business."],
		facts: [
			{
				label: "Protocol",
				value: "2002"
			},
			{
				label: "PSC operational",
				value: "2004"
			},
			{
				label: "Pillars",
				value: "Council, warning, standby force, fund"
			},
			{
				label: "UN link",
				value: "Resolution 2719 (2023)"
			}
		],
		image: "/images/peacekeeping.jpg",
		imageAlt: "An arid ridge at dusk with a remote cluster of pale buildings and a dirt road.",
		url: "https://au.int/en/psc",
		engage: "Follow Peace and Security Council communiqués and the financing debate around AU operations — it shapes what missions can actually do."
	},
	{
		slug: "ctbto",
		name: "Comprehensive Nuclear-Test-Ban Treaty Organization",
		shortName: "CTBTO",
		founded: "1996",
		theme: "disarmament",
		regions: ["global", "europe"],
		summary: "A treaty not yet in force, and a verification system that already hears the Earth: the international effort to end nuclear testing for good.",
		body: ["The Comprehensive Nuclear-Test-Ban Treaty was adopted by the UN General Assembly in 1996. It bans all nuclear explosions, everywhere, by everyone. The treaty will enter into force only when 44 specific “Annex 2” states have ratified; several of those — including some nuclear-armed states — have not.", "Meanwhile the CTBTO Preparatory Commission in Vienna has built a global verification regime: seismic, hydroacoustic, infrasound, and radionuclide stations that can detect a test and identify its signature. The system already serves tsunami warning and scientific research. A ban that is not yet law has still changed behavior: most states have stopped testing, and those that test are seen."],
		facts: [
			{
				label: "Treaty adopted",
				value: "1996"
			},
			{
				label: "In force?",
				value: "Not yet (Annex 2 ratifications pending)"
			},
			{
				label: "HQ",
				value: "Vienna"
			},
			{
				label: "Network",
				value: "International Monitoring System"
			}
		],
		image: "/images/disarmament.jpg",
		imageAlt: "Paper cranes suspended in still air inside a wooden memorial hall.",
		url: "https://www.ctbto.org/",
		engage: "Track which Annex 2 states have not ratified, and treat a return to testing as a red line in any nuclear-policy debate."
	},
	{
		slug: "iep",
		name: "Institute for Economics & Peace",
		shortName: "IEP",
		founded: "2007",
		theme: "education",
		regions: ["global", "asia-pacific"],
		summary: "The Global Peace Index and a research programme that treats peace as something you can measure, price, and compare.",
		body: ["The Institute for Economics & Peace, founded in 2007 in Sydney by Steve Killelea, publishes the Global Peace Index — an annual ranking of countries on militarization, safety and security, and ongoing conflict. Companion reports cover terrorism, positive peace (the attitudes and institutions that sustain peace), and the economic cost of violence.", "Measurement is not the same as peace. Rankings can flatten politics, and data can lag a crisis. Used well, the Index is a common language for journalists, ministries, and investors: a way to notice that peace has a structure (functioning government, low corruption, equitable resources) and a price when it fails. IEP’s “Positive Peace” framework is widely cited in education and policy."],
		facts: [
			{
				label: "Founded",
				value: "2007, Sydney"
			},
			{
				label: "Flagship",
				value: "Global Peace Index"
			},
			{
				label: "Lens",
				value: "Positive peace + economic cost"
			},
			{
				label: "Use",
				value: "Policy, education, research"
			}
		],
		image: "/images/education.jpg",
		imageAlt: "Rows of wooden school desks in late light, chalk dust in the air.",
		url: "https://www.economicsandpeace.org/",
		engage: "Read the latest Global Peace Index, teach Positive Peace in civics, and look at the economic cost of violence in your own country."
	},
	{
		slug: "carter-center",
		name: "The Carter Center",
		shortName: "Carter Center",
		founded: "1982",
		theme: "diplomacy",
		regions: [
			"global",
			"americas",
			"africa",
			"asia-pacific",
			"middle-east"
		],
		summary: "A post-presidential institution that waged peace as fieldwork: election observation, disease eradication, and quiet mediation in more than 75 countries.",
		body: ["Jimmy and Rosalynn Carter founded The Carter Center in 1982, beside Emory University in Atlanta. The peace programme has observed more than a hundred elections, mediated in civil wars, and pushed the idea that a former head of state can be more useful as a witness than as a commentator.", "The Center is also famous for public health — near-eradication of Guinea worm, work on river blindness — on the theory that health and peace are not separate portfolios. Election observation remains a core peace tool: an independent count, a public report, and a presence that raises the cost of stealing a vote. After 2023 the institution continues under new leadership, with the same field ethic."],
		facts: [
			{
				label: "Founded",
				value: "1982, Atlanta"
			},
			{
				label: "Elections observed",
				value: "100+"
			},
			{
				label: "Countries",
				value: "Peace work in 75+"
			},
			{
				label: "Sister work",
				value: "Disease eradication"
			}
		],
		image: "/images/diplomacy.jpg",
		imageAlt: "A round wooden table set for talks, empty chairs, late sun through tall windows.",
		url: "https://www.cartercenter.org/programs/peace/",
		engage: "Support independent election observation and treat public-health campaigns in fragile states as peace infrastructure."
	},
	{
		slug: "sant-egidio",
		name: "Community of Sant’Egidio",
		shortName: "Sant’Egidio",
		founded: "1968",
		theme: "diplomacy",
		regions: [
			"europe",
			"africa",
			"global"
		],
		summary: "A Roman lay Catholic community that prays at night and mediates by day — architect of Mozambique’s 1992 peace and a model of Track II diplomacy.",
		body: ["Sant’Egidio began in 1968 among high-school students in Rome, gathering around prayer, friendship with the poor, and a presence in Trastevere. It grew into a global lay community. Its peace vocation became public with the Mozambique talks: years of quiet facilitation that produced the 1992 General Peace Accords, ending a 16-year civil war.", "The method is hospitality plus patience. Fighters are received as guests, not as files. The community has since been involved in mediation and dialogue from Algeria and Kosovo to South Sudan and the Central African Republic, and it convenes an annual Prayer for Peace that gathers religious leaders. It is a reminder that some of the most effective diplomats do not work for a foreign ministry."],
		facts: [
			{
				label: "Founded",
				value: "Rome, 1968"
			},
			{
				label: "Signature accord",
				value: "Mozambique, 1992"
			},
			{
				label: "Method",
				value: "Track II, hospitality, prayer"
			},
			{
				label: "Character",
				value: "Lay Catholic community"
			}
		],
		image: "/images/women.jpg",
		imageAlt: "Morning light in an empty hall, chairs in rows, a glass of water and an olive sprig.",
		url: "https://www.santegidio.org/",
		engage: "Study the Mozambique talks as a case in unofficial mediation, and support community-based dialogue that can host people states will not."
	},
	{
		slug: "climate-peace",
		name: "Climate, Peace and Security",
		shortName: "Climate & peace",
		founded: "2018",
		theme: "climate",
		regions: [
			"global",
			"africa",
			"asia-pacific",
			"middle-east"
		],
		summary: "A UN and research agenda that treats drought, floods, and contested resources as drivers of conflict — and as openings for cooperation.",
		body: ["Climate change does not start wars by itself. It multiplies stress on water, harvests, pasture, and displacement, and it can harden the politics of already fragile places. In 2018 the UN established a Climate Security Mechanism across DPPA, UNDP, and UNEP. Peacekeeping missions have added climate advisers; the Security Council has debated the issue even when members disagree on whether it belongs there.", "Environmental peacebuilding is older than the current label: sharing a river, restoring a pasture, and negotiating a transhumance corridor are classic conflict tools. The new work is to put climate analysis into mediation, early warning, and mission planning, and to fund adaptation as if it were prevention — because in the Sahel, the Horn, and low-lying coasts, it is."],
		facts: [
			{
				label: "UN mechanism",
				value: "Climate Security Mechanism, 2018"
			},
			{
				label: "Agencies",
				value: "DPPA, UNDP, UNEP"
			},
			{
				label: "Field",
				value: "Peacekeeping climate advisers"
			},
			{
				label: "Older name",
				value: "Environmental peacebuilding"
			}
		],
		image: "/images/climate.jpg",
		imageAlt: "A river at blue hour between terraced hills, two distant villages on opposite banks.",
		url: "https://peacekeeping.un.org/en/climate-peace-and-security",
		engage: "Support transboundary water cooperation, climate adaptation in fragile states, and conflict-sensitive climate finance."
	},
	{
		slug: "npt",
		name: "Nuclear Non-Proliferation Treaty",
		shortName: "NPT",
		founded: "1968",
		theme: "disarmament",
		regions: ["global"],
		summary: "The grand bargain of the nuclear age: non-nuclear states forgo the bomb; nuclear states pursue disarmament; all may use the atom in peace.",
		body: ["Opened for signature in 1968 and in force since 1970, the NPT is among the most widely joined treaties in existence — 191 states parties. It rests on three pillars: non-proliferation, disarmament, and the peaceful use of nuclear energy. Five states are recognized as nuclear-weapon states (the US, Russia, the UK, France, and China). India, Pakistan, and Israel never joined; North Korea withdrew.", "Review conferences every five years test whether the bargain still holds. Non-nuclear states argue that disarmament has lagged; nuclear states point to proliferation risks. The treaty’s inspectors (the IAEA) and its norm against new nuclear-armed states remain central to any serious peace architecture. It is incomplete, contested, and still the floor under which the world prefers not to fall."],
		facts: [
			{
				label: "Opened",
				value: "1968"
			},
			{
				label: "In force",
				value: "1970"
			},
			{
				label: "Parties",
				value: "191 states"
			},
			{
				label: "Pillars",
				value: "Non-proliferation, disarmament, peaceful use"
			}
		],
		image: "/images/disarmament.jpg",
		imageAlt: "Paper cranes hanging in a still memorial hall.",
		url: "https://www.un.org/disarmament/wmd/nuclear/npt/",
		engage: "Follow the NPT review cycle and the gap between the treaty’s disarmament article and arsenals that are being modernized, not retired."
	}
];
var TIMELINE = [
	{
		year: "1648",
		title: "Peace of Westphalia",
		place: "Münster & Osnabrück",
		text: "Treaties that ended the Thirty Years’ War and became a shorthand for sovereign coexistence — the idea that political units might share a continent without a single sword over them."
	},
	{
		year: "1864",
		title: "First Geneva Convention",
		place: "Geneva",
		text: "States agree that wounded soldiers, and those who collect them, are not legitimate targets. Humanitarian law begins as a written promise."
	},
	{
		year: "1919",
		title: "League of Nations",
		place: "Paris / Geneva",
		text: "The first standing global forum for collective security. It failed to stop the next world war — and still taught the UN what a secretariat, a council, and a covenant might look like."
	},
	{
		year: "1945",
		title: "United Nations Charter",
		place: "San Francisco",
		text: "“To save succeeding generations from the scourge of war.” The Charter makes the maintenance of peace a legal purpose of an organization, not only a hope."
	},
	{
		year: "1948",
		title: "First UN peacekeeping mission",
		place: "Middle East (UNTSO)",
		text: "Unarmed observers deploy to monitor a ceasefire. A practice is born that will send more than two million people into the field over the next eight decades."
	},
	{
		year: "1968",
		title: "Nuclear Non-Proliferation Treaty",
		place: "United Nations",
		text: "The grand bargain: no new nuclear-armed states, a duty to disarm, and a right to peaceful nuclear technology. Still the legal floor of the nuclear order."
	},
	{
		year: "1978",
		title: "Camp David Accords",
		place: "Maryland",
		text: "Egypt and Israel, brokered by the United States, agree a framework that leads to a peace treaty the following year — a rare formal end to a state of war in the region."
	},
	{
		year: "1992",
		title: "Mozambique General Peace Accords",
		place: "Rome",
		text: "Sant’Egidio hosts talks that end a sixteen-year civil war. Unofficial mediators prove they can close a war when official rooms cannot."
	},
	{
		year: "1998",
		title: "Good Friday Agreement",
		place: "Belfast",
		text: "A consociational settlement that largely ended the Troubles. Power-sharing, rights, and cross-border institutions — peace as a constitution, not a ceasefire."
	},
	{
		year: "2000",
		title: "UNSCR 1325",
		place: "New York",
		text: "The Security Council recognizes women as agents of peace, not only as victims of war. The Women, Peace and Security agenda begins."
	},
	{
		year: "2016",
		title: "Colombian peace accord",
		place: "Cartagena / Bogotá",
		text: "The government and the FARC sign a comprehensive agreement after four years of talks in Havana. Implementation is unfinished; the fact of a negotiated end to a 50-year war remains."
	},
	{
		year: "2017",
		title: "Treaty on the Prohibition of Nuclear Weapons",
		place: "United Nations",
		text: "A humanitarian treaty, driven by ICAN and like-minded states, that prohibits nuclear weapons for its parties. Nuclear-armed states stay outside; the stigma does not."
	},
	{
		year: "2023",
		title: "UNSCR 2719",
		place: "New York",
		text: "The Security Council agrees a framework for UN assessed funding of African Union peace support operations — a bid to make African missions financially real."
	},
	{
		year: "2024",
		title: "Pact for the Future",
		place: "United Nations",
		text: "Member states adopt a pact that includes a review of UN peace operations and a recommitment to prevention, in a system under strain."
	}
];
var ACTIONS = [
	{
		id: "local",
		slug: "peace-direct",
		title: "Fund people who already live there",
		text: "Local peacebuilders are cheaper, closer, and usually more legitimate than a fly-in mission. Start with Peace Direct and the groups on Peace Insight.",
		cta: "Meet Peace Direct",
		image: "/images/grassroots.jpg"
	},
	{
		id: "protect",
		slug: "nonviolent-peaceforce",
		title: "Protect civilians without a gun",
		text: "Unarmed civilian protection is a profession. Nonviolent Peaceforce trains and deploys teams who accompany communities through violence.",
		cta: "See how presence works",
		image: "/images/humanitarian.jpg"
	},
	{
		id: "learn",
		slug: "iep",
		title: "Learn the state of peace",
		text: "The Global Peace Index is an annual X-ray: militarization, safety, conflict, and the habits that keep a society from tipping.",
		cta: "Open the Index",
		image: "/images/education.jpg"
	},
	{
		id: "nuclear",
		slug: "ican",
		title: "Stigmatize the bomb",
		text: "ICAN’s treaty is in force for those who join it. Cities, banks, universities, and parliaments can still move even when capitals will not.",
		cta: "Join the campaign",
		image: "/images/disarmament.jpg"
	},
	{
		id: "youth",
		slug: "seeds-of-peace",
		title: "Put the next table in a bunkhouse",
		text: "Seeds of Peace treats encounter as a decades-long investment. Support serious youth dialogue, not a week of slogans.",
		cta: "Visit Seeds of Peace",
		image: "/images/education.jpg"
	},
	{
		id: "law",
		slug: "icrc",
		title: "Keep the laws of war alive",
		text: "The Geneva Conventions only work if people know them and states feel them. The ICRC and national societies are the school and the witness.",
		cta: "Read the ICRC",
		image: "/images/humanitarian.jpg"
	}
];
function themeById(id) {
	return THEMES.find((t) => t.id === id);
}
function regionById(id) {
	return REGIONS.find((r) => r.id === id);
}
function initiativeBySlug(slug) {
	return INITIATIVES.find((i) => i.slug === slug);
}
function initiativesForRegion(region) {
	return INITIATIVES.filter((i) => i.regions.includes(region));
}
function relatedInitiatives(slug, limit = 3) {
	const current = initiativeBySlug(slug);
	if (!current) return INITIATIVES.slice(0, limit);
	return INITIATIVES.filter((i) => i.slug !== slug && (i.theme === current.theme || i.regions.some((r) => current.regions.includes(r)))).slice(0, limit);
}
var STATS = [
	{
		value: "11",
		label: "Active UN peacekeeping missions"
	},
	{
		value: "2M+",
		label: "Peacekeepers since 1948"
	},
	{
		value: "191",
		label: "Parties to the NPT"
	},
	{
		value: "16",
		label: "Initiatives in this atlas"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cy3-gOdm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function OliveMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		className: cn("text-primary", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6 26c6-2 10-8 12-14 1.4-4.2 2-8 2-8",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16.2 14.2c2.4-1.6 5.4-1.6 7.2.2M14.6 17.6c2.6-1.2 5.4-.8 7 1.2M12.8 21c2.4-1 4.8-.4 6.2 1.4M17.8 10.8c2-1.8 4.8-2.2 6.6-.6",
				stroke: "currentColor",
				strokeWidth: "1.25",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "22.6",
				cy: "16.4",
				rx: "1.1",
				ry: "1.6",
				fill: "currentColor",
				transform: "rotate(-28 22.6 16.4)"
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto border-t border-border bg-surface print:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OliveMark, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg",
						children: "Pax Atlas"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-sm text-sm text-muted",
					children: "An independent editorial guide to the missions, treaties, and people building peace. Not affiliated with the United Nations or the organizations profiled."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pact",
							className: "text-fg hover:underline",
							children: "The Pact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/atlas",
							className: "text-fg hover:underline",
							children: "Atlas"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/initiatives",
							className: "text-fg hover:underline",
							children: "Initiatives"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/timeline",
							className: "text-fg hover:underline",
							children: "Timeline"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[var(--tracking-wide)] text-subtle",
					children: "Participate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pact",
							hash: "sign",
							className: "text-fg hover:underline",
							children: "Sign the pact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/act",
							className: "text-fg hover:underline",
							children: "Ways to act"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/initiatives",
							search: { saved: true },
							className: "text-fg hover:underline",
							children: "Saved"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs text-subtle sm:px-6",
				children: "Facts current as of 2026. External links leave Pax Atlas."
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-[var(--shadow-border)] hover:opacity-90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-surface",
			ghost: "bg-transparent text-fg hover:bg-surface",
			link: "bg-transparent text-fg underline-offset-4 hover:underline px-0"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var useSaved = create()(persist((set) => ({
	slugs: [],
	toggle: (slug) => set((state) => ({ slugs: state.slugs.includes(slug) ? state.slugs.filter((s) => s !== slug) : [...state.slugs, slug] }))
}), { name: "pax-atlas-saved" }));
var NAV = [
	{
		to: "/pact",
		label: "The Pact"
	},
	{
		to: "/atlas",
		label: "Atlas"
	},
	{
		to: "/initiatives",
		label: "Initiatives"
	},
	{
		to: "/timeline",
		label: "Timeline"
	},
	{
		to: "/act",
		label: "Act"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const savedCount = useSaved((s) => s.slugs.length);
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md print:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 text-fg",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OliveMark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-tight",
						children: "Pax Atlas"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: [NAV.map((item) => {
						const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("rounded-md px-3 py-2 text-sm transition-colors duration-[var(--motion-quick)] ease-[var(--ease-out)]", active ? "text-fg" : "text-muted hover:text-fg"),
							children: item.label
						}, item.to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/initiatives",
						search: savedCount > 0 ? { saved: true } : {},
						className: "relative ml-1 flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:text-fg",
						"aria-label": `Saved initiatives, ${savedCount}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: cn("size-4", savedCount > 0 && "fill-primary text-primary") }), savedCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-1.5 top-1.5 min-w-4 rounded-full bg-primary px-1 text-center text-[10px] leading-4 text-primary-fg tabular-nums",
							children: savedCount
						}) : null]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-bg px-4 py-3 md:hidden",
			"aria-label": "Mobile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center rounded-md px-3 text-base text-fg",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/initiatives",
					search: savedCount > 0 ? { saved: true } : {},
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center gap-2 rounded-md px-3 text-base text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }),
						"Saved",
						savedCount > 0 ? ` (${savedCount})` : ""
					]
				})]
			})
		}) : null]
	});
}
var styles_default = "/assets/styles-D0o4un8c.css";
var APP_NAME = "Pax Atlas";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "A living editorial guide to world peace initiatives — UN missions, treaties, and the people building peace."
			},
			{
				name: "theme-color",
				content: "#f2eee6"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#main",
					className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg",
					children: "Skip to content"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-dvh flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$7 = () => import("./routes-ibLpH-ji.mjs");
var Route$7 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./act-B4Ioi5nP.mjs");
var Route$6 = createFileRoute("/act")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Act — Pax Atlas" }] })
});
var $$splitComponentImporter$5 = () => import("./atlas-0aIh9S86.mjs");
function isRegion$1(v) {
	return typeof v === "string" && REGIONS.some((r) => r.id === v);
}
var Route$5 = createFileRoute("/atlas")({
	validateSearch: (search) => isRegion$1(search.region) ? { region: search.region } : {},
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Atlas — Pax Atlas" }] })
});
var $$splitComponentImporter$4 = () => import("./initiatives-UZ5feD1Z.mjs");
var Route$4 = createFileRoute("/initiatives")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./pact-ClqREG6N.mjs");
var Route$3 = createFileRoute("/pact")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "The Pact — Pax Atlas" }, {
		name: "description",
		content: "To All Who Share This Earth — a standing peace agreement initiated by Jon Constantine, open for any person to sign."
	}] })
});
var $$splitComponentImporter$2 = () => import("./timeline-DBzFeqYW.mjs");
var Route$2 = createFileRoute("/timeline")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Timeline — Pax Atlas" }] })
});
var $$splitComponentImporter$1 = () => import("./initiatives.index-DTFRzDbI.mjs");
function isTheme(v) {
	return typeof v === "string" && THEMES.some((t) => t.id === v);
}
function isRegion(v) {
	return typeof v === "string" && REGIONS.some((r) => r.id === v);
}
function parseInitiativesSearch(search) {
	const next = {};
	if (isTheme(search.theme)) next.theme = search.theme;
	if (isRegion(search.region)) next.region = search.region;
	if (typeof search.q === "string" && search.q.length > 0) next.q = search.q;
	if (search.saved === true || search.saved === "true") next.saved = true;
	return next;
}
var Route$1 = createFileRoute("/initiatives/")({
	validateSearch: parseInitiativesSearch,
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Initiatives — Pax Atlas" }] })
});
var $$splitNotFoundComponentImporter = () => import("./initiatives._slug-BPvSHsgh.mjs");
var $$splitComponentImporter = () => import("./initiatives._slug-Cdj6Z0cK.mjs");
var Route = createFileRoute("/initiatives/$slug")({
	loader: ({ params }) => {
		const initiative = initiativeBySlug(params.slug);
		if (!initiative) throw notFound();
		return { initiative };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.initiative.name} — Pax Atlas` : "Pax Atlas" }, {
		name: "description",
		content: loaderData?.initiative.summary ?? ""
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var ActRoute = Route$6.update({
	id: "/act",
	path: "/act",
	getParentRoute: () => Route$8
});
var AtlasRoute = Route$5.update({
	id: "/atlas",
	path: "/atlas",
	getParentRoute: () => Route$8
});
var InitiativesRoute = Route$4.update({
	id: "/initiatives",
	path: "/initiatives",
	getParentRoute: () => Route$8
});
var PactRoute = Route$3.update({
	id: "/pact",
	path: "/pact",
	getParentRoute: () => Route$8
});
var TimelineRoute = Route$2.update({
	id: "/timeline",
	path: "/timeline",
	getParentRoute: () => Route$8
});
var InitiativesIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => InitiativesRoute
});
var InitiativesRouteChildren = {
	InitiativesSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => InitiativesRoute
	}),
	InitiativesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	ActRoute,
	AtlasRoute,
	InitiativesRoute: InitiativesRoute._addFileChildren(InitiativesRouteChildren),
	PactRoute,
	TimelineRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { relatedInitiatives as _, useSaved as a, cn as c, REGIONS as d, STATS as f, regionById as g, initiativesForRegion as h, Route$5 as i, ACTIONS as l, TIMELINE as m, Route as n, Button as o, THEMES as p, Route$1 as r, OliveMark as s, router_exports as t, INITIATIVES as u, themeById as v };
