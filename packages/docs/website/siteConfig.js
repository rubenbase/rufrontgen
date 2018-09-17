const users = [
  {
    caption: "User1",
    image: "/test-site/img/docusaurus.svg",
    infoLink: "https://www.example.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Rufrontgen",
  tagline: "Generate websites and mobile apps!",
  url: "https://docusaurus.io",
  baseUrl: "/",
  // For github.io type URLS, you would combine the URL and baseUrl like:
  // url: 'https://reasonml.github.io',
  // baseUrl: '/reason-react/',
  defaultVersionShown: "1.0.0",
  organizationName: "rubenbase",
  projectName: "rufrontgen",
  noIndex: false,
  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "doc1", label: "Docs" },
    { doc: "doc4", label: "API" },
    { page: "help", label: "Help" },
    { search: true },
    { blog: true, label: "Blog" }
  ],

  headerIcon: "img/docusaurus.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#9e42f4",
    secondaryColor: "#205C3B"
  },
  editUrl: "https://github.com/rubenbase/rufrontgen/edit/master/docs/",
  // Users variable set above
  users,
  disableHeaderTitle: false,
  disableTitleTagline: false,
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },
  separateCss: ["static/css/non-docusaurus", "static/assets/separate-css"],
  footerIcon: "img/docusaurus.svg",
  translationRecruitingLink: "https://crowdin.com/project/docusaurus",
  algolia: {
    apiKey: "0f9f28b9ab9efae89810921a351753b5",
    indexName: "github"
  },

  markdownPlugins: [
    function foo(md) {
      md.renderer.rules.fence_custom.foo = function(
        tokens,
        idx,
        options,
        env,
        instance
      ) {
        return '<div class="foo">bar</div>';
      };
    }
  ],
  scripts: [
    "https://docusaurus.io/slash.js",
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      async: true
    }
  ],
  stylesheets: [
    "https://docusaurus.io/style.css",
    {
      href: "http://css.link",
      type: "text/css"
    }
  ],
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  ogImage: "img/docusaurus.png",
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  }
};

module.exports = siteConfig;
