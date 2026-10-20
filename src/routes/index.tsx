import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Finetune Electronics — Electronics Manufacturing Services" },
      {
        name: "description",
        content:
          "PCB assembly, box build, PCB layout, enclosures, engineering and component procurement — from prototype to production.",
      },
      { property: "og:title", content: "Finetune Electronics — Electronics Manufacturing Services" },
      {
        property: "og:description",
        content: "Prototype-to-production electronics manufacturing. Precise, fast, dependable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { t: "PCB Assembly", d: "Manual and machine SMT / THT assembly for prototypes and volume runs." },
  { t: "Box Build & Integration", d: "Complete product assembly, wiring harnesses, testing and packaging." },
  { t: "PCB Layout", d: "Multilayer, high-speed and mixed-signal layouts designed for manufacturability." },
  { t: "Mechanical Enclosures", d: "Custom enclosure design and fabrication that fits your product." },
  { t: "Engineering Solutions", d: "Hardware design, firmware and test fixtures from concept to validation." },
  { t: "Component Procurement", d: "Genuine parts sourced reliably from authorised distributors." },
];

const stats = [
  ["48h", "Prototype turnaround"],
  ["0201", "Smallest package"],
  ["99.8%", "First-pass yield"],
  ["End-to-end", "Design to delivery"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 font-medium tracking-tight">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-primary">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            Finetune
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#careers" className="transition-colors hover:text-foreground">Careers</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-85"
          >
            Get a quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-36">
        <p className="animate-rise font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Electronics Manufacturing Services
        </p>
        <h1 className="animate-rise mt-6 max-w-4xl text-5xl font-medium leading-[1.02] md:text-7xl [animation-delay:100ms]">
          From prototype to production,{" "}
          <span className="text-muted-foreground">finely tuned.</span>
        </h1>
        <div className="animate-rise mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between [animation-delay:200ms]">
          <p className="max-w-md text-lg text-muted-foreground">
            We build your electronics with uncompromising quality, on-time delivery and honest pricing.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="animate-rise overflow-hidden rounded-3xl [animation-delay:300ms]">
          <img src={hero} alt="Close-up of an assembled circuit board" width={1600} height={1008} className="h-[420px] w-full object-cover md:h-[560px]" />
        </div>
        <div className="grid grid-cols-2 border-b border-border md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="py-10">
              <div className="text-3xl font-medium tracking-tight">{v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Motto */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Our motto</p>
        <p className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          We meet and exceed every prototype assembly need.{" "}
          <span className="text-muted-foreground">
            Quality, delivery, service and price — combined into exceptional value for our customers.
          </span>
        </p>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-medium md:text-5xl">Services</h2>
          <span className="font-mono text-xs text-muted-foreground">06</span>
        </div>
        <div className="mt-12 border-t border-border">
          {services.map((s, i) => (
            <div
              key={s.t}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-border py-8 transition-colors hover:bg-secondary/60 md:px-4"
            >
              <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                0{i + 1}
              </span>
              <h3 className="col-span-10 text-2xl font-medium md:col-span-5">{s.t}</h3>
              <p className="col-span-12 text-muted-foreground md:col-span-5">{s.d}</p>
              <ArrowUpRight className="col-span-1 hidden h-5 w-5 justify-self-end text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-foreground md:block" />
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-8 rounded-3xl bg-secondary p-10 md:grid-cols-2 md:p-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">We're hiring</p>
            <h2 className="mt-4 text-3xl font-medium md:text-4xl">Join the team.</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>ITI Electronics and Diploma in Electronics candidates for assembly and testing.</p>
            <p>B.Com graduates for accounts and office administration.</p>
            <a href="mailto:careers@finetuneelectronics.com" className="inline-flex items-center gap-2 font-medium text-foreground underline-offset-4 hover:underline">
              Send your resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <h2 className="max-w-3xl text-5xl font-medium leading-[1.05] md:text-7xl">
            Have a board to build?
          </h2>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:hello@finetuneelectronics.com" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground">
              hello@finetuneelectronics.com <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="tel:+910000000000" className="inline-flex items-center rounded-full border border-ink-foreground/20 px-6 py-3 text-sm">
              +91 00000 00000
            </a>
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-ink-foreground/10 pt-8 text-sm opacity-60 sm:flex-row">
            <span>© {new Date().getFullYear()} Finetune Electronics</span>
            <span>Bengaluru, India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
