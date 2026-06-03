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
    contactPageHref: "https://matrymonialne24.pl/kontakt/",
    coverage: "Zasięg ogólnopolski",
  },
  hero: {
    eyebrow: "Biuro Matrymonialne Magnes",
    title: "Kojarzymy do pozytywnego skutku.",
    subtitle:
      "Profesjonalne biuro matrymonialne\nz 23-letnim doświadczeniem. Pomagamy znaleźć drugą połówkę – z pełną dyskrecją i indywidualnym podejściem.",
    primaryCta: {
      label: "Formularz kontaktowy",
      href: "https://matrymonialne24.pl/kontakt/",
    },
    secondaryCta: {
      label: "Zadzwoń",
      href: "tel:+48600434700",
    },
    tagline:
      "Odpowiemy na każde pytanie i pomożemy wybrać pakiet usług\ndopasowany do Twoich potrzeb.",
  },
  promisesIntro: {
    eyebrow: "Jednorazowa inwestycja",
    headline: "Co nas wyróżnia",
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
      body: "Postaramy się, abyś **jak najkrócej** korzystał z naszych usług!",
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
  faq: [
    {
      question: "Co oznacza „kojarzenie do pozytywnego skutku”?",
      answer:
        "Pracujemy z Tobą tak długo, aż znajdziemy partnera, który spełni Twoje oczekiwania. Nie usuwamy Twojej oferty, dopóki nie pomożemy.",
    },
    {
      question: "Czy płacę za każde spotkanie?",
      answer:
        "Nie. Płacisz jeden raz, wybierając pakiet, a z biura korzystasz dowolnie długo – aż do skutku.",
    },
    {
      question: "Czy zachowam pełną anonimowość?",
      answer:
        "Tak. Dyskrecja to nasz priorytet. Twoje dane i zdjęcia udostępniamy wyłącznie za Twoją zgodą.",
    },
    {
      question: "Dla kogo jest Biuro Matrymonialne Magnes?",
      answer:
        "Pomagamy osobom w każdym wieku – również samotnym paniom i panom 50+, 60+. Indywidualne podejście, 23 lata doświadczenia, zasięg ogólnopolski.",
    },
  ],
} as const;

export type SiteContent = typeof site;
