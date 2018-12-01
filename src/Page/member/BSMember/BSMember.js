import React, { Component } from 'react';
import './BSMember.scss';
import { Route, Link } from 'react-router-dom';
import BSMyInfo from './BSMyInfo/BSMyInfo';
import BSMyCase from './BSMyCase/BSMyCase';
import BSMyFavor from './BSMyFavor/BSMyFavor';
import BSMyChat from './BSMyChat/BSMyChat';
import BSMyBilling from './BSMyBilling/BSMyBilling';


class BSMember extends Component {
    constructor(props) {
        super([props])
        console.log(props.match.url)
    }
    render() {
        return (

            <React.Fragment>
                <div id="" className="flex" >
                    <div className="register_navbar">
                        <div className="member_head">
                            <img src="/images/me.jpg" alt="me" />
                        </div>
                        <ul>
                            <li className="transition">
                                <Link to={`${this.props.match.url}/BSMyInfo`}><i class="fas fa-home"></i>&nbsp;帳戶資訊</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/BSMyCase/BSMyCase_Open`}><i class="fas fa-book-open"></i>&nbsp;接案管理</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/BSMyChat`}><i class="fas fa-comment"></i>&nbsp;對話紀錄</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/BSMyFavor`}><i class="fas fa-heart"></i>&nbsp;我的收藏</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/BSMyBilling`}><i class="fas fa-folder"></i>&nbsp;訂單管理</Link>
                            </li>
                        </ul>
                    </div>
                    <switch>
                        {/* 會員中心 */}
                        <Route exact path={`${this.props.match.url}/BSMyInfo`} component={BSMyInfo} />
                        {/* 接案管理 */}
                        <Route  path={`${this.props.match.url}/BSMyCase`} component={BSMyCase} />
                        {/* 對話紀錄 */}
                        <Route exact path={`${this.props.match.url}/BSMyChat/:bs_case_detail_sid`} component={BSMyChat} />
                        <Route exact path={`${this.props.match.url}/BSMyChat/`} component={BSMyChat} />
                        {/* 訂單管理 */}
                        <Route exact path={`${this.props.match.url}/BSMyBilling`} component={BSMyBilling} />
                        {/* 我的收藏 */}
                        <Route exact path={`${this.props.match.url}/BSMyFavor`} component={BSMyFavor} />
                    </switch>
                </div>


                {/* 這邊是元件控管的部分 */}


            </React.Fragment>





        )
    }
}



export default BSMember;