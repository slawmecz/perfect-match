import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";
import { asset, noOrphans } from "@/lib/utils";

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

function renderPromiseBody(body: string) {
  const lines = body.split("\n");
  if (lines.length === 1) {
    return renderEmphasis(body);
  }

  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {index > 0 && <br className="sm:hidden" aria-hidden />}
          {index > 0 && <span className="hidden sm:inline"> </span>}
          {renderEmphasis(line)}
        </span>
      ))}
    </>
  );
}

export function Promises() {
  return (
    <section
      id="promises"
      aria-labelledby="promises-title"
      className="relative py-16 sm:py-20 lg:pt-20 lg:pb-28"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-pink sm:text-base">
              {noOrphans(site.promisesIntro.eyebrow)}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="promises-title"
              className="mt-4 text-[clamp(1.875rem,3.8vw,3.25rem)] font-extrabold leading-tight text-brand-ink"
            >
              {noOrphans(site.promisesIntro.headline)}
            </h2>
            <p className="mt-4 text-xl font-semibold text-brand-purple-deep sm:text-2xl">
              {noOrphans(site.promisesIntro.subheadline)}
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:gap-7">
          {site.promises.map((promise, index) => (
            <Reveal
              as="li"
              key={promise.title}
              delay={index * 70}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 text-brand-ink shadow-[0_10px_28px_-18px_rgba(116,86,153,0.35)] ring-1 ring-brand-purple/10 transition will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_36px_-20px_rgba(226,0,122,0.35)] hover:ring-brand-pink/40 sm:p-8"
            >
              <div className="text-left">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    aria-hidden
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-pink/10"
                  >
                    <Image
                      src={asset("/slice1.svg")}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-brand-ink sm:text-2xl">
                    {noOrphans(promise.title)}:
                  </h3>
                </div>

                <p className="mt-4 text-base leading-relaxed text-brand-ink/80 sm:text-lg">
                  {renderPromiseBody(promise.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
