import ogImageSrc from "@images/zeko-bau-logo-black.png";

export const SITE = {
  title: "Zeko Bau GmbH",
  tagline: "Top-quality Erstichbau, Betonmauer, Putzbau, und Bodenbeschichtung",
  description: "Zeko Bau bietet kompetente Baudienstleistungen für alle Ihre Projektanforderungen. Beginnen Sie mit der Erkundung und kontaktieren Sie unser Team für höchste Qualität und Zuverlässigkeit. Top-quality Erstichbau, Betonmauer, Putzbau, und Bodenbeschichtung",
  description_short: "Zeko Bau bietet kompetente Baudienstleistungen für alle Ihre Projektanforderungen.",
  url: "https://www.zekobaugmbh.com",
  author: "Mehmet Zeki Yakut",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "de-DE",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "de_DE",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Top-quality Erstichbau, Betonmauer, Putzbau, und Bodenbeschichtung`,
  description: "Zeko Bau bietet kompetente Baudienstleistungen für alle Ihre Projektanforderungen. Beginnen Sie mit der Erkundung und kontaktieren Sie unser Team für höchste Qualität und Zuverlässigkeit. Top-quality Erstichbau, Betonmauer, Putzbau, und Bodenbeschichtung.",
  image: ogImageSrc,
};
