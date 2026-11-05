import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Phone } from "lucide-react";
import { NavigationMenuLink, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { aboutItems, plainLinks, serviceGroups, sidebarLinks } from "@/components/nav-data";
import { slugify } from "@/lib/site-data";

const topLink = "cursor-pointer border-b-2 border-transparent pb-1 transition-colors hover:text-primary";

export function HeaderNavigation() {
  return (
    <NavigationMenuPrimitive.Root aria-label="Main navigation" className="aspect-navigation" delayDuration={120}>
      <NavigationMenuPrimitive.List className="flex list-none items-center gap-7 whitespace-nowrap text-sm font-semibold uppercase">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuLink asChild>
            <Link to="/" className={topLink} activeOptions={{ exact: true }} activeProps={{ className: "border-primary" }}>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuTrigger className="aspect-menu-trigger">Services</NavigationMenuTrigger>
          <NavigationMenuPrimitive.Content className="aspect-dropdown aspect-services-dropdown">
            <aside className="aspect-services-sidebar">
              <Link to="/services" className="text-2xl font-semibold leading-snug text-primary">IT<br />Services</Link>
              <div className="mt-auto flex flex-col gap-3 text-xl font-normal">
                {sidebarLinks.map((l) => (
                  <NavigationMenuLink key={l.label} asChild className="aspect-menu-link"><Link to={l.to}>{l.label}</Link></NavigationMenuLink>
                ))}
              </div>
            </aside>
            <div className="aspect-services-groups">
              {serviceGroups.map(({ title, items }) => (
                <section key={title} className="min-w-0">
                  <h3 className="mb-3 text-lg font-semibold text-primary">{title}</h3>
                  <ul className="divide-y divide-border/60">
                    {items.map((item) => (
                      <li key={item.slug}>
                        <NavigationMenuLink asChild className="aspect-menu-link">
                          <Link to="/services/$slug" params={{ slug: item.slug }}><ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /><span>{item.title}</span></Link>
                        </NavigationMenuLink>
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
            {aboutItems.map((item) => (
              <NavigationMenuLink key={item} asChild className="aspect-menu-link">
                <Link to="/about" hash={slugify(item)}>{item}</Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        {plainLinks.map((l) => (
          <NavigationMenuPrimitive.Item key={l.label}>
            <NavigationMenuLink asChild>
              <Link to={l.to} className={topLink} activeProps={{ className: "border-primary" }}>{l.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuPrimitive.Item>
        ))}
        <NavigationMenuPrimitive.Item>
          <NavigationMenuLink asChild>
            <Link to="/contact" className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-primary-foreground transition-transform hover:scale-105"><Phone className="h-4 w-4" /> Contact Us</Link>
          </NavigationMenuLink>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}
