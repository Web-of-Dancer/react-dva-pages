import React from 'react';
import './Download.less';
const BG  =  'http://ypy.lazyertech.com/activityShare/download-bg.jpg'
class Download extends React.Component {
    constructor(props){
        super();
        window.location.assign('/');
    }
    render() {
        return (
            <div className="download-page">
                <div className="head">
                    <img src={BG}/>
                    <p className="game-size">64.4MB</p>
                </div>
                <div className="content">
                    <p>
                    觅呱比赛是一款具有蚌埠特色的比赛游戏，<br />
                    精致的游戏体验，刺激的赛事玩法，丰厚的<br />
                    赛事奖励。我在【觅呱比赛】等着你！
                    </p>
                    <a className="download-btn">点击下载</a>
                </div>
                <div className="trust">
                    <a>无法信任请点击</a>
                </div>
                
            </div>
        )
    }
}

export default Download;