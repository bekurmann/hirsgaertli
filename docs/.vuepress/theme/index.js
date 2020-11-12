/**
 * Adjustment Custom Theme
 */

module.exports = {
  // extend default theme
  extend: '@vuepress/theme-default',  

  // my global layout
  globalLayout: '/layouts/GlobalLayout.vue',

  // theme config
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    nextLinks: true,
    lastUpdated: false,
    activeHeaderLinks: false,
  },

  // plugins
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/search', {
      searchMaxSuggestions: 8
    }],
    ['@vuepress/blog',
    {
      directories: [
        {
          id: 'howto',
          dirname: '_howto',
          path: '/howto/',
          itemPermalink: '/howto/:year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 1,
          },
        },
        // {
        //   id: 'opinion',
        //   dirname: '_opinion',
        //   path: '/opinion/',
        //   layout: 'Blog_IndexPost',
        //   itemLayout: 'Blog_Post',
        //   itemPermalink: '/opinion/:year/:month/:day/:slug',
        //   pagination: {
        //     lengthPerPage: 1,
        //     layout: 'Blog_DirectoryPagination'
        //   },
        // },
      ],
      sitemap: 
      {
        hostname: 'https://hirsgaertli.ch'
      },
    }],
  ],
}