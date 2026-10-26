import { afterEach, describe, expect, it, vi } from "vitest";
import { sitemapXML } from "@/lib/sitemap";

describe("production sitemap address", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("defaults to the current published Finetune site", async () => {
    vi.stubEnv("VITE_SITE_URL", "");
    vi.resetModules();
    const { SITE_URL } = await import("@/lib/site");
    expect(SITE_URL).toBe("https://finetuneelectronics.com");
    expect(sitemapXML(SITE_URL, [{ path: "/about" }])).toContain("<loc>https://finetuneelectronics.com/about</loc>");
  });

  it("preserves a configured GitHub Pages deployment address", async () => {
    vi.stubEnv("VITE_SITE_URL", "https://zhravan.github.io/finetune-electronics-care/");
    vi.resetModules();
    const { SITE_URL } = await import("@/lib/site");
    expect(SITE_URL).toBe("https://zhravan.github.io/finetune-electronics-care");
  });
});

describe("sitemapXML", () => {
  it("keeps the GitHub Pages repository path on every URL", () => {
    const xml = sitemapXML("https://zhravan.github.io/finetune-electronics-care", [{ path: "/about" }]);
    expect(xml).toContain("<loc>https://zhravan.github.io/finetune-electronics-care/about</loc>");
  });

  it("supports a bare custom-domain origin", () => {
    const xml = sitemapXML("https://finetune.example.com/", [{ path: "/about" }]);
    expect(xml).toContain("<loc>https://finetune.example.com/about</loc>");
  });

  it("rejects credentials, query strings and hashes in the base URL", () => {
    expect(() => sitemapXML("https://user:pass@finetune.example.com/", [{ path: "/about" }])).toThrow();
    expect(() => sitemapXML("https://finetune.example.com/?x=1", [{ path: "/about" }])).toThrow();
    expect(() => sitemapXML("https://finetune.example.com/#frag", [{ path: "/about" }])).toThrow();
  });
});
