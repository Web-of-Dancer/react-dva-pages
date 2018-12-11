const path = require('path');
const pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
  // require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg 使用前请先 npm install -S antd-mobile
  path.resolve(__dirname, 'src/svg/'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/pages/*.js',//多文件入口
  svgSpriteLoaderDirs: svgSpriteDirs,
  "disableCSSModules": true,
  // "theme": "./theme.config.js",//antd-mobile 默认css配置
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
        'transform-runtime',//动态加载css和js
        // ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }] //使用前请先 npm install -S antd-mobile
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
        'transform-remove-console',//清除控制台输出
        // ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }] //使用前请先 npm install -S antd-mobile

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
