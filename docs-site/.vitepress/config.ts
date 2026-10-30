import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Pats Registry Docs',
  description: 'End-to-end instructions for creating, releasing, and proposing Kirn Pats.',
  lang: 'en-US',
  base: '/pats/',
  cleanUrls: true,
  appearance: true,
  themeConfig: {
    logo: 'https://pats-registry.github.io/pats-logos/pats-icon.png',
    siteTitle: 'pats / registry',
    nav: [
      { text: 'Start here', link: '/guide/start' },
      { text: 'Publish a Pat', link: '/guide/create-pat' },
      { text: 'Open a PR', link: '/guide/pull-request' },
      { text: 'GitHub ↗', link: 'https://github.com/pats-registry/pats' }
    ],
    sidebar: {
      '/guide/': [
        { text: 'Add a Pat from start to finish', items: [
          { text: 'Start here', link: '/guide/start' },
          { text: 'Fork and clone', link: '/guide/fork-and-clone' },
          { text: 'Create your Pat', link: '/guide/create-pat' },
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
      { icon: 'github', link: 'https://github.com/pats-registry/pats' }
    ],
    footer: {
      message: 'Built in the open for the Kirn ecosystem.',
      copyright: 'MIT licensed · <a href="https://kirn-lang.github.io/">Kirn website</a> · <a href="https://pats-registry.github.io/">Pats registry</a> · <a href="https://kirnly.github.io/">Kirnly</a> · <a href="https://kirnos-kernel.github.io/">KirnOS</a> · <a href="https://kirsh-shell.github.io/">Kirsh</a> · <a href="https://stirk-ai.github.io/">Stirk AI</a> · <a href="https://rkriad585.github.io/">Creator</a> · <a href="https://rkriad585.github.io/kirn/">Kirn docs</a> · <a href="https://pats-registry.github.io/pats">Pats docs</a>'
    },
    editLink: {
      pattern: 'https://github.com/pats-registry/pats/edit/main/docs-site/:path',
      text: 'Edit this page on GitHub'
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#171717' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Pats Registry Docs' }],
    ['meta', { property: 'og:title', content: 'Pats Registry Docs — publish a Kirn Pat' }],
    ['meta', { property: 'og:description', content: 'End-to-end instructions for creating, releasing, and proposing Kirn Pats.' }],
    ['meta', { property: 'og:image', content: 'https://pats-registry.github.io/pats-logos/pats-1280x640.png' }],
    ['link', { rel: 'icon', href: 'https://pats-registry.github.io/pats-logos/pats_icon-on-light.png' }]
  ]
}))
