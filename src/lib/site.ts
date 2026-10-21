// Production site origin used for the sitemap and robots.txt.
// GitHub Pages project URLs include the repository path. Override with VITE_SITE_URL
// when using a custom domain or a user/organization Pages site.
const configured = (import.meta.env['VITE_SITE_URL'] as string | undefined)?.replace(/\/+$/, '');
export const SITE_URL = configured || 'https://zhravan.github.io/finetune-electronics-care';
