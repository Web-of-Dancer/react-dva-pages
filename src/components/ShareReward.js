/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import './ShareReward.less';
const luck = 'http://ypy.lazyertech.com/activityShare/icon-luck.png';
class ShareReward extends React.Component {
    render() {
        const { className, style, nickName, faceId,priceguadou,priceguazi,saleIdName,saleNum,type} = this.props;
        return (
            <div className={"reward-box " + className} style={style}>
                <img className="face" src={faceId} />
                <div className="name-box">
                    <p className="name">{nickName}</p>
                    <p className="mark">呱豆领的好，奖券少不了~</p>
                </div>

                <div className="reward-num-box">
                    <span className="num">
                    {priceguadou ? priceguadou + '呱豆' : null}
                    {priceguazi ? priceguazi + '呱籽' : null}
                    {saleNum ? saleIdName+'*'+saleNum : null}
                    </span>
                    {
                        type === 2 ? 
                        <img className="icon-luck" src={luck}/>
                         :
                        null 
                    }
                </div>
            </div>

        )
    }
}
export default ShareReward;