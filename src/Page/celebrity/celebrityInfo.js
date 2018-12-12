import React, { Component } from "react";
import './celebrityInfo.scss';
import swal from 'sweetalert';
import cookies from 'react-cookies'
import{Link} from 'react-router-dom';


class CelebrityInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celebrity: [],
            // celebrity: this.initState,
        }


        this.BS_case = {
            BS_sid: cookies.load('userId')[0].BS_sid,
            IC_sid: parseInt(props.match.params.icsid)
        }
        this.savedOrNot()
    }

    Favorite = (evt) => {
        this.setState({
            saved: !(this.state.saved),
        })
        console.log(this.state);

        if (!this.state.saved)
            this.addHandler();
        else
            this.delHandler()
        evt.preventDefault();
    }

    delHandler = () => {
        console.log(this.BS_case.BS_sid, this.BS_case.IC_sid)

        fetch('http://localhost:3000/api/BSGetFavor/' + this.BS_case.BS_sid + '/' + this.BS_case.IC_sid, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // alert(data.message)
                swal(data.message, "已移除");
            })
    }

    savedOrNot = () => {
        fetch("http://localhost:3000/api/BSGetFavor/" + this.BS_case.BS_sid + "/" + this.BS_case.IC_sid)
            .then(res => res.json())
            .then(result => {
                if (result.length == 1)
                    this.setState({
                        saved: true
                    })
            })
    }


    componentDidMount() {
        this.getMembers();
    }


    getMembers() {
        fetch("http://localhost:3000/info/icmembers/" + this.BS_case.IC_sid)
            .then(res => res.json())
            .then(member => {
                this.setState({
                    celebrity: member[0]
                })
                console.log(this.state.celebrity)
            })
    }

    addHandler = (evt) => {
        fetch('http://localhost:3000/api/BSAddFavor', {
            method: 'POST',
            body: JSON.stringify(this.BS_case),
            headers: new Headers({
                'content-type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(data => {
                // alert(data.message)
                swal(data.message, "可到我的收藏查看");
            })

    }






    render() {
        return (
            <React.Fragment>
                <div className="Total_wrap">
                    <div className="Upper_wrap">
                        <figure>
                        {this.state.celebrity['IC_photo']===""?
                            <img id="user_solid" src={"/images/user-solid.svg"} alt="" />:
                            <img src={`http://localhost:3000/info/${this.state.celebrity['IC_photo']}`} alt=""/>
                        }
                        </figure>

                        <div className="formalInfo">
                            <div className="cele_title">
                                <div className="cele_name">
                                    {this.state.celebrity['IC_name']}
                                </div>

                                <Link to="" className="celeadd_btn" onClick={this.Favorite}>{this.state.saved ? "移除":"收藏"}
                                    {/* <a onClick={this.addHandler} className="celeadd_btn" >收藏</Link> */}
                                </Link>
                            </div>

                            <div className="cele_content">
                                <p><span>‧ 擅長社群：</span>{this.state.celebrity['IC_media']}</p>
                                <p><span>‧ 性別：</span>{this.state.celebrity['IC_gender']}</p>
                                <p><span>‧ 最低階案金額：</span>{this.state.celebrity['IC_price']}</p>
                                <p><span>‧ 經手業配數：</span>{this.state.celebrity['IC_media']}</p>
                                <hr />
                                <p><span>‧ YouTube 連結：</span><a href={this.state.celebrity['IC_yt']}>{this.state.celebrity['IC_yt']}</a></p>
                                <p><span>‧ 粉絲(千)：</span>{this.state.celebrity['IC_ytfans']}</p>

                                <hr />
                                <p><span>‧ Facebook 連結：</span><a href={this.state.celebrity['IC_fb']}>{this.state.celebrity['IC_fb']}</a></p>
                                <p><span>‧ 粉絲(千)：</span>{this.state.celebrity['IC_fbfans']}</p>

                                <hr />
                                <p><span>‧ Ingstram 連結：</span><a href={this.state.celebrity['IC_ig']}>{this.state.celebrity['IC_ig']}</a></p>
                                <p><span>‧ 粉絲(千)：</span>{this.state.celebrity['IC_igfans']}</p>

                                <hr />
                                <p><span>‧ Blog 連結：</span><a href={this.state.celebrity['IC_web']}>{this.state.celebrity['IC_web']}</a></p>
                            </div>
                        </div>
                    </div>

                    {/* <p>詳細的內容</p> */}
                    {/* <div className="Lower_wrap"> */}
                    {/* 顯示 this.state.celebrity裡的資訊 */}
                    {/* </div> */}

                </div>
            </React.Fragment>
        );
    }
}

export default CelebrityInfo;



