import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  aboutItems,
  plainLinks,
  serviceGroups,
  sidebarLinks,
  socialIcons,
} from "@/components/nav-data";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open main menu"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-navy transition-colors hover:border-primary hover:text-primary lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 overflow-y-auto p-0 sm:max-w-md"
      >
        <SheetTitle className="sr-only">Main menu</SheetTitle>
        <SheetDescription className="sr-only">
          Site navigation for Aspect IT Limited
        </SheetDescription>

        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Menu
          </span>
        </div>

        <nav className="flex-1 px-5 pb-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="home" className="border-b border-border">
              <SheetClose asChild>
                <a
                  href="/"
                  aria-current="page"
                  className="flex items-center justify-between py-4 text-base font-semibold uppercase text-navy"
                >
                  Home
                </a>
              </SheetClose>
            </AccordionItem>

            <AccordionItem value="services" className="border-b border-border">
              <AccordionTrigger className="text-base font-semibold uppercase text-navy hover:no-underline">
                Services
              </AccordionTrigger>
              <AccordionContent className="pb-5 pt-1">
                <div className="flex flex-col gap-5">
                  {serviceGroups.map(({ title, items }) => (
                    <div key={title} className="min-w-0">
                      <h3 className="mb-1 text-sm font-semibold text-primary">{title}</h3>
                      <ul className="divide-y divide-border/60">
                        {items.map((item) => (
                          <li key={item}>
                            <SheetClose asChild>
                              <a className="block cursor-pointer py-2 text-[15px] text-foreground">
                                {item}
                              </a>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4 text-sm font-semibold uppercase">
                  {sidebarLinks.map((item) => (
                    <SheetClose key={item} asChild>
                      <a className="cursor-pointer py-1 text-foreground">{item}</a>
                    </SheetClose>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="about" className="border-b border-border">
              <AccordionTrigger className="text-base font-semibold uppercase text-navy hover:no-underline">
                About Us
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1">
                <ul className="divide-y divide-border/60">
                  {aboutItems.map((item) => (
                    <li key={item}>
                      <SheetClose asChild>
                        <a className="block cursor-pointer py-2.5 text-[15px] text-foreground">
                          {item}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {plainLinks.map((item) => (
              <AccordionItem key={item} value={item} className="border-b border-border">
                <SheetClose asChild>
                  <a className="flex items-center justify-between py-4 text-base font-semibold uppercase text-navy">
                    {item}
                  </a>
                </SheetClose>
              </AccordionItem>
            ))}
          </Accordion>

          <SheetClose asChild>
            <a className="mt-6 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold uppercase text-primary-foreground">
              <Phone className="h-4 w-4" aria-hidden="true" /> Contact Us
            </a>
          </SheetClose>

          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            {socialIcons.map((Icon, i) => (
              <Icon key={i} className="h-4 w-4" aria-hidden="true" />
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
