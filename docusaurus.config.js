// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

const ORG = "tvbinoy";
const REPO = "docs-as-code-starter";
const repositoryUrl = "https://github.com/" + ORG + "/" + REPO;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Daymark",
  tagline: "A little clarity for your everyday.",
  favicon: "img/favicon.svg",
  url: process.env.DOCS_URL || "https://" + ORG + ".github.io",
  baseUrl: process.env.DOCS_BASE_URL || "/" + REPO + "/",
  organizationName: ORG,
  projectName: REPO,
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  markdown: { hooks: { onBrokenMarkdownLinks: "throw" } },
  i18n: { defaultLocale: "en", locales: ["en"] },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */ ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: repositoryUrl + "/edit/main/",
          showLastUpdateTime: false,
        },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: "Daymark",
        logo: { alt: "", src: "img/logo.svg" },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSidebar",
            position: "left",
            label: "Help centre",
          },
          {
            to: "/docs/getting-started/quick-start",
            label: "Quick start",
            position: "left",
          },
          { href: repositoryUrl, label: "GitHub", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Start here",
            items: [
              { label: "Meet Daymark", to: "/docs/intro" },
              {
                label: "Your first project",
                to: "/docs/getting-started/quick-start",
              },
            ],
          },
          {
            title: "Make it a habit",
            items: [
              { label: "Plan your week", to: "/docs/guides/plan-your-week" },
              {
                label: "Troubleshooting",
                to: "/docs/reference/troubleshooting",
              },
            ],
          },
          {
            title: "About this project",
            items: [{ label: "Source on GitHub", href: repositoryUrl }],
          },
        ],
        copyright:
          "Daymark is a fictional product. An original documentation sample by Binoy Varghese. Built with Docusaurus.",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "yaml", "json"],
      },
    }),
};
export default config;
