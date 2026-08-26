import { create } from "zustand";
import { persist } from "zustand/middleware";

type SavedState = {
  slugs: string[];
  toggle: (slug: string) => void;
};

export const useSaved = create<SavedState>()(
  persist(
    (set) => ({
      slugs: [],
      toggle: (slug) =>
        set((state) => ({
          slugs: state.slugs.includes(slug) ? state.slugs.filter((s) => s !== slug) : [...state.slugs, slug],
        })),
    }),
    { name: "pax-atlas-saved" },
  ),
);
