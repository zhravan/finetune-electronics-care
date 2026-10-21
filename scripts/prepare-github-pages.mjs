import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, relative, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

export function pagesOrigin(value) {
  if (!value) throw new Error('Set the GitHub repository variable VITE_SITE_URL to your public GitHub Pages address.');
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
    throw new Error('Use an HTTPS site at the domain root: an owner.github.io repository or a custom domain. Repository subpaths are not supported by this setup.');
  }
  return url.origin;
}

export async function preparePages(output, siteUrl) {
  const origin = pagesOrigin(siteUrl);
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
  await writeFile(resolve(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.sort().map(path => `<url><loc>${escape(origin + path)}</loc></url>`).join('')}</urlset>`);
  const robots = await readFile(resolve(root, 'robots.txt'), 'utf8');
  await writeFile(resolve(root, 'robots.txt'), `${robots.replace(/^Sitemap:.*\n?/gm, '').trim()}\n\nSitemap: ${origin}/sitemap.xml\n`);
  await writeFile(resolve(root, '.nojekyll'), '');
  return paths;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const paths = await preparePages('dist/client', process.env.VITE_SITE_URL);
  console.log(`Prepared ${paths.length} static Finetune pages for GitHub Pages.`);
}