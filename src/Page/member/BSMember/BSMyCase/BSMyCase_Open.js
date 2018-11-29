import React, { Component } from 'react';
import './BSMyCase_Open.scss';
import cookie from 'react-cookies';
import $ from 'jquery';
import BSMyCase_Open_IChire from './BSMyCase_Open_IChire';


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
        fetch('http://localhost:3000/case/bsMycase/'+this.sid)
        .then(res=>res.json())
        .then(data=>{   //回傳這個廠商的多筆案子資訊 [{case1},{case2}....]
           
            this.setState({
                bsCaseArray:data
            })
        })
    }
    check=(evt)=>{
        $(evt.target).parent().next().toggleClass('show');
    }
    //計算有幾個網紅應徵
    Count=(n)=>{
        console.log('父: '+n)
        // let count1 = this.state.count;
        // console.log('還沒: '+this.state.count)
        this.state.count.push(n);
      
        this.setState({
            count:this.state.count
        })
        // console.log(this.state.count)
    }
    componentDidMount=()=>{
        this.showCase();
        // this.Count();
        console.log(this.state.count)
        console.log('finsih1')
    };
    

    render() {
      
        return (
            <React.Fragment>
                <div class="member_form_box">
                    <div class="member_form_content">
                        <div >
                        {/* {console.log(this.state.bsCaseArray)}  第一次會是空陣列,當網頁完成後執行showCase() => 執行setState(),賦值給this.state.bsCaseArray,同時讓網頁更新 */}
                          
                          {
                            this.state.bsCaseArray.map((v,idx)=>{
                              
                                return(
                                        <div key={v.BScase_sid}  className="imco_card">
                                            <h6>{v.BScase_name}</h6>
                                            <div className='imco_card_right'>
                                                <p>截止日期:{v.BScase_time_limit}</p>
                                                <p>應徵人數:{this.state.count[idx]}位</p>
                                                <button  onClick={this.check} className="btn" >查看應徵網紅</button>
                                                <button className="btn" >編輯</button>
                                            </div>
                                         
                                            <div className='imco_card_IC'>
                                                {/* 把各筆案子的sid傳給各自的子元件 => 交給他們去fetch做應徵網紅資料呈現 */}
                                                <BSMyCase_Open_IChire   BScase_sid={v.BScase_sid}  Count={this.Count}/>
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
