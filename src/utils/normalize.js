export const toArray = (raw) => {
  if (Array.isArray(raw)) return raw;
  if (Array.isArray(raw?.data)) return raw.data;
  if (Array.isArray(raw?.results)) return raw.results;
  if (Array.isArray(raw?.items)) return raw.items;

  if (raw?.data && typeof raw.data === "object") {
    for (const v of Object.values(raw.data)) {
    if (Array.isArray(v)) return v;
    }
  }
  return [];
};
export const firstObject = (raw) => {
  if (typeof raw === "object" && !Array.isArray(raw)) return raw;
  if (Array.isArray(raw) && raw.length) return raw[0];
  if (typeof raw?.data === "string") return { about: raw.data };
  if (typeof raw?.data === "object") return raw.data;
  return {};
};