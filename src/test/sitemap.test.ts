import { describe, expect, it } from "vitest";
import { sitemapXML } from "@/lib/sitemap";

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
