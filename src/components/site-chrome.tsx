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
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Aspect IT Limited" className="h-12 w-auto rounded bg-background p-1.5" />
          <p className="mt-4 text-sm opacity-80">Supporting businesses of all sizes across Greater Manchester and West Yorkshire since 2003.</p>
          <div className="mt-5 flex gap-3">{socialIcons.map((I, i) => <I key={i} className="h-4 w-4 opacity-80" />)}</div>
        </div>
        <div>
          <h3 className="font-semibold uppercase text-primary-foreground">Services</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {services.slice(0, 6).map((s) => <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:underline">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold uppercase">Company</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/case-studies" className="hover:underline">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold uppercase">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" /> 0161 000 0000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" /> hello@aspect-it.co.uk</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" /> Oldham, Greater Manchester</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">© {new Date().getFullYear()} Aspect IT Limited. All rights reserved.</div>
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
