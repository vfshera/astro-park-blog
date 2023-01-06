import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  if (url.pathname !== "/api/newsletter") {
    //invalid request origin
    return new Response(null, { status: 400 });
  }

  if (request.headers.get("Content-Type") === "application/json") {
    const sub: { name: string; email: string } = await request.json();

    //subscribe user

    return new Response(
      JSON.stringify({
        message: `Hello ${sub.name}, Thanks for subscribing with ${sub.email}.`,
      }),
      { status: 200 }
    );
  }

  // otherwise

  return new Response(null, { status: 400 });
};
