import React, { Component } from 'react';
import './BSMyInfo.scss';
import cookie from 'react-cookies';

class BSMyInfo extends Component {
    constructor(props) {
        super([props]);
        this.state={
            BS_email:'',
            BS_password:'',
            // BS_photo:'',
            BS_name:'',
            BS_type:'',
            BS_phone:'',
            BS_link:'',
            BS_info:'',
            BS_create_at:'',
            // BS_case:'',
            // BS_point:'',
            // BS_billing:''
        };
        this.Data='';
        this.sid = cookie.load('userId')[0]['BS_sid'];
        // console.log(this.sid)
    }

    change=(evt)=>{
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        this.setState({
            [inputName]:inputValue
        })
    }
   
    /*要問老師為什麼fetch裡面不能用迴圈,還有作用域的問題
    show = ()=>{   //網頁創好之後觸發,這時才能寫jquery和ajax
        console.log('Component Did Mount');
        
        fetch('http://localhost:3000/api3/bsmembers/1')
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);   //data['BS_email'] =  BS@yahoo.com.tw
               
                //    for(let i in this.state ){
                //        this.setState(
                //          this.state[i] = data[0][i]
                //        )
                //    }
                this.Data = data;
                // console.log(this.Data)
            })
        // console.log(this.Data)
        // for(let i in this.state ){
        //     this.setState(
        //       this.state[i] = this.Data[0][i]
        //     )
        // }
    }
    */

    // 網頁產生後會觸發此事件  
    componentDidMount() {
        this.show();
    }
    
    show = ()=>{   //網頁創好之後觸發,這時才能寫jquery和ajax
        console.log(this.sid)
        fetch('http://localhost:3000/api3/bsmembers/'+this.sid)
            .then(res=>res.json())
            .then(data=>{     
                let Data = data[0];
                //防止使用者在網址/:sid打上不存在的BS_sid => 就會回傳{"Message":"XXXX"},再跳回首頁
                if(data.hasOwnProperty("Message")){  
                    this.props.history.push("/home");
                }
                else{
                    this.setState({
                        BS_email : Data['BS_email'],
                        BS_password : Data['BS_password'],
                        BS_name : Data['BS_name'],
                        BS_type : Data['BS_type'],
                        BS_phone : Data['BS_phone'],
                        BS_link : Data['BS_link'],
                        BS_info : Data['BS_info']
                    });
                }
            })
    }
    update = (bsInfo) => {
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
        };
        this.state.BS_create_at = onTime();
        fetch('http://localhost:3000/api3/bsmembers/'+this.sid, {
            method: 'PUT',
            body: JSON.stringify(bsInfo),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                alert(data.message);
                this.show();

            })
    }
    sent=(evt)=>{
        evt.preventDefault();
        console.log(this.state);
        this.update(this.state)
    }
    selectClick=(evt)=>{
        let select = evt.target;
        select[0].setAttribute('disabled','disabled');
    }

    render() {
        return (
            <React.Fragment>
                <div class="member_form_box">
                    <div class="member_form_content">
                        <div >

                            <form className="register_form">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">帳號</label>
                                    <input type="email" name='BS_email' value={this.state.BS_email} onChange={this.change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UIUX204@gmail.com" />

                                </div>
                                <div class="form-group">
                                    <label htmlFor="exampleInputPassword1">密碼</label>
                                    <input type="password" name='BS_password' value={this.state.BS_password} onChange={this.change} className="form-control" />
                                </div>

                                <div>
                                <button type="submit" className="btn btn-primary">修改密碼</button>
                                </div>


                                <hr></hr>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">名稱</label>
                                    <input type="text" name='BS_name'  value={this.state.BS_name} onChange={this.change} className="form-control" placeholder="請填寫您的名稱" />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="exampleFormControlSelect1">產業類型</label>
                                    <select class="form-control" name='BS_type' value={this.state.BS_type} onChange={this.change} onClick={this.selectClick}>
                                        <option>請選擇</option>
                                        <option>資訊╱軟體/電子</option>
                                        <option>零售/批發</option>
                                        <option>行銷/傳播</option>
                                        <option>餐飲/觀光</option>
                                        <option>運動╱文教</option>
                                        <option>服務業</option>
                                        <option>製造業</option>
                                        <option>政府機構</option>
                                        <option>農林漁牧水電</option>
                                        <option>運輸物流倉儲</option>
                                        <option>政治/宗教/社福</option>
                                        <option>金融/投顧/保險</option>
                                        <option>法律╱會計╱顧問</option>
                                        <option>不動產/建築營造</option>
                                        <option>醫療保健/環境衛生</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">聯絡電話</label>
                                    <input type="text" name='BS_phone' value={this.state.BS_phone} onChange={this.change} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">公司網址</label>
                                    <input type="text" name='BS_link' value={this.state.BS_link} onChange={this.change} className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">公司簡介</label>
                                    <textarea type="textarea" name='BS_info' value={this.state.BS_info} onChange={this.change} className="form-control" aria-describedby="emailHelp" placeholder="請填寫您的名稱" />
                                </div>
                                <br></br>
                                <div className="">
                                    <button type="submit" onClick={this.sent} className="btn btn-primary">儲存</button>
                                </div>
                                <br></br>
                            </form>
                        </div>


                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BSMyInfo;