import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight, Headset, Laptop, Monitor, ShieldCheck, Wrench, Cloud, Shield, Phone, Wifi, Globe, Share2, Code2, Server, BadgeCheck, ChartNoAxesCombined, ClipboardList, Database, MonitorSmartphone, type LucideIcon } from "lucide-react";
import { ContactForm, PageHero } from "@/components/site-chrome";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} | Aspect IT Limited` : "Service not found | Aspect IT Limited";
    const desc = s?.summary ?? "This service could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(s ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="px-5 py-24 text-center">
      <h1 className="text-3xl font-bold text-navy">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">View all services</Link>
    </div>
  ),
  component: ServicePage,
});

const supportHighlights = [
  { title: "Helpdesk Support", detail: "Fast, friendly issue resolution", Icon: Headset },
  { title: "Device Management", detail: "Keep your systems secure and up to date", Icon: Laptop },
  { title: "Monitoring & Patching", detail: "Proactive support and security updates", Icon: ShieldCheck },
  { title: "On-Site & Remote Support", detail: "Flexible help when you need it", Icon: Wrench },
];

function SupportHero({ summary }: { summary: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07172b] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-36 h-64 w-[30rem] -rotate-[15deg] rounded-br-[100%] bg-gradient-to-br from-[#a80025] via-[#d50932] to-transparent opacity-90" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_62%_42%,rgba(23,66,96,0.34),transparent_42%),linear-gradient(110deg,#061426_0%,#0b1d32_56%,#071426_100%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-7 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:min-h-[430px] lg:grid-cols-[0.88fr_1.35fr_0.92fr] lg:gap-6 lg:py-14">
        <div className="relative z-10 max-w-xl">
          <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.22em] text-white/80 sm:text-sm">
            <span className="h-7 w-1.5 rounded-full bg-[#ed1236]" /> IT SERVICES
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.7rem]">
            IT <span className="text-[#f0143d]">Support</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/85 sm:text-lg">{summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#e5092d] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-[#c90025]">
              <Headset className="h-4 w-4" /> Get support
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/55 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Our services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div aria-hidden="true" className="absolute -inset-[2px] rounded-[1.35rem] border border-[#ed1236]/70 shadow-[0_0_22px_rgba(237,19,54,0.28)]" />
          <img
            src="/images/it-support-workstation.webp"
            alt="Aspect IT workstation with dual monitors, support headset and red-lit equipment"
            className="relative h-auto w-full rounded-[1.25rem] object-contain"
            width="559"
            height="373"
            fetchPriority="high"
          />
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
          {supportHighlights.map(({ title, detail, Icon }) => (
            <div key={title} className="flex items-center gap-3 rounded-xl border border-white/20 bg-[#14283d]/85 px-3 py-3 shadow-sm transition hover:border-white/35 hover:bg-[#1a3048]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#c9002b] shadow-md shadow-red-950/30">
                <Icon className="h-5 w-5 text-white" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold text-white">{title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-white/70">{detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-9 overflow-hidden">
        <svg viewBox="0 0 1600 50" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 0C270 46 520 42 790 27S1280 1 1600 28V50H0Z" fill="#e5092d" />
          <path d="M0 7C270 53 520 49 790 34S1280 8 1600 35" fill="none" stroke="#fff" strokeWidth="3" />
        </svg>
      </div>
    </section>
  );
}

type HeroContent = { eyebrow: string; lead: string; visual: string; Icon: LucideIcon; highlights: { title: string; detail: string; Icon: LucideIcon }[] };

const serviceHeroContent: Record<string, HeroContent> = {
  "it-consultancy": {
    eyebrow: "IT STRATEGY & PLANNING", lead: "Make technology work harder for your business.", visual: "A clearer plan for your technology",
    Icon: ChartNoAxesCombined,
    highlights: [
      { title: "IT Strategy", detail: "A practical roadmap built around your goals", Icon: ClipboardList },
      { title: "Technology Reviews", detail: "Understand what is working and what is not", Icon: Monitor },
      { title: "Project Delivery", detail: "Support from planning through to rollout", Icon: CheckCircle2 },
      { title: "Ongoing Advice", detail: "Straightforward guidance when you need it", Icon: Headset },
    ],
  },
  "cyber-security": {
    eyebrow: "PROTECT YOUR BUSINESS", lead: "Security that protects your people, devices and data.", visual: "Layered protection for your business",
    Icon: Shield,
    highlights: [
      { title: "Threat Protection", detail: "Help block malware, phishing and attacks", Icon: ShieldCheck },
      { title: "Security Monitoring", detail: "Keep watch over your systems", Icon: Monitor },
      { title: "Endpoint Security", detail: "Protect laptops, desktops and users", Icon: Laptop },
      { title: "Staff Awareness", detail: "Help your team spot suspicious activity", Icon: BadgeCheck },
    ],
  },
  "cyber-essentials": {
    eyebrow: "CYBER ESSENTIALS", lead: "Build confidence in your security and work towards certification.", visual: "A clear route to Cyber Essentials",
    Icon: BadgeCheck,
    highlights: [
      { title: "Readiness Review", detail: "Identify gaps against the scheme requirements", Icon: ClipboardList },
      { title: "Practical Remediation", detail: "Guidance to address security weaknesses", Icon: Wrench },
      { title: "Certification Support", detail: "Help prepare and submit your assessment", Icon: ShieldCheck },
      { title: "Cyber Essentials Plus", detail: "Support for the next level of assurance", Icon: Shield },
    ],
  },
  "voip": {
    eyebrow: "BUSINESS COMMUNICATIONS", lead: "Keep conversations moving with flexible business phone systems.", visual: "One phone system for your whole team",
    Icon: Phone,
    highlights: [
      { title: "Hosted Phone Systems", detail: "Modern calling without traditional phone lines", Icon: Phone },
      { title: "Call Management", detail: "Queues, routing and useful call features", Icon: ClipboardList },
      { title: "Work From Anywhere", detail: "Stay connected across office and remote teams", Icon: MonitorSmartphone },
      { title: "Setup & Support", detail: "Help with deployment and ongoing changes", Icon: Headset },
    ],
  },
  "internet-lines": {
    eyebrow: "NETWORKING & CONNECTIVITY", lead: "Reliable business connectivity that keeps your team online.", visual: "A dependable connection for every site",
    Icon: Wifi,
    highlights: [
      { title: "Business Broadband", detail: "Connectivity options for your location", Icon: Wifi },
      { title: "Leased Lines", detail: "Dedicated connectivity for demanding sites", Icon: Server },
      { title: "Resilient Connectivity", detail: "Options to help keep you connected", Icon: ShieldCheck },
      { title: "Managed Routers", detail: "Network equipment configured and supported", Icon: Wrench },
    ],
  },
  "web-design-ecommerce": {
    eyebrow: "WEB DESIGN & ECOMMERCE", lead: "Websites and online shops designed to turn visitors into customers.", visual: "A better digital front door for your business",
    Icon: Globe,
    highlights: [
      { title: "Bespoke Web Design", detail: "A design that reflects your business", Icon: Monitor },
      { title: "Online Stores", detail: "Simple, effective eCommerce experiences", Icon: Share2 },
      { title: "Hosting & Care", detail: "Ongoing maintenance and support", Icon: Server },
      { title: "SEO Foundations", detail: "A solid structure for search visibility", Icon: ChartNoAxesCombined },
    ],
  },
  "social-media-management": {
    eyebrow: "SOCIAL MEDIA", lead: "Stay visible with consistent, considered social content.", visual: "Content that keeps your business in the conversation",
    Icon: Share2,
    highlights: [
      { title: "Content Planning", detail: "A clear schedule shaped around your goals", Icon: ClipboardList },
      { title: "Creative Posts", detail: "On-brand graphics and captions", Icon: Monitor },
      { title: "Community Management", detail: "Keep conversations moving", Icon: Share2 },
      { title: "Monthly Reporting", detail: "Understand what is reaching your audience", Icon: ChartNoAxesCombined },
    ],
  },
  "microsoft-365": {
    eyebrow: "MICROSOFT 365", lead: "Bring email, files and teamwork together securely.", visual: "A connected workspace for your team",
    Icon: Cloud,
    highlights: [
      { title: "Microsoft 365 Setup", detail: "Licensing and configuration", Icon: Cloud },
      { title: "Email & File Migration", detail: "Move your data with a clear plan", Icon: Database },
      { title: "Teams & SharePoint", detail: "Make collaboration easier", Icon: Share2 },
      { title: "Security & Backup", detail: "Protect accounts and business information", Icon: ShieldCheck },
    ],
  },
  "cloud": {
    eyebrow: "CLOUD & DATA", lead: "Work securely from anywhere with flexible cloud services.", visual: "Flexible infrastructure, wherever you work",
    Icon: Cloud,
    highlights: [
      { title: "Cloud Infrastructure", detail: "Azure and hosted server options", Icon: Server },
      { title: "Cloud Backup", detail: "Keep important business data protected", Icon: Database },
      { title: "Disaster Recovery", detail: "Plan for a fast, controlled recovery", Icon: ShieldCheck },
      { title: "Remote Working", detail: "Access the tools your team needs", Icon: MonitorSmartphone },
    ],
  },
  "software-development": {
    eyebrow: "SOFTWARE DEVELOPMENT", lead: "Purpose-built software that fits the way your business works.", visual: "Tools shaped around your processes",
    Icon: Code2,
    highlights: [
      { title: "Bespoke Applications", detail: "Software designed for your workflows", Icon: Code2 },
      { title: "System Integrations", detail: "Connect the tools you already use", Icon: Share2 },
      { title: "Process Automation", detail: "Reduce repetitive manual work", Icon: ChartNoAxesCombined },
      { title: "Ongoing Support", detail: "Keep improving as your needs change", Icon: Wrench },
    ],
  },
};

function ServiceHero({ service }: { service: (typeof services)[number] }) {
  const content = serviceHeroContent[service.slug];
  const VisualIcon = content?.Icon ?? Monitor;
  const highlights = content?.highlights ?? service.points.slice(0, 4).map((point, i) => ({
    title: point, detail: "Practical support from the Aspect IT team", Icon: CheckCircle2,
  }));
  return (
    <section className="relative isolate overflow-hidden bg-[#07172b] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-36 h-64 w-[30rem] -rotate-[15deg] rounded-br-[100%] bg-gradient-to-br from-[#a80025] via-[#d50932] to-transparent opacity-90" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,rgba(23,66,96,0.32),transparent_44%),linear-gradient(110deg,#061426_0%,#0b1d32_56%,#071426_100%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-7 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:min-h-[430px] lg:grid-cols-[0.9fr_1.2fr_0.92fr] lg:gap-7 lg:py-14">
        <div className="relative z-10 max-w-xl">
          <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.22em] text-white/80 sm:text-sm"><span className="h-7 w-1.5 rounded-full bg-[#ed1236]" /> {content?.eyebrow ?? service.group.toUpperCase()}</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.35rem]">{service.title.split(" ").slice(0, -1).join(" ")} <span className="text-[#f0143d]">{service.title.split(" ").slice(-1)}</span></h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/85 sm:text-lg">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#e5092d] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-[#c90025]"><Headset className="h-4 w-4" /> Get support</Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/55 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Our services <ChevronRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="relative mx-auto flex min-h-[250px] w-full max-w-[560px] items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(145deg,#102a42,#071322_68%)] p-8 shadow-2xl shadow-black/25 sm:min-h-[300px]">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(225,9,45,0.18),transparent_48%)]" />
          <div aria-hidden="true" className="absolute inset-x-10 bottom-9 h-px bg-gradient-to-r from-transparent via-[#ed1236] to-transparent" />
          <div className="relative grid h-40 w-40 place-items-center rounded-[2.25rem] border border-[#f0143d]/45 bg-[#0c2035] shadow-[0_0_55px_rgba(237,19,54,0.15)] sm:h-48 sm:w-48">
            <div aria-hidden="true" className="absolute inset-3 rounded-[1.8rem] border border-white/10" />
            <VisualIcon className="h-20 w-20 text-[#f0143d] drop-shadow-[0_0_18px_rgba(237,19,54,0.45)] sm:h-24 sm:w-24" strokeWidth={1.35} />
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-center text-sm font-semibold tracking-wide text-white/80">{content?.visual ?? service.title}</div>
          <span aria-hidden="true" className="absolute right-8 top-8 h-2 w-2 rounded-full bg-[#f0143d] shadow-[0_0_15px_#f0143d]" />
          <span aria-hidden="true" className="absolute bottom-14 left-9 h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
          {highlights.map(({ title, detail, Icon }) => (
            <div key={title} className="flex items-center gap-3 rounded-xl border border-white/20 bg-[#14283d]/85 px-3 py-3 shadow-sm transition hover:border-white/35 hover:bg-[#1a3048]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#c9002b] shadow-md shadow-red-950/30"><Icon className="h-5 w-5 text-white" /></span>
              <span className="min-w-0"><span className="block text-sm font-bold text-white">{title}</span><span className="mt-0.5 block text-xs leading-5 text-white/70">{detail}</span></span>
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-9 overflow-hidden">
        <svg viewBox="0 0 1600 50" preserveAspectRatio="none" className="h-full w-full"><path d="M0 0C270 46 520 42 790 27S1280 1 1600 28V50H0Z" fill="#e5092d" /><path d="M0 7C270 53 520 49 790 34S1280 8 1600 35" fill="none" stroke="#fff" strokeWidth="3" /></svg>
      </div>
    </section>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.group === service.group && s.slug !== service.slug);
  const isITSupport = service.slug === "it-support";

  return (
    <>
      {isITSupport ? <SupportHero summary={service.summary} /> : <ServiceHero service={service} />}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy">What's included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.points.map((p) => (
                <li key={p} className="flex min-h-[76px] items-start gap-3 rounded-xl bg-[#ededed] p-5 text-sm leading-6 text-[#10213a] sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d20b2e]" /> {p}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-bold text-navy">Why Aspect IT?</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#24344a]">We've supported businesses of all sizes since 2003. You get a local team that knows you by name, responds fast, and gives honest advice — with everything from IT support to websites, VoIP and internet under one roof.</p>
            {related.length > 0 && (
              <div className="mt-8">
                <h3 className="font-semibold text-navy">Related services</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {related.map((r) => <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="rounded-full border border-[#d20b2e] px-4 py-2 text-sm font-semibold text-[#bd0928] transition hover:bg-[#bd0928] hover:text-white">{r.title}</Link>)}
                </div>
              </div>
            )}
          </div>
          <aside className="h-fit rounded-2xl bg-[#e9e9e9] p-6 shadow-sm sm:p-7">
            <h2 className="mb-5 text-center text-lg font-extrabold uppercase text-[#b50927]">Get in touch</h2>
            <ContactForm />
          </aside>
        </div>
        <div aria-hidden="true" className="pointer-events-none relative h-16 overflow-hidden bg-gradient-to-b from-white to-slate-50">
          <svg viewBox="0 0 1600 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <g fill="#d9dde1">
              {Array.from({ length: 22 }, (_, i) => <rect key={i} x={i * 76} y={35 + (i % 4) * 7} width="45" height={65 - (i % 4) * 7} />)}
              {Array.from({ length: 22 }, (_, i) => <rect key={i} x={i * 76 + 12} y={18 + (i % 5) * 5} width="20" height="18" />)}
            </g>
            <path d="M0 82C300 35 520 38 800 58S1300 75 1600 22" fill="none" stroke="#e5092d" strokeWidth="7" />
            <path d="M0 88C300 41 520 44 800 64S1300 81 1600 28" fill="none" stroke="#0c1d34" strokeWidth="4" />
          </svg>
        </div>
      </section>
    </>
  );
}
