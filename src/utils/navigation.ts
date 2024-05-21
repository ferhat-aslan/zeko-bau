// An array of links for navigation bar
const navBarLinks = [
  { name: "Startseite", url: "/" },
  { name: "Projekte", url: "/projekte" },
  { name: "Dienstleistungen", url: "/dienstleistungen" },
  { name: "Blog", url: "/blog" },
  { name: "Kontakt", url: "/kontakt" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Dienstleistungen",
    links: [
      { name: "Erstichbau", url: "/erstichbau" },
      { name: "Betonmauer", url: "/betonmauer" },
      { name: "Putz", url: "/putz" },
      { name: "Bodenbeschichtung", url: "/bodenbeschichtung" },
    ],
  },
  {
    section: "Unternehmen",
    links: [
      { name: "Über uns", url: "uber-uns" },
      { name: "Blog", url: "/blog" },
      { name: "Jobs", url: "jobs" },
      { name: "Kunden", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};