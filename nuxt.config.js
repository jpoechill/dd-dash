const pkg = require('./package')


module.exports = {
  mode: 'spa',
  server: {
    host: '0.0.0.0', // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Djao Djin App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'favicon.png?v=2',
        }
      ],
      script: [{
          src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js'
        },
        {
          src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'
        },
        {
          src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js'
        }
      ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/custom-styles.css',
    '~/assets/page-content.css',
    '~/assets/transitions.css',
    '~/assets/bootstrap-mods.css',
    '~/assets/buttons.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
