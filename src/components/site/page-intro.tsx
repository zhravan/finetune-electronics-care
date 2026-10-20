export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
 return <section className="site-container py-16 md:py-24"><p className="eyebrow text-muted-foreground">{eyebrow}</p><h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.1] md:text-6xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p></section>;
}
