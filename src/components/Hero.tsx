import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "./Container";
import { PhoneLink } from "./PhoneLink";
import { Reveal } from "./Reveal";
import { site } from "@/content/site";
import { asset, noOrphans } from "@/lib/utils";

type LineBreakMode = "mobile" | "all" | "desktop";

function getBreakClassName(mode: LineBreakMode) {
  if (mode === "all") return undefined;
  if (mode === "desktop") return "hidden sm:block";
  return "sm:hidden";
}

function HeroSubtitle({
  text,
  lineBreak = "mobile",
  lineBreaks,
}: {
  text: string;
  lineBreak?: LineBreakMode;
  lineBreaks?: LineBreakMode[];
}) {
  const lines = text.split("\n");
  if (lines.length === 1) {
    return <>{noOrphans(text)}</>;
  }

  return (
    <>
      {lines.map((line, index) => {
        const mode = lineBreaks?.[index - 1] ?? lineBreak;
        const breakClassName = getBreakClassName(mode);

        return (
          <span key={index}>
            {index > 0 && (
              <br className={breakClassName} aria-hidden={mode !== "mobile"} />
            )}
            {index > 0 && mode === "mobile" && (
              <span className="hidden sm:inline"> </span>
            )}
            {index > 0 && mode === "desktop" && <span className="sm:hidden"> </span>}
            {noOrphans(line)}
          </span>
        );
      })}
    </>
  );
}

const heroPillClassName =
  "inline-flex h-10 items-center gap-2 rounded-full bg-white/80 px-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-purple-deep shadow-sm ring-1 ring-brand-purple/10 sm:h-11 sm:text-[15px]";

export function Hero() {
  return (
    <section
      id="start"
      className="relative isolate overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-pink/15 blur-3xl sm:h-[640px] sm:w-[640px]" />
        <div className="absolute top-32 right-[-120px] h-[360px] w-[360px] rounded-full bg-brand-purple/20 blur-3xl sm:h-[480px] sm:w-[480px]" />
        <div className="absolute bottom-0 left-[-120px] h-[300px] w-[300px] rounded-full bg-brand-pink-soft/30 blur-3xl sm:h-[420px] sm:w-[420px]" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Reveal>
            <p className={heroPillClassName}>
              <Image
                src={asset("/slice1.svg")}
                alt=""
                width={16}
                height={16}
                aria-hidden
                className="h-4 w-4"
              />
              {noOrphans(site.hero.eyebrow)}
            </p>
          </Reveal>

          <Reveal delay={40}>
            <p className={`mt-3 ${heroPillClassName}`}>
              <Image
                src={asset("/poland-map.svg")}
                alt=""
                width={36}
                height={30}
                aria-hidden
                className="h-8 w-[2.35rem] shrink-0 translate-x-1 translate-y-[7px] object-contain sm:h-9 sm:w-[2.65rem] sm:translate-x-1.5 sm:translate-y-[8px]"
              />
              {noOrphans(site.contact.coverage)}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,4.75rem)] font-extrabold leading-[1.05]">
              <span className="brand-gradient-text">{noOrphans(site.hero.title)}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-brand-ink/80 sm:text-xl md:text-2xl">
              <HeroSubtitle text={site.hero.subtitle} />
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={site.hero.primaryCta.href}
                target="_blank"
                rel="noopener"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--brand-gradient)] px-7 py-4 text-base font-bold text-white shadow-[0_18px_40px_-20px_rgba(116,86,153,0.55),0_8px_20px_-10px_rgba(226,0,122,0.45)] transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-22px_rgba(116,86,153,0.7),0_12px_24px_-10px_rgba(226,0,122,0.6)] sm:w-auto sm:text-lg"
                style={{ animation: "pulse-glow 3.4s ease-in-out infinite" }}
              >
                {noOrphans(site.hero.primaryCta.label)}
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
              </a>

              <PhoneLink
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-base font-bold text-brand-purple-deep ring-2 ring-brand-purple/30 transition hover:-translate-y-0.5 hover:bg-brand-purple/5 hover:ring-brand-pink/50 sm:w-auto sm:gap-3 sm:px-7 sm:text-lg"
              >
                <Phone className="h-5 w-5 shrink-0 text-brand-pink" aria-hidden />
                <span className="whitespace-nowrap">
                  {noOrphans(`${site.hero.secondaryCta.label}: ${site.contact.phone}`)}
                </span>
              </PhoneLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-brand-gray sm:text-base">
              <HeroSubtitle
                text={site.hero.tagline}
                lineBreaks={["mobile", "desktop"]}
              />
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
