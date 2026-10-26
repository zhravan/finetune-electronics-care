import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env["GITHUB_PAGES"] === "true";
const siteUrl = (process.env["VITE_SITE_URL"] || "https://zhravan.github.io/finetune-electronics-care").replace(/\/+$/, "");
const basePath = isGitHubPages ? new URL(siteUrl).pathname.replace(/\/+$/, "") + "/" : "/";

export default defineConfig({
  // GitHub Pages project sites are hosted under /<repository>/, not the domain root.
  vite: {
    base: basePath,
  },
  tanstackStart: {
    server: { entry: "server" },
    ...(isGitHubPages ? {
      pages: ['/', '/about', '/careers', '/project-guide', '/services', '/services/pcb-assembly', '/services/box-build', '/services/pcb-layout', '/services/mechanical-enclosures', '/services/engineering', '/services/component-procurement'].map(path => ({ path })),
      prerender: { enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false, failOnError: true },
    } : {}),
  },
});
