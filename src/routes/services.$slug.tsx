import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
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

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.group === service.group && s.slug !== service.slug);
  return (
    <>
      <PageHero eyebrow={service.group.toUpperCase()} title={service.title}>{service.summary}</PageHero>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_420px]">
        <div>
          <h2 className="text-2xl font-bold text-navy">What's included</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.points.map((p) => (
              <li key={p} className="flex gap-3 rounded-xl bg-panel p-5 text-foreground"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> {p}</li>
            ))}
          </ul>
          <h2 className="mt-12 text-2xl font-bold text-navy">Why Aspect IT?</h2>
          <p className="mt-4 text-foreground">We've supported businesses of all sizes since 2003. You get a local team that knows you by name, responds fast, and gives honest advice — with everything from IT support to websites, VoIP and internet under one roof.</p>
          {related.length > 0 && (
            <div className="mt-10">
              <h3 className="font-semibold text-navy">Related services</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {related.map((r) => <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">{r.title}</Link>)}
              </div>
            </div>
          )}
        </div>
        <aside className="h-fit rounded-xl bg-panel p-6">
          <h2 className="mb-4 text-center text-xl font-bold uppercase text-primary">Get in touch</h2>
          <ContactForm />
        </aside>
      </div>
    </>
  );
}
