import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import './NavBar.scss';
import cookie from 'react-cookies';
import $ from 'jquery';
import swal from 'sweetalert';

class Navbar extends Component{
    constructor(props){
        super(props)
    }
    islogIn = () =>{
        return cookie.load('userId')? true : false;
    }
    logOut = () =>{
        swal("已登出")
        // window.location.reload();
        cookie.remove('userId')
        document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // this.setState({
        //     cookie:""
        // })
        // this.props.history.push("/"); //轉跳到首頁(會當掉)
        // window.location.reload();
    }
    // printCookie = ()=>{
    //     console.log("printCookie:")
    //     console.log(cookie.load('userId')[0])
    // }
    userClick =(evt)=>{
        // document.querySelector('.menu-container').classList.toggle('active');
        $('.menu-container').toggleClass('active')
        evt.stopPropagation();
        // $('html').click(function(){
        //     $('.menu-container').removeClass('active');  
        // })     
 
    }
    componentDidMount=()=> {      
        // console.log(cookie.load('userId'))
    }
    render(){ 
        
        //有登入的話 userType=>"BS" or "IC"，否則為null
        let userType = this.islogIn()? cookie.load('userId')[0].userType:null
        return(
            <React.Fragment>
                <div className="nav_container">
                    <div className="nav_logo_container">
                        <Link to="/home"><img src="/images/logo.svg" alt="website_logo" /></Link>
                    </div>
                    <ul className="nav_option_container">
                    
                    {
                        //還沒登入 or BSmember才能看到 刊登方案"
                        //(還沒登入若點刊登方案 會叫你先去登入)
                        //(BSmember點數不足點刊登方案 會叫你先去儲值)
                        (!this.islogIn() || (cookie.load('userId')[0].userType==='BS'))?                        
                        <React.Fragment>
                        {/* <li><Link to="/plan">購買方案</Link></li> */}
                        <li><Link to="/publish">刊登方案</Link></li>
                        </React.Fragment>
                        :null             
                    }

                    
                        {//登入後 出現歡迎~XXX
                            this.islogIn()?
                            <li>
                            <span>歡迎~{cookie.load('userId')[0][userType+'_name']}</span>
                            </li>
                            :null                   
                        }
                        {!this.islogIn()?
                        <React.Fragment>
                        <li><Link to="/login">會員登入</Link></li>
                        <li><Link to="/register">註冊</Link></li>
                        </React.Fragment>:
                        <li>
                        <div onClick={this.userClick} className="user-menu-wrap"><img className="mini-photo" src="/images/user-solid.svg"/>
                    
                        <div className="menu-container">
                            <ul className="user-menu">
                                <Link to={`/${userType}Member`} className="user-menu-link" href="#"><li className="user-menu__item">個人檔案</li></Link>              
                                <Link to="" className="user-menu-link" href="#"><li className="user-menu__item">Search</li></Link>
                                <Link to="" onClick={this.logOut} className="user-menu-link" href="#"><li className="user-menu__item">登出</li></Link>
                            </ul>
                        </div>
                        </div>
                        </li>
                        }

                </ul>
                </div>
            </React.Fragment>
        )
    }
}


export default Navbar