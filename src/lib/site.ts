// Production site origin used for the sitemap and robots.txt.
// Override with VITE_SITE_URL (e.g. when a custom domain is connected).
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, '') || 'https://finetune-electronics-care.lovable.app';
