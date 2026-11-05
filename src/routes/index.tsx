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

      <section className="contact-panels relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <svg aria-hidden="true" viewBox="0 0 1600 120" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 h-16 w-full sm:h-20">
          <path d="M0 40 C420 0 760 12 1050 48 S1420 82 1600 18" fill="none" stroke="#e5a0a8" strokeWidth="2" opacity=".55" />
          <path d="M0 58 C430 18 760 30 1050 66 S1420 100 1600 36" fill="none" stroke="#b20d26" strokeWidth="5" />
        </svg>
        <div className="relative mx-auto grid max-w-[1500px] items-stretch gap-5 lg:grid-cols-[.95fr_1.05fr] lg:gap-6">
          <div className="contact-feature-panel relative isolate flex min-h-[430px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f3f4f6] px-7 py-12 text-center sm:px-12">
            <MonitorCog className="h-14 w-14 text-primary" strokeWidth={1.8} />
            <h2 className="mt-5 max-w-lg text-4xl font-extrabold uppercase leading-[1.12] tracking-tight text-[#20283a] sm:text-5xl">
              Personalised<br />IT <span className="text-primary">support</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We don’t offer one-size-fits-all packages. Our experts take time to understand your business, goals and workflows — delivering IT support that fits you perfectly.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              Tell us what you need <ArrowRight className="h-4 w-4" />
            </Link>
            <svg aria-hidden="true" viewBox="0 0 500 90" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 h-16 w-[72%]">
              <path d="M0 0 C100 50 235 80 500 90 H0Z" fill="#b20d26" />
              <path d="M0 0 C110 44 250 70 500 82" fill="none" stroke="#ed3048" strokeWidth="7" />
            </svg>
          </div>

          <div id="get-in-touch" className="contact-form-panel rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_12px_36px_rgba(25,35,55,0.07)] sm:px-9 sm:py-11 lg:px-10">
            <h2 className="text-center text-4xl font-extrabold uppercase tracking-tight text-[#20283a] sm:text-5xl">
              Get <span className="text-primary">in touch</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-600 sm:text-base">
              Tell us a little about your business and what you’re looking for. We’ll be happy to talk it through.
            </p>
            <form action="mailto:info@aspectit.co.uk" method="post" encType="text/plain" className="mx-auto mt-7 grid max-w-3xl grid-cols-1 gap-3.5 sm:grid-cols-2">
              <input required name="Name" aria-label="Your name" placeholder="Your Name (required)" className="min-w-0 rounded-full border border-slate-200 bg-[#f5f6f8] px-5 py-3.5 text-sm text-[#20283a] outline-none transition placeholder:text-slate-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
              <input required name="Company" aria-label="Your company name" placeholder="Your Company Name (required)" className="min-w-0 rounded-full border border-slate-200 bg-[#f5f6f8] px-5 py-3.5 text-sm text-[#20283a] outline-none transition placeholder:text-slate-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
              <input required type="email" name="Email" aria-label="Your email" placeholder="Your Email (required)" className="min-w-0 rounded-full border border-slate-200 bg-[#f5f6f8] px-5 py-3.5 text-sm text-[#20283a] outline-none transition placeholder:text-slate-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
              <input required type="tel" name="Telephone" aria-label="Your telephone number" placeholder="Your Telephone Number (required)" className="min-w-0 rounded-full border border-slate-200 bg-[#f5f6f8] px-5 py-3.5 text-sm text-[#20283a] outline-none transition placeholder:text-slate-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10" />
              <textarea required name="Message" aria-label="Your message" rows={4} placeholder="Your Message (required)" className="min-w-0 rounded-[1.25rem] border border-slate-200 bg-[#f5f6f8] px-5 py-4 text-sm text-[#20283a] outline-none transition placeholder:text-slate-500 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 sm:col-span-2" />
              <div className="flex flex-col items-center sm:col-span-2">
                <button type="submit" className="mt-1 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-3.5 text-sm font-bold uppercase text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                  Submit <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-4 text-center text-xs text-slate-500">Submitting opens your email application to send your enquiry.</p>
              </div>
            </form>
          </div>
        </div>
        <svg aria-hidden="true" viewBox="0 0 1600 120" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 h-14 w-full sm:h-20">
          <path d="M0 95 C400 120 800 90 1100 62 S1450 28 1600 48" fill="none" stroke="#e5a0a8" strokeWidth="2" opacity=".5" />
          <path d="M0 112 C400 137 800 107 1100 79 S1450 45 1600 65" fill="none" stroke="#b20d26" strokeWidth="4" />
        </svg>
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

      <section className="social-section relative isolate overflow-hidden px-4 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(120deg,#1d2134_0%,#25283a_55%,#25283a_100%)]" />
        <svg aria-hidden="true" viewBox="0 0 1600 260" preserveAspectRatio="none" className="pointer-events-none absolute -top-1 left-0 -z-10 h-24 w-full sm:h-32">
          <path d="M0 0H1600V24C1250 95 1010 100 760 70C470 34 220 42 0 92Z" fill="#fff" />
          <path d="M0 92C280 42 490 38 760 70C1040 104 1290 88 1600 24" fill="none" stroke="#c51e36" strokeWidth="5" opacity=".9" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 1600 240" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 -z-10 h-28 w-full sm:h-40">
          <path d="M0 78C300 210 610 225 900 160C1190 95 1370 90 1600 140V240H0Z" fill="#a51f2a" opacity=".95" />
          <path d="M0 45C300 175 610 190 900 125C1190 60 1370 55 1600 105" fill="none" stroke="#ef2947" strokeWidth="7" />
          <path d="M0 112C310 225 620 235 900 180C1190 125 1380 122 1600 165" fill="none" stroke="#f45b70" strokeWidth="2" opacity=".8" />
        </svg>
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-12">
          <div className="px-2 py-8 text-center text-white sm:px-8 lg:text-left">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-[#ff526b] sm:text-sm">
              <span className="h-[2px] w-10 bg-[#ff294b]" /> Stay connected
            </p>
            <h2 className="mt-6 text-4xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
              Follow us on<br /><span className="text-[#f02c4b]">social media</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Keep up with company news, useful IT advice and the latest technology updates.
            </p>
            <div className="mt-8 hidden items-center gap-3 lg:flex">
              <span className="h-1 w-16 rounded-full bg-[#ed2948]" />
              <span className="h-1 w-7 rounded-full bg-white/35" />
              <span className="h-1 w-3 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="relative rounded-[2rem] border border-white/70 bg-white/95 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur sm:rounded-[2.5rem] sm:p-6 lg:p-8">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {[
                { name: "LinkedIn", detail: "Company updates and insights", Icon: Linkedin, color: "from-[#0a66c2] to-[#1688e8]", glow: "shadow-[#0a66c2]/20" },
                { name: "Facebook", detail: "News, updates and company life", Icon: Facebook, color: "from-[#0866ff] to-[#2794ff]", glow: "shadow-[#0866ff]/20" },
                { name: "Instagram", detail: "Behind the scenes and team updates", Icon: Instagram, color: "from-[#833ab4] via-[#e1306c] to-[#f77737]", glow: "shadow-[#e1306c]/20" },
                { name: "X", detail: "Latest news and quick updates", Icon: Twitter, color: "from-[#151515] to-[#414141]", glow: "shadow-black/20" },
              ].map(({ name, detail, Icon, color, glow }) => (
                <div key={name} className="group flex min-h-[132px] items-center gap-4 rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-white to-[#f2f4f8] p-4 shadow-[0_8px_24px_rgba(24,38,68,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-5 sm:p-5">
                  <span className={`grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[1.35rem] bg-gradient-to-br text-white shadow-lg transition duration-300 group-hover:scale-105 sm:h-[88px] sm:w-[88px] ${color} ${glow}`}>
                    <Icon className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={2.1} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-extrabold text-[#202438] sm:text-lg">{name}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-600 sm:text-sm">{detail}</span>
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#202438] shadow-sm transition group-hover:bg-primary group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="customer-section relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-24">
        <svg aria-hidden="true" viewBox="0 0 1600 140" preserveAspectRatio="none" className="pointer-events-none absolute right-0 top-0 h-20 w-1/3">
          <path d="M1600 0C1510 72 1390 92 1210 76C1370 86 1510 50 1600 20Z" fill="#b20d26" />
          <path d="M1600 0C1515 48 1410 68 1290 66" fill="none" stroke="#ed3048" strokeWidth="5" />
        </svg>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-primary">Customer success</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight text-[#17233f] sm:text-5xl">
              See how we support <span className="text-primary">our customers</span>
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
              From day-to-day helpdesk support to security, cloud and communications projects, we focus on making technology work better for your organisation.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            <div className="relative isolate flex min-h-[440px] flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#a30b25] via-[#8f1028] to-[#5f1025] p-7 text-white shadow-[0_18px_50px_rgba(35,25,45,0.12)] sm:p-10">
              <div className="relative z-10 flex items-start gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                  <BriefcaseBusiness className="h-9 w-9" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">Explore our<br />case studies</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/85">Discover the different ways our team helps organisations with their technology.</p>
                </div>
              </div>
              <div className="relative z-10 mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "IT Support case studies", Icon: Headset },
                  { label: "Cyber Security case studies", Icon: ShieldCheck },
                  { label: "Cloud Services case studies", Icon: Cloud },
                  { label: "Communications case studies", Icon: PhoneCall },
                ].map(({ label, Icon }) => (
                  <Link key={label} to="/case-studies" className="group flex items-center gap-3 text-sm font-bold uppercase leading-5 transition hover:translate-x-1">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 transition group-hover:bg-white group-hover:text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    {label}
                  </Link>
                ))}
              </div>
              <Link to="/case-studies" className="relative z-10 mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold uppercase text-[#99132b] transition hover:-translate-y-0.5 hover:bg-[#f7e9ec]">
                View all case studies <ArrowRight className="h-4 w-4" />
              </Link>
              <svg aria-hidden="true" viewBox="0 0 600 180" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 right-0 h-36 w-[75%]">
                <path d="M600 0C490 95 340 150 80 180H0C250 140 430 70 600 0Z" fill="#d41435" opacity=".65" />
                <path d="M600 34C490 112 370 155 180 180" fill="none" stroke="#ff526b" strokeWidth="5" />
              </svg>
              <BriefcaseBusiness className="pointer-events-none absolute right-8 top-28 h-28 w-28 text-white/[0.09]" strokeWidth={1.1} />
            </div>
            <div className="relative isolate min-h-[440px] overflow-hidden rounded-[2rem] bg-[#f5f6f8] shadow-[0_18px_50px_rgba(35,45,65,0.10)]">
              <div className="relative z-10 flex h-full min-h-[440px] flex-col justify-center px-7 py-10 sm:px-10 lg:w-[62%] lg:py-12">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">The Aspect IT approach</p>
                <h3 className="mt-5 text-3xl font-extrabold uppercase leading-[1.12] text-[#17233f] sm:text-4xl">
                  Straightforward support. <span className="text-primary">Long-term partnerships.</span>
                </h3>
                <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                  We take the time to understand how your business works, then recommend technology and support that makes a genuine difference.
                </p>
                <Link to="/about" className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-extrabold uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#8f1028]">
                  About Aspect IT <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block">
                <img src={hero} alt="Aspect IT branded laptop and headset in an office" className="h-full w-full object-cover object-[58%_center]" />
                <svg aria-hidden="true" viewBox="0 0 240 700" preserveAspectRatio="none" className="absolute inset-y-0 -left-1 h-full w-24">
                  <path d="M240 0C155 120 160 260 125 385C95 500 65 620 0 700H0V0Z" fill="#f5f6f8" />
                  <path d="M240 0C155 120 160 260 125 385C95 500 65 620 0 700" fill="none" stroke="#c10d2b" strokeWidth="10" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 h-2 w-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary" />
            </div>
          </div>
        </div>
        <svg aria-hidden="true" viewBox="0 0 1600 110" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 h-12 w-full">
          <path d="M0 105C380 50 760 40 1080 72C1300 95 1460 85 1600 52" fill="none" stroke="#e5a0a8" strokeWidth="2" opacity=".45" />
        </svg>
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

      <section className="final-contact relative isolate overflow-hidden bg-white px-4 py-16 sm:px-8 sm:py-20">
        <svg aria-hidden="true" viewBox="0 0 1600 100" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 h-12 w-full">
          <path d="M0 70C260 8 500 12 760 58S1240 100 1600 20" fill="none" stroke="#e5a0a8" strokeWidth="2" opacity=".65" />
          <path d="M0 78C260 16 500 20 760 66S1240 108 1600 28" fill="none" stroke="#b20d26" strokeWidth="4" />
        </svg>
        <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-7 py-9 shadow-[0_12px_35px_rgba(20,35,60,0.08)] sm:px-9 sm:py-10">
            <div className="flex items-center gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#fff1f2] text-primary">
                <Headset className="h-9 w-9" strokeWidth={1.8} />
              </span>
              <span className="h-14 w-1 rounded-full bg-primary" />
              <div>
                <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#17233f] sm:text-4xl">Contact <span className="text-primary">us</span></h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Get in touch with our team for support, advice or a no-obligation chat.</p>
              </div>
            </div>
            <div className="mt-7 grid gap-3.5 sm:pl-5">
              <a href="tel:01612419050" className="flex items-center gap-4 text-base font-semibold text-[#17233f] transition hover:text-primary">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-50 text-primary"><Phone className="h-5 w-5" /></span>
                0161 241 9050
              </a>
              <a href="mailto:info@aspectit.co.uk" className="flex items-center gap-4 text-base text-[#17233f] transition hover:text-primary">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-50 text-primary"><Mail className="h-5 w-5" /></span>
                info@aspectit.co.uk
              </a>
              <div className="flex items-start gap-4 text-base leading-6 text-[#17233f]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-50 text-primary"><MapPin className="h-5 w-5" /></span>
                <span>County End Business Centre, Jackson Street, Springhead, Oldham OL4 4TZ</span>
              </div>
            </div>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-extrabold uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#8f1028]">
              Contact our team <ArrowRight className="h-4 w-4" />
            </Link>
            <svg aria-hidden="true" viewBox="0 0 500 100" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 right-0 h-16 w-2/5">
              <path d="M500 0C390 62 250 90 0 100H500Z" fill="#b20d26" opacity=".09" />
              <path d="M500 0C390 62 250 90 0 100" fill="none" stroke="#b20d26" strokeWidth="4" />
            </svg>
          </div>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f8fa] px-7 py-9 shadow-[0_12px_35px_rgba(20,35,60,0.08)] sm:px-9 sm:py-10">
            <div className="flex items-center gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-sm">
                <PhoneCall className="h-9 w-9" strokeWidth={1.8} />
              </span>
              <span className="h-14 w-1 rounded-full bg-primary" />
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-[#17233f] sm:text-4xl">Get a <span className="text-primary">call back</span></h2>
            </div>
            <p className="mt-8 max-w-xl text-base leading-7 text-slate-600">Fill in our contact form and let us know the best way to reach you. We’ll get back to you as soon as we can.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-primary bg-white px-7 py-3.5 text-sm font-extrabold uppercase text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white">
              Request a call back <ArrowRight className="h-4 w-4" />
            </Link>
            <svg aria-hidden="true" viewBox="0 0 500 100" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 right-0 h-16 w-2/5">
              <path d="M500 0C390 62 250 90 0 100H500Z" fill="#b20d26" opacity=".08" />
              <path d="M500 0C390 62 250 90 0 100" fill="none" stroke="#ed3048" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
