import homepage from "../../public/optimizer.html?raw";

interface HomepageEvent {
  url: URL;
  req: { method: string };
}

export default async function homepageMiddleware(
  event: HomepageEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET") return next();
  const path = event.url.pathname;
  if (path !== "/" && path !== "/index.html") return next();
  return new Response(homepage, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
