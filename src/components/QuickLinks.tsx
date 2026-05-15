import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";
import { noOrphans } from "@/lib/utils";

export function QuickLinks() {
  return (
    <section
      id="quick-links"
      aria-labelledby="quick-links-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2
              id="quick-links-title"
              className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold leading-tight text-brand-ink"
            >
              {noOrphans(site.quickLinks.title)}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 text-lg text-brand-ink/70 sm:text-xl">
              {noOrphans(site.quickLinks.description)}
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {site.quickLinks.items.map((link, index) => (
            <Reveal as="li" key={link.title} delay={index * 60}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between gap-3 rounded-2xl bg-white px-6 py-5 text-base font-bold text-brand-purple-deep shadow-[0_8px_22px_-16px_rgba(116,86,153,0.4)] ring-1 ring-brand-purple/10 transition hover:-translate-y-0.5 hover:bg-[image:var(--brand-gradient-soft)] hover:ring-brand-pink/40 sm:text-lg"
              >
                <span>{noOrphans(link.title)}</span>
                <ArrowUpRight
                  className="h-5 w-5 text-brand-pink transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
