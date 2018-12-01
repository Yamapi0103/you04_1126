import React, { Component } from 'react';
import './BSMyChat.scss';
import $ from 'jquery';
import cookie from 'react-cookies';


class BSMyChat extends Component {
    constructor(props) {
        super(props);
        this.state={
            bsCaseArray:[],
            icNameArray:[],
            bsChatArray:[],
            icChatArray:[],
            //sortArray存放合併且排序過的對話內容 
            //[{sid: 1, talk_sid: 5, BS_content: "1", time: "2018-11-30T10:09:39.000Z"},{sid: 2, talk_sid: 5, BS_content: "2", time: "2018-11-30T10:09:43.000Z"}...]
            sortArray:[],   
            text:''
        };
        this.initstate={
            text:''
        };
        this.sid = cookie.load('userId')[0]['BS_sid'];  //廠商id
        this.BScase_sid=''; //該案子的sid
        this.talk_sid='';
        //從BSMyCase_IChire.js的Link寄來的bs_case_detail流水號sid
        this.bs_case_detail_sid = props.match.params.bs_case_detail_sid; 
    }
// ---------------------
    //顯示廠商發佈中且有人應徵的案子們
    showCase=()=>{
        fetch('http://localhost:3000/chat/bsMyCase_showCase/'+this.sid)
        .then(res=>res.json())
        .then(data=>{
             //去讀取應徵網紅資料
            fetch('http://localhost:3000/chat/bsMyCase_showIC/'+this.sid)
            .then(res=>res.json())
            .then(datas=>{     //回傳 [{ICname:阿傑實況},{ICname:xxxx}...]
                this.setState({
                    icNameArray:datas
                })  
            })
            setTimeout(()=>{
                this.setState({
                    bsCaseArray:data  //[{bs_case_detail+case1的資料},{bs_case_detail+case2的資料}...]
                })
            },300);
        });
    }
// --------------------顯示對話
    showChat=(evt)=>{
        //利用該案子的sid去抓bs_case_detail的"流水號sid"(流水號sid作為bs_talk資料表的talk_sid的值)
        let casesid = evt.target.dataset.casesid; //該案子的sid
        this.BScase_sid = casesid; //先把"該案子的sid"存起來,當下次傳送完訊息要重整畫面時會用到
        
        //因為寄出訊息後要重整顯示的function跟第一次要顯示對話的function有重複,所以寫成showChatFunction()
        this.showChatFunction();
        $(evt.target).parent().addClass('choose').siblings().removeClass('choose');
    }
// --------------------當寄出訊息後要重整對話頁
    //重整畫面時,因為this.showChat()會用到evt.target而導致ERROR,所以改用this.BScase_sid
    showChatFunction=()=>{
       //如果沒有this.BScase_sid => 代表是從接按管理進來的
        if(!this.BScase_sid){
            //用流水號sid讀取廠商的對話(存在bs_talk資料表)
            fetch('http://localhost:3000/chat/bsMyCase_showBSChat/'+this.bs_case_detail_sid)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    bsChatArray:data,
                })
                // console.log(data)
            });
            //用流水號sid讀取網紅的對話(存在ic_talk資料表)
            fetch('http://localhost:3000/chat/bsMyCase_showICChat/'+this.bs_case_detail_sid)
                .then(res=>res.json())
                .then(data=>{
                    this.setState({
                        icChatArray:data
                    })
                    // console.log(data)  
            })
        }
        //如果有this.BScase_sid => 代表是點擊此頁的其他案子
        else{
            fetch('http://localhost:3000/chat/bsMyCase_catch/'+this.BScase_sid)
                .then(res=>res.json())
                .then(data=>{
                this.talk_sid = data[0].sid;  //取得流水號sid
                
                //用流水號sid讀取廠商的對話(存在bs_talk資料表)
                fetch('http://localhost:3000/chat/bsMyCase_showBSChat/'+this.talk_sid)
                        .then(res=>res.json())
                        .then(data=>{
                            this.setState({
                                bsChatArray:data,

                            })
                            // console.log(data)
                    });
                    //用流水號sid讀取網紅的對話(存在ic_talk資料表)
                    fetch('http://localhost:3000/chat/bsMyCase_showICChat/'+this.talk_sid)
                        .then(res=>res.json())
                        .then(data=>{
                            this.setState({
                                icChatArray:data
                            })
                            // console.log(data)  
                    })
            })
        } 

        setTimeout(()=>{
            let concatArray = this.state.bsChatArray.concat(this.state.icChatArray);
           // sort by time
            let SortArray = concatArray.sort(function(a, b) {
                var timeA = a.time.toUpperCase(); // ignore upper and lowercase
                var timeB = b.time.toUpperCase(); // ignore upper and lowercase
                if (timeA < timeB) {
                    return -1;
                }
                if (timeA > timeB) {
                    return 1;
                }
                return 0;
            });
            // console.log(SortArray)
            this.setState({
                sortArray:SortArray
            })
        },300);
    }
// --------------------
    change=(evt)=>{
        let value = evt.target.value;
        this.setState({
            text:value
        })
    }
    boxScroll=(o)=>{
        o.scrollTop = o.scrollHeight;
        // console.log('置底')
   }
// --------------------寄出對話
    sentChat=()=>{
        //取得現在時間，並將格式轉成YYYY-MM-DD HH:MM:SS
        const onTime = () => {
            const date = new Date();
            const mm = date.getMonth() + 1;
            const dd = date.getDate();
            const hh = date.getHours();
            const mi = date.getMinutes();
            const ss = date.getSeconds();

            return [date.getFullYear(), "-" +
                (mm > 9 ? '' : '0') + mm, "-" +
                (dd > 9 ? '' : '0') + dd, " " +
                (hh > 9 ? '' : '0') + hh, ":" +
                (mi > 9 ? '' : '0') + mi, ":" +
                (ss > 9 ? '' : '0') + ss
            ].join('');
        }
        let sentArray;
        //如果有this.talk_sid => 代表是點擊此頁的其他案子
        if(this.talk_sid){
            sentArray=[this.talk_sid,this.state.text,onTime()];
        }
        //如果沒有this.talk_sid => 代表是從接按管理進來的
        else{
            sentArray=[this.bs_case_detail_sid,this.state.text,onTime()];
        }

        fetch('http://localhost:3000/chat/bsMyCase_sent',{
            method:'POST',
            body:JSON.stringify(sentArray),
            headers:new Headers({   
                'content-Type': 'application/json'  
            })
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.message)  //已上傳
        })
        .then(()=>{
            //清空輸入框
            this.setState(this.initstate)
            //送出後重新顯示對話
            this.showChatFunction()
            // console.log('重新顯示') 
               
        })
        .then(()=>{
            setTimeout(()=>{
            this.boxScroll($('.chatContent')[0]);
            },300);
        })
    }
    // ----------------------當從接案管理->查看應徵網紅->按查看對話 時啟動
    choose=()=>{  
        //用流水號sid讀取廠商的對話(存在bs_talk資料表)
        fetch('http://localhost:3000/chat/bsMyCase_showBSChat/'+this.bs_case_detail_sid)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                bsChatArray:data,
            })
            // console.log(data)
        });
        //用流水號sid讀取網紅的對話(存在ic_talk資料表)
        fetch('http://localhost:3000/chat/bsMyCase_showICChat/'+this.bs_case_detail_sid)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    icChatArray:data
                })
                // console.log(data)  
        })
        setTimeout(()=>{
            let concatArray = this.state.bsChatArray.concat(this.state.icChatArray);
           // sort by time
            let SortArray = concatArray.sort(function(a, b) {
                var timeA = a.time.toUpperCase(); // ignore upper and lowercase
                var timeB = b.time.toUpperCase(); // ignore upper and lowercase
                if (timeA < timeB) {
                    return -1;
                }
                if (timeA > timeB) {
                    return 1;
                }
                return 0;
            });
            // console.log(sortArray)
            this.setState({
                sortArray:SortArray
            })
        },300);
    }
// --------------------------
componentDidMount=()=>{
    this.showCase();
    //如果是從接案管理->查看應徵網紅->按查看對話的話就啟動choose() => 顯示該案子的對話紀錄
    if(this.bs_case_detail_sid){
        this.choose();
        setTimeout(()=>{
            $(`div[sid=${this.bs_case_detail_sid}]`).addClass('choose').siblings().removeClass('choose');
        },100)
    }  
};


    render() {
        return (
            <React.Fragment>
                <div class="member_form_box">
                    <div class="member_form_content">
                    <div className='chat'>
                        <div className='chat_left'>
                        {
                            this.state.bsCaseArray.map((v,idx)=>{
                                return(
                                        <div key={v.sid} className='case' sid={v.sid} >
                                            <h6>專案名字: {v.BScase_name}</h6>
                                            <p>應徵網紅:{this.state.icNameArray[idx]['IC_name']}</p>
                                            <p>地點: {v.BScase_location}</p>
                                            <p>預算: {v.BScase_pay}</p>
                                            <button data-casesid={v.BScase_sid} onClick={this.showChat} className='btn'>查看對話</button>
                                        </div>
                                )
                            })   
                        }
                       
                        </div>
                        <div className='chat_right'>
                            <div className='chatContent'>
                                {
                                    this.state.sortArray.map((v,idx)=>{
                                        return(
                                            (v.hasOwnProperty('BS_content'))
                                            ?
                                            <p className='bsChat' key={v.time} >{v.BS_content}</p>
                                            :
                                            <p className='icChat' key={v.time}>網紅: {v.IC_content}</p>   
                                        )
                                    })   
                                }
                            </div>
                            <div className='inputDiv'>
                                <textarea value={this.state.text} onChange={this.change} className='text' cols="5"></textarea>
                                <div onClick={this.sentChat} className='sent'>傳送</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BSMyChat;