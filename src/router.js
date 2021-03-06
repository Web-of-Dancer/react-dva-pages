/**
 * create by wyg 2018年7月16日
 */
import React from 'react';
import { Router, Route } from 'dva/router';
import { IndexPage, NotFund, Old, Download } from './routes';

// 判断是否为浏览器

let is_weixin = (function() {
  let ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else if(ua.match(/WeiBo/i) == "weibo") {
    return true;
  } else { 
    return false;
  }
})();

// 回到顶部
const top = () => {
  window.scrollTo(0, 0);
}
is_weixin = true
function RouterConfig({ history }) {
  return (
    <div>
      <Router history={history}>
        <Route path="/" component={IndexPage} onEnter={top} />
        <Route path="/error" component={NotFund} onEnter={top} />
        <Route path="/old" component={Old} onEnter={top} />
        <Route path="/download" component={Download} onEnter={top} />
      </Router>
    </div>

  );
}
export default RouterConfig;
