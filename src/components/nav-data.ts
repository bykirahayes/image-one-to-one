import { Facebook, Instagram, Linkedin, Twitter, Youtube, type LucideIcon } from "lucide-react";
export { serviceGroups } from "@/lib/site-data";

export const sidebarLinks = [
  { label: "Latest news", to: "/blog" },
  { label: "About us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const aboutItems = [
  "Company Details",
  "Jobs & Careers",
  "Connect with Aspect IT",
  "Strategic Partnerships",
];

export const plainLinks = [
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
] as const;

export const socialIcons: LucideIcon[] = [Facebook, Instagram, Twitter, Youtube, Linkedin];
