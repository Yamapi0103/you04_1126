import React, { Component } from 'react';
import './BSMyInfo.scss';
import cookie from 'react-cookies';
import $ from 'jquery';
import swal from 'sweetalert';

class BSMyInfo extends Component {
    constructor(props) {
        // console.log(props.getInfo)
        super([props]);
        this.state = {
            BS_email: '',
            BS_password: '',
            // BS_photo:'',
            BS_name: '',
            BS_type: '',
            BS_phone: '',
            BS_link: '',
            BS_info: '',
            BS_create_at: '',
            // BS_case:'',
            // BS_point:'',
            // BS_billing:''
        };
        this.Data = '';
        this.sid = cookie.load('userId')[0]['BS_sid'];
        // alert(this.sid)
    }

    change = (evt) => {
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }

    //要問老師為什麼fetch裡面不能用迴圈,還有作用域的問題
    show = () => {
        fetch('http://localhost:3000/info/bsmembers/' + this.sid)
            .then(res => res.json())
            .then(data => {
                // console.log(data);   //data['BS_email'] =  BS@yahoo.com.tw
                //防止使用者在網址/:sid打上不存在的BS_sid => 就會回傳{"Message":"XXXX"},再跳回首頁
                if (data.hasOwnProperty("Message")) {
                    this.props.history.push("/home");
                }
                else {
                    this.setState(data[0])
                }
            })

    }

    // 網頁產生後會觸發此事件  
    componentDidMount() {
        this.show();
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
        fetch('http://localhost:3000/info/bsmembers/' + this.sid, {
            method: 'PUT',
            body: JSON.stringify(bsInfo),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .then(data => {
                // alert(data.message);
                // console.log(this.state)
                cookie.save('userId', [{
                    ...cookie.load('userId')[0],
                    ...this.state
                }])
                this.show();
                $('.case_successAlert').attr('style', 'display:block');
                console.log(cookie.load('userId')[0])
            })
    }
    sent = (evt) => {
        evt.preventDefault();
        console.log(this.state);
        this.update(this.state)
        window.location.reload();
    }
    selectClick = (evt) => {
        let select = evt.target;
        select[0].setAttribute('disabled', 'disabled');

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
                                    <input type="password" className="form-control" name='BS_password' value={this.state.BS_password} onChange={this.change} className="form-control" />
                                </div>

                                <div>
                                    {/* <button type="submit" className="btn btn-primary">修改密碼</button> */}
                                </div>


                                <hr></hr>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">名稱</label>
                                    <input type="text" name='BS_name' value={this.state.BS_name} onChange={this.change} className="form-control" placeholder="請填寫您的名稱" />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="exampleFormControlSelect1">產業類型</label>
                                    <select class="form-control" name='BS_type' value={this.state.BS_type} onChange={this.change} onClick={this.selectClick}>
                                        <option>請選擇</option>
                                        <option>零售/批發</option>
                                        <option>資訊/遊戲</option>
                                        <option>科技/製造</option>
                                        <option>服務/餐飲</option>
                                        <option>旅遊/娛樂</option>
                                        <option>美妝/時尚</option>
                                        <option>學習/體驗</option>
                                        <option>藝文/展覽</option>
                                        <option>其他</option>
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
                                <div className="">
                                    <div className="case_successAlert" role="alert" >修改成功!</div>
                                    <button type="submit" onClick={this.sent} className="save_button member_button">儲存</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BSMyInfo;