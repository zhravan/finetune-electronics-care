import { createFileRoute } from '@tanstack/react-router';
import { ServiceGrid } from '@/components/site/service-grid';
import { PageIntro } from '@/components/site/page-intro';
import { ProjectCTA } from '@/components/site/layout';
import { whatsappLink } from '@/lib/whatsapp';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/services/')({ staticData: { sitemap: true }, head: () => pageHead('Electronics design & manufacturing services', 'Explore PCB assembly, box build integration, PCB layout, enclosure design, engineering and component procurement services from Finetune Electronics.', '/services'), component: Services });
function Services() { return <main><PageIntro eyebrow="Our services" title="Connected expertise. Focused delivery." description="Start with the service you need today. Define the next steps around your board, your product and your project requirements."/><section className="site-container pb-24"><ServiceGrid /></section><ProjectCTA /></main>; }
