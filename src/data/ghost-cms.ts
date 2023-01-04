import GhostContentApi, { GhostAPI } from "@tryghost/content-api";

export const ghost: GhostAPI = new GhostContentApi({
  url: import.meta.env.GHOST_CMS_DOMAIN,
  key: import.meta.env.GHOST_CMS_CONTENT_API_KEY,
  version: "v5.0",
});

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const mm = date.toLocaleString("default", {
    month: "short",
  });

  let dd = date.getDate();

  return `${dd} ${mm} ${date.getFullYear()}`;
}
