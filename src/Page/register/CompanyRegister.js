import React, {Component} from 'react';
import './CicRegister.scss';
import swal from 'sweetalert';
import cookie from 'react-cookies'

class CompanyRegister extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            password_check:'',
            now:''
        }
        this.flag_email=null;
        this.flag_password=null;
        this.flag_read = null;

    }
    componentDidMount = ()=>{   
        // console.log('Component Did Mount')
        this.passwordCheck = document.querySelector('#password_check');  //passwordCheck有點像全域變數
    }
    change=(evt)=>{
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        this.setState({
            [inputName]:inputValue
        })
        //當有輸入密碼時，才能輸入確認密碼的內容
        if(inputName == 'password' && inputValue!=''){  
            this.passwordCheck.removeAttribute('disabled');
        }else if(inputName == 'password'){
            //當輸入密碼欄沒值時也會把確認密碼欄清空
            this.setState({
                password_check:''
            });
            this.passwordCheck.setAttribute('disabled','disabled');
        }
    }
    blur=(evt)=>{
        //檢查email是否輸入及格式是否正確
        if(evt.target == document.querySelector('#email')){
            if(this.state.email == ''){
                //沒有輸入email
                this.flag_email = false;
                document.querySelector('.blank_text1').style.display='none';
                document.querySelector('#email_content_text').style.display='block';
            }else{
                //有輸入email，開始檢查格式
                document.querySelector('#email_content_text').style.display='none';
                let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
                if(emailRule.test(evt.target.value) == false){
                    //格式錯誤
                    document.querySelector('#email_format_text').style.display='block';
                    document.querySelector('.blank_text1').style.display='none';
                }
                else{
                    //檢查完都沒問題
                    this.flag_email = true;
                    document.querySelector('#email_format_text').style.display='none';
                    document.querySelector('.blank_text1').style.display='block';
                }
            }
        }
        //檢查password是否輸入
        if(evt.target == document.querySelector('#password')){
            if(this.state.password == ''){
                //沒有輸入密碼
                this.flag_password = false;
                document.querySelector('.blank_text2').style.display='none';
                document.querySelector('#password_content_text').style.display='block';
            }else{
                //有輸入密碼
                document.querySelector('#password_content_text').style.display='none';
                document.querySelector('.blank_text2').style.display='block';
            }
        }
        //檢查password是否跟確認密碼一致
        if(evt.target == document.querySelector('#password_check')){
            if(this.state.password != this.state.password_check){
                document.querySelector('#password_check_text').style.display='block';
                document.querySelector('.blank_text3').style.display='none';
            }
            else{
                //檢查完都沒問題
                this.flag_password = true;
                document.querySelector('#password_check_text').style.display='none';
                document.querySelector('.blank_text3').style.display='block';
            }
        }
    }
    register=(evt)=>{
        evt.preventDefault();
        if(document.querySelector('#read_check').checked){
            //有勾選
            this.flag_read = true;
            document.querySelector('.blank_text4').style.display='block';
            document.querySelector('#read_check_text').style.display='none';
        }else{
            //無勾選
            this.flag_read = false;
            document.querySelector('.blank_text4').style.display='none';
            document.querySelector('#read_check_text').style.display='block';
        }
        //當確認都沒問題後才可以上傳
        if(this.flag_email==true && this.flag_password==true && this.flag_read==true){
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
            this.state.now = onTime();
            fetch('//localhost:3000/register/bsmembers',{
                method:'POST',
                body:JSON.stringify(this.state),
                headers:new Headers({   
                    'content-Type': 'application/json'  
                })
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.stay==false){
                    //申請成功就跳回首頁
                    this.props.history.push("/home");
                    swal(data.message, "歡迎加入You04", "success").then(()=>{
                        let {email,password} = this.state;
                        fetch("http://localhost:3000/you04/checkbsmember/"+email+"/"+password)
                        .then(res => res.json())
                        .then(data => {
                        if(data.length==1){
                            data[0].userType = "bs".toUpperCase();
                            cookie.save('userId', data);                
                            }   
                        window.location.reload();      
                        })
                    })
                }
            })
        }
    }
    


    render() {
        return (
            <div className="cic_register_container">
            <div className="register_form_container">
                <div className="register_form_left">
                    <div className="register_form_left_blank"></div>
                    {/* <h2>You04</h2> */}
                </div>
                <div className="register_form_right">
                    <form className="register_form">
                        <h3>請填寫相關資料</h3>
                        <div className="form-group">
                            <label htmlFor="email">電子信箱</label>
                            <input type="email" id="email" name="email" value={this.state.email} onChange={this.change} onBlur={this.blur} className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                            <small className="blank_text1 form-text" style={{color:'transparent',display:'block'}}>&nbsp;</small>
                            <small id="email_content_text" className="form-text" style={{color:'red',display:'none'}}>請輸入您的電子信箱</small>
                            <small id="email_format_text" className="form-text" style={{color:'red',display:'none'}}>電子信箱格式錯誤</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">密碼</label>
                            <input type="password" id='password' name="password" value={this.state.password} onChange={this.change} onBlur={this.blur} className="form-control" placeholder="Password" />
                            <small className="blank_text2 form-text" style={{color:'transparent',display:'block'}}>&nbsp;</small>
                            <small id="password_content_text" className="form-text" style={{color:'red',display:'none'}}>請填寫密碼</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">再度確認密碼</label>
                            <input type="password" name="password_check" id='password_check'  value={this.state.password_check} onChange={this.change} onBlur={this.blur} className="form-control"  placeholder="Password" disabled/>
                            <small className="blank_text3 form-text" style={{color:'transparent',display:'block'}}>&nbsp;</small>
                            <small id="password_check_text" className="form-text" style={{color:'red',display:'none'}}>確認密碼不符</small>
                        </div>
                        <div className="form-group form-check policyCheck_container">
                            <div className="policyCheck">
                                <input type="checkbox"  className="form-check-input"  id='read_check'/>
                                <label className="form-check-label" for="exampleCheck1">我已經閱讀相關政策</label>
                            </div>
                            <small className="blank_text4 form-text" style={{color:'transparent',display:'block'}}>&nbsp;</small>
                            <small id="read_check_text" className="form-text" style={{color:'red',display:'none'}}>必須勾選閱讀條款</small>
                        </div>
                        <div className="submit_container">
                            <button type="submit" onClick={this.register}>提交</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default CompanyRegister;