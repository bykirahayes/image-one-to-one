import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headset, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm, PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Aspect IT Limited" },
      { name: "description", content: "Get in touch with Aspect IT for IT support across Greater Manchester and West Yorkshire." },
      { property: "og:title", content: "Contact Aspect IT Limited" },
      { property: "og:description", content: "Talk to our friendly IT support team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT US" title={<>Let's <span className="text-primary">talk</span></>}>
        Whether you need IT support, advice or a new technology partner, our team is ready to help.
      </PageHero>

      <main className="bg-[#f7f8fa] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section aria-labelledby="contact-details-title" className="relative isolate flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_12px_36px_rgba(25,35,55,0.06)] sm:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#fff0f2] text-primary">
                <Headset className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <span className="h-10 w-1 rounded-full bg-primary" />
              <div>
                <p className="text-xs font-bold tracking-[.18em] text-primary">ASPECT IT</p>
                <h2 id="contact-details-title" className="mt-1 text-2xl font-extrabold uppercase tracking-tight text-[#20283a] sm:text-3xl">
                  Contact <span className="text-primary">us</span>
                </h2>
              </div>
            </div>

            <p className="mt-7 max-w-md text-base leading-7 text-slate-600">
              Speak to our team about your requirements. We’ll take the time to understand what you need and point you in the right direction.
            </p>

            <div className="mt-8 space-y-5">
              <a href="tel:01612419050" className="group flex items-center gap-4 rounded-xl p-2 transition hover:bg-slate-50">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-primary transition group-hover:bg-[#fff0f2]">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Call our team</span>
                  <span className="mt-1 block text-base font-bold text-[#20283a]">0161 241 9050</span>
                </span>
              </a>

              <a href="mailto:info@aspectit.co.uk" className="group flex items-center gap-4 rounded-xl p-2 transition hover:bg-slate-50">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-primary transition group-hover:bg-[#fff0f2]">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Email us</span>
                  <span className="mt-1 block break-all text-base font-bold text-[#20283a]">info@aspectit.co.uk</span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-xl p-2">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Visit us</span>
                  <span className="mt-1 block text-base leading-6 text-[#20283a]">County End Business Centre, Jackson Street, Springhead, Oldham OL4 4TZ</span>
                </span>
              </div>
            </div>

            <div className="mt-auto pt-9">
              <a href="tel:01612419050" className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#94152a] hover:shadow-md sm:w-fit">
                Call our team <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <svg aria-hidden="true" viewBox="0 0 500 90" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 right-0 h-12 w-2/5">
              <path d="M500 0C390 55 250 82 0 90" fill="none" stroke="#b20d26" strokeWidth="4" opacity=".7" />
            </svg>
          </section>

          <section aria-labelledby="contact-form-title" className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_12px_36px_rgba(25,35,55,0.06)] sm:p-10">
            <h2 id="contact-form-title" className="text-2xl font-extrabold uppercase tracking-tight text-[#20283a] sm:text-3xl">
              Send us a <span className="text-primary">message</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Tell us a little about your business and what you’re looking for. We’ll be happy to talk it through.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
