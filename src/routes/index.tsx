import { createFileRoute } from "@tanstack/react-router";
import {
  Headset, ShieldCheck, Cloud, PhoneCall, Megaphone, ArrowRight, Mail,
} from "lucide-react";
import hero from "@/assets/hero-laptop-logo.jpg";
import skyline from "@/assets/skyline.png";
import logo from "@/assets/aspect-logo.png";
import { HeaderNavigation } from "@/components/header-navigation";
import { MobileNavigation } from "@/components/mobile-navigation";
import { socialIcons } from "@/components/nav-data";

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
  return <img src={logo} alt="Aspect IT Limited" className="h-10 w-auto shrink-0 sm:h-12 lg:h-14" />;
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
    <div className="min-h-screen overflow-x-hidden bg-background font-sans">
      <header className="anim-fade-in relative z-30 mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-8 lg:flex lg:justify-between lg:gap-6 lg:py-4">
        <div className="flex min-w-0 shrink items-center gap-6">
          <Logo />
          <span className="hidden min-w-0 truncate border-l border-border pl-6 text-sm text-muted-foreground xl:block">Business IT Support &amp; Services</span>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2 lg:gap-3">
          <div className="hidden gap-3 text-foreground lg:flex">
            {socialIcons.map((I, i) => <I key={i} className="h-4 w-4" />)}
          </div>
          <div className="hidden lg:block">
            <HeaderNavigation />
          </div>
          <MobileNavigation />
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img src={hero} alt="Laptop and headset on office desk" width={1600} height={912} className="anim-slide-left absolute inset-y-0 right-0 hidden h-full w-[70%] object-cover lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-background via-background/80 to-transparent lg:block" />
        <img src={skyline} alt="" width={1920} height={640} className="pointer-events-none absolute bottom-8 left-0 hidden w-[70%] max-h-48 object-cover object-bottom opacity-20 anim-fade-in lg:block" style={{ animationDelay: "600ms" }} />
        <svg viewBox="0 0 400 200" className="anim-swoosh pointer-events-none absolute left-0 top-0 h-14 w-24 fill-primary sm:h-32 sm:w-64 lg:h-48 lg:w-96" preserveAspectRatio="none" aria-hidden><path d="M0 0h260C150 10 60 60 0 140Z" opacity=".9"/><path d="M0 0h300C180 20 80 80 0 180V140C60 70 150 20 260 0Z" opacity=".25"/></svg>
        <svg viewBox="0 0 600 200" style={{ animationDelay: "400ms" }} className="anim-swoosh pointer-events-none absolute bottom-16 right-0 h-20 w-[55%] fill-primary sm:h-28 lg:h-40 lg:w-[45%]" preserveAspectRatio="none" aria-hidden><path d="M600 20v180H120C300 170 470 110 600 20Z"/><path d="M600 0v20C470 110 300 170 120 200H60C260 180 450 110 600 0Z" opacity=".35"/></svg>
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-8 lg:pb-40 lg:pt-14">
          <div style={{ animationDelay: "150ms" }} className="anim-fade-up flex items-center gap-3 text-[11px] font-bold tracking-[0.18em] text-primary sm:gap-6 sm:text-sm sm:tracking-[0.2em]">
            IT SUPPORT &amp; MANAGED SERVICES <span className="h-px w-12 bg-primary sm:w-28" />
          </div>
          <h1 style={{ animationDelay: "300ms" }} className="anim-fade-up mt-4 max-w-5xl text-[28px] font-extrabold leading-[1.15] text-navy sm:mt-6 sm:text-4xl lg:text-5xl lg:leading-tight">
            We are the IT support company for{" "}
            <br className="hidden lg:inline" />
            <span className="text-primary">Greater Manchester</span> and{" "}
            <br className="hidden lg:inline" />
            <span className="text-primary">West Yorkshire</span>
          </h1>
          <p style={{ animationDelay: "450ms" }} className="anim-fade-up mt-4 max-w-2xl text-base text-foreground sm:mt-6 sm:text-xl">On-site and remote IT support and services for small and large organisations across Greater Manchester, and West Yorkshire.</p>
          <p style={{ animationDelay: "550ms" }} className="anim-fade-up mt-3 max-w-2xl text-base text-foreground sm:mt-4 sm:text-xl">We cover Oldham, Bury, Bolton Rochdale, Manchester, Tameside, Salford, Stockport, Huddersfield, Holmfirth and more.</p>
          <div style={{ animationDelay: "700ms" }} className="anim-fade-up mt-7 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:gap-6">
            <a className="flex cursor-pointer items-center justify-center gap-3 group rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-10"><Headset className="h-5 w-5" /> Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            <a className="flex cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-navy px-8 py-3.5 font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-navy hover:text-primary-foreground sm:px-10"><Mail className="h-5 w-5" /> Get in Touch</a>
          </div>
        </div>
        <div className="relative lg:hidden">
          <img src={hero} alt="Laptop and headset on office desk" width={1600} height={912} className="anim-slide-left h-44 w-full object-cover object-center sm:h-60" />
        </div>
      </section>

      <section aria-label="Our services" className="service-strip relative -mt-10 bg-navy lg:-mt-20">
        <svg viewBox="0 0 1440 80" className="absolute -top-[39px] left-0 h-10 w-full fill-navy sm:-top-[59px] sm:h-14 lg:-top-[79px] lg:h-20" preserveAspectRatio="none" aria-hidden><path d="M0 40C300 0 600 10 900 30S1300 60 1440 20V80H0Z"/></svg>
        <div className="service-strip-grid mx-auto max-w-7xl">
          {services.map(({ icon: I, label }, i) => (
            <div key={label} style={{ animationDelay: `${900 + i * 120}ms` }} className="service-strip-item anim-fade-up group">
              <div className="service-strip-icon">
                <I className={`h-10 w-10 transition-transform duration-300 group-hover:-translate-y-1 sm:h-14 sm:w-14 ${label === "IT Services" ? "text-primary" : "text-primary-foreground"}`} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span className="service-strip-label text-primary-foreground">{label}</span>
              <span className="service-strip-accent bg-primary" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
