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
    coverage: "Zasięg ogólnopolski",
  },
  hero: {
    eyebrow: "Biuro Matrymonialne Magnes",
    title: "Kojarzymy do pozytywnego skutku.",
    subtitle:
      "Profesjonalne biuro matrymonialne z 23-letnim doświadczeniem. Pomagamy znaleźć drugą połówkę – z pełną dyskrecją i indywidualnym podejściem.",
    primaryCta: {
      label: "Wypełnij ankietę zgłoszeniową",
      href: "https://matrymonialne24.pl/ankieta/",
    },
    secondaryCta: {
      label: "Zadzwoń",
      href: "tel:+48600434700",
    },
  },
  promisesIntro: {
    title: "Płacisz tylko raz, korzystasz z biura dowolnie długo.",
    description:
      "Sześć obietnic, które otrzymujesz wybierając Biuro Matrymonialne Magnes.",
  },
  promises: [
    {
      title: "Pomożemy Ci do skutku",
      body: "Będziemy Ci pomagać tak długo, aż spełnimy Twoje oczekiwania.",
      featured: false,
    },
    {
      title: "Pozytywny skutek",
      body: "Kojarzymy do pozytywnego skutku.",
      featured: false,
    },
    {
      title: "Płacisz tylko raz",
      body: "Płacisz tylko raz – korzystasz z biura dowolnie długo.",
      featured: true,
    },
    {
      title: "Więcej przywilejów",
      body: "Im wyższy pakiet usług wybierzesz, tym masz więcej przywilejów.",
      featured: false,
    },
    {
      title: "Gwarancja lojalności",
      body: "Nie usuniemy Twojej oferty do czasu, aż Ci pomożemy.",
      featured: false,
    },
    {
      title: "Szybkość, na którą zasługujesz",
      body: "Postaramy się, abyś **jak najkrócej** korzystał z naszych usług.",
      featured: false,
    },
  ],
  ctaBanner: {
    title: "Gotowy na pierwszy krok?",
    description:
      "Wypełnij krótką ankietę zgłoszeniową lub zadzwoń – odpowiemy na każde pytanie i pomożemy wybrać pakiet dopasowany do Twoich oczekiwań.",
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
      { title: "Dołącz do nas", href: "https://matrymonialne24.pl/ankieta/" },
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
