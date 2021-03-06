const { description } = require('../../package')

module.exports = {

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'bk/ - Hosting, Entwicklung, Linux',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  // for deploying to github.io
  // base: '/hirsgaertli/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/logo.png' }], 
    /* charset */
    ['meta', { charset: 'UTF-8' }],
    /* vuetify viewports */
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'}],

    /* Primary Meta Tags */
    ['meta', { name: 'title', content: 'bk/ - hirsgaertli.ch - Hosting, Entwicklung, Linux'}],
    ['meta', { name: 'description', content: 'bk/ - hirsgaertli.ch - Benjamin Kurmann - Dein persönlicher Partner für Hosting, Entwicklung und Linux.'}],
    /* Open Graph / Facebook */
    ['meta', { property: 'og:type', content: 'website'}],
    ['meta', { property: 'og:url', content: 'https://hirsgaertli.ch'}],
    ['meta', { property: 'og:title', content: 'bk/ - hirsgaertli.ch - Benjamin Kurmann - Hosting, Entwicklung, Linux'}],
    ['meta', { property: 'og:description', content: 'bk/ - hirsgaertli.ch - Benjamin Kurmann - Dein persönlicher Partner für Hosting, Entwicklung und Linux.'}],
    ['meta', { property: 'og:image', content: 'https://hirsgaertli.ch/meta.png'}],
    /* Twitter */
    ['meta', { property: 'twitter:card', content: 'summary_large_image'}],
    ['meta', { property: 'twitter:url', content: 'https://hirsgaertli.ch'}],
    ['meta', { property: 'twitter:title', content: 'bk/ - hirsgaertli.ch - Benjamin Kurmann - Hosting, Entwicklung, Linux'}],
    ['meta', { property: 'twitter:description', content: 'bk/ - hirsgaertli.ch - Benjamin Kurmann - Dein persönlicher Partner für Hosting, Entwicklung und Linux.'}],
    ['meta', { property: 'twitter:image', content: 'https://hirsgaertli.ch/meta.png'}],

  ],
  
}
