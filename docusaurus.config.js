/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KubeVela',
  tagline: 'Make shipping applications more enjoyable.',
  url: 'https://kubevela.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sunny0826', // Usually your GitHub org/user name.
  projectName: 'kubevela.github.io', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },
  themeConfig: {
    navbar: {
      title: 'KubeVela',
      logo: {
        alt: 'KubeVela',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/oam-dev/kubevela',
          className: 'header-githab-link',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: 'https://kubevela.io/docs/getting-started/install',
            },
            {
              label: 'Platform Builder Guide',
              to: 'https://kubevela.io/docs/platform-builder-guide/design-abstraction/overview',
            },
            {
              label: 'Developer Experience Guide',
              to: 'https://kubevela.io/docs/developer-experience-guide/appfile/quick-start-appfile',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack ( #kubevela channel )',
              href: 'https://slack.cncf.io/'
            },
            {
              label: 'WeChat',
              href: 'https://wj.qq.com/s2/7438465/6bd6',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/oam-dev/community',
            },
            {
              label: 'DingTalk (23310022)',
              href: '.',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/oam-dev/kubevela',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `
        <br />
        <strong>© KubeVela Authors ${new Date().getFullYear()} | Documentation Distributed under <a herf="https://creativecommons.org/licenses/by/4.0">CC-BY-4.0</a> </strong>
        <br />
      `,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        indexBlog: true,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
