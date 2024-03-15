import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Vimen",
  tagline: "Fast cheap links",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // 🚨 IMPORTANT: the following redirect works, it works only in production,
  // why? Because the plugin devs thought it was a good idea....
  plugins: [
    // [
    //   "@docusaurus/plugin-client-redirects",
    //   {
    //     redirects: [
    //       {
    //         to: "/category/getting-started", // Target URL
    //         from: ["/", "/docs/", "/docs/category/"], // Source URLs
    //       },
    //     ],
    //   },
    // ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/vimen-link/docs-vimen",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Vimen",
      logo: {
        alt: "Vimen Logo",
        src: "img/logo.svg",
        href: "/category/getting-started",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        {
          href: "https://github.com/vimen-link/docs-vimen",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/category/getting-started",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "@luke_pighetti",
              href: "https://twitter.com/luke_pighetti",
            },
            {
              label: "@mariopepe_",
              href: "https://twitter.com/mariopepe_",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/vimen-link",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Luke Pighetti`,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ["dart", "bash"],
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
