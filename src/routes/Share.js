/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import OpenBrowser from '../components/OpenBrowser';
import { getUserInfo } from '../services/http';
import { getItem, setItem } from '../utils/cookie';
import queryString from '../utils/getQueryStr';
import ShareReward from '../components/ShareReward';
import Toast from '../utils/Toast';

import './Share.less';
import BG from '../assets/share-head.png';
import Title1 from '../assets/share-title1.png';
import Title2 from '../assets/share-title2.png';
import AD1 from '../assets/share-ad1.png';
import AD2 from '../assets/share-ad2.png';
import Card from '../assets/share-card.png';
import RedPacket from '../assets/share-redpacket.png';
/*******系统头像 */
import face1 from '../assets/icon_001.png';
import face2 from '../assets/icon_002.png';
import face3 from '../assets/icon_003.png';
import face4 from '../assets/icon_004.png';
import face5 from '../assets/icon_005.png';
import face6 from '../assets/icon_006.png';
/*******系统头像 */
const { type, veToken } = queryString();
if (type == 0) {
  window.location.replace('#/error');
}
class Share extends React.Component {
  constructor() {
    super();
    this.state = {
      type,
      veToken,
      originNickName: '我是昵称四个字',
      originImg: null,
      visible: true,
      reward: 200,
      time: '10/17 14:22:23',
      lists:[
        {originNickName: '哇哈哈',originImg: null,reward: 200,time:''},
        {originNickName: '哇哈哈',originImg: null,reward: 200,time:''},
        {originNickName: '哇哈哈',originImg: null,reward: 200,time:''},
        
      ]
    }

  }
  componentDidMount() {
    Toast('你已领过该红包');
    console.error('VConsole')
    document.querySelector("#root").style.background = "#e73a34";//修改根元素背景颜色
    getUserInfo({ veToken })
      .then(({ success, data }) => {
        if (success) {
          let { originNickName, originImg } = data;
          switch (originImg) {
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
    const { originNickName, originImg, type, visible,reward,time, lists} = this.state;
    const userInfo = {originNickName, originImg,reward,time}
    return (
      <div className="share-box">
        <div className="share-head">
          <img src={BG} />
          <i className="rule"></i>
        </div>
        <div className="centent" >
          <div className="block">
            <ShareReward {...userInfo} className="reward-single"/>
            <div className="see-reward"><a></a></div>
            <div className="cut-off-line">
              <span>看看大家的手气</span>
            </div>
            {
              lists.map((item,i)=>(
                <ShareReward key={i} {...item}/>
              ))
            }
          </div>
          <i className="line"></i>
          <div className="block card-box">
            <img src={Title1} className="title"/>
            <img src={AD1} className="ad"/>
            <img src={Card} className="card"/>
          </div>
          <i className="line"></i>
          <div className="block">
            <img src={Title2} className="title"/>
            <img src={AD2} className="ad"/>
          </div>
          <i className="line"></i>
        </div>
        <div className="btm">
          活动最终解释权归觅呱所有 <br/>
          杭州米线科技有限公司
        </div>
        {
          visible ? 
          <div className="red-packet" onClick={()=>this.setState({visible:false})}>
            <img src={RedPacket}/>
          </div>
          :
          null
        }
        
      </div>
    );
  }
}



export default Share;
