module.exports = {
  title: 'The Compendium',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Jounal', link: '/journal/' },
      { text: 'D&D Beyond', link: 'https://www.dndbeyond.com' }
    ],
    sidebar: [
      ['/journal/', 'Journal'],
      '/journal/2-10',
    ],
  },
}
