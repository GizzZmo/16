import { cn } from "@/lib/utils";

export function OliveMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("text-primary", className)}
    >
      <path
        d="M6 26c6-2 10-8 12-14 1.4-4.2 2-8 2-8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16.2 14.2c2.4-1.6 5.4-1.6 7.2.2M14.6 17.6c2.6-1.2 5.4-.8 7 1.2M12.8 21c2.4-1 4.8-.4 6.2 1.4M17.8 10.8c2-1.8 4.8-2.2 6.6-.6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <ellipse cx="22.6" cy="16.4" rx="1.1" ry="1.6" fill="currentColor" transform="rotate(-28 22.6 16.4)" />
    </svg>
  );
}
