export const PACT = {
  title: "To All Who Share This Earth",
  preamble:
    "This document serves as a universal declaration of intent, goodwill, and enduring quiet: a respective peace agreement established on behalf of Jon Constantine, offered to every individual across all nations, borders, and territories who chooses to set their name alongside it.",
  articles: [
    {
      number: "I",
      title: "The Scope of Jurisdiction",
      kind: "prose" as const,
      body: "This agreement acknowledges no boundaries, political demarcations, or sovereign limits. It applies strictly to the global territorial jurisdiction—the shared atmosphere, land, and water of our collective home. In signing, an individual aligns their personal jurisdiction with the universal right to exist free from violence, coercion, and state-sanctioned hostility.",
    },
    {
      number: "II",
      title: "The Pact of Individual Sovereignty",
      kind: "clauses" as const,
      intro: "Peace does not begin in war rooms or assemblies; it manifests in the daily decisions of the individual.",
      clauses: [
        {
          title: "Mutual Non-Aggression",
          text: "Every signatory pledges to forgo violence, physical intimidation, and systematic harm against any fellow person, recognizing that human dignity transcends geopolitical rivalries.",
        },
        {
          title: "Shared Stewardship",
          text: "Signatories commit to protecting the common resources of the planet, ensuring that land, air, and water remain preserved for successive generations rather than weaponized or degraded.",
        },
        {
          title: "Restorative Dialogue",
          text: "In moments of friction, signatories agree to seek resolution through mediation, direct conversation, and mutual understanding rather than escalation.",
        },
      ],
    },
    {
      number: "III",
      title: "The Standing Offer",
      kind: "prose" as const,
      body: "This text is not a top-down mandate; it is an open-ended invitation. It carries equal weight whether signed by one person or one billion. By affixing your name, you declare your personal sovereignty to be an instrument of peace, aligning your actions with the protection of life across the entire globe.",
    },
  ],
  epigraph: "Peace is not the absence of conflict, but the deliberate decision to meet it without destruction.",
  initiator: "Jon Constantine",
} as const;

export const MAX_LOCAL_SIGNATURES = 12;

export function cleanName(raw: string) {
  return raw.replace(/\s+/g, " ").trim();
}

export function isValidName(name: string) {
  if (name.length < 2 || name.length > 80) return false;
  if (/https?:\/\//i.test(name) || /[<>]/.test(name)) return false;
  return true;
}
