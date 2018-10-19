const path = require('path');
const pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
  // require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/svg/'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/pages/*.js',//多入口文件
  svgSpriteLoaderDirs: svgSpriteDirs,
  "disableCSSModules": true,
  // "theme": "./theme.config.js",
  "publicPath":"./",
  proxy: {
    "/veToken": {
      target: "http://www.xxxxxx.xyz/",
      changeOrigin: true,
      secure: false
    }
  },
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        // ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }]
      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 100,
          propWhiteList: [],
        }),
      ],
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
        'transform-remove-console',
        // ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }]

      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 100,
          propWhiteList: [],
        }),
      ],
    }
  }
}
