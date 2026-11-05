import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight, Headset, Laptop, Monitor, ShieldCheck, Wrench } from "lucide-react";
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
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-32 h-64 w-80 -rotate-12 rounded-br-[100%] bg-[#b90027]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_67%_45%,rgba(25,72,105,0.48),transparent_43%),linear-gradient(110deg,#061426_0%,#0b1d32_55%,#071426_100%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:min-h-[440px] lg:grid-cols-[0.9fr_1.35fr_0.8fr] lg:gap-6 lg:py-16">
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

        <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center lg:scale-[1.04]">
          <img
            src="/images/it-support-workstation.webp"
            alt="Aspect IT workstation with dual monitors, support headset and red-lit equipment"
            className="h-auto w-full rounded-2xl object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.35)]"
            width="559"
            height="373"
            fetchPriority="high"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {supportHighlights.map(({ title, detail, Icon }) => (
            <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.07] p-3.5 shadow-lg backdrop-blur-md transition hover:border-red-400/60 hover:bg-white/[0.11]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#f21a42] to-[#97001e] shadow-lg shadow-red-950/40">
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-7 overflow-hidden">
        <svg viewBox="0 0 1600 50" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 0C280 50 560 40 820 24S1300 0 1600 30V50H0Z" fill="#ed1236" />
          <path d="M0 8C280 58 560 48 820 32S1300 8 1600 38" fill="none" stroke="#fff" strokeWidth="4" />
        </svg>
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
      {isITSupport ? <SupportHero summary={service.summary} /> : <PageHero eyebrow={service.group.toUpperCase()} title={service.title}>{service.summary}</PageHero>}
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
