/**
 * Utility to merge Tailwind class names: clsx handles conditionals/arrays, twMerge resolves conflicts
 * (e.g. "p-2" and "p-4" -> "p-4"). Use for dynamic className in components.
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
