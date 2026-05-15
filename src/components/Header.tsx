import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/content/site";
import { asset, noOrphans } from "@/lib/utils";

export function Header() {
  return (
    <header className="relative pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-10">
      <Container>
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex w-full items-center justify-center md:w-auto md:justify-start">
            <Image
              src={asset("/Logo.svg")}
              alt={`${site.brand.name} – logo`}
              width={360}
              height={90}
              priority
              className="h-14 w-auto sm:h-16 md:h-16 lg:h-20"
            />
          </div>

          <div className="hidden md:flex md:items-center md:gap-5 lg:gap-8">
            <Image
              src={asset("/satysfakcja.svg")}
              alt="100% satysfakcji klientów"
              width={200}
              height={232}
              className="h-auto w-32 lg:w-40 xl:w-44"
            />
            <Image
              src={asset("/lata-istnienia.svg")}
              alt={`${site.brand.yearsExperience} lat istnienia biura`}
              width={200}
              height={232}
              className="h-auto w-32 lg:w-40 xl:w-44"
            />
          </div>

          <a
            href={site.contact.phoneHref}
            className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-semibold text-brand-purple-deep shadow-[0_4px_12px_-4px_rgba(116,86,153,0.25)] ring-1 ring-brand-purple/15 transition hover:shadow-[0_8px_20px_-6px_rgba(226,0,122,0.35)] hover:ring-brand-pink/40 sm:text-lg md:px-5 md:py-2.5"
          >
            <Phone className="h-4 w-4 text-brand-pink transition group-hover:scale-110 sm:h-5 sm:w-5" aria-hidden />
            <span>{site.contact.phone}</span>
            <span className="hidden text-sm font-medium text-brand-gray sm:inline md:hidden lg:inline">
              · {noOrphans(site.contact.coverage)}
            </span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 md:hidden">
          <Image
            src={asset("/satysfakcja.svg")}
            alt="100% satysfakcji klientów"
            width={200}
            height={232}
            className="h-auto w-28 sm:w-32"
          />
          <Image
            src={asset("/lata-istnienia.svg")}
            alt={`${site.brand.yearsExperience} lat istnienia biura`}
            width={200}
            height={232}
            className="h-auto w-28 sm:w-32"
          />
        </div>
      </Container>
    </header>
  );
}
