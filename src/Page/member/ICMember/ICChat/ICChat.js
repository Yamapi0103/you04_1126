import React, { Component } from "react";
import $ from "jquery";
import cookie from "react-cookies";
import socketIOClient from "socket.io-client";

class ICChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bsCaseArray: [],
      bsNameArray: [],
      bsChatArray: [],
      icChatArray: [],
      //sortArray存放合併且排序過的對話內容
      //[{sid: 1, talk_sid: 5, BS_content: "1", time: "2018-11-30T10:09:39.000Z"},{sid: 2, talk_sid: 5, BS_content: "2", time: "2018-11-30T10:09:43.000Z"}...]
      sortArray: [],
      text: "",
      endpoint: "http://localhost:3000" // this is where we are connecting to with sockets
    };

    this.initstate = {
      text: ""
    };
    this.sid = cookie.load("userId")[0]["IC_sid"]; //網紅id
    //當從對話紀錄進來時點擊專案會得到this.talk_sid，如果從專案管理進來只會得到this.bs_case_detail_sid,此時點擊其他專案時才會得到this.talk_sid
    this.talk_sid = "";     //流水號sid
    //從ICMyCase_Open.js的Link寄來的bs_case_detail流水號sid
    this.bs_case_detail_sid = props.match.params.bs_case_detail_sid;

    this.CurrentBS_idx = 0; //當前聊天的廠商index
    this.ID = 0;
  }
  // ---------------------
  //顯示該網紅應徵的案子
  showCase = () => {
    fetch("http://localhost:3000/chat/icMyCase_showCase/" + this.sid)
      .then(res => res.json())
      .then(data => {
        //去抓"發布中案子"的廠商姓名
        fetch("http://localhost:3000/chat/icMyCase_showIC/" + this.sid)
          .then(res => res.json())
          .then(datas => {
            //回傳 [{BSname:xxxx},{BSname:xxxx}...]
            this.setState({
              bsNameArray: datas,
              bsCaseArray: data //此時已含流水號sid  [{bs_case_detail+bs_case的資料},{bs_case_detail+bs_case的資料}...]
            });
          })
          .then(() => {
            //這段只有在從接案管理進來時才能抓到$(`div[sid=${this.bs_case_detail_sid}]`)
            // console.log($(`div[sid=${this.bs_case_detail_sid}]`))
            $(`div[sid=${this.bs_case_detail_sid}]`)
              .addClass("choose")
              .siblings()
              .removeClass("choose");
            //從接案管理進來時,把放在'查看對話button'的"網紅index"設給this.CurrentBS_idx
            this.CurrentBS_idx = $(`div[sid=${this.bs_case_detail_sid}]`)
              .find($(`.show_chat[data-num]`))
              .attr("data-num");
          })
          .then(() => {
            //如果是從接案管理->查看應徵網紅->按查看對話的話就啟動choose() => 顯示該案子的對話紀錄,且加入房間
            if (this.bs_case_detail_sid) {
              this.choose();
            }
          });
      });
  };
  // --------------------顯示對話
  showChat = evt => {
    //流水號sid作為bs_talk資料表的talk_sid的值
    let casesid = evt.target.dataset.casesid; //該流水號sid
    this.talk_sid = casesid; //先把"流水號sid"存起來,當下次傳送完訊息要重整畫面時會用到

    //因為寄出訊息後要重整顯示的function跟第一次要顯示對話的function有重複,所以寫成showChatFunction()
    this.showChatFunction();

    $(evt.target)
      .parent()
      .addClass("choose")
      .siblings()
      .removeClass("choose");

    this.CurrentBS_idx = evt.target.dataset.num; //把放在'查看對話button'的"廠商index"設給this.CurrentBS_idx => 這樣才能BSNameArray[this.CurrentBS_idx]["BS_name"] => 取到當前聊天的廠商名字
  };
// ---------
  showChatFunction = () => {
    //先定義函式給下面用: 當收集到廠商對話跟網紅對話後 => 陣列相接,利用"時間字串"做sort排序 => 最後setState
    let SortFunction = () => {
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
        sortArray: SortArray
      });
    };

    //如果有this.talk_sid => 代表是點擊此頁的其他案子
      //先把上次real time產生的對話div刪除
      $(".new").remove();
      //用流水號sid讀取廠商的對話(存在bs_talk資料表)
      fetch("http://localhost:3000/chat/bsMyCase_showBSChat/" + this.talk_sid)
        .then(res => res.json())
        .then(data => {
          this.setState({
            bsChatArray: data
          });
          // console.log(data)
        })
        .then(() => {
          //用流水號sid讀取網紅的對話(存在ic_talk資料表)
          fetch(
            "http://localhost:3000/chat/bsMyCase_showICChat/" + this.talk_sid
          )
            .then(res => res.json())
            .then(data => {
              this.setState({
                icChatArray: data
              });
              // console.log(data)
              SortFunction();
            })
            .then(() => {
              this.roomIN(this.talk_sid);
            });
        });
  };
  // --------------------寄出對話
  sentChat = () => {
    //取得現在時間，並將格式轉成YYYY-MM-DD HH:MM:SS
    const onTime = () => {
      const date = new Date();
      const mm = date.getMonth() + 1;
      const dd = date.getDate();
      const hh = date.getHours();
      const mi = date.getMinutes();
      const ss = date.getSeconds();

      return [
        date.getFullYear(),
        "-" + (mm > 9 ? "" : "0") + mm,
        "-" + (dd > 9 ? "" : "0") + dd,
        " " + (hh > 9 ? "" : "0") + hh,
        ":" + (mi > 9 ? "" : "0") + mi,
        ":" + (ss > 9 ? "" : "0") + ss
      ].join("");
    };
    let sentArray;
    //如果有this.talk_sid => 代表是點擊此頁的其他案子
    if (this.talk_sid) {
      sentArray = [this.talk_sid, this.state.text, onTime()];
    }
    //如果沒有this.talk_sid => 代表是從接按管理進來的
    else {
      sentArray = [this.bs_case_detail_sid, this.state.text, onTime()];
    }

    fetch("http://localhost:3000/chat/icMyCase_sent", {
      method: "POST",
      body: JSON.stringify(sentArray),
      headers: new Headers({
        "content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data.message)  //已上傳
      })
      .then(() => {
        this.send(this.state.text);
        //清空輸入框
        this.setState(this.initstate);
      });
  };
  // ------
  send = text => {
    // const socket = socketIOClient(this.state.endpoint);
    //取得現在時間，並將格式轉成YYYY-MM-DD HH:MM:SS
    const onTime = () => {
      const date = new Date();
      const mm = date.getMonth() + 1;
      const dd = date.getDate();
      const hh = date.getHours();
      const mi = date.getMinutes();
      const ss = date.getSeconds();

      return [
        date.getFullYear(),
        "-" + mm,
        "-" + dd,
        "　" + (hh > 9 ? "" : "0") + hh,
        ":" + (mi > 9 ? "" : "0") + mi,
        ":" + (ss > 9 ? "" : "0") + ss
      ].join("");
    };
    let userType = cookie.load("userId")[0]["userType"];

    //發送到server
    //當從對話紀錄進來時點擊專案會得到this.talk_sid，如果從專案管理進來只會得到this.bs_case_detail_sid,此時點擊其他專案時才會得到this.talk_sid
    var roomID;
    if(this.talk_sid){
      roomID = this.talk_sid;
    }
    else if(this.bs_case_detail_sid){
      roomID = this.bs_case_detail_sid;
    }
    this.socket.emit("ADD", text, userType, onTime(), roomID);
  };
  // ----------------------當從接案管理->查看應徵網紅->按查看對話時啟動 在showCase()執行
  choose = () => {
    //用流水號sid讀取廠商的對話(存在bs_talk資料表)
    fetch(
      "http://localhost:3000/chat/bsMyCase_showBSChat/" +
        this.bs_case_detail_sid
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          bsChatArray: data
        });
        // console.log(data)
      })
      .then(() => {
        //用流水號sid讀取網紅的對話(存在ic_talk資料表)
        fetch(
          "http://localhost:3000/chat/bsMyCase_showICChat/" +
            this.bs_case_detail_sid
        )
          .then(res => res.json())
          .then(data => {
            this.setState({
              icChatArray: data
            });
            // console.log(data)
            let concatArray = this.state.bsChatArray.concat(
              this.state.icChatArray
            );
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
              sortArray: SortArray
            });
          })
          .then(() => {
            this.roomIN(this.bs_case_detail_sid)
          });
      });
  };
  // ----------------
  //定義函式: 先離開舊房間再進入新房間
  roomIN = (talk_sid)=>{
    let userType = cookie.load("userId")[0]["userType"];
    var oldID = this.ID;
    //離開舊房間
    this.socket.emit("leave", oldID, userType);

    this.ID = talk_sid;

    //設置新的房間ID
    var newID = talk_sid;
    this.socket.emit("join", newID, userType);

    this.boxScroll($(".chatContent")[0]);
  }
  // --------------------------
  componentDidMount = () => {
    this.showCase();
    this.socket = socketIOClient(this.state.endpoint);

    this.socket.on("ADDClient", (text, userType, Time) => {
      console.log("前端產生對話!");
      if (userType == "IC") {
        $(".chatContent").append(`
              <div class='icChat IC_icChat new' key=${Time}>
                  <p>${text}</p>
                  <p class='time'>${Time}</p>
              </div>
              `);
      } else {
        $(".chatContent").append(`
              <div class='bsChat IC_bsChat new' key=${Time}>
              <p>
                <span class='name'>${this.state.bsNameArray[this.CurrentBS_idx]["BS_name"]}: </span>
                ${text}
              </p>
              <p class='time'>${Time}</p>
              </div>
              `);
      }
      this.boxScroll($(".chatContent")[0]);
    });
  };

  componentWillUnmount = () => {
    this.socket.emit("forceDisconnect");
  };
  // --------------------一些小設定
  change = evt => {
    let value = evt.target.value;
    this.setState({
      text: value
    });
  };
  boxScroll = o => {
    o.scrollTop = o.scrollHeight;
    // console.log('置底')
  };
  //修改日期
  fixDate = v => {
    let year = v.match(/\d+/g)[0]; //  2018
    let month = v.match(/\d+/g)[1] - 1; // 12
    let date = v.match(/\d+/g)[2]; // 02
    let time = /\d*:\d*:\d*/.exec(v)[0]; // 03:48:11
    let h = parseInt(time.match(/\d+/g)[0]) + 8; //03
    let m = time.match(/\d+/g)[1]; //48
    let s = time.match(/\d+/g)[2]; //11

    let newDate = new Date(year, month, date, h, m, s);
    let timeForm = k => {
      if (k < 10) {
        return "0" + k;
      } else {
        return k;
      }
    };

    let final =
      newDate.getFullYear() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getDate() +
      "　" +
      timeForm(newDate.getHours()) +
      ":" +
      timeForm(newDate.getMinutes()) +
      ":" +
      timeForm(newDate.getSeconds());
    // console.log(final)
    return final;
  };

  render() {
    return (
      <React.Fragment>
        <div className="member_form_box">
          <div className="member_form_content">
            <div className="chat">
              <div className="chat_left">
                {this.state.bsCaseArray.map((v, idx) => {
                  return (
                    <div key={v.sid} className="case" sid={v.sid}>
                      <div
                        className="show_chat"
                        data-casesid={v.sid}
                        data-num={idx}
                        onClick={this.showChat}
                      />
                      <h6>專案名字: {v.BScase_name}</h6>
                      <p>廠商: <span style={{color:'#df910e'}}>{this.state.bsNameArray[idx]['BS_name']}</span></p>
                      <p>地點: {v.BScase_location}</p>
                      <p>預算: {v.BScase_pay}</p>
                    </div>
                  );
                })}
              </div>
              <div className="chat_right">
                <div className="chatContent">
                  {this.state.sortArray.map((v, idx) => {
                    return v.hasOwnProperty("BS_content") ? (
                      <div className="bsChat IC_bsChat" key={v.time}>
                        <p>
                          <span className='name'>
                            {
                              this.state.bsNameArray[this.CurrentBS_idx][
                                "BS_name"
                              ]
                            }
                          </span>
                          : {v.BS_content}
                        </p>
                        <p className="time">{this.fixDate(v.time)}</p>
                      </div>
                    ) : (
                      <div className="icChat IC_icChat" key={v.time}>
                        <p>{v.IC_content}</p>
                        <p className="time">{this.fixDate(v.time)}</p>
                      </div>
                    );
                  })}
                </div>
                {this.talk_sid || this.bs_case_detail_sid ? (
                  <div className="inputDiv">
                    <textarea
                      value={this.state.text}
                      onChange={this.change}
                      className="text"
                      cols="5"
                    />
                    <div onClick={this.sentChat} className="sent">
                      傳送
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ICChat;
