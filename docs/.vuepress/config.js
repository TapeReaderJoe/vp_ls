module.exports = {
    theme: 'vuepress-theme-succinct',
    /*
  globalUIComponents: [
    'ThemeManager'
    ],
    */
    title: "LeadingStocks",
    themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Om",
        link: "/om/",
      },
      {
        text: "Blogg",
        link: "/blogg/",
      },
      {
        text: "Böcker",
        link: "/bocker/",
      },
         {
        text: "Kurser",
        link: "/kurser/",
      },
    ],
    sidebar: {
      "/kurser/": [
        {
          title: "Grundkurs", // required
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            "introduktion/",
            "introduktion/teknisk-analys",
            "introduktion/viktiga-termer",
            "introduktion/typer-av-handel",
            "introduktion/handelsplan",
            "introduktion/skapa-grafer",
          ],
        },
        {
          title: "Screening", // required
          collapsable: true, // optional, defaults to true
          sidebarDepth: 2, // optional, defaults to 1
          children: ["screening/"],
        },
      ],
      "/blogg/": [
        {
          title: "Bloggar", // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: ["2020/10/post-1.md"],
        },
      ],
      },
     plugins: ['vuepress-plugin-smooth-scroll'],
  },
}