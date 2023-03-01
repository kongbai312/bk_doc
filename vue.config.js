const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  // 关闭ESLint的规则检查
  // lintOnSave: 'warning', // 输出提示错误, 但项目继续运行
  lintOnSave: false,
  devServer: {
    open: true
  },
  // element-plus
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}
