import React,{Component} from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            name:""
         }        
    }

    fetchMember = (email,password,userType)=>{
        fetch("http://localhost:3000/you04/check"+userType+"member/"+email+"/"+password)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.length==1){
                data[0].userType = userType.toUpperCase();
                cookie.save('userId', data);
                this.props.history.push("/home"); //轉{}跳到首頁 
            }
            else{
                $('#main_alert').show();
            }    
           
        });
    }
    checkMember = (evt) =>{
        let {email,password} = this.state;
        console.log(email,password)
        this.fetchMember(email,password,"bs");
        this.fetchMember(email,password,"ic"); 
        // if(!this.islogIn())        
            // $('#main_alert').show();
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
    render(){
        return(
            <React.Fragment>
            {/* {if(islogIn)
                <Route exact path="/" component={Home}  />
            } */}
            <div>   
            <div className="member_r">
                <h4>登入</h4>
            </div>
            <hr/>
             <form className="register_form" >
                <div id="main_alert" class="alert alert-danger" role="alert" style={{display:"none"}}>
                帳號或密碼錯誤
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">帳號</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">請輸入您的電子信箱</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">密碼</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
                    <small id="emailHelp" className="form-text text-muted">請輸入您的密碼</small>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary" onClick={this.checkMember}>登入</button>
                    <button type="reset" className="btn btn-primary">重置</button>
                </div>
                </form>
                
                </div>
                
            </React.Fragment>

        )
    }
    componentDidMount =()=>{
        if(this.islogIn())
            this.props.history.push("/home");       
    }
}
export default Login;