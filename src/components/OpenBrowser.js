/**
 * create by wyg 2018年09月28日
 * 微信提示打开浏览器
 */
import React from 'react';
import './Footer.less';
import browser from '../assets/open_browser.jpg';

class OpenBrowser extends React.Component{
    render(){
        const { style, onClick } = this.props;
        return(
            <img  onClick={onClick} src={browser} style={{width:'100VW',height:'100VH',position: 'fixed',top:0,left:0}}/>
        )
    }
}
export default OpenBrowser;