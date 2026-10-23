import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Pets Registry Docs',
  description: 'End-to-end instructions for creating, releasing, and proposing Kirn Pets.',
  lang: 'en-US',
  base: '/pets/',
  cleanUrls: true,
  appearance: true,
  themeConfig: {
    logo: 'https://pets-registry.github.io/pats-logos/pats-icon.png',
    siteTitle: 'pets / registry',
    nav: [
      { text: 'Start here', link: '/guide/start' },
      { text: 'Publish a Pet', link: '/guide/create-pet' },
      { text: 'Open a PR', link: '/guide/pull-request' },
      { text: 'GitHub ↗', link: 'https://github.com/pets-registry/pets' }
    ],
    sidebar: {
      '/guide/': [
        { text: 'Add a Pet from start to finish', items: [
          { text: 'Start here', link: '/guide/start' },
          { text: 'Fork and clone', link: '/guide/fork-and-clone' },
          { text: 'Create your Pet', link: '/guide/create-pet' },
          { text: 'Validate locally', link: '/guide/validate' },
          { text: 'Commit and push', link: '/guide/commit-and-push' },
          { text: 'Open the pull request', link: '/guide/pull-request' },
          { text: 'After approval', link: '/guide/after-merge' }
        ] },
        { text: 'Reference', items: [
          { text: 'Registry rules', link: '/reference/registry-rules' },
          { text: 'Troubleshooting', link: '/reference/troubleshooting' }
        ] }
      ]
    },
    outline: { level: [2, 3] },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pets-registry/pets' }
    ],
    footer: {
      message: 'Built in the open for the Kirn ecosystem.',
      copyright: 'MIT licensed · <a href="https://kirn-lang.github.io/">Kirn website</a> · <a href="https://pets-registry.github.io/">Pets registry</a> · <a href="https://kirnly.github.io/">Kirnly</a> · <a href="https://kirnos-kernel.github.io/">KirnOS</a> · <a href="https://rkriad585.github.io/">Creator</a> · <a href="https://rkriad585.github.io/kirn/">Kirn docs</a> · <a href="https://pets-registry.github.io/pets">Pets docs</a>'
    },
    editLink: {
      pattern: 'https://github.com/pets-registry/pets/edit/main/docs-site/:path',
      text: 'Edit this page on GitHub'
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#171717' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Pets Registry Docs' }],
    ['meta', { property: 'og:title', content: 'Pets Registry Docs — publish a Kirn Pet' }],
    ['meta', { property: 'og:description', content: 'End-to-end instructions for creating, releasing, and proposing Kirn Pets.' }],
    ['meta', { property: 'og:image', content: 'https://pets-registry.github.io/pats-logos/pats-1280x640.png' }],
    ['link', { rel: 'icon', href: 'https://pets-registry.github.io/pats-logos/pats_icon-on-light.png' }]
  ]
}))
