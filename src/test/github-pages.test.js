import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { pagesOrigin, preparePages } from '../../scripts/prepare-github-pages.mjs';

describe('GitHub Pages deployment', () => {
  it('requires an explicit root-domain HTTPS deployment address', () => {
    expect(pagesOrigin('https://finetune.github.io/')).toBe('https://finetune.github.io');
    expect(() => pagesOrigin(undefined)).toThrow();
    expect(() => pagesOrigin('https://finetune.github.io/company/')).toThrow();
    expect(() => pagesOrigin('http://finetune.github.io')).toThrow();
  });

  it('exports discovery files with the GitHub Pages address and no old hosting address', async () => {
    const output = await mkdtemp(join(tmpdir(), 'finetune-pages-'));
    try {
      await mkdir(join(output, 'services', 'pcb-assembly'), { recursive: true });
      await writeFile(join(output, 'index.html'), '');
      await writeFile(join(output, 'services', 'pcb-assembly', 'index.html'), '');
      await writeFile(join(output, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://old-host.example/sitemap.xml\n');
      const paths = await preparePages(output, 'https://finetune.github.io');
      expect(paths).toEqual(['/', '/services/pcb-assembly/']);
      const sitemap = await readFile(join(output, 'sitemap.xml'), 'utf8');
      expect(sitemap).toContain('<loc>https://finetune.github.io/</loc>');
      expect(sitemap).toContain('<loc>https://finetune.github.io/services/pcb-assembly/</loc>');
      expect(sitemap).not.toContain('lastmod');
      const robots = await readFile(join(output, 'robots.txt'), 'utf8');
      expect(robots).toContain('Allow: /');
      expect(robots).toContain('Sitemap: https://finetune.github.io/sitemap.xml');
      expect(robots).not.toContain('old-host.example');
    } finally {
      await rm(output, { recursive: true, force: true });
    }
  });
});