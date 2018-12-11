/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import './Header.less';
class Header extends React.Component {
    render() {
        const { className, style, info } = this.props;
        const {originNickName, originImg} = info;
        console.log(info);
        return (
            <div className={"header " + className} style={style}>
                <div className="head-face">
                    <img src={originImg} />
                    <div className="">
                        <p className="nick-name">{originNickName}</p>
                        <div className="head-msg">
                            <p>还在等什么，快跟我一起来玩吧！</p>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Header;