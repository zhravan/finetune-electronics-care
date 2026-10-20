import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';
export function ServiceGrid({ limit }: { limit?: number }) {
 return <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{services.slice(0, limit).map((s,i)=><Link to="/services/$service" params={{ service:s.slug }} key={s.slug} className="group block"><div className="aspect-[4/3] overflow-hidden rounded-md bg-secondary"><img src={s.image} alt={s.alt} loading="lazy" width={1440} height={1000} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/></div><div className="mt-5 flex items-start justify-between gap-3"><div><p className="eyebrow text-muted-foreground">0{i+1} / {s.label}</p><h3 className="mt-2 text-xl font-medium">{s.title}</h3></div><ArrowUpRight className="mt-6 size-5 shrink-0 transition-transform group-hover:translate-x-1"/></div></Link>)}</div>;
}
