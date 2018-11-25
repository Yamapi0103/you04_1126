import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
// import {BrowserRouter, Route , Link} from 'react-router-dom'; 

class Left_footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='left_footer'>
                <div className='left_footer_top'>
                    <Link to="" className='link_img'><i className="fab fa-facebook-square fa-xs"></i></Link>
                    <Link to="" className='link_img'><i className="fab fa-instagram fa-xs"></i></Link>
                    <Link to="" className='link_img'><i className="fab fa-twitter-square fa-xs"></i></Link>
                </div>
                <div className='left_footer_middle'></div>
                <div className='left_footer_bottom'>
                    <img src='./images/logo.svg'/>
                </div>
            </div> 
        );
    }
}
export default Left_footer;