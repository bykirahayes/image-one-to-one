import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { caseStudies, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Aspect IT Limited" },
      { name: "description", content: "See how Aspect IT has helped local businesses with IT support, cyber security, cloud and communications." },
      { property: "og:title", content: "Case Studies | Aspect IT Limited" },
      { property: "og:description", content: "Real results for businesses across the North West." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="CASE STUDIES" title={<>Real results for <span className="text-primary">real businesses</span></>} />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2">
        {caseStudies.map((c) => (
          <article key={c.title} className="rounded-xl border-l-4 border-primary bg-panel p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">{c.category}</div>
            <h2 className="mt-2 text-xl font-bold text-navy">{c.title}</h2>
            <p className="mt-3 text-foreground">{c.text}</p>
          </article>
        ))}
      </div>
      <section className="bg-tile-blue py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold uppercase">What our clients say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border-l-2 border-primary pl-5">
                <p>"{t.quote}"</p>
                <footer className="mt-3 text-sm font-semibold">{t.name} <span className="font-normal opacity-80">— {t.role}</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
