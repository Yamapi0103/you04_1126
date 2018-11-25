import React, { Component } from "react";
import cookie from 'react-cookies';

class Cookie extends Component{
    constructor(props){
        super(props)
        this.state={
            cookie : cookie.load('userId')[0]?cookie.load('userId')[0]:null
        }
    }
    
    //回傳目前登入者的cookie
    getCookie(){
        return this.state.cookie
    }

    setCookie(data){
        //data為
        this.setState({
            cookie : data
        })
    }

    //有沒有cookie，有的話回傳true;沒有回傳false
    hasCookie(){
        return this.state.cookie!=null
    }

}

export default Cookie;