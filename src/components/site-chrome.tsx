import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Building2, ChevronRight, Layers, Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="relative isolate overflow-hidden bg-[#061426] text-white">
      {/* Pale skyline and sweeping red-and-white roofline */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-36 overflow-hidden sm:h-40">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-transparent" />
        <svg viewBox="0 0 1600 180" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <g fill="#cbd0d6" opacity=".72">
            <path d="M24 120V62h24V40h12v22h16v58zm60 0V45h22V24h10v21h18v75zm64 0V72h18V50h12v22h20v48zm68 0V32h32V14h12v18h20v88zm82 0V62h20V42h12v20h22v58zm70 0V40h26V18h14v22h22v80zm78 0V72h22V48h12v24h20v48zm76 0V30h30V8h14v22h22v90zm82 0V58h22V38h12v20h20v62zm72 0V44h28V20h12v24h22v76zm80 0V68h20V46h12v22h20v46zm74 0V34h30V12h12v22h22v88zm82 0V64h22V42h12v22h20v56zm74 0V40h28V18h12v22h22v78zm82 0V70h20V48h12v22h20v48zm76 0V30h28V8h14v22h22v90zm80 0V60h22V38h12v22h20v60zm74 0V42h28V20h12v22h22v76zm78 0V68h20V46h12v22h20v46zm76 0V34h30V12h12v22h22v88zm80 0V58h22V36h12v22h20v62zm76 0V42h26V20h12v22h22v76zm76 0V64h20V42h12v22h20v56z"/>
          </g>
          <path d="M0 116C270 40 520 56 790 104S1260 150 1600 28V180H0Z" fill="#061426"/>
          <path d="M0 112C270 36 520 52 790 100S1260 146 1600 24" fill="none" stroke="#f8fafc" strokeWidth="18"/>
          <path d="M0 128C270 52 520 68 790 116S1260 162 1600 40" fill="none" stroke="#e5092d" strokeWidth="8"/>
          <path d="M0 137C270 61 520 77 790 125S1260 171 1600 49" fill="none" stroke="#ff526b" strokeWidth="2"/>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[1500px] gap-10 px-6 pb-16 pt-40 sm:px-10 sm:pt-44 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.35fr] lg:gap-0 lg:px-12 lg:pb-20">
        <div className="lg:pr-12">
          <Link to="/" aria-label="Aspect IT home" className="inline-block">
            <img src={logo} alt="Aspect IT Limited" className="h-16 w-auto object-contain sm:h-[4.5rem]" />
          </Link>
          <p className="mt-5 max-w-sm text-base leading-7 text-white/90">
            Supporting businesses of all sizes across Greater Manchester and West Yorkshire since 2003.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {socialIcons.map((Icon, i) => (
              <span key={i} className="grid h-11 w-11 place-items-center rounded-xl border border-white/75 text-white transition duration-200 hover:-translate-y-1 hover:border-[#ed1236] hover:bg-[#ed1236]">
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/30 pt-7 md:border-t-0 md:pt-0 lg:border-l lg:px-10 lg:pt-1">
          <h3 className="flex items-center gap-4 text-xl font-extrabold uppercase tracking-wide">
            <Layers className="h-10 w-10 shrink-0 text-[#ed1236]" strokeWidth={2.2} /> Services
          </h3>
          <ul className="mt-5 space-y-3 text-base text-white/90">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group flex items-center gap-3 transition hover:text-white">
                  <ChevronRight className="h-5 w-5 shrink-0 text-[#ed1236] transition group-hover:translate-x-1" />{s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/30 pt-7 md:border-t-0 md:pt-0 lg:border-l lg:px-10 lg:pt-1">
          <h3 className="flex items-center gap-4 text-xl font-extrabold uppercase tracking-wide">
            <Building2 className="h-10 w-10 shrink-0 text-[#ed1236]" strokeWidth={2.2} /> Company
          </h3>
          <ul className="mt-5 space-y-3 text-base text-white/90">
            {[
              { label: "About Us", to: "/about" },
              { label: "Case Studies", to: "/case-studies" },
              { label: "Blog", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="group flex items-center gap-3 transition hover:text-white">
                  <ChevronRight className="h-5 w-5 shrink-0 text-[#ed1236] transition group-hover:translate-x-1" />{item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/30 pt-7 md:border-t-0 md:pt-0 lg:border-l lg:pl-10 lg:pt-1">
          <h3 className="flex items-center gap-4 text-xl font-extrabold uppercase tracking-wide">
            <Mail className="h-10 w-10 shrink-0 text-[#ed1236]" strokeWidth={2.2} /> Get in touch
          </h3>
          <ul className="mt-5 space-y-3.5 text-base leading-7 text-white/90">
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15"><Phone className="h-6 w-6" /></span>
              <a href="tel:01612419050" className="transition hover:text-[#ff526b]">0161 241 9050</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15"><Mail className="h-6 w-6" /></span>
              <a href="mailto:info@aspectit.co.uk" className="break-all transition hover:text-[#ff526b]">info@aspectit.co.uk</a>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15"><MapPin className="h-6 w-6" /></span>
              <span>County End Business Centre, Jackson Street, Springhead, Oldham OL4 4TZ</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/20 px-5 py-6 text-center">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-20 overflow-hidden">
          <svg viewBox="0 0 1600 120" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0 0C280 74 520 104 820 90S1300 60 1600 0V120H0Z" fill="#9f001e" opacity=".48"/>
            <path d="M0 0C280 74 520 104 820 90S1300 60 1600 0" fill="none" stroke="#ed1236" strokeWidth="12"/>
            <path d="M0 12C280 86 520 116 820 102S1300 72 1600 12" fill="none" stroke="#ff526b" strokeWidth="2"/>
          </svg>
        </div>
        <p className="relative z-10 text-sm font-medium text-white/85">© {new Date().getFullYear()} Aspect IT Limited. All rights reserved.</p>
      </div>
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
