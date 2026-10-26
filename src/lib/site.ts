// Production site origin used for the sitemap and robots.txt.
// Default to the current public site. GitHub Pages builds override VITE_SITE_URL
// with their deployment address, including the repository path where needed.
const configured = (import.meta.env['VITE_SITE_URL'] as string | undefined)?.replace(/\/+$/, '');
export const SITE_URL = configured || 'https://finetune-electronics-care.lovable.app';
