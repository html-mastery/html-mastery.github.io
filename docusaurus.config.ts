import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "HTML Mastery",
  tagline:
    "Welcome to HTML Mastery, where we celebrate the art and science of crafting beautiful and functional web experiences using HTML!",
  favicon: "img/logo.svg",

  url: "https://html-mastery.github.io",
  baseUrl: "/",

  organizationName: "html-mastery",
  projectName: "html-mastery.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "#",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "#",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // [
    //   "@docusaurus/plugin-ideal-image",
    //   {
    //     quality: 70,
    //     max: 1030,
    //     min: 640,
    //     steps: 2,
    //     disableInDev: false,
    //   },
    // ],
    [
      "@docusaurus/plugin-content-blog",
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      {
        id: "version",
        path: "version",
        routeBasePath: "version",
        blogTitle: "Version",
        blogDescription: "Version history of HTML Mastery",
        blogSidebarCount: 5,
        blogSidebarTitle: "All Versions",
        showReadingTime: true,
        include: ["**/*.{md,mdx}"],
        exclude: [
          "**/_*.{js,jsx,ts,tsx,md,mdx}",
          "**/_*/**",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/__tests__/**",
        ],
        postsPerPage: 10,
        feedOptions: {
          type: ["rss", "atom"],
          xslt: true,
        },
        editUrl: "#",
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        lastmod: "date",
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: ["/tags/**"],
        filename: "sitemap.xml",
        createSitemapItems: async (params) => {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes("/page/"));
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/html-social-card.jpg",
    navbar: {
      title: "HTML Mastery",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "📚 Tutorial",
        },
        {
          to: "/blog",
          label: "📝 Blog",
          position: "left",
        },
        {
          to: "/version",
          label: "Version",
          position: "right",
        },

        {
          href: "https://github.com/html-mastery/html-mastery.github.io",
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
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "#",
            },
            {
              label: "Discord",
              href: "#",
            },
            {
              label: "X",
              href: "#",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "#",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
