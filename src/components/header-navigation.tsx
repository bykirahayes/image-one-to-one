import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronRight, Phone } from "lucide-react";
import { NavigationMenuLink, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const serviceGroups = [
  { title: "IT Services", items: ["IT Support", "IT Consultancy"] },
  { title: "Managed Security", items: ["Cyber Security", "Cyber Essentials"] },
  { title: "Communications", items: ["VoIP", "Internet Lines"] },
  { title: "Marketing", items: ["Web Design & eCommerce", "Social Media Management"] },
  { title: "Cloud & Data", items: ["Microsoft 365", "Cloud"] },
  { title: "Software Development", items: ["Software Development"] },
];

function MenuLink({ children }: { children: React.ReactNode }) {
  return (
    <NavigationMenuLink className="aspect-menu-link" tabIndex={0}>
      {children}
    </NavigationMenuLink>
  );
}

export function HeaderNavigation() {
  return (
    <NavigationMenuPrimitive.Root aria-label="Main navigation" className="aspect-navigation" delayDuration={120}>
      <NavigationMenuPrimitive.List className="flex list-none items-center gap-7 whitespace-nowrap text-sm font-semibold uppercase">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuLink href="/" aria-current="page" className="border-b-2 border-primary pb-1">Home</NavigationMenuLink>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuTrigger className="aspect-menu-trigger">Services</NavigationMenuTrigger>
          <NavigationMenuPrimitive.Content className="aspect-dropdown aspect-services-dropdown">
            <aside className="aspect-services-sidebar">
              <h2 className="text-2xl font-semibold leading-snug text-primary">IT<br />Services</h2>
              <div className="mt-auto flex flex-col gap-3 text-xl font-normal">
                <MenuLink>Latest news</MenuLink>
                <MenuLink>About us</MenuLink>
                <MenuLink>Contact</MenuLink>
              </div>
            </aside>
            <div className="aspect-services-groups">
              {serviceGroups.map(({ title, items }) => (
                <section key={title} className="min-w-0">
                  <h3 className="mb-3 text-lg font-semibold text-primary">{title}</h3>
                  <ul className="divide-y divide-border/60">
                    {items.map((item) => (
                      <li key={item}>
                        <MenuLink><ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /><span>{item}</span></MenuLink>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item className="relative">
          <NavigationMenuTrigger className="aspect-menu-trigger">About Us</NavigationMenuTrigger>
          <NavigationMenuPrimitive.Content className="aspect-dropdown aspect-about-dropdown">
            {["Company Details", "Jobs & Careers", "Connect with Aspect IT", "Strategic Partnerships"].map((item) => <MenuLink key={item}>{item}</MenuLink>)}
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item><NavigationMenuLink tabIndex={0} className="cursor-pointer transition-colors hover:text-primary">Case Studies</NavigationMenuLink></NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item><NavigationMenuLink tabIndex={0} className="cursor-pointer transition-colors hover:text-primary">Blog</NavigationMenuLink></NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item><NavigationMenuLink tabIndex={0} className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-primary-foreground transition-transform hover:scale-105"><Phone className="h-4 w-4" /> Contact Us</NavigationMenuLink></NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}