import React, { Component } from 'react';
import './ICMyCase_Close.scss';
import cookie from 'react-cookies';

class ICMyCase_Close extends Component {
    constructor(props) {
        super([props]);
        this.state={
            bsCaseArray:[],
            count:[]
            
        };
        this.sid = cookie.load('userId')[0]['IC_sid'];  //網紅id
    }
    showCase=()=>{
        fetch('http://localhost:3000/case/icMyCase_Close/'+this.sid)
        .then(res=>res.json())
        .then(data=>{   
            this.setState({
                bsCaseArray:data
            })
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
                          {
                            this.state.bsCaseArray.map((v,idx)=>{
                              
                                return(
                                        <div key={v.BScase_sid}  className="imco_card" style={{'background':'#ed6969'}}>
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
                                              
                                                {/* <button  className="btn" >查看對話</button> */}
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

export default ICMyCase_Close;
