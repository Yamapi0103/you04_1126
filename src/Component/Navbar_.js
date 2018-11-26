import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import './NavBar.scss';
import cookie from 'react-cookies';
import $ from 'jquery';

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={
            cookie:"",
            popupVisible:false
        }        
    }
    islogIn = () =>{
        return cookie.load('userId')? true : false;
    }
    logOut = () =>{
        alert("已登出")
        cookie.remove('userId')
        this.setState({
            cookie:""
        })
        // this.props.history.push("/"); //轉跳到首頁(會當掉)
        // window.location.reload();
    }
    printCookie = ()=>{
        console.log("printCookie:")
        console.log(cookie.load('userId')[0])
    }
    

    userClick =(evt)=>{
        // document.querySelector('.menu-container').classList.toggle('active');
        // $('.menu-container').toggleClass('active')
        // evt.stopPropagation();
        // // console.log(evt.target.className)
                  // attach/remove event handler
                  if (!this.state.popupVisible) {
                    // attach/remove event handler
                    document.addEventListener('click', this.handleOutsideClick, false);
                  } else {
                    document.removeEventListener('click', this.handleOutsideClick, false);
                  }
              
                  this.setState(prevState => ({
                     popupVisible: !prevState.popupVisible,
                  }));

    }
    handleOutsideClick =(e)=>{
    // ignore clicks on the component itself
    console.log(this.node.contains(e.target))
    if (this.node.contains(e.target)) {
        return;
      }
      
      this.handleClick();
    }
    componentDidMount=()=> {      
        // this.logOut()
    }
    render(){ 
        if(this.islogIn())
            {
                if(this.state.cookie==""){
                    this.setState({
                        cookie:cookie.load('userId')[0]
                    })
                }          
                this.printCookie()    
            }
        let userType = this.islogIn()? this.state.cookie.userType:null
        // if(this.islogIn())
        console.log("Login cookie")
        console.log(this.state.cookie)
        return(
            <React.Fragment>
                <div className="nav_container">
                    <div className="nav_logo_container">
                        <Link to="/home"><img src="/images/logo.svg" alt="website_logo" /></Link>
                    </div>
                    <ul className="nav_option_container">
                       
                        <li><Link to="/plan">購買方案</Link></li>
                        <li><Link to="/publish">刊登方案</Link></li>
                        <li style={{display:this.islogIn()?"block":"none"}}>
                                <span>歡迎~{this.state.cookie[userType+'_name']}</span>
                        </li>
                        {!this.islogIn()?
                        <React.Fragment>
                        <li><Link to="/login">會員登入</Link></li>
                        <li><Link to="/register">註冊</Link></li>
                        </React.Fragment>:
                        <li>

                        <div onClick={this.userClick} className="user-menu-wrap"><img className="mini-photo" src="/images/user-solid.svg"/>
                    
                        {this.state.popupVisible && (<div className="menu-container">
                            <ul className="user-menu">
                                <Link to={`/${userType}Member`} className="user-menu-link" href="#"><li className="user-menu__item">個人檔案</li></Link>              
                                <Link to="" className="user-menu-link" href="#"><li className="user-menu__item">Search</li></Link>
                                <Link to="" onClick={this.logOut} className="user-menu-link" href="#"><li className="user-menu__item">登出</li></Link>
                            </ul>
                        </div>)}

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