import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
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
