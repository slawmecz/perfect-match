import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://kojarzeniepar.pl";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

// Bind 1–3 character words to the following word so they do not hang at line end.
// Skip when the short word ends a sentence (only punctuation follows).
const ORPHAN_RE = /(?<=^|\s)([\p{L}\p{N}]{1,3})\s+(?=[\p{L}\p{N}])/gu;

export function noOrphans(text: string): string {
  return text.replace(ORPHAN_RE, "$1\u00A0");
}

export function formatYearsCount(count: number): string {
  if (count === 1) return "1 rok";
  const last = count % 10;
  const lastTwo = count % 100;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) {
    return `${count} lata`;
  }
  return `${count} lat`;
}
