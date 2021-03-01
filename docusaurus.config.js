module.exports = {
  title: 'AttoBot',
  tagline: 'A multi-purpose Discord bot with many features and API integrations that will enhance your Discord experience.',
  url: 'https://attobot.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'attobot-discord',
  projectName: 'website',
  favicon: 'img/favicon.ico',
  themeConfig: {
    hideableSidebar: true,
    announcementBar: {
      id: 'support_us',
      content: 'If you like AttoBot, please consider <a href="https://buymeacoff.ee/attobot">donating</a>!',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    navbar: {
      title: 'AttoBot',
      logo: {
        alt: 'AttoBot',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://buymeacoff.ee/attobot',
          label: 'Donate',
          position: 'left',
        },
        {
          href: 'https://discord.gg/fejq4seryy',
          label: 'Support Server',
          position: 'left',
        },
        {
          href: 'https://discord.com/api/oauth2/authorize?client_id=784351044065951744&scope=bot&permissions=171305158',
          label: 'Invite AttoBot',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Support Server',
              href: 'https://discord.gg/fejq4seryy'
            },
            {
              label: 'Donate',
              href: 'https://buymeacoff.ee/attobot',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/attobot-discord'
            },
          ],
        },
        {
          title: 'Partners',
          items: [
            {
              label: 'No Name Bot',
              href: 'https://discord.gg/2DBFZKnRWt',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AttoBot, Made by Wolf20482#3390 | Built with Discord.js | Website built with Docusaurus`,
    },
  },
  scripts: [
    {
      src: 'https://arc.io/widget.min.js#V34Ysous',
      async: true,
    },
    {
      src: '//acacdn.com/script/suv4.js',
      'data-adel': 'lwsu',
      zid: '4196687'
    }
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
        {
          hashed: true,
        }
    ]
  ]
};
