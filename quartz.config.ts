import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Freaky Guys",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notes.freakyguys.party",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Tinos",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFCF0", // Flexoki Light: Paper
          lightgray: "#E6E4D9", // Flexoki Light: UI-1
          gray: "#B7B5AC", // Flexoki Light: Base-30
          darkgray: "#434341", // Flexoki Light: Base-70
          dark: "#100F0F", // Flexoki Light: Black (Text)
          secondary: "#205A71", // Flexoki Light: Cyan
          tertiary: "#5E6C5B", // Flexoki Light: Green
          highlight: "rgba(230, 228, 217, 0.5)", // Semi-transparent UI-1
          textHighlight: "#D0A21588", // Yellow with opacity
        },
        darkMode: {
          light: "#100F0F", // Flexoki Dark: Black
          lightgray: "#282726", // Flexoki Dark: UI-1
          gray: "#575653", // Flexoki Dark: Base-30
          darkgray: "#CECDC3", // Flexoki Dark: Base-70
          dark: "#FFFCF0", // Flexoki Dark: Paper (Text)
          secondary: "#3A94B8", // Flexoki Dark: Cyan
          tertiary: "#879A80", // Flexoki Dark: Green
          highlight: "rgba(40, 39, 38, 0.5)", // Semi-transparent UI-1
          textHighlight: "#D0A21588", // Yellow with opacity
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "rose-pine",
          dark: "rose-pine-moon",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
