import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts ONLY the specified searchParams as strings.
 * @param searchParams - Next.js searchParams object
 * @param keys - Array of keys to extract (e.g., ["search", "hasFlat", "page"])
 * @returns Object with { [key]: string } (empty string if not found)
 */
type ParamConfig<T extends string> = T | { key: T; defaultValue: string };

export async function getParams<T extends string>(
  searchParams: any,
  config: ParamConfig<T>[]
): Promise<Record<T, string>> {
  const params = await searchParams;
  const result = {} as Record<T, string>;

  for (const item of config) {
    if (typeof item === "string") {
      // Simple string case
      result[item] = params?.[item]?.toString() || "";
    } else {
      // Object with defaultValue case
      result[item.key] = params?.[item.key]?.toString() || item.defaultValue;
    }
  }

  return result;
}

export const dataFilteredSend = (data: any) => {
  const dataFilteredSend: any = {};
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      dataFilteredSend[key] = value;
    }
  });
  return dataFilteredSend;
};
