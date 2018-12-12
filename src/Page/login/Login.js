import React,{Component} from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import './Login.scss';
import '../register/CicRegister.scss';
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            name:""
         }
        this.userType = this.props.match.params.userType;    
         console.log(this.userType)   
    }

    checkMember = (evt) =>{
        let {email,password} = this.state;
        // console.log(email,password)

        fetch("http://localhost:3000/you04/check"+this.userType+"member/"+email+"/"+password)
        .then(res => res.json())
        .then(data => {
            if(data.length==1){
                data[0].userType = this.userType.toUpperCase();
                cookie.save('userId', data, { path: '/' });                
                this.props.history.push("/home"); //是的話轉跳到首頁 
            }else{
                $('#main_alert').show();
            }            
        })
        
        evt.preventDefault();
        
    }
    handleChange = (evt) => {
        let key = evt.target.id;
        let data = evt.target.value;
        this.setState({
            [key]: data
        })
    }
    islogIn = () =>{
        // console.log(cookie.load('userId')) //印出cookie: userId的內容
        return cookie.load('userId')?true:false;
    }
    logOut = () =>{
        cookie.remove('userId')

    }
    componentDidMount =()=>{
        if(this.islogIn())
            this.props.history.push("/home");       
    }

    render(){
        return(
            <React.Fragment>
                {/* {if(islogIn)
                    <Route exact path="/" component={Home}  />
                } */}
                <div className="cic_register_container">
                    <div className="register_form_container">
                        <div className="register_form_left">
                            <div className="register_form_left_blank"></div>
                            {/* <h2>You04</h2> */}
                        </div>
                        <div className="register_form_right">
                            <form className="register_form" >
                                <h3>登入</h3>  
                                <div id="main_alert" class="alert alert-danger" role="alert" style={{display:"none"}}>
                                帳號或密碼錯誤
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">帳號</label>
                                    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">請輸入您的電子信箱</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" className="mt-3">密碼</label>
                                    <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
                                    <small id="emailHelp" className="form-text text-muted">請輸入您的密碼</small>
                                </div>
                                <div className="submit_container mt-4">
                                    <button type="submit" className="btn btn-primary mr-3" onClick={this.checkMember}>登入</button>
                                    <button type="reset" className="btn btn-primary">重置</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;