import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, Clock3, BriefcaseBusiness, BadgeCheck, House,
  Headset, ShieldCheck, Cloud, PhoneCall, Megaphone, Linkedin, Facebook,
  Instagram, Twitter, Mail, MapPin, Phone, MonitorCog, LockKeyhole,
  Database, Globe2,
} from "lucide-react";
import hero from "@/assets/hero-laptop-logo.jpg";
import skyline from "@/assets/skyline.png";
import logo from "@/assets/aspect-logo.png";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { services, serviceGroups } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aspect IT Limited | IT Support Greater Manchester & West Yorkshire" },
      { name: "description", content: "On-site and remote IT support and managed services across Greater Manchester and West Yorkshire. Supporting businesses since 2003." },
      { property: "og:title", content: "Aspect IT Limited | Business IT Support" },
      { property: "og:description", content: "IT support company for Greater Manchester and West Yorkshire." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const serviceHighlights = [
  { icon: Headset, label: "IT Services", detail: "IT support, consultancy and projects", color: "bg-[#a51f2a]" },
  { icon: ShieldCheck, label: "Managed Security", detail: "Cyber security and protection", color: "bg-[#39965c]" },
  { icon: Cloud, label: "Cloud Services", detail: "Microsoft 365, hosting and backup", color: "bg-[#1685df]" },
  { icon: PhoneCall, label: "Communications", detail: "VoIP, broadband and connectivity", color: "bg-[#617b91]" },
  { icon: Megaphone, label: "Marketing", detail: "Websites and social media", color: "bg-[#123c70]" },
];

const values = [
  { icon: Clock3, title: "We respond", text: "Our helpdesk team work both onsite and remotely, so you know and trust us.", color: "bg-[#c94f1c]" },
  { icon: BriefcaseBusiness, title: "Professional", text: "Over 23 years of experience supporting all types of companies.", color: "bg-[#ffb642]" },
  { icon: BadgeCheck, title: "Value driven", text: "Professional service and practical advice, delivered with value in mind.", color: "bg-[#5689aa]" },
  { icon: House, title: "One company", text: "Everything you need under one roof — IT support, websites, VoIP and internet.", color: "bg-[#a0bb70]" },
];

const serviceColumns = [
  { title: "IT Services", icon: Headset, lines: ["IT Support", "IT Consultancy", "IT Projects", "Network Installation", "Hardware & Software"] },
  { title: "Managed Security", icon: ShieldCheck, lines: ["Cyber Security", "Cyber Essentials", "Anti-virus Solutions", "Network Security"] },
  { title: "Cloud Services", icon: Cloud, lines: ["Microsoft 365", "Cloud Server Hosting", "Spam Email Filtering", "Server Imaging", "Online Data Backup"] },
  { title: "Communications", icon: PhoneCall, lines: ["VoIP Services", "Internet Connectivity", "Office Wi-Fi", "Handsets & Headsets"] },
  { title: "Marketing", icon: Megaphone, lines: ["Website Design", "eCommerce Websites", "Social Media Management", "WordPress Websites"] },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-[#25283a]">
      <SiteHeader />

      <section className="hero-section relative isolate overflow-hidden">
        <img src={hero} alt="Laptop and headset on an office desk" className="absolute inset-y-0 right-0 -z-20 hidden h-full w-[68%] object-cover lg:block" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-white via-white/95 to-white/10 lg:block" />
        <img src={skyline} alt="" className="pointer-events-none absolute bottom-0 left-0 -z-10 hidden h-36 w-[72%] object-cover object-bottom opacity-25 lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 -z-10 hidden h-32 w-[42%] lg:block">
          <svg viewBox="0 0 620 180" preserveAspectRatio="none" className="h-full w-full fill-primary">
            <path d="M620 0 C500 74 350 120 80 180 H0 C250 145 445 82 620 0Z" opacity=".16" />
            <path d="M620 34 C500 100 370 143 180 180 H120 C330 138 480 90 620 34Z" opacity=".32" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 lg:min-h-[590px] lg:pb-36 lg:pt-24">
          <p className="anim-fade-up text-xs font-bold tracking-[.22em] text-primary sm:text-sm">IT SUPPORT &amp; MANAGED SERVICES</p>
          <h1 className="anim-fade-up mt-5 max-w-4xl text-4xl font-extrabold leading-[1.12] text-[#25283a] sm:text-5xl lg:text-6xl">
            Your business deserves <span className="text-primary">IT that works.</span>
          </h1>
          <p className="anim-fade-up mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            On-site and remote IT support and services for small and large organisations across Greater Manchester and West Yorkshire.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Supporting businesses in Oldham, Bury, Bolton, Rochdale, Manchester, Tameside, Salford, Stockport, Huddersfield, Holmfirth and beyond.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/services/it-support" className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#25283a] px-8 py-4 font-semibold text-[#25283a] transition hover:bg-[#25283a] hover:text-white">
              <Mail className="h-4 w-4" /> Get in touch
            </Link>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-1px] left-0 z-10 h-14 w-full fill-[#25283a] sm:h-20 lg:h-28"
        >
          <path d="M0 58 C210 18 410 8 625 30 C850 54 1040 86 1225 58 C1320 44 1390 23 1440 12 V110 H0 Z" />
        </svg>
        <svg
          viewBox="0 0 600 180"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 right-0 z-0 hidden h-28 w-[42%] fill-primary opacity-20 lg:block"
        >
          <path d="M600 0 C480 80 330 130 80 180 H0 C250 145 440 80 600 0Z" />
        </svg>
      </section>

      <section aria-label="Our service areas" className="service-ribbon relative bg-[#25283a] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-3 lg:grid-cols-5 lg:py-12">
          {serviceHighlights.map(({ icon: Icon, label, detail }, i) => (
            <Link key={label} to="/services" className="group flex flex-col items-center px-3 text-center">
              <Icon className={`h-10 w-10 transition group-hover:-translate-y-1 ${i === 0 ? "text-primary" : "text-white"}`} strokeWidth={1.6} />
              <span className="mt-4 text-sm font-bold uppercase tracking-wide">{label}</span>
              <span className="mt-2 max-w-[190px] text-xs leading-5 text-white/70">{detail}</span>
              <span className="mt-4 h-1 w-9 bg-primary transition-all group-hover:w-16" />
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-section relative isolate mx-auto max-w-[1500px] overflow-hidden px-3 py-16 sm:px-6 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 hidden h-48 w-[38%] opacity-[.07] lg:block">
          <svg viewBox="0 0 520 180" className="h-full w-full fill-primary"><path d="M520 0 C400 80 280 130 30 180 H0 C240 135 390 70 520 0Z" /><path d="M520 28 C410 100 300 145 110 180 H70 C260 140 410 80 520 28Z" /></svg>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[.2em] text-primary">EXPERIENCE YOU CAN RELY ON</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-black sm:text-5xl">
            We have been supporting<br className="hidden sm:block" /> <span className="text-primary">businesses of all sizes</span> since 2003!
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
            We build long-term partnerships with our clients, providing IT support and services that grow with you in a cost-effective way. Read more about our history and story to understand how we can work with your company.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 bg-[#292b40] px-7 py-4 text-sm font-bold uppercase text-white transition hover:bg-primary">
            Read all about our company <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {values.map(({ icon: Icon, title, text, color }) => (
            <article key={title} className={`relative min-h-[270px] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] p-7 text-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${color}`}>
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full border-[18px] border-white/10" />
              <Icon className="h-16 w-16" strokeWidth={1.8} />
              <h3 className="mt-6 text-2xl font-extrabold uppercase">{title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/95">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-panels px-3 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-2">
          <div className="relative isolate flex min-h-[440px] flex-col items-center justify-center overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-[#e9e9e9] px-7 py-12 text-center sm:px-12">
            <span aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border-[22px] border-primary/10" />
            <MonitorCog className="h-14 w-14 text-primary" />
            <h2 className="mt-5 max-w-lg text-4xl font-extrabold uppercase leading-tight text-primary sm:text-5xl">Personalised<br />IT support</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
              We don’t offer one-size-fits-all packages. Our experts take time to understand your business, goals and workflows — delivering IT support that fits you perfectly.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase text-white transition hover:scale-[1.03]">
              Tell us what you need <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div id="get-in-touch" className="relative isolate overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-[#e9e9e9] px-6 py-10 sm:px-10 sm:py-12">
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full border-[22px] border-primary/10" />
            <h2 className="text-center text-4xl font-extrabold uppercase text-primary sm:text-5xl">Get in touch</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-600 sm:text-base">
              Tell us a little about your business and what you’re looking for. We’ll be happy to talk it through.
            </p>
            <form action="mailto:info@aspectit.co.uk" method="post" encType="text/plain" className="mx-auto mt-6 flex max-w-2xl flex-col gap-3">
              <input required name="Name" aria-label="Your name" placeholder="Your Name (required)" className="rounded-full border border-[#ccc] bg-transparent px-4 py-3 text-sm outline-none focus:border-primary" />
              <input required name="Company" aria-label="Your company name" placeholder="Your Company Name (required)" className="rounded-full border border-[#ccc] bg-transparent px-4 py-3 text-sm outline-none focus:border-primary" />
              <input required type="email" name="Email" aria-label="Your email" placeholder="Your Email (required)" className="rounded-full border border-[#ccc] bg-transparent px-4 py-3 text-sm outline-none focus:border-primary" />
              <input required type="tel" name="Telephone" aria-label="Your telephone number" placeholder="Your Telephone Number (required)" className="rounded-full border border-[#ccc] bg-transparent px-4 py-3 text-sm outline-none focus:border-primary" />
              <textarea required name="Message" aria-label="Your message" rows={4} placeholder="Your Message (required)" className="rounded-2xl border border-[#ccc] bg-transparent px-4 py-3 text-sm outline-none focus:border-primary" />
              <button type="submit" className="mx-auto mt-1 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-white transition hover:scale-105">Submit</button>
            </form>
            <p className="mt-4 text-center text-xs text-slate-500">Submitting opens your email application to send your enquiry.</p>
          </div>
        </div>
      </section>

      <section className="partners-section relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div aria-hidden="true" className="partners-sweep partners-sweep-top" />
        <div aria-hidden="true" className="partners-sweep partners-sweep-bottom" />
        <div className="relative z-10 mx-auto max-w-[1500px] text-center">
          <p className="partners-eyebrow"><span />OUR PARTNERS<span /></p>
          <h2 className="partners-heading mt-5 text-3xl font-extrabold uppercase leading-tight text-[#101525] sm:text-4xl lg:text-5xl">
            We work with <span>trusted &amp; expert</span> suppliers
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-slate-700 sm:text-lg">
            We work with established technology providers to bring dependable solutions, support and expertise to your business.
          </p>
          <div className="partners-grid mt-14 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <a href="https://www.microsoft.com/" target="_blank" rel="noreferrer" aria-label="Microsoft website" className="partner-card partner-card-1">
              <span className="partner-logo microsoft-logo" aria-hidden="true"><span className="microsoft-mark"><i /><i /><i /><i /></span><span>Microsoft</span></span>
              <span className="partner-card-glint" />
            </a>
            <a href="https://www.3cx.com/" target="_blank" rel="noreferrer" aria-label="3CX website" className="partner-card partner-card-2">
              <span className="partner-logo threecx-logo" aria-hidden="true"><span>3</span>CX</span>
              <span className="partner-card-glint" />
            </a>
            <a href="https://www.eset.com/" target="_blank" rel="noreferrer" aria-label="ESET website" className="partner-card partner-card-3">
              <span className="partner-logo eset-logo" aria-hidden="true">eset</span>
              <span className="partner-card-glint" />
            </a>
            <a href="https://www.ncsc.gov.uk/cyberessentials/overview" target="_blank" rel="noreferrer" aria-label="Cyber Essentials information" className="partner-card partner-card-4">
              <span className="partner-logo cyber-logo" aria-hidden="true"><span className="cyber-shield"><ShieldCheck /></span><span>Cyber<br />Essentials</span></span>
              <span className="partner-card-glint" />
            </a>
          </div>
          <div className="partners-pagination mt-12" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </section>

      <section className="social-section px-3 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-2">
          <div className="relative isolate flex min-h-[330px] flex-col items-center justify-center overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-[#e9e9e9] px-8 py-12 text-center">
            <span aria-hidden="true" className="pointer-events-none absolute -left-14 -top-14 h-44 w-44 rounded-full border-[20px] border-primary/10" />
            <h2 className="text-4xl font-extrabold uppercase leading-tight text-primary sm:text-5xl">Follow us on<br />social media</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-700">Keep up with company news, useful IT advice and the latest technology updates.</p>
          </div>
          <div className="grid min-h-[330px] grid-cols-2 gap-5 rounded-tl-[3rem] rounded-br-[3rem] bg-[#e9e9e9] p-8 sm:p-10">
            {[{ name: "LinkedIn", Icon: Linkedin }, { name: "Facebook", Icon: Facebook }, { name: "Instagram", Icon: Instagram }, { name: "X", Icon: Twitter }].map(({ name, Icon }) => (
              <div key={name} className="flex flex-col items-center justify-center gap-3 text-[#163e70]">
                <span className="grid h-24 w-24 place-items-center rounded-3xl bg-white shadow-sm sm:h-28 sm:w-28"><Icon className="h-14 w-14 sm:h-16 sm:w-16" /></span>
                <span className="text-sm font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customer-section bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold uppercase text-black sm:text-5xl">See how we support <span className="text-primary">our customers</span></h2>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              From day-to-day helpdesk support to security, cloud and communications projects, we focus on making technology work better for your organisation.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#8f2024] p-8 text-white sm:p-10">
              <h3 className="text-2xl font-extrabold uppercase">Explore our case studies</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">Discover the different ways our team helps organisations with their technology.</p>
              <div className="mt-7 space-y-4">
                {["IT Support", "Cyber Security", "Cloud Services", "Communications"].map((label) => (
                  <Link key={label} to="/case-studies" className="flex items-center gap-4 text-lg font-bold uppercase transition hover:translate-x-1">
                    <CheckCircle2 className="h-6 w-6 shrink-0" /> {label} case studies
                  </Link>
                ))}
              </div>
              <Link to="/case-studies" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase underline underline-offset-4">View all case studies <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-[#5689aa] p-8 text-white sm:p-10">
              <p className="text-xs font-bold tracking-[.2em] text-white/75">THE ASPECT IT APPROACH</p>
              <h3 className="mt-4 text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Straightforward support. Long-term partnerships.</h3>
              <p className="mt-5 text-base leading-8 text-white/90">
                We take the time to understand how your business works, then recommend technology and support that makes a genuine difference.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-bold uppercase text-[#25283a] transition hover:bg-[#25283a] hover:text-white">
                About Aspect IT <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="service-directory bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold uppercase text-black sm:text-4xl">Find the right <span className="text-primary">IT services</span> for your company</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {serviceColumns.map(({ title, icon: Icon, lines }) => (
              <div key={title} className="text-center">
                <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-tl-[2rem] rounded-br-[2rem] bg-primary text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"><Icon className="h-14 w-14" strokeWidth={1.6} /><span aria-hidden="true" className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 bg-primary" /></div>
                <h3 className="mt-6 text-base font-extrabold uppercase text-black">{title}</h3>
                <ul className="mt-5 space-y-4 text-sm text-slate-700">
                  {lines.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase text-white transition hover:scale-[1.03]">Browse all services <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="final-contact px-3 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-2">
          <div className="relative isolate flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-[#f0f0f0] px-8 py-12 text-center">
            <Globe2 className="h-14 w-14 text-primary" />
            <h2 className="mt-5 text-4xl font-extrabold uppercase text-primary">Contact us</h2>
            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <p className="flex items-center justify-center gap-2 font-semibold"><Phone className="h-4 w-4 text-primary" /> 0161 241 9050</p>
              <p className="flex items-center justify-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@aspectit.co.uk</p>
              <p className="flex items-center justify-center gap-2"><MapPin className="h-4 w-4 text-primary" /> County End Business Centre, Jackson Street, Springhead, Oldham OL4 4TZ</p>
            </div>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold uppercase text-white">Contact our team <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative isolate flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-[#f0f0f0] px-8 py-12 text-center">
            <Megaphone className="h-14 w-14 text-[#123c70]" />
            <h2 className="mt-5 text-4xl font-extrabold uppercase text-primary">Get a call back</h2>
            <p className="mt-3 text-sm text-slate-600">Fill in our contact form and let us know the best way to reach you.</p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase text-white">Request a call back <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
