import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/content/site";
import { asset, noOrphans } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-brand-purple/10 bg-white py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a
              href={`https://${site.brand.officialDomain}/`}
              target="_blank"
              rel="noopener"
              className="transition hover:opacity-85"
            >
              <Image
                src={asset("/Logo.svg")}
                alt={`${site.brand.name} – logo`}
                width={260}
                height={64}
                className="h-12 w-auto sm:h-14"
              />
            </a>
            <p className="max-w-sm text-center text-base text-brand-ink/70 md:text-left">
              <span className="block sm:inline">
                {noOrphans(
                  `${site.brand.yearsExperience} lat doświadczenia w kojarzeniu par.`,
                )}
              </span>{" "}
              <span className="mt-1 block sm:mt-0 sm:inline">
                {noOrphans(site.contact.coverage)}.
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2 text-lg font-bold text-brand-purple-deep transition hover:text-brand-pink sm:text-xl"
            >
              <Phone className="h-5 w-5 text-brand-pink" aria-hidden />
              {site.contact.phone}
            </a>
            <a
              href={`https://${site.brand.officialDomain}/`}
              target="_blank"
              rel="noopener"
              className="text-base font-semibold text-brand-purple transition hover:text-brand-pink sm:text-lg"
            >
              {site.brand.officialDomain}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-brand-purple/10 pt-6 text-sm text-brand-gray sm:flex-row">
          <p className="w-full text-center sm:w-auto sm:text-left">
            {noOrphans(`© ${year} ${site.brand.name}. Wszelkie prawa zastrzeżone.`)}
          </p>
          <p>
            <span className="font-semibold text-brand-purple-deep">{site.brand.domain}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
