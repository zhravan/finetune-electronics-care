import { afterEach, expect, it, vi } from 'vitest';

afterEach(() => { vi.unstubAllEnvs(); vi.resetModules(); });

it('uses the production domain for each canonical and Open Graph page URL', async () => {
  vi.stubEnv('VITE_SITE_URL', '');
  const { pageHead } = await import('@/lib/seo');
  const head = pageHead('Services', 'Electronics services', '/services');
  expect(head.links).toEqual([{ rel: 'canonical', href: 'https://finetuneelectronics.com/services' }]);
  expect(head.meta).toContainEqual({ property: 'og:url', content: 'https://finetuneelectronics.com/services' });
});

it('uses the same absolute photo URL for both sharing platforms', async () => {
  vi.stubEnv('VITE_SITE_URL', '');
  const { pageHead } = await import('@/lib/seo');
  const head = pageHead('Assembly', 'Assembly scope', '/services/pcb-assembly', '/share/pcb-assembly.jpg');
  expect(head.meta).toContainEqual({ property: 'og:image', content: 'https://finetuneelectronics.com/share/pcb-assembly.jpg' });
  expect(head.meta).toContainEqual({ name: 'twitter:image', content: 'https://finetuneelectronics.com/share/pcb-assembly.jpg' });
});

it('publishes the confirmed company email and WhatsApp contact', async () => {
  const { organization } = await import('@/lib/company');
  expect(organization.email).toBe('vinod@finetuneelectronics.com');
  expect(organization.telephone).toBe('+919986338671');
  expect(organization).not.toHaveProperty('address');
});