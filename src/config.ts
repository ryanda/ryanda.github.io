import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ryanda.github.io/",
  author: "Ryanda Putra",
  profile: "https://ryanda.github.io/",
  desc: "Ryanda blog.",
  title: "Ryanda",
  ogImage: "kuceng.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/ryanda/ryanda.github.io/edit/master/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["id-ID"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ryanda",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ryan_daa",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/m-ryanda-putra",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/ryanda",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://web.telegram.org",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
