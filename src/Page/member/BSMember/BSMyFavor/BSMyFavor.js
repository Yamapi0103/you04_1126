import React, { Component } from "react";
import './BSMyFavor.scss';
import swal from 'sweetalert';
import cookies from 'react-cookies'
import {Link} from 'react-router-dom'


class BSMyFavor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saveCelebrity:[]
        };

    this.BS_sid = cookies.load('userId')[0].BS_sid
        
    }
    getFavorIC=()=>{
        fetch("http://localhost:3000/api/BSFavorIC/"+this.BS_sid)
        .then(res => res.json())
        .then(data=>{
            console.log(data)
                    this.setState({
                        saveCelebrity:data
                    })
        })
    }
    componentDidMount = () => {
        this.getFavorIC()
    }
    unSaved=(evt)=>{
        console.log(evt.target)
        let IC_sid = evt.target.id
        fetch('http://localhost:3000/api/BSGetFavor/'+this.BS_sid+'/'+IC_sid,{
            method:'DELETE'})      
        .then(res => res.json())
        .then(data => {
                swal(data.message,"已從我的收藏移除");
                this.getFavorIC()
            })
        
    }
    render() {
        console.log(this.state)
         return (
            this.state.saveCelebrity.map((k) => {
                return (
                    <div key={k.bs_sid} className="card flex radius-border card_shadow">
                    <header className="banner">
                        <img src={"/images/" + k['IC_photo'] + ".jpg"} alt="" /> 
                        <div className="middle">
                            <Link to={`/celebrityInfo/${k.IC_sid}`}>
                                <div className="text">查看詳細資料</div>
                            </Link>
                        </div>
                    </header>
                        <div className="card_body">
                            <div className="celebrity_name_box">
                                <h2 className="text_cut">
                                    {/* 姓名:{k.celebrity.name} */}
                                </h2>
                            </div>
                            <div className="text_align">
                                <p><span>IC_sid:</span>{k.IC_sid}</p>
                                <p><span>性別:</span>{k.IC_gender}</p>
                                <p><span>類型: </span>{k.IC_media}</p>
                                <p><span>最低接案金:</span>{k.IC_price}</p>
                                <p><span>經手業配數: </span>{k.IC_case}</p>
                            </div>
                            <button id={k.IC_sid} onClick={this.unSaved} className="unsaved">取消收藏</button>
                        </div>
                    
                    </div>
                )
            })
        )
    }
}

export default BSMyFavor;