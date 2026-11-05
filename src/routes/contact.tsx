import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
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
        We don't offer one-size-fits-all packages. Tell us about your business and we'll get back to you.
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-6">
          {[{ I: Phone, t: "0161 000 0000" }, { I: Mail, t: "hello@aspect-it.co.uk" }, { I: MapPin, t: "Oldham, Greater Manchester" }].map(({ I, t }) => (
            <li key={t} className="flex items-center gap-4 text-lg text-navy"><span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground"><I className="h-5 w-5" /></span>{t}</li>
          ))}
        </ul>
        <div className="rounded-xl bg-panel p-6 sm:p-10">
          <h2 className="mb-5 text-center text-2xl font-bold uppercase text-primary">Get in touch</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
