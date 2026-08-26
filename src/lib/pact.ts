import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MAX_LOCAL_SIGNATURES, cleanName, isValidName } from "@/data/pact";

export type PactSignature = {
  name: string;
  signedAt: string;
};

type PactState = {
  signatures: PactSignature[];
  sign: (name: string) => { ok: true } | { ok: false; error: string };
  withdraw: (signedAt: string) => void;
};

export const usePact = create<PactState>()(
  persist(
    (set, get) => ({
      signatures: [],
      sign: (raw) => {
        const name = cleanName(raw);
        if (!isValidName(name)) {
          return { ok: false, error: "Enter a name between 2 and 80 characters." };
        }
        const existing = get().signatures;
        if (existing.some((s) => s.name.toLowerCase() === name.toLowerCase())) {
          return { ok: false, error: "That name is already on this device." };
        }
        if (existing.length >= MAX_LOCAL_SIGNATURES) {
          return { ok: false, error: "This device has reached its local signature list." };
        }
        set({
          signatures: [...existing, { name, signedAt: new Date().toISOString() }],
        });
        return { ok: true };
      },
      withdraw: (signedAt) =>
        set((state) => ({
          signatures: state.signatures.filter((s) => s.signedAt !== signedAt),
        })),
    }),
    { name: "pax-atlas-pact" },
  ),
);
