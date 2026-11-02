import { createFileRoute } from "@tanstack/react-router";
import {
  Headset, ShieldCheck, Cloud, PhoneCall, Megaphone, Phone, ArrowRight, Mail, ChevronDown,
  Facebook, Instagram, Twitter, Youtube, Linkedin,
} from "lucide-react";
import hero from "@/assets/hero-laptop-logo.jpg";
import logo from "@/assets/aspect-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aspect IT Limited | IT Support Greater Manchester & West Yorkshire" },
      { name: "description", content: "On-site and remote IT support and managed services across Greater Manchester and West Yorkshire." },
      { property: "og:title", content: "Aspect IT Limited | Business IT Support" },
      { property: "og:description", content: "IT support company for Greater Manchester and West Yorkshire." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return <img src={logo} alt="Aspect IT Limited" className="h-16 w-auto" />;
}

const services = [
  { icon: Headset, label: "IT Services" },
  { icon: ShieldCheck, label: "Managed Security" },
  { icon: Cloud, label: "Cloud Services" },
  { icon: PhoneCall, label: "Communications" },
  { icon: Megaphone, label: "Marketing" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-6">
          <Logo />
          <span className="hidden border-l border-border pl-6 text-sm text-muted-foreground lg:block">Business IT Support &amp; Services</span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3 text-foreground">
            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((I, i) => <I key={i} className="h-4 w-4" />)}
          </div>
          <nav className="flex items-center gap-8 text-sm font-semibold uppercase">
            <a className="border-b-2 border-primary pb-1">Home</a>
            <a className="flex items-center gap-1">Services <ChevronDown className="h-4 w-4" /></a>
            <a className="flex items-center gap-1">About Us <ChevronDown className="h-4 w-4" /></a>
            <a>Case Studies</a>
            <a>Blog</a>
            <a className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-primary-foreground"><Phone className="h-4 w-4" /> Contact Us</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img src={hero} alt="Laptop and headset on office desk" width={1600} height={912} className="absolute inset-y-0 right-0 h-full w-[70%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <svg viewBox="0 0 1200 120" className="pointer-events-none absolute bottom-10 left-0 h-28 w-[75%] fill-muted-foreground/25" preserveAspectRatio="none" aria-hidden><path d="M0 120V90h20V60h12v30h18V75h25v45h10V70h8V40h6v30h10v50h30V85h20v35h40V95h15V60h4V30h4v30h6v60h30V80h18v-30h10v30h14v40h20V70h6V20h8v50h10v50h20V60h10V35h12v25h12v60h30V50h20v70h40V75h4a35 35 0 0 1 70 0h4v45h30V60h6V40h6v20h8v60h40c40-40 120-40 160 0h40V95h30v25h80V100h40v20Z"/></svg>
        <div className="relative mx-auto max-w-7xl px-8 pb-32 pt-14">
          <div className="flex items-center gap-6 text-sm font-bold tracking-[0.2em] text-primary">
            IT SUPPORT &amp; MANAGED SERVICES <span className="h-px w-28 bg-primary" />
          </div>
          <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-tight text-navy">
            We are the IT support company for <span className="text-primary">Greater Manchester</span> and <span className="text-primary">West Yorkshire</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-foreground">On-site and remote IT support and services for small and large organisations across Greater Manchester, and West Yorkshire.</p>
          <p className="mt-4 max-w-2xl text-xl text-foreground">We cover Oldham, Bury, Bolton Rochdale, Manchester, Tameside, Salford, Stockport, Huddersfield, Holmfirth and more.</p>
          <div className="mt-8 flex gap-6">
            <a className="flex items-center gap-3 rounded-full bg-primary px-10 py-3.5 font-semibold text-primary-foreground"><Headset className="h-5 w-5" /> Our Services <ArrowRight className="h-4 w-4" /></a>
            <a className="flex items-center gap-3 rounded-full border-2 border-navy px-10 py-3.5 font-semibold text-navy"><Mail className="h-5 w-5" /> Get in Touch</a>
          </div>
        </div>
      </section>

      <section className="-mt-12 relative rounded-t-[50%_3rem] bg-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-5 divide-x divide-primary-foreground/10 px-8 py-12">
          {services.map(({ icon: I, label }) => (
            <div key={label} className="flex flex-col items-center gap-4">
              <I className="h-16 w-16 text-primary" strokeWidth={1.5} />
              <span className="text-lg font-bold uppercase text-primary-foreground">{label}</span>
              <span className="h-0.5 w-14 bg-primary" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
