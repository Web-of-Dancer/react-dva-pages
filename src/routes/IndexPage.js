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

import H5 from '../assets/H5.jpg';
/*******系统头像 */
import face1 from '../assets/icon_001.png';
import face2 from '../assets/icon_002.png';
import face3 from '../assets/icon_003.png';
import face4 from '../assets/icon_004.png';
import face5 from '../assets/icon_005.png';
import face6 from '../assets/icon_006.png';
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
    getUserInfo({ veToken })
      .then(({ success, data }) => {
        if (success) {
          let { originNickName, originImg } = data;
          switch(originImg){
            case '1':
            originImg = face1
            break;
            case '2':
            originImg = face2
            break;
            case '3':
            originImg = face3
            break;
            case '4':
            originImg = face4
            break;
            case '5':
            originImg = face5
            break;
            case '6':
            originImg = face6
            break;
          }
          this.setState({
            originNickName,
            originImg
          })
        }

      })
  }
  render() {
    const { originNickName, originImg, type, visible } = this.state;
    return (
      <div >
        <div className="pull-new">
          <Header ref={el => this.nav = el} info={{ originNickName, originImg }} />
          <div className="ad-box">
            <img src={H5} />
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
            <a href="//miguabisai.com" className="download-game">
              下载游戏
            </a>
            <div className="icon-box">
              <i></i><span>觅呱游戏</span>
            </div>
          </div>
        </div>
        {
          visible ? 
          <OpenBrowser onClick={()=>this.setState({visible:false})}/>
          :
          null
        }
        
        <Footer />
      </div>
    );
  }
}



export default IndexPage;
