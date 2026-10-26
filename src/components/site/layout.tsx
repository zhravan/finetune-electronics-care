import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Brand } from './brand';
import { services } from '@/lib/services';
import { COMPANY_EMAIL } from '@/lib/company';
import { whatsappLink } from '@/lib/whatsapp';

const nav = [{ to: '/services', label: 'Services' }, { to: '/about', label: 'Company' }, { to: '/project-guide', label: 'Project guide' }, { to: '/careers', label: 'Careers' }] as const;
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl"><div className="site-container flex h-20 items-center justify-between gap-4"><Link to="/" aria-label="Finetune Electronics home" onClick={() => setOpen(false)}><Brand /></Link><nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{nav.map(n => <Link key={n.to} to={n.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: 'text-foreground' }}>{n.label}</Link>)}</nav><div className="flex items-center gap-2"><Button asChild className="h-10 bg-primary text-primary-foreground shadow-none hover:bg-primary/90"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div></div>{open && <nav aria-label="Mobile navigation" className="site-container flex flex-col gap-5 border-t border-border py-6 lg:hidden">{nav.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-lg">{n.label}</Link>)}</nav>}</header>;
}
export function ProjectCTA() {
 return <section className="border-t border-border bg-accent text-accent-foreground"><div className="site-container flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center"><div><p className="eyebrow mb-4">Your next build</p><h2 className="text-3xl font-medium md:text-5xl">Let’s get the details right.</h2></div><Button asChild size="lg" className="h-12"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Discuss your project <ArrowUpRight /></a></Button></div></section>;
}
export function SiteFooter() {
 return <footer className="bg-ink text-ink-foreground">
   <div className="site-container">
     <div className="grid gap-10 border-b border-ink-foreground/20 py-16 md:grid-cols-[1.5fr_1fr] md:items-end md:py-20">
       <div><p className="eyebrow text-accent">Every detail. Every connection.</p><h2 className="footer-title mt-6">Your next build<br/>starts here<span className="text-accent">.</span></h2></div>
       <div className="md:justify-self-end"><p className="eyebrow mb-4 text-ink-foreground/60">Project enquiries / WhatsApp</p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="footer-link block font-mono text-xl">+91 99863 38671</a><a href={`mailto:${COMPANY_EMAIL}`} className="footer-link mt-3 block break-all text-sm">{COMPANY_EMAIL}</a><Button asChild size="lg" className="mt-6 h-12 bg-primary text-primary-foreground shadow-none hover:bg-primary/90"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Start your project <ArrowUpRight /></a></Button></div>
     </div>
     <div className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
       <div><Link to="/" aria-label="Finetune Electronics home"><Brand /></Link><p className="mt-5 text-lg font-medium">Finetune Electronics</p><p className="mt-3 max-w-xs text-sm leading-7 text-ink-foreground/65">Considered design. Connected delivery.<br/>Electronics manufacturing services.</p></div>
       <div><p className="eyebrow mb-6 text-ink-foreground/50">Services</p><div className="flex flex-col items-start gap-3">{services.map(s => <Link key={s.slug} to="/services/$service" params={{ service: s.slug }} className="footer-link text-sm">{s.title}</Link>)}</div></div>
       <div><p className="eyebrow mb-6 text-ink-foreground/50">Finetune</p><div className="flex flex-col items-start gap-3">{nav.filter(n=>n.to!=='/services').map(n=><Link key={n.to} to={n.to} className="footer-link text-sm">{n.label}</Link>)}<a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="footer-link text-sm">WhatsApp us</a></div></div>
     </div>
     <div className="flex flex-col justify-between gap-3 border-t border-ink-foreground/15 py-6 text-xs text-ink-foreground/50 sm:flex-row"><span>© {new Date().getFullYear()} Finetune Electronics</span><span>Service imagery is illustrative.</span></div>
   </div>
 </footer>;
}
