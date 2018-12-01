import React, { Component } from 'react';
import './BSMyCase_Open.scss';
import cookie from 'react-cookies';
import $ from 'jquery';
import BSMyCase_IChire from './BSMyCase_IChire';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

class BSMyCase_Open extends Component {
    constructor(props) {
        super([props]);
        this.state={
            bsCaseArray:[],
            count:[]
            
        };
        this.sid = cookie.load('userId')[0]['BS_sid'];  //廠商id
    }
    //顯示廠商po的案子列表
    showCase=()=>{
        fetch('http://localhost:3000/case/bsMyCase_Open/'+this.sid)
        .then(res=>res.json())
        .then(data=>{   //回傳這個廠商的多筆案子資訊 [{case1},{case2}....]
            if(data.length==0){
                $('.NoneCaseOpen').attr("style","display:block");
            }else{
                this.setState({
                    bsCaseArray:data
                })
            }
        })
    }
    check=(evt)=>{
        $(evt.target).parent().next().toggleClass('show');
    }
    End=(evt)=>{
        let bs_sid = evt.target.dataset.end;  //記錄著案子的sid
        fetch('http://localhost:3000/case/bsMycase_close/'+bs_sid,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{  
            swal(data.message);
        })
        $(evt.target).closest('.imco_card').attr('style','display:none');  
    }
    //計算有幾個網紅應徵
    Count=(n)=>{
        this.state.count.push(n);
        this.setState({
            count:this.state.count
        })
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
                        <div >
                        {/* {console.log(this.state.bsCaseArray)}  第一次會是空陣列,當網頁完成後執行showCase() => 執行setState(),賦值給this.state.bsCaseArray,同時讓網頁更新 */}
                          {
                              <p className='NoneCaseOpen' style={{'display':'none'}}>您沒有發佈中的案子喔!</p>
                          }
                          {
                            this.state.bsCaseArray.map((v,idx)=>{
                              
                                return(
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
                                                <p>應徵人數: {this.state.count[idx]}位</p>
                                                <div className="imco_card_right_btn_container">
                                                    <button  onClick={this.check} className="case_open_button" >查看應徵網紅</button>
                                                    
                                                    <Link to={`/BSMyCase_edit`} className="case_open_button" >編輯</Link>
                                                    <button className="case_open_button" onClick={this.End} data-end={v.BScase_sid}>結案</button>
                                                </div>
                                            </div>
                                         
                                            <div className='imco_card_IC'>
                                                {/* 把各筆案子的sid傳給各自的子元件 => 交給他們去fetch做應徵網紅資料呈現 */}
                                                <BSMyCase_IChire   BScase_sid={v.BScase_sid}  Count={this.Count}/>
                                            </div> 
                                            
                                        </div>
                                )
                            })   
                          }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BSMyCase_Open;
