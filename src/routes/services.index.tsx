import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site-chrome";
import { serviceGroups } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "IT Services | Aspect IT Limited" },
      { name: "description", content: "IT support, cyber security, cloud, communications, marketing and software development for businesses in the North West." },
      { property: "og:title", content: "IT Services | Aspect IT Limited" },
      { property: "og:description", content: "Everything your business needs under one roof." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="OUR SERVICES" title={<>Everything you need, <span className="text-primary">under one roof</span></>}>
        From IT support to websites, VoIP and internet, we look after the technology so you can focus on your business.
      </PageHero>
      <div className="mx-auto max-w-7xl space-y-14 px-5 py-16 sm:px-8">
        {serviceGroups.map((g) => (
          <section key={g.title}>
            <h2 className="text-2xl font-bold text-navy">{g.title}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {g.items.map((s) => (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
