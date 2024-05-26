
const navBarLinks = [
  { name: "Homepage", url: "/en" },
  { name: "Products", url: "/en/products" },
  { name: "Services", url: "/en/services" },
  { name: "Blog", url: "/en/blog" },
  { name: "Contact", url: "/en/contact" },
];

const footerLinks = [
  {
    section: "Services",
    links: [
      { name: "Screed", url: "/erstichbau" },
      { name: "Beton Walls", url: "/betonmauer" },
      { name: "Plaster", url: "/putz" },
      { name: "Floor coating", url: "/bodenbeschichtung" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About Us", url: "uber-uns" },
      { name: "Blog", url: "/blog" },
      { name: "Jobs", url: "jobs" },
      { name: "Customers", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/zekobau",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};