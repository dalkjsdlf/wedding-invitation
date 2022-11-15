const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/wedding/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/_var.scss";`,
      },
    },
  },
  transpileDependencies: true,
  lintOnSave:false
}
)
