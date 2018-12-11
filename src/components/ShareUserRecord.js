/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import './ShareUserRecord.less';

class ShareUserRecord extends React.Component {
    render() {
        const { className, style, gameName, awardMsg, originNickName, originImg, rankPaly } = this.props;
        return (
            <div className={"record-block " + className} style={style}>
              <div className="face">
                <img src={originImg}/>
                <p className="name">{originNickName}</p>
              </div>
              <div className="record">
                <p className="room">我在{gameName}中</p>
                <h1>{rankPaly}</h1>
                {
                    awardMsg ? 
                    <p className="award">{awardMsg}</p>
                    :
                    null
                }
              </div>
            </div>

        )
    }
}
export default ShareUserRecord;