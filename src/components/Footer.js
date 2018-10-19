/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import './Footer.less';


class Footer extends React.Component{
    render(){
        const { style } = this.props;
        return(
            <div style={style} className="footer" ref={el => this.fot =el}>
                <p>此次活动最终解释权归觅呱游戏所有</p>
            </div>
        )
    }
}
export default Footer;