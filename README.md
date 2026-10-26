# Finetune Electronics

Service-focused electronics design and manufacturing website.

## GitHub Pages deployment checklist

- [ ] Connect/export this project to your GitHub repository.
- [ ] Use a repository named `YOUR_USERNAME.github.io` (or `YOUR_ORGANIZATION.github.io`), or configure a custom domain serving the site at `/`. This setup does **not** support `username.github.io/repository/` subpaths.
- [ ] In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
- [ ] Open **Settings → Secrets and variables → Actions → Variables** and add `VITE_SITE_URL`, containing your actual HTTPS site address, without a repository path. Example: `https://YOUR_USERNAME.github.io`.
- [ ] If using a custom domain, configure it under **Settings → Pages**, complete DNS verification, and enable HTTPS.
- [ ] If your default branch is not `main`, update the workflow's branch filter.
- [ ] Push the setup to the default branch, or run **Actions → Deploy Finetune to GitHub Pages → Run workflow**.
- [ ] Confirm the workflow succeeds, then open every page directly and refresh it. Check `/sitemap.xml`, `/robots.txt`, photographs, and the WhatsApp enquiry links.
- [ ] Submit the new sitemap address in Google Search Console.

The workflow prerenders all 12 public pages and publishes only `dist/client`. It creates `.nojekyll`, exports a static XML sitemap, and sets the robots sitemap address from `VITE_SITE_URL`. The address is required; no hosting-provider URL is substituted in the GitHub deployment. No badge is added by this deployment.

GitHub Pages serves static files only. Enquiries go through a WhatsApp link (wa.me/919986338671) with a pre-filled message; nothing is sent from the site itself. Deployment has not been run from this project editor; repository settings and a successful Actions run are still required.

## Local development

Requires Node.js 22 and Bun.

```sh
bun install
bun run dev
bun run test
```

Built with TanStack Start, TypeScript, React and Tailwind CSS.
