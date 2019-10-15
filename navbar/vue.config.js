// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': __dirname + '/src-navbar'
      }
    },
    entry: {
      app: './src-navbar/main.js'
    }
  },
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    config.externals(['vue', 'vue-router'])
  },
  // filenameHashing: false,
}
