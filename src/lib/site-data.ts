import blogAi from "@/assets/blog-ai.jpg";
import blogCode from "@/assets/blog-code.jpg";
import blogWinter from "@/assets/blog-winter.jpg";
import blogSecurity from "@/assets/blog-security.jpg";

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export type Service = { slug: string; title: string; group: string; summary: string; points: string[] };

const raw: [string, string, string, string[]][] = [
  ["IT Support", "IT Services", "Fast, friendly helpdesk support delivered on-site and remotely, so problems get fixed before they slow your team down.", ["Unlimited remote helpdesk", "On-site engineers across Greater Manchester & West Yorkshire", "Proactive monitoring and patching", "Hardware and software procurement"]],
  ["IT Consultancy", "IT Services", "Independent advice to plan, budget and deliver technology that fits your business goals.", ["IT strategy and roadmaps", "Infrastructure audits", "Project management", "Budget planning"]],
  ["Cyber Security", "Managed Security", "Layered protection for your people, devices and data against today's threats.", ["Managed antivirus and EDR", "Email filtering and phishing protection", "Firewall management", "Staff security awareness training"]],
  ["Cyber Essentials", "Managed Security", "Get certified with the UK government-backed Cyber Essentials scheme, with us guiding you every step.", ["Gap assessment", "Remediation support", "Certification submission", "Cyber Essentials Plus"]],
  ["VoIP", "Communications", "Modern cloud phone systems that let your team call from anywhere, at a lower cost.", ["Hosted phone systems", "Number porting", "Call recording and queues", "Desk phones and softphone apps"]],
  ["Internet Lines", "Communications", "Reliable business broadband and leased lines with UK-based support.", ["Full fibre and FTTC", "Dedicated leased lines", "4G/5G backup", "Managed routers"]],
  ["Web Design & eCommerce", "Marketing", "Professional websites and online shops that look great and win you customers.", ["Bespoke web design", "eCommerce stores", "Hosting and maintenance", "SEO foundations"]],
  ["Social Media Management", "Marketing", "Consistent, on-brand social content that keeps your business front of mind.", ["Content planning", "Post design and scheduling", "Community management", "Monthly reporting"]],
  ["Microsoft 365", "Cloud & Data", "Set up, migrate and manage Microsoft 365 so your team can work securely together.", ["Licensing and setup", "Email and file migration", "Teams and SharePoint", "Security and backup"]],
  ["Cloud", "Cloud & Data", "Move servers and data to the cloud for flexibility, resilience and lower costs.", ["Azure and hosted servers", "Cloud backup", "Disaster recovery", "Remote working solutions"]],
  ["Software Development", "Software Development", "Custom software and integrations built around the way your business works.", ["Bespoke business apps", "System integrations", "Process automation", "Ongoing support"]],
];

export const services: Service[] = raw.map(([title, group, summary, points]) => ({ slug: slugify(title), title, group, summary, points }));

export const serviceGroups = Array.from(new Set(services.map((s) => s.group))).map((title) => ({
  title,
  items: services.filter((s) => s.group === title),
}));

export const blogPosts = [
  { slug: "winter-it-checklist", title: "Your Winter IT Checklist", date: "23 Oct", image: blogWinter, excerpt: "Keep your office running through the cold months with these simple checks for power, backups and remote working." },
  { slug: "ai-for-small-business", title: "How AI Can Help Small Businesses", date: "23 Oct", image: blogAi, excerpt: "From Copilot to smart automation, here's how small teams can save hours every week with AI tools." },
  { slug: "spotting-phishing-emails", title: "Spotting Phishing Emails", date: "23 Oct", image: blogSecurity, excerpt: "Phishing is still the number one way attackers get in. Learn the warning signs your staff should look for." },
  { slug: "why-custom-software", title: "When Custom Software Makes Sense", date: "23 Oct", image: blogCode, excerpt: "Off-the-shelf tools don't always fit. We explain when bespoke software pays for itself." },
];

export const caseStudies = [
  { category: "IT Support", title: "Manufacturing firm in Oldham", text: "Replaced an ageing server and moved 40 staff to managed IT support, cutting downtime by over 80%." },
  { category: "Cyber Security", title: "Accountancy practice in Bury", text: "Achieved Cyber Essentials Plus in six weeks with new email filtering and endpoint protection." },
  { category: "Cloud Services", title: "Charity in Huddersfield", text: "Migrated to Microsoft 365 and cloud backup, letting the team work securely from any location." },
  { category: "Communications", title: "Recruitment agency in Manchester", text: "Switched to a hosted VoIP system across three sites, saving 35% on monthly phone costs." },
];

export const testimonials = [
  { name: "Andy Gaskell", role: "Operations Director", quote: "Aspect IT have looked after us for years. Whenever there's a problem they're on it straight away, and they explain things in plain English." },
  { name: "Sarah Holt", role: "Practice Manager", quote: "They got us through Cyber Essentials with no fuss at all. Friendly, professional and great value." },
  { name: "James Whitworth", role: "Managing Director", quote: "Our new phone system and Microsoft 365 setup have made a real difference to how we work." },
];
