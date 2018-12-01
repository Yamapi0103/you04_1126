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
                <div id="member_container" className="flex" >
                    <div className="register_navbar">
                        <div className="member_head">
                            <img src="/images/member.png" alt="me" />
                            <span>金 城武</span>
                        </div>
                        <ul>
                            <li className="transition">
                                <Link to={`${this.props.match.url}/BSMyInfo`}>
                                    <i class="fas fa-home"></i>
                                    <span>帳戶資訊</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/BSMyCase/BSMyCase_Open`}>
                                    <i class="fas fa-book-open"></i>
                                    <span>接案管理</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/BSMyChat`}>
                                    <i class="fas fa-comment"></i>
                                    <span>對話紀錄</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/BSMyFavor`}>
                                    <i class="fas fa-heart"></i>
                                    <span>我的收藏</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/BSMyBilling`}>
                                    <i class="fas fa-folder"></i>
                                    <span>訂單管理</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <switch>
                        {/* 會員中心 */}
                        <Route exact path={`${this.props.match.url}/BSMyInfo`} component={BSMyInfo} />
                        {/* 接案管理 */}
                        <Route  path={`${this.props.match.url}/BSMyCase`} component={BSMyCase} />
                        {/* 對話紀錄 */}
                        <Route exact path={`${this.props.match.url}/BSMyChat`} component={BSMyChat} />
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