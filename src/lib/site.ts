// Production site origin used for discovery, canonical and sharing URLs.
// GitHub Pages builds override VITE_SITE_URL
// with their deployment address, including the repository path where needed.
const configured = (import.meta.env['VITE_SITE_URL'] as string | undefined)?.replace(/\/+$/, '');
export const SITE_URL = configured || 'https://finetuneelectronics.com';

export function siteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
