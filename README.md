# react-dva-pages
react+dva配置多页面移动端项目
## 配置多文件入口
- .roadhogrc.js 文件修改 entry: "/src/pages/*.js"
- 例如在pages文件中添加 index.js share.js 相应在public文件夹中添加 index.html share.html;
- 路由要对应入口文件;
- 在开发模式中调用除index页面以外得页面需要加上要访问的文件名 例如 http://localhost:8000/share.html#/;
