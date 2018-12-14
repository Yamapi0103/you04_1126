import React, { Component } from 'react';
import './ICMyInfo.scss';
import cookie from 'react-cookies';
import $ from 'jquery';

class ICMyInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            IC_email:'',
            IC_password:'',
            IC_name:'',
            IC_gender:'',
            IC_media:'',
            IC_price:'',
            IC_case:'',
            IC_yt:'',
            IC_ytfans:'',
            IC_fb:'',
            IC_fbfans:'',
            IC_ig:'',
            IC_igfans:'',
            IC_web:'',
        };
        this.sid = cookie.load('userId')[0]['IC_sid'];
        // console.log(this.sid);   //4
    }

    change=(evt)=>{
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        this.setState({
            [inputName]:inputValue
        })
    }


    componentDidMount() {
        this.show();
    }

    show = ()=>{
        // console.log('Component Did Mount');
        fetch('http://localhost:3000/info/icmembers/'+this.sid)
        .then(res=>res.json())
        .then(data=>{
                let Data = data[0];
                // alert(Data);
                //防止使用者在網址/:sid打上不存在的IC_sid => 就會回傳{"Message":"XXXX"},再跳回首頁
                if(data.hasOwnProperty("Message")){  
                    this.props.history.push("/home");
                }
                else{
                    this.setState({
                        IC_email: Data['IC_email'],
                        IC_password: Data['IC_password'],
                        IC_name: Data['IC_name'],
                        IC_gender: Data['IC_gender'],
                        IC_media: Data['IC_media'],
                        IC_price: Data['IC_price'],
                        IC_case: Data['IC_case'],
                        IC_yt: Data['IC_yt'],
                        IC_ytfans: Data['IC_ytfans'],
                        IC_fb: Data['IC_fb'],
                        IC_fbfans: Data['IC_fbfans'],
                        IC_ig: Data['IC_ig'],
                        IC_igfans: Data['IC_igfans'],
                        IC_web: Data['IC_web'],
                    });
                }
            })
    }
    
    

    update = (icInfo) => {
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
        this.state.IC_create_at = onTime();
        fetch('http://localhost:3000/info/icmembers/'+this.sid, {
            method: 'PUT',
            body: JSON.stringify(icInfo),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(data => {
            // alert(data.message);
            cookie.save('userId',[{
                ...cookie.load('userId')[0],
                ...this.state
            }])
            this.show();
            $('.case_successAlert').attr('style','display:block');

        })
    }
    sent=(evt)=>{
        evt.preventDefault();
        this.update(this.state)
        console.log(this.state.IC_name)
        // console.log(cookie.load('userId')[0].IC_name)
        // cookie.load('userId')[0].IC_name = this.state.IC_name
        cookie.save('userId',[{
            ...cookie.load('userId')[0],
            IC_name: this.state.IC_name
        }])
        window.location.reload()
    }

    selectClick=(evt)=>{
        let select = evt.target;
        select[0].setAttribute('disabled','disabled');
    }


    render() {
        return (
            <React.Fragment>
                <div className="member_form_box">
                    <div className="member_form_content">
                        <div >

                            <form className="register_form">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" >帳號</label>
                                    {/* <input type="email" value={this.state.IC_email} name="IC_email" onChange={this.change} className="form-control" /> */}
                                    <input type="email" name="IC_email" value={this.state.IC_email} onChange={this.change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UIUX204@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">密碼</label>
                                    <input type="password" className="form-control" value={this.state.IC_password} name="IC_password" onChange={this.change} />
                                </div>

                                <div>
                                    {/* <button type="submit" className="btn btn-primary">修改密碼</button> */}
                                </div>

                                <hr></hr>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">名稱</label>
                                    <input type="text" value={this.state.IC_name} name="IC_name" onChange={this.change} className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">性別</label>
                                    <select value={this.state.IC_gender} name="IC_gender" onChange={this.change} onClick={this.selectClick} className="form-control" >
                                        <option>請選擇</option>
                                        <option>男</option>
                                        <option>女</option>
                                    </select>
                                </div>

                                <div className="form-group" >
                                    <label>擅長推廣媒體</label><p></p>
                                    <select value={this.state.IC_media} name="IC_media" onChange={this.change} onClick={this.selectClick} className="form-control" >
                                        <option>請選擇</option>
                                        <option>YouTube</option>
                                        <option>Facebook</option>
                                        <option>Instgram</option>
                                        <option>Web</option>
                                    </select>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">最低接案金額</label>
                                    <select value={this.state.IC_price} name="IC_price" onChange={this.change} onClick={this.selectClick} className="form-control" >
                                        <option>請選擇</option>
                                        <option>1,000</option>
                                        <option>5,000</option>
                                        <option>10,000</option>
                                        <option>50,000</option>
                                        <option>100,000</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">經手業配案數量</label>
                                    <select value={this.state.IC_case} name="IC_case" onChange={this.change} onClick={this.selectClick} className="form-control" >
                                        <option>請選擇</option>
                                        <option>1~20</option>
                                        <option>20~50</option>
                                        <option>50~100</option>
                                        <option>100~200</option>
                                        <option>200~300</option>
                                        <option>300~500</option>
                                        <option>500~1000</option>
                                    </select>
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">自我簡介</label>
                                    <textarea type="textarea" className="form-control" placeholder="請填寫您的名稱" />
                                </div> */}

                                <hr></hr>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">YouTube</label>
                                    <input value={this.state.IC_yt} name="IC_yt" onChange={this.change} className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">追蹤人數 (單位:千)</label>
                                    <select value={this.state.IC_ytfans} name="IC_ytfans" onChange={this.change} onClick={this.selectClick} className="form-control" >
                                        <option>請選擇</option>
                                        <option>1~10</option>
                                        <option>10~50</option>
                                        <option>50~100</option>
                                        <option>100~500</option>
                                        <option>500~1,000</option>
                                        <option>1,000~2,000</option>
                                    </select>
                                </div>

                                <hr></hr>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Facebook</label>
                                    <input value={this.state.IC_fb} name="IC_fb" onChange={this.change} className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">追蹤人數 (單位:千)</label>
                                    <select value={this.state.IC_fbfans} name="IC_fbfans" onChange={this.change} onClick={this.selectClick} className="form-control" >
                                        <option>請選擇</option>
                                        <option>1~10</option>
                                        <option>10~50</option>
                                        <option>50~100</option>
                                        <option>100~500</option>
                                        <option>500~1,000</option>
                                        <option>1,000~2,000</option>
                                    </select>
                                </div>

                                <hr></hr>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Instgram</label>
                                    <input value={this.state.IC_ig} name="IC_ig" onChange={this.change} className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">追蹤人數 (單位:千)</label>
                                    <select value={this.state.IC_igfans} name="IC_igfans" onChange={this.change} onClick={this.selectClick} className="form-control" >
                                        <option>請選擇</option>
                                        <option>1~10</option>
                                        <option>10~50</option>
                                        <option>50~100</option>
                                        <option>100~500</option>
                                        <option>500~1,000</option>
                                        <option>1,000~2,000</option>
                                    </select>
                                </div>

                                <hr></hr>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">個人網站</label>
                                    <input value={this.state.IC_web} name="IC_web" onChange={this.change} className="form-control" />
                                </div>

                                <br></br>

                                <div className="">
                                    <div className="case_successAlert alert alert-success" role="alert" >修改成功!</div>
                                    <button type="submit" onClick={this.sent}  className="btn btn-primary">儲存</button>

                                </div>
                                <br></br>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default ICMyInfo;