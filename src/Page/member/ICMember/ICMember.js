import React, { Component } from 'react';
import './ICMember.scss';
import { Route, Link } from 'react-router-dom';
import ICMyInfo from './ICMyInfo/ICMyInfo';
import ICMyCase from './ICMyCase/ICMyCase';
import ICMyFavor from './ICMyFavor/ICMyFavor';
import ICChat from './ICChat/ICChat';


class ICMember extends Component {
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
                                <Link to={`${this.props.match.url}/ICMyInfo`}>
                                    <i class="fas fa-home"></i>
                                    <span>帳戶資訊</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICMyCase/ICMyCase_Open`}>
                                    <i class="fas fa-book-open"></i>
                                    <span>接案管理</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICChat`}>
                                    <i class="fas fa-comment"></i>
                                    <span>對話紀錄</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICMyFavor`}>
                                    <i class="fas fa-heart"></i>
                                    <span>我的收藏</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <switch>
                        {/* 會員中心 */}
                        <Route exact path={`${this.props.match.url}/ICMyInfo`} component={ICMyInfo} />
                        {/* 接案管理 */}
                        <Route  path={`${this.props.match.url}/ICMyCase`} component={ICMyCase} />
                        {/* 對話紀錄 */}
                        <Route exact  path={`${this.props.match.url}/ICChat`} component={ICChat} />
                        <Route  path={`${this.props.match.url}/ICChat/:bs_case_detail_sid`} component={ICChat} />
                        {/* 我的收藏 */}
                        <Route  path={`${this.props.match.url}/ICMyFavor`} component={ICMyFavor} />
    
                        

                    </switch>
                </div>

                {/* 這邊是元件控管的部分 */}
            </React.Fragment>

        )
    }
}



export default ICMember;