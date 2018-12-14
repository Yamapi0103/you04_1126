import React, { Component } from 'react';
import './BSMyCase_Close.scss';
import cookie from 'react-cookies';
import $ from 'jquery';
import BSMyCase_IChire from './BSMyCase_IChire';
import {Link} from 'react-router-dom';

class BSMyCase_Close extends Component {
    constructor(props) {
        super(props);
        this.state={
            bsCaseArray:[],
            
        };
        this.sid = cookie.load('userId')[0]['BS_sid'];  //廠商id
    }
    showCase=()=>{
        fetch('http://localhost:3000/case/bsMycase_Close/'+this.sid)
        .then(res=>res.json())
        .then(data=>{   //回傳這個廠商的多筆已結案的資訊 [{case1},{case2}....]
            this.setState({
                bsCaseArray:data
            })
        })
    }
    check=(evt)=>{
        $(evt.target).parent().parent().next().toggleClass('show');
    }
   
    //修改日期
    fixDate=(v)=>{
        if(!v){
            return '未設定'
        }
        else{
            return  v.replace(/\D[.:\d]*\D$/,'');
        }
    }
    componentDidMount=()=>{
        this.showCase();
    };
    

    render() {
      
        return (
            <React.Fragment>
                <div class="member_form_box">
                    <div class="member_form_content">
                          {
                            this.state.bsCaseArray.map((v,idx)=>
                                <div key={v.BScase_sid}  className="imco_card">
                                        <div className='imco_card_left'>
                                        <h6>{v.BScase_name}</h6>
                                        <hr/>
                                        <p>地點: {v.BScase_location}</p>
                                        <p>預算: {v.BScase_pay}</p>
                                    </div>
                                    <div className='imco_card_right'>
                                        <p>發佈日期: {this.fixDate(v.BScase_publish_at)}</p>
                                        <p>截止日期: {this.fixDate(v.BScase_time_limit)}</p>
                                        <p>應徵人數: {v.hire_num}位</p>
                                        <div className="imco_card_right_btn_container">
                                            <button onClick={this.check} className="case_open_button">查看應徵網紅</button>
                                            {/* <Link to={`/BSMyCase_edit`} className="case_open_button" >編輯</Link> */}
                                        </div>
                                    </div>
                                    <div className='imco_card_IC'>
                                        {/* 把各筆案子的sid傳給各自的子元件 => 交給他們去fetch做應徵網紅資料呈現 */}
                                        <BSMyCase_IChire BScase_sid={v.BScase_sid} close='close' />
                                    </div> 
                                </div>
                            )   
                          }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BSMyCase_Close;
