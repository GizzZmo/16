import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix a site-root path with Vite's `base` (GitHub Pages serves the app under `/16/`). */
export function withBase(path: string): string {
  if (!path || /^(https?:)?\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL ?? "/";
  const rooted = path.startsWith("/") ? path.slice(1) : path;
  return `${base.endsWith("/") ? base : `${base}/`}${rooted}`;
}
