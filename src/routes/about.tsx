import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Aspect IT Limited" },
      { name: "description", content: "Aspect IT has supported businesses across Greater Manchester and West Yorkshire since 2003." },
      { property: "og:title", content: "About Aspect IT Limited" },
      { property: "og:description", content: "Local IT experts supporting businesses since 2003." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const sections = [
  { id: "company-details", title: "Company Details", text: "Aspect IT Limited was founded in 2003 to give local businesses an IT partner they could trust. Today we support organisations of every size across Greater Manchester and West Yorkshire with IT support, security, cloud, communications and marketing." },
  { id: "jobs-careers", title: "Jobs & Careers", text: "We're always keen to hear from friendly, curious people who love technology. If you'd like to join our engineering, development or marketing teams, get in touch with your CV." },
  { id: "connect-with-aspect-it", title: "Connect with Aspect IT", text: "Follow us on LinkedIn, Facebook, Instagram and X for the latest tech news, tips and company updates — or simply pick up the phone for a chat." },
  { id: "strategic-partnerships", title: "Strategic Partnerships", text: "We work with trusted, expert suppliers including Microsoft, ESET and the Cyber Essentials scheme, so our clients benefit from enterprise-grade tools at small-business prices." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT US" title={<>Supporting businesses <span className="text-primary">since 2003</span></>}>
        Long-term partnerships, IT that grows with you, and a cost-effective service you can rely on.
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-6 rounded-xl bg-panel p-8">
            <h2 className="text-2xl font-bold text-primary">{s.title}</h2>
            <p className="mt-3 text-foreground">{s.text}</p>
          </section>
        ))}
      </div>
      <div className="pb-16 text-center">
        <Link to="/contact" className="rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground">Talk to our team</Link>
      </div>
    </>
  );
}
