import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, relative, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

export function pagesOrigin(value) {
  const candidate = value?.trim() || 'https://zhravan.github.io/finetune-electronics-care/';
  const url = new URL(candidate);
  if (url.protocol !== 'https:' || url.search || url.hash || url.username || url.password) {
    throw new Error('VITE_SITE_URL must be a public HTTPS GitHub Pages URL or custom domain.');
  }
  // GitHub project Pages sites live below /<repository>/; custom domains and
  // username.github.io sites live at /. Keep the path for sitemap generation.
  const pathname = url.pathname.replace(/\/+$/, '');
  return { origin: url.origin, basePath: pathname };
}

export async function preparePages(output = '.output/public', siteUrl = process.env.VITE_SITE_URL) {
  const { origin, basePath } = pagesOrigin(siteUrl);
  const root = resolve(output);
  const paths = [];
  async function scan(folder) {
    for (const entry of await readdir(folder, { withFileTypes: true })) {
      const file = resolve(folder, entry.name);
      if (entry.isDirectory()) await scan(file);
      else if (entry.name === 'index.html') {
        const route = relative(root, dirname(file)).split('\\').join('/');
        if (route === 'sitemap.xml') continue;
        paths.push(route ? `/${route}/` : '/');
        if (paths.length > 1000) throw new Error('Static page limit exceeded.');
      }
    }
  }
  await scan(root);
  if (!paths.includes('/')) throw new Error('Missing prerendered homepage; refusing to deploy.');
  const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
  const publicUrl = (path) => `${origin}${basePath}${path === '/' ? '/' : path}`;
  await writeFile(resolve(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.sort().map(path => `<url><loc>${escape(publicUrl(path))}</loc></url>`).join('')}</urlset>`);
  const robots = await readFile(resolve(root, 'robots.txt'), 'utf8');
  await writeFile(resolve(root, 'robots.txt'), `${robots.replace(/^Sitemap:.*\n?/gm, '').trim()}\n\nSitemap: ${publicUrl('/sitemap.xml')}\n`);
  await writeFile(resolve(root, '.nojekyll'), '');
  return paths;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const paths = await preparePages(process.argv[2] || '.output/public', process.env.VITE_SITE_URL);
  console.log(`Prepared ${paths.length} static Finetune pages for GitHub Pages.`);
}
