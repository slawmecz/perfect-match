import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";
import { noOrphans } from "@/lib/utils";

export function CTABanner() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[image:var(--brand-gradient)] px-6 py-12 text-white shadow-[0_30px_60px_-30px_rgba(116,86,153,0.55),0_18px_40px_-20px_rgba(226,0,122,0.4)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                <Sparkles className="h-4 w-4" aria-hidden />
                {site.brand.shortName}
              </span>

              <h2
                id="cta-title"
                className="mt-5 text-[clamp(1.75rem,3.5vw,3rem)] font-extrabold leading-tight"
              >
                {noOrphans(site.ctaBanner.title)}
              </h2>

              <p className="mt-5 text-lg text-white/95 sm:text-xl">
                {noOrphans(site.ctaBanner.description)}
              </p>

              <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={site.ctaBanner.primaryCta.href}
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-brand-purple-deep shadow-[0_14px_30px_-14px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-pink-soft/10 sm:w-auto sm:text-lg"
                >
                  {noOrphans(site.ctaBanner.primaryCta.label)}
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
                </a>
                <a
                  href={site.ctaBanner.secondaryCta.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-4 text-base font-bold text-white ring-2 ring-white/40 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 hover:ring-white/70 sm:w-auto sm:text-lg"
                >
                  {noOrphans(site.ctaBanner.secondaryCta.label)}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
