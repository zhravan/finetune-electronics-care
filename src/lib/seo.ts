import { siteUrl } from './site';

export function pageHead(title: string, description: string, path: string, imagePath?: string) {
  const fullTitle = `${title} — Finetune Electronics`;
  const url = siteUrl(path);
  const image = imagePath ? siteUrl(imagePath) : undefined;
  return {
    meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: url }, { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' }, ...(image ? [{ property: 'og:image', content: image }, { name: 'twitter:image', content: image }, { property: 'og:image:width', content: '1200' }, { property: 'og:image:height', content: '630' }, { property: 'og:image:alt', content: `${title} — illustrative Finetune Electronics service imagery` }] : [])],
    links: [{ rel: 'canonical', href: url }],
  };
}
