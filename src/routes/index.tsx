import { createFileRoute } from "@tanstack/react-router";
import {
  Headset, ShieldCheck, Cloud, PhoneCall, Megaphone, Phone, ArrowRight, Mail, ChevronDown,
  Facebook, Instagram, Twitter, Youtube, Linkedin,
} from "lucide-react";
import hero from "@/assets/hero-laptop-logo.jpg";
import skyline from "@/assets/skyline.png";
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
  return <img src={logo} alt="Aspect IT Limited" className="h-14 w-auto shrink-0" />;
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
          <span className="hidden whitespace-nowrap border-l border-border pl-6 text-sm text-muted-foreground xl:block">Business IT Support &amp; Services</span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3 text-foreground">
            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((I, i) => <I key={i} className="h-4 w-4" />)}
          </div>
          <nav className="flex items-center gap-7 whitespace-nowrap text-sm font-semibold uppercase">
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
        <img src={skyline} alt="" width={1920} height={640} className="pointer-events-none absolute bottom-8 left-0 w-[70%] max-h-48 object-cover object-bottom opacity-20" />
        <svg viewBox="0 0 400 200" className="pointer-events-none absolute left-0 top-0 h-48 w-96 fill-primary" preserveAspectRatio="none" aria-hidden><path d="M0 0h260C150 10 60 60 0 140Z" opacity=".9"/><path d="M0 0h300C180 20 80 80 0 180V140C60 70 150 20 260 0Z" opacity=".25"/></svg>
        <svg viewBox="0 0 600 200" className="pointer-events-none absolute bottom-16 right-0 h-40 w-[45%] fill-primary" preserveAspectRatio="none" aria-hidden><path d="M600 20v180H120C300 170 470 110 600 20Z"/><path d="M600 0v20C470 110 300 170 120 200H60C260 180 450 110 600 0Z" opacity=".35"/></svg>
        <div className="relative mx-auto max-w-7xl px-8 pb-40 pt-14">
          <div className="flex items-center gap-6 text-sm font-bold tracking-[0.2em] text-primary">
            IT SUPPORT &amp; MANAGED SERVICES <span className="h-px w-28 bg-primary" />
          </div>
          <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-tight text-navy">
            We are the IT support company for<br /><span className="text-primary">Greater Manchester</span> and<br /><span className="text-primary">West Yorkshire</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-foreground">On-site and remote IT support and services for small and large organisations across Greater Manchester, and West Yorkshire.</p>
          <p className="mt-4 max-w-2xl text-xl text-foreground">We cover Oldham, Bury, Bolton Rochdale, Manchester, Tameside, Salford, Stockport, Huddersfield, Holmfirth and more.</p>
          <div className="mt-8 flex gap-6">
            <a className="flex items-center gap-3 rounded-full bg-primary px-10 py-3.5 font-semibold text-primary-foreground"><Headset className="h-5 w-5" /> Our Services <ArrowRight className="h-4 w-4" /></a>
            <a className="flex items-center gap-3 rounded-full border-2 border-navy px-10 py-3.5 font-semibold text-navy"><Mail className="h-5 w-5" /> Get in Touch</a>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 bg-navy">
        <svg viewBox="0 0 1440 80" className="absolute -top-[79px] left-0 h-20 w-full fill-navy" preserveAspectRatio="none" aria-hidden><path d="M0 40C300 0 600 10 900 30S1300 60 1440 20V80H0Z"/></svg>
        <div className="mx-auto grid max-w-7xl grid-cols-5 divide-x divide-primary-foreground/10 px-8 pb-12 pt-4">
          {services.map(({ icon: I, label }) => (
            <div key={label} className="flex flex-col items-center gap-4">
              <I className={`h-16 w-16 ${label === "IT Services" ? "text-primary" : "text-primary-foreground"}`} strokeWidth={1.75} />
              <span className="text-lg font-bold uppercase text-primary-foreground">{label}</span>
              <span className="h-0.5 w-14 bg-primary" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
