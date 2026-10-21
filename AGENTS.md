<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Public pages share the root site shell and reusable brand controls so identity and navigation stay consistent.
- Service content lives in a shared catalog rendered through a dynamic service route so each service has a crawlable URL and distinct metadata.
- Public metadata uses relative canonicals; the sitemap and robots.txt use the production origin from src/lib/site.ts (VITE_SITE_URL override), and every route declares staticData.sitemap so pages are listed automatically.
- Enquiry preparation stays browser-only until real company contact details or a delivery service are provided; do not claim submissions are sent.
- GitHub Pages CI explicitly prerenders the public pages and publishes only dist/client at a domain root; a post-build script generates static discovery files because Pages cannot execute server routes.
