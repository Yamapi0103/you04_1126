import React, { Component } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import { Link} from 'react-router-dom';
import './ICMyCase_Open.scss';

class ICMyCase_Open extends Component {
    constructor(props) {
        super([props]);
        this.state={
            bsCaseArray:[],
        };
        this.sid = cookie.load('userId')[0]['IC_sid'];  //網紅id
    }
    //顯示應徵的案子列表
    showCase=()=>{
        fetch('http://localhost:3000/case/icMyCase_Open/'+this.sid)
        .then(res=>res.json())
        .then(data=>{   
            if(data.length==0){
                $('.NoneCaseOpen').attr("style","display:block");
            }else{
                this.setState({
                    bsCaseArray:data
                })
            }
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
    scrollTOP=()=>{
        window.scrollTo(0,0);
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
                            {
                              <p className='NoneCaseOpen' style={{'display':'none'}}>您尚未應徵專案喔!</p>
                            }
                          {
                            this.state.bsCaseArray.map((v,idx)=>{
                              
                                return(
                                        <div key={v.BScase_sid}  className="imco_card">
                                            <div className='imco_card_left'>
                                                <h6>{v.BScase_name}</h6>
                                                <hr/>
                                                <p>廠商: {v.BS_name}</p>
                                                <p>地點: {v.BScase_location}</p>
                                                <p>預算: {v.BScase_pay}</p>
                                            </div>
                                            <div className='imco_card_right'>
                                                <p>發佈日期:{this.fixDate(v.BScase_publish_at)}</p>
                                                <p>截止日期:{this.fixDate(v.BScase_time_limit)}</p>
                                                {/* <div className="imco_card_right_btn_container">
                                                <Link to="" className="case_open_button">查看</Link>
                                                </div> */}
                                                <div className="btn_div mt-5">
                                                    <Link id="ic_openChat_btn" to={`/ICMember/ICChat/${v.sid}`} onClick={this.scrollTOP}>查看對話</Link>
                                                </div>
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

export default ICMyCase_Open;
