/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import './ShareReward.less';
import headFace from '../assets/logo.png';
class ShareReward extends React.Component {
    render() {
        const { className, style, originNickName, originImg,reward,time} = this.props;
        return (
            <div className={"reward-box " + className} style={style}>
                <img className="face" src={originImg ? originImg : headFace} />
                <div className="name-box">
                    <p className="name">{originNickName}</p>
                    <p className="mark">拿红包,拿到手软</p>
                </div>

                <div className="reward-num-box">
                    {reward}呱豆 
                </div>
            </div>

        )
    }
}
export default ShareReward;