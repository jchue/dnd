module.exports = {
  title: 'The Compendium',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Journal', link: '/journal/' },
      { text: 'D&D Beyond', link: 'https://www.dndbeyond.com' }
    ],
    sidebar: [
      ['/journal/', 'Journal'],
      '/journal/2-10',
    ],
    repo: 'jchue/dnd',
    repoLabel: 'Contribute!',
    editLinks: true,
    editLinkText: 'Help improve this page!',
  },
}