import GhostContentApi, { GhostAPI } from "@tryghost/content-api";

export const ghost: GhostAPI = new GhostContentApi({
  url: import.meta.env.GHOST_CMS_DOMAIN,
  key: import.meta.env.GHOST_CMS_CONTENT_API_KEY,
  version: "v5.0",
});
