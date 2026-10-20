import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapStaticPaths, sitemapPathForLocation, isSitemapRouteIncluded, sitemapXML, type SitemapEntry } from "@/lib/sitemap";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        const routeId = "/services/$service";
        if (isSitemapRouteIncluded(router.routesById[routeId])) {
          for (const s of services) {
            const location = router.buildLocation({ to: "/services/$service", params: { service: s.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, routeId);
            if (path) entries.push({ path });
          }
        }
        return new Response(sitemapXML(SITE_URL + "/", entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
