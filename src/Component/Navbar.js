import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import './NavBar.scss';
import cookie from 'react-cookies';
import $ from 'jquery';
import swal from 'sweetalert';

class Navbar extends Component{
    constructor(props){
        super(props)
        this.cookie = []
        this.state={
            message:''
        }
    }
    islogIn = () =>{
        return cookie.load('userId')? true : false;
    }
    logOut = () =>{
        swal("已登出")
        // window.location.reload();
        cookie.remove('userId')
        document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.scrollTo(0,0);
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
    }



    //訊息通知
    EvtSource = ()=>{
        let evtSource;
        //如果有登入且是網紅的話
        if(this.islogIn() && cookie.load("userId")[0]["IC_sid"]){
            let sid = cookie.load("userId")[0]["IC_sid"]; //網紅id
            evtSource = new EventSource(`http://localhost:3000/sse/ICnavbar/${sid}`, { withCredentials: true });
            // console.log(evtSource)
            //透過message事件接收資料
            evtSource.addEventListener('message',(data)=>{
                // console.log(data['data']);
                let JSON_data = JSON.parse(data['data']);
                let num = JSON_data[0]['count'];    
                // console.log(num);   
                this.setState({
                    message: num,
                });
            })
        }else if(this.islogIn() && cookie.load("userId")[0]["BS_sid"]){
        //如果是廠商登入
            let sid = cookie.load("userId")[0]["BS_sid"]; //廠商id
            evtSource = new EventSource(`http://localhost:3000/sse/BSnavbar/${sid}`, { withCredentials: true });
            // console.log(evtSource)
            //透過message事件接收資料
            evtSource.addEventListener('message',(data)=>{
                // console.log(data['data']);
                let JSON_data = JSON.parse(data['data']);
                let num = JSON_data[0]['count'];    
                // console.log(num);   
                this.setState({
                    message: num,
                });
            })
        }  
    };

    scrollTOP=()=>{
        window.scrollTo(0,0);
    }

    componentDidMount=()=> {      
        console.log(cookie.load('userId'))
        $(window).click(function(){
            $('.menu-container').removeClass('active');  
        })
    
        this.EvtSource()

    }
    render(){ 
        
        if(this.islogIn()){
            this.cookie = cookie.load('userId')[0]
        }
        console.log(this.cookie)
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
                            <li><Link to="/plan">購買方案</Link></li>
                            <li><Link to="/publish">刊登方案</Link></li>
                            </React.Fragment>
                            :null             
                        }

                        {//登入後 出現歡迎~XXX
                            this.islogIn()?
                            <li>
                            <span>{cookie.load('userId')[0][userType+'_name']}</span>
                            </li>
                            :null                   
                        }
                        {!this.islogIn()?
                        <React.Fragment>
                        <li><Link to="/loginIdSelect">會員登入</Link></li>
                        <li><Link to="/register">註冊</Link></li>
                        </React.Fragment>:
                        <li>
                        <div onClick={this.userClick} className="user-menu-wrap">
                            <img className="mini-photo" src={(this.cookie[userType+'_photo']==null||this.cookie[userType+'_photo']=="")?"/images/user-solid.svg":"http://localhost:3000/info/"+this.cookie[userType+"_photo"]} alt="" />
                            {(this.state.message == '')?'':<span className="Notification"><p>{this.state.message}</p></span>}
                            <div className="menu-container">
            
                                <ul className="user-menu">
                                <Link onClick={this.scrollTOP} to={`/${userType}Member/${userType}MyInfo`} className="user-menu-link" href="#"><li className="user-menu__item">帳戶管理</li></Link>
                                <Link onClick={this.scrollTOP} to={`/${userType}Member/${userType}MyCase/${userType}MyCase_Open`} className="user-menu-link" href="#"><li className="user-menu__item">接案管理</li></Link>  
                                <Link onClick={this.scrollTOP} to={(userType=='BS')?`/${userType}Member/${userType}MyChat`:`/${userType}Member/${userType}Chat`} className="user-menu-link" href="#"><li className="user-menu__item">對話紀錄</li></Link>  
                                <Link onClick={this.scrollTOP} to={`/${userType}Member/${userType}MyFavor`} className="user-menu-link" href="#"><li className="user-menu__item">我的收藏</li></Link>
                                {this.cookie.userType=="BS"?
                                <Link onClick={this.scrollTOP} to={`/${userType}Member/${userType}MyBilling`} className="user-menu-link" href="#"><li className="user-menu__item">訂單管理</li></Link>                  
                                :null
                                }
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