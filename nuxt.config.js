module.exports = {
  server: {
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '互联网技术在线教育平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '互联网技术在线教育平台' },
      { name: 'description', content: '互联网技术在线教育平台' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
    { src: '~/plugins/element-ui-plugin.js', ssr: false },
    { src: '~/plugins/vue-qriously-plugin.js', ssr: false }
  ]
}
