import React, {Component} from 'react';
import './Register.scss'
import {Link, Route} from 'react-router-dom';
import CompanyRegister from './CompanyRegister'
import ICRegister from './ICRegister'

class Register extends Component{
    constructor(props){ 
        super(props)
    }
    selected(){

    }
    componentDidMount = () => {
        console.log(this.props.match.url);
    }

    render(){
        return(
            <React.Fragment>
                <div className="register_background">
                    <div className="register_container_a"> 
                        <div className="register_container_a_text">
                            <h4>會員註冊</h4>
                        </div>
                        <div className="register_container_a_btn">
                            <Link to="/register/CompanyRegister">我是廠商</Link>
                            <div className="line"></div>
                            <Link to="/register/ICRegister">我是網紅</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Register;