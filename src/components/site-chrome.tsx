import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/aspect-logo.png";
import { HeaderNavigation } from "@/components/header-navigation";
import { MobileNavigation } from "@/components/mobile-navigation";
import { socialIcons } from "@/components/nav-data";
import { services } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="anim-fade-in relative z-30 grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-8 lg:flex lg:justify-between lg:gap-6 lg:py-4">
      <div className="flex min-w-0 shrink items-center gap-6">
        <Link to="/" aria-label="Aspect IT home"><img src={logo} alt="Aspect IT Limited" className="h-10 w-auto shrink-0 sm:h-12 lg:h-14" /></Link>
        <span className="hidden min-w-0 truncate border-l border-border pl-6 text-sm text-muted-foreground xl:block">Business IT Support &amp; Services</span>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2 lg:gap-3">
        <div className="hidden gap-3 text-foreground lg:flex">
          {socialIcons.map((I, i) => <I key={i} className="h-4 w-4" />)}
        </div>
        <div className="hidden lg:block"><HeaderNavigation /></div>
        <MobileNavigation />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#101f38] text-primary-foreground">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.9fr_1.25fr] lg:gap-0 lg:py-16">
        <div className="lg:pr-10">
          <img src={logo} alt="Aspect IT Limited" className="h-12 w-auto rounded bg-white p-1.5" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">Supporting businesses of all sizes across Greater Manchester and West Yorkshire since 2003.</p>
          <div className="mt-5 flex items-center gap-2.5">
            {socialIcons.map((I, i) => <span key={i} className="grid h-9 w-9 place-items-center rounded-lg border border-white/35 text-white/85 transition hover:border-primary hover:bg-primary"><I className="h-4 w-4" /></span>)}
          </div>
        </div>
        <div className="border-white/20 md:border-l md:pl-8 lg:px-8">
          <h3 className="flex items-center gap-3 font-bold uppercase"><span className="h-1 w-8 bg-primary" />Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            {services.slice(0, 6).map((s) => <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="transition hover:text-white">{s.title}</Link></li>)}
          </ul>
        </div>
        <div className="border-white/20 md:border-l md:pl-8 lg:px-8">
          <h3 className="flex items-center gap-3 font-bold uppercase"><span className="h-1 w-8 bg-primary" />Company</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            <li><Link to="/about" className="transition hover:text-white">About Us</Link></li>
            <li><Link to="/case-studies" className="transition hover:text-white">Case Studies</Link></li>
            <li><Link to="/blog" className="transition hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div className="border-white/20 md:border-l md:pl-8 lg:pl-8">
          <h3 className="flex items-center gap-3 font-bold uppercase"><span className="h-1 w-8 bg-primary" />Get in touch</h3>
          <ul className="mt-5 space-y-3.5 text-sm leading-6 text-white/80">
            <li className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-white" /><a href="tel:01612419050" className="transition hover:text-white">0161 241 9050</a></li>
            <li className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-white" /><a href="mailto:info@aspectit.co.uk" className="transition hover:text-white">info@aspectit.co.uk</a></li>
            <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-white" /><span>County End Business Centre, Jackson Street, Springhead, Oldham OL4 4TZ</span></li>
          </ul>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-8 left-0 h-5 w-full overflow-hidden">
        <svg viewBox="0 0 1600 40" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 8C300 42 550 42 820 16S1300 2 1600 24" fill="none" stroke="#b20d26" strokeWidth="8" />
          <path d="M0 20C300 54 550 54 820 28S1300 14 1600 36" fill="none" stroke="#ed3048" strokeWidth="2" />
        </svg>
      </div>
      <div className="border-t border-white/15 px-5 py-5 text-center text-xs text-white/60">© {new Date().getFullYear()} Aspect IT Limited. All rights reserved.</div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      <svg viewBox="0 0 400 200" className="pointer-events-none absolute left-0 top-0 h-24 w-48 fill-primary sm:h-32 sm:w-64" preserveAspectRatio="none" aria-hidden><path d="M0 0h260C150 10 60 60 0 140Z" opacity=".9"/></svg>
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="anim-fade-up text-xs font-bold tracking-[0.2em] text-primary-foreground/80 sm:text-sm">{eyebrow}</div>
        <h1 className="anim-fade-up mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl" style={{ animationDelay: "120ms" }}>{title}</h1>
        {children && <div className="anim-fade-up mt-5 max-w-2xl text-base opacity-85 sm:text-lg" style={{ animationDelay: "240ms" }}>{children}</div>}
      </div>
    </section>
  );
}

const field = "w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <p className="rounded-xl bg-background p-6 text-center font-semibold text-navy">Thanks! We'll be in touch shortly.</p>;
  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <input required aria-label="Your name" placeholder="Your Name (required)" className={field} />
      <input required aria-label="Company name" placeholder="Your Company Name (required)" className={field} />
      <input required type="email" aria-label="Email" placeholder="Your Email (required)" className={field} />
      <input required type="tel" aria-label="Telephone" placeholder="Your Telephone Number (required)" className={field} />
      <textarea required aria-label="Message" rows={4} placeholder="Your Message (required)" className={`${field} rounded-2xl`} />
      <button type="submit" className="mx-auto mt-1 rounded-full bg-primary px-8 py-2.5 text-sm font-semibold uppercase text-primary-foreground transition-transform hover:scale-105">Submit</button>
    </form>
  );
}
