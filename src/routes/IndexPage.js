/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpenBrowser from '../components/OpenBrowser';
import { getUserInfo } from '../services/http';
import { getItem, setItem } from '../utils/cookie';
import queryString from '../utils/getQueryStr';
import './IndexPage.less';

/*******系统头像 */

/*******系统头像 */
const { type, veToken } = queryString();
if(type == 0){
  window.location.replace('#/error');
}

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      type,
      veToken,
      originNickName: '我是昵称',
      originImg: null,
      visible: false
    }

  }
  componentDidMount() {

  }
  render() {
    const { originNickName, originImg, type, visible } = this.state;
    return (
        <div className="pull-new">
          {/* <Header ref={el => this.nav = el} info={{ originNickName, originImg }} /> */}
          <a className="rule-btn" onClick={()=>this.setState({visible:true})}></a>
          <div className="ad-box">
            <p className="btn-receive">
              {
                type == '1' ?
                  <span style={{ color: "#f9414c" }}>您的设备或IP已超过领取限制!</span>
                  :
                  null
              }
              {
                type == '2' ?
                  <span>您已经是老用户啦, 快去邀请新人得礼包吧!</span>
                  :
                  null
              }
              {
                type == '3' ?
                  <span>终于等到可爱的你, 送你一个新用户大礼包!</span>
                  :
                  null
              }
            </p>
            <a href="//ypy.lazyertech.com" className="download-game"></a>
            {/* <div className="icon-box">
              <i></i><span>觅呱游戏</span>
            </div> */}
          </div>
          {
          visible ? 
          <OpenBrowser onClick={()=>this.setState({visible:false})}/>
          :
          null
        }
        
        {/* <Footer /> */}
        </div>
    );
  }
}
export default IndexPage;
