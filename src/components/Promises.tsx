import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";
import { asset, cn, noOrphans } from "@/lib/utils";

function renderEmphasis(text: string) {
  const fixed = noOrphans(text);
  const parts = fixed.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-extrabold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function Promises() {
  return (
    <section
      id="promises"
      aria-labelledby="promises-title"
      className="relative py-16 sm:py-20 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-pink sm:text-base">
              Nasze obietnice
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="promises-title"
              className="mt-4 text-[clamp(1.875rem,3.8vw,3.25rem)] font-extrabold leading-tight text-brand-ink"
            >
              {noOrphans(site.promisesIntro.title)}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg text-brand-ink/75 sm:text-xl">
              {noOrphans(site.promisesIntro.description)}
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {site.promises.map((promise, index) => (
            <Reveal
              as="li"
              key={promise.title}
              delay={index * 70}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition will-change-transform hover:-translate-y-1 sm:p-8",
                promise.featured
                  ? "bg-[image:var(--brand-gradient)] text-white shadow-[0_24px_50px_-24px_rgba(116,86,153,0.55),0_12px_28px_-12px_rgba(226,0,122,0.45)] sm:col-span-2 lg:col-span-1"
                  : "bg-white text-brand-ink shadow-[0_10px_28px_-18px_rgba(116,86,153,0.35)] ring-1 ring-brand-purple/10 hover:ring-brand-pink/40 hover:shadow-[0_18px_36px_-20px_rgba(226,0,122,0.35)]",
              )}
            >
              <div
                aria-hidden
                className={cn(
                  "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                  promise.featured ? "bg-white/20" : "bg-brand-pink/10",
                )}
              >
                <Image
                  src={asset("/slice1.svg")}
                  alt=""
                  width={28}
                  height={28}
                  className={cn(
                    "h-7 w-7",
                    promise.featured ? "[filter:brightness(0)_invert(1)]" : "",
                  )}
                />
              </div>

              <h3
                className={cn(
                  "text-xl font-bold leading-snug sm:text-2xl",
                  promise.featured ? "text-white" : "text-brand-ink",
                )}
              >
                {noOrphans(promise.title)}
              </h3>

              <p
                className={cn(
                  "mt-3 text-base leading-relaxed sm:text-lg",
                  promise.featured ? "text-white/95" : "text-brand-ink/80",
                )}
              >
                {renderEmphasis(promise.body)}
              </p>

              {promise.featured && (
                <span className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
              )}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
