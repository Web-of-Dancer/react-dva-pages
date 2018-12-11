/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import OpenBrowser from '../components/OpenBrowser';
import { getUserInfo, getRewardRed } from '../services/http';
import { getItem, setItem } from '../utils/cookie';
import queryString from '../utils/getQueryStr';
import ShareReward from '../components/ShareReward';
import ShareUserRecord from '../components/ShareUserRecord';
import Toast from '../utils/Toast';

import './Share.less';

const { type, tokenInfo } = queryString();

class Share extends React.Component {
  constructor() {
    super();
    this.state = {
      type,
      tokenInfo,
      visible: (type == 3 || type == 4) ? true : false,
      loading: false,
      sharePrice: 1,
      ruleVisible: false,
      showMoreText: "展开更多",
      showMore: false,
      reward: 200,
      userRecord: {
        "gameName": "哇哈哈哈哈哈哈哈官方赛",
        "awardMsg": "获得 呱豆*50 小龙坎100代金券*1",//空：说明没有奖品，否则就是有奖品的
        "sharePrice": 2, //当值为2时，说明分享次数已用光
        "originNickName": "我是七个字昵称",//昵称
        "originImg": "http://ypy.lazyertech.com/MiGuaGameIcon/img_touxiang_1.png",//头像
        "rankPaly": 128//名次
      },
      priceDetails: [],
      redPriceMyselfStatus: 1,
      priceMyselfDetails:[{nickName:"asdf", faceId:1221,priceguadou:100,priceguazi:0,saleIdName:"娃哈哈代金券啛啛喳喳啊啊",saleNum:0}],
      lists: [{nickName:"asdf", faceId:1221,priceguadou:0,priceguazi:0,saleIdName:"娃哈哈代金券啛啛喳喳啊啊",saleNum:1}]
    }

    if (type == 0) {
      window.location.replace('#/error');
    }
    else if (type == 1) {
      Toast('你的次数已用完', 2);
    }
    else if (type == 2) {
      Toast('这是一个已抢过的红包~', 2);
    }
    else if (type == 5) {
      Toast('该红包已领完或已失效', 2);
    }

  }
  componentDidMount() {
    document.querySelector("#root").style.background = "#e73a34";//修改根元素背景颜色
    /*
    getRewardRed({ tokenInfo })
      .then(({ success, data }) => {
        if (success) {
          const {
            gameName,
            awardMsg,
            sharePrice,
            originNickName,
            originImg,
            rankPaly,
            redPriceMyselfStatus,
            priceMyselfDetails,
            priceDetails } = data;

          const userRecord = {
            gameName,
            awardMsg,
            originNickName,
            originImg,
            rankPaly
          };
          let lists = [];
          if (priceDetails) {
            lists = priceDetails.slice(0, 5);
          }
          this.setState({ priceDetails, priceMyselfDetails, lists, redPriceMyselfStatus, userRecord, sharePrice, loading: false })
        } 
        else {
          this.setState({ priceDetails: [], priceMyselfDetails: [], lists: [], redPriceMyselfStatus: null, loading: false })
        }

      })
      */
  }
  showMore = () => {
    const { priceDetails, showMore } = this.state;
    const lists = !showMore ? priceDetails : priceDetails.slice(0, 5);
    const showMoreText = showMore ? "展开更多" : "收起更多";
    this.setState({ lists, showMore: !showMore, showMoreText });
  }
  render() {
    const { type, visible,
      ruleVisible, lists,
      priceMyselfDetails,
      priceDetails,
      sharePrice,
      redPriceMyselfStatus,
      showMoreText, loading,
      userRecord
    } = this.state;
    const userInfo = priceMyselfDetails ? priceMyselfDetails[0] : {};
    const imgSrcStart = "http://ypy.lazyertech.com/activityShare/";
    return (
      <div>
        {
          loading ?
            <div className="loading">
              <img src={imgSrcStart + "loading.09e39f9e.gif"} />
            </div>
            :
            <div className="share-box">
              <div className="share-head">
                <div className="user-record">
                  <ShareUserRecord {...userRecord} />
                </div>
                <img src={imgSrcStart + "red_share_hbg.png"} />
                <i className="rule" onClick={() => this.setState({ ruleVisible: true })}></i>
              </div>
              <div className="centent" >
                {
                  sharePrice === 1 ?
                    <div className="block">
                      {
                        redPriceMyselfStatus === 1 ?
                          <ShareReward {...userInfo} className="reward-single" />
                          :
                          null
                      }
                      <div className="see-reward"><a href="http://ypy.lazyertech.com/"></a></div>
                      <div className="cut-off-line">
                        <span>看看大家的手气</span>
                      </div>
                      {
                        lists.map((item, i) => (
                          <ShareReward key={i} {...item} />
                        ))
                      }
                      {
                        priceDetails.length > 5
                          ? <div className="show-more" onClick={this.showMore}>{showMoreText}</div>
                          : null
                      }

                    </div>
                    :
                    <div className="block">
                      <div className="share-over">
                        今日红包分享次数已用完
                      </div>
                      <div className="see-reward"><a href="http://ypy.lazyertech.com/"></a></div>
                    </div>

                }
                <i className="line"></i>
                <div className="block card-box">
                  <img src={imgSrcStart + "share-title1.e28fd179.png"} className="title" />
                  <img src={imgSrcStart + "red_share_ad1.png"} className="ad" />
                </div>
                <i className="line"></i>
                <div className="block">
                  <img src={imgSrcStart + "share-title2.png"} className="title" />
                  <img src={imgSrcStart + "red_share_ad2.png"} className="ad" />
                </div>
                <i className="line"></i>
              </div>
              <div className="btm"> 
                <div className="btm-wechat">
                  <div><i className="icon-wechat"></i>微信公众号: 觅呱比赛</div>
                  <div><i className="icon-custom"></i>客服微信号: miguabisai</div>
                </div>
                <div className="icp">杭州米线科技有限公司 浙ICP备14013991号-1</div>
              </div>
              {
                ruleVisible ?
                  <img className="share-rule" src={imgSrcStart + "share-rule.jpg"} onClick={() => this.setState({ ruleVisible: false })} />
                  :
                  null
              }

            </div>
        }
      </div>

    );
  }
}



export default Share;
