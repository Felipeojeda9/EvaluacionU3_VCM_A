const API_BASE = "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1";
const TOKEN    = import.meta.env.VITE_API_TOKEN || "ipss.get";
async function fetchJSON (endpoint) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    headers: {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/json",
    },
  });
  if (!res.ok) {
  const txt = await res.text();
  throw new Error(`[${res.status}] ${txt}`);
  }
  return res.json();
}
export const getProductos = () => fetchJSON("products-services/");
export const getAboutUs   = () => fetchJSON("about-us/");
export const getFAQ       = () => fetchJSON("faq/");
