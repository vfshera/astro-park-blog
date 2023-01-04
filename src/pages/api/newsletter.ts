import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  if (url.pathname !== "/api/newsletter") {
    //invalid request origin
    return {
      body: JSON.stringify({
        message: "Hmm",
      }),
    };
  }

  return {
    body: JSON.stringify({
      message: request.body,
    }),
  };
};
