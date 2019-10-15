// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': __dirname + '/src-app1'
      }
    },
    entry: {
      app: './src-app1/main.js'
    }
  },
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    config.externals(['vue', 'vue-router'])
  },
  filenameHashing: false,
}
