import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/content/site";
import { SITE_URL, formatYearsCount } from "@/lib/utils";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e2007a",
};

const title = `${site.brand.name} – Profesjonalne kojarzenie par`;
const description = `${site.brand.name}: kojarzymy do pozytywnego skutku. ${formatYearsCount(site.brand.yearsExperience)} doświadczenia, pełna dyskrecja, indywidualne podejście. ${site.contact.coverage}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${site.brand.name}`,
  },
  description,
  keywords: [
    "biuro matrymonialne",
    "kojarzenie par",
    "swatanie",
    "biuro matrymonialne Magnes",
    "randki 50 plus",
    "randki 60 plus",
    "znajdź partnera",
    "agencja matrymonialna",
    "dyskretne biuro matrymonialne",
    "samotne panie",
    "samotni panowie",
    "matrymonialne24",
    "kojarzeniepar.pl",
  ],
  authors: [{ name: site.brand.name, url: SITE_URL }],
  creator: site.brand.name,
  publisher: site.brand.name,
  applicationName: site.brand.name,
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "512x512" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: site.brand.name,
    type: "website",
    locale: "pl_PL",
    countryName: "Poland",
    images: [
      {
        url: "/Logo.svg",
        width: 512,
        height: 128,
        alt: `${site.brand.name} – logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "strict-origin-when-cross-origin",
  category: "lifestyle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand.name,
    alternateName: ["Magnes", "Biuro Matrymonialne Magnes", "Kojarzenie Par"],
    description,
    url: SITE_URL,
    image: `${SITE_URL}/Logo.svg`,
    logo: `${SITE_URL}/Logo.svg`,
    telephone: "+48600434700",
    priceRange: "$$",
    foundingDate: String(site.brand.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.streetAddress,
      postalCode: site.contact.address.postalCode,
      addressLocality: site.contact.address.addressLocality,
      addressCountry: site.contact.address.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "Polska",
    },
    sameAs: [
      `https://${site.brand.officialDomain}`,
      `https://${site.brand.legacyDomain}`,
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand.name,
    url: SITE_URL,
    logo: `${SITE_URL}/Logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48600434700",
      contactType: "customer service",
      areaServed: "PL",
      availableLanguage: "Polish",
    },
    sameAs: [
      `https://${site.brand.officialDomain}`,
      `https://${site.brand.legacyDomain}`,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand.name,
    url: SITE_URL,
    inLanguage: "pl-PL",
    publisher: { "@type": "Organization", name: site.brand.name },
  };

  return (
    <html lang="pl" className={manrope.variable}>
      <body className="antialiased">
        <a
          href="#start"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-purple-deep focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Przejdź do treści
        </a>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
