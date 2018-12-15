import React, { Component } from 'react';
import './ICMember.scss';
import { Route, Link } from 'react-router-dom';
import ICMyInfo from './ICMyInfo/ICMyInfo';
import ICMyCase from './ICMyCase/ICMyCase';
import ICMyFavor from './ICMyFavor/ICMyFavor';
import ICChat from './ICChat/ICChat';
import cookie from 'react-cookies';
import $ from 'jquery';

class ICMember extends Component {
    constructor(props) {
        super([props])
        this.state={
            Data:'',
            IC_photo:''
        };
        // console.log(props.match.url)
        this.sid = cookie.load('userId')[0]['IC_sid'];  //IC_sid
    }
    getInfo=()=>{
        fetch('http://localhost:3000/you04/ICmemberInfo/'+this.sid)
        .then(res=>res.json())
        .then(data=>{  
            // console.log(data); 
            this.setState({
                Data:data[0],
                IC_photo:data[0]['IC_photo']
            })
            cookie.save('userId',[{
                ...cookie.load('userId')[0],
                IC_photo:data[0]['IC_photo']
            }])
            console.log(cookie.load('userId'[0]))
        })
    }

    onChange = (evt) => {
        evt.preventDefault();
        switch (evt.target.name) {
            case 'IC_photo':
            //console.log(evt.target.files[0]);
                this.setState({IC_photo: evt.target.files[0] });
                break;
            default:
                this.setState({ [evt.target.name]: evt.target.value });
        }
    }    

    onSubmit = (evt) => {     
        evt.preventDefault();
        const {IC_photo} = this.state;
       // console.log(IC_photo)
        let formData = new FormData();

        formData.append('photo', IC_photo);

        let ic_sid = cookie.load('userId')[0]['IC_sid']
       // alert(ic_sid);
        fetch('http://localhost:3000/info/icmembers_upload_Photo/' + ic_sid, {
            method: 'PUT',
            body: formData
        }).then(res=>res.json())
        .then(data=>{  
            console.log(data);
        }).then(()=>{
            this.getInfo();
        })
    }

    componentDidMount = () => {
    this.getInfo();

    }

    topTop = () => {
        $("body, html").animate({   //要讓他可以上去一定要設置body, html window會有問題
            scrollTop: 0
        }, 500);
    }

    render() {
        return (

            <React.Fragment>
                <div id="member_container" className="flex" >
                    <div className="register_navbar">
                        <div className="member_head">
                            <img src={(cookie.load('userId')[0]['IC_photo']==null||cookie.load('userId')[0]['IC_photo']=="")?"/images/user-solid.svg":`http://localhost:3000/info/${this.state.IC_photo}`} alt="me" />
                            <span>{this.state.Data['IC_name']}</span>
                            <Link to="" className="upload_img" data-toggle="modal" data-target="#exampleModal" title="上傳照片">
                                <i class="fas fa-camera"></i>
                            </Link>
                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">請選擇要上傳的照片</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label for="exampleFormControlFile1">檔案請勿超過100k</label>
                                            <input type="file" onChange={this.onChange} className="form-control-file" name="IC_photo" id="IC_photo"/>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
                                        <button type="button" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal">確定傳送</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li className="transition">
                                <Link to={`${this.props.match.url}/ICMyInfo`} onClick={this.topTop}>
                                    <i class="fas fa-home"></i>
                                    <span>帳戶資訊</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICMyCase/ICMyCase_Open`} onClick={this.topTop}>
                                    <i class="fas fa-book-open"></i>
                                    <span>接案管理</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICChat`} onClick={this.topTop}>
                                    <i class="fas fa-comment"></i>
                                    <span>對話紀錄</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${this.props.match.url}/ICMyFavor`} onClick={this.topTop}>
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