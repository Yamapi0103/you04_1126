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
                <div id="" className="flex" >
                    <div className="register_navbar">
                        <div className="member_head">
                            <img src="./images/img001.jpg" alt="me" />
                        </div>
                        <ul>
                            <li className="transition">
                                <Link to={`${this.props.match.url}/ICMyInfo`}><i class="fas fa-home"></i>&nbsp;帳戶資訊</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICMyCase/ICMyCase_Open`}><i class="fas fa-book-open"></i>&nbsp;接案管理</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICChat`}><i class="fas fa-comment"></i>&nbsp;對話紀錄</Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICMyFavor`}><i class="fas fa-heart"></i>&nbsp;我的收藏</Link>
                            </li>
                           
                            

                        </ul>
                    </div>
                    <switch>
                        {/* 會員中心 */}
                        <Route exact path={`${this.props.match.url}/ICMyInfo`} component={ICMyInfo} />
                        {/* 接案管理 */}
                        <Route  path={`${this.props.match.url}/ICMyCase`} component={ICMyCase} />
                        {/* 對話紀錄 */}
                        <Route  path={`${this.props.match.url}/ICChat`} component={ICChat} />
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