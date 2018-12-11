/**
 * create by wyg 2018年08月13日
 */
import React from 'react';
import Header from '../components/Header';
const NotFundImg = "http://ypy.lazyertech.com/activityShare/error.png";
class NotFund extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div style={{display:"flex",justifyContent: "center",paddingTop:"2rem"}}>
               <img src={NotFundImg}/>
            </div>
        )
    }
}
export default NotFund