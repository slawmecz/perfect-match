const CONTACT_PAGE = "https://matrymonialne24.pl/kontakt/" as const;
const CONTACT_FORM_ANCHOR = "wpcf7-f8213-p7639-o1" as const;
const CONTACT_FORM_HREF = `${CONTACT_PAGE}#${CONTACT_FORM_ANCHOR}` as const;

/** Paste in matrymonialne24.pl → Divi → Theme Customizer → Custom CSS */
export const CONTACT_FORM_SCROLL_MARGIN_CSS = `#${CONTACT_FORM_ANCHOR} { scroll-margin-top: 24px; }`;

export const site = {
  brand: {
    name: "Biuro Matrymonialne Magnes",
    shortName: "Magnes",
    domain: "kojarzeniepar.pl",
    legacyDomain: "swatanie.pl",
    officialDomain: "matrymonialne24.pl",
    foundedYear: 2002,
    yearsExperience: 23,
  },
  contact: {
    phone: "600 434 700",
    phoneHref: "tel:+48600434700",
    contactPageHref: CONTACT_PAGE,
    contactFormHref: CONTACT_FORM_HREF,
    contactFormScrollMarginPx: 24,
    coverage: "Zasięg ogólnopolski",
    /** Used in JSON-LD only — not shown on the page */
    address: {
      streetAddress: "ul. Czysta 5",
      postalCode: "87-700",
      addressLocality: "Aleksandrów Kujawski",
      addressCountry: "PL",
    },
  },
  hero: {
    eyebrow: "Biuro Matrymonialne Magnes",
    title: "Kojarzymy do pozytywnego skutku.",
    subtitle:
      "Profesjonalne biuro matrymonialne\nz 23-letnim doświadczeniem.\nPomagamy znaleźć drugą połówkę\n– z indywidualnym podejściem\ni pełną dyskrecją.",
    primaryCta: {
      label: "Formularz kontaktowy",
      href: CONTACT_FORM_HREF,
    },
    secondaryCta: {
      label: "Zadzwoń",
      href: "tel:+48600434700",
    },
    tagline:
      "Odpowiemy na każde pytanie i pomożemy wybrać\npakiet usług\ndopasowany do Twoich potrzeb.",
  },
  promisesIntro: {
    eyebrow: "Jednorazowa inwestycja",
    headline: "Płacisz tylko raz, korzystasz z biura dowolnie długo.",
    subheadline: "Co nas wyróżnia:",
  },
  promises: [
    {
      title: "Skuteczność",
      body: "Będziemy Ci pomagać tak długo, aż spełnimy Twoje oczekiwania.",
    },
    {
      title: "Lojalność",
      body: "Nie usuniemy Twojej oferty do czasu, aż Ci pomożemy.",
    },
    {
      title: "Elastyczność",
      body: "Im wyższy pakiet usług wybierzesz, tym masz więcej przywilejów.",
    },
    {
      title: "Szybkość",
      body: "Postaramy się, abyś **jak najkrócej** korzystał/a z naszych usług!",
    },
  ],
  ctaBanner: {
    title: "Gotowi na pierwszy krok?",
    description:
      "Opisz siebie i swoje oczekiwania, dodaj zdjęcie. Stworzymy Twoją fotoofertę.",
    primaryCta: {
      label: "Wypełnij ankietę",
      href: "https://matrymonialne24.pl/ankieta/",
    },
    secondaryCta: {
      label: "Zobacz przykładowe oferty",
      href: "https://matrymonialne24.pl/",
    },
  },
  quickLinks: {
    title: "Poznaj nas lepiej",
    description:
      "Wszystkie szczegóły znajdziesz na stronie matrymonialne24.pl.",
    items: [
      { title: "Regulamin", href: "https://matrymonialne24.pl/regulamin/" },
      { title: "Skojarzone pary", href: "https://matrymonialne24.pl/skojarzone-pary/" },
      { title: "Wydarzenia", href: "https://matrymonialne24.pl/wydarzenia/" },
      { title: "Cennik", href: "https://matrymonialne24.pl/cennik/" },
      { title: "Promocje", href: "https://matrymonialne24.pl/promocje/" },
      { title: "Dołącz", href: "https://matrymonialne24.pl/ankieta/" },
    ],
  },
} as const;

export type SiteContent = typeof site;
