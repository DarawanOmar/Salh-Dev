import { createSearchParamsCache, parseAsStringEnum } from "nuqs/server";

export const coordinatesParsers = {
  tab: parseAsStringEnum(["family_member", "owner", "committee"]),
};
export const coordinatesCache = createSearchParamsCache(coordinatesParsers);
