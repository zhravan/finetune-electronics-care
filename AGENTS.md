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
- Editorial headline typography and restrained interaction styles are defined globally, with fonts loaded in the root head, so every public page shares the same hierarchy and reduced-motion behavior.
- Service content lives in a shared catalog rendered through a dynamic service route so each service has a crawlable URL and distinct metadata.
- Public metadata, structured-data identifiers and discovery URLs share src/lib/site.ts with VITE_SITE_URL deployment overrides so canonical, sharing and sitemap URLs use one absolute production address; every route declares staticData.sitemap so pages are listed automatically.
- Leaf routes with photographs use cropped public share renditions of their displayed images; root metadata never supplies a share image, avoiding cross-page preview overrides.
- Confirmed company contact facts are shared through src/lib/company.ts for visible contact details and Organization structured data so they stay consistent.
- Service-specific review guidance lives in a typed companion catalog rendered by shared sections; describe unverified capabilities as scope to agree, not guaranteed specifications.
- Enquiries go through a WhatsApp deep link (wa.me/919986338671, pre-filled message); there is no contact page and nothing is submitted from the site.
- GitHub Pages CI explicitly prerenders the public pages and publishes only dist/client at a domain root; a post-build script generates static discovery files because Pages cannot execute server routes.
