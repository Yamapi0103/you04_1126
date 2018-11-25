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

    render(){
        return(
            <React.Fragment>
            <div className="register_container"> 
                <form className="register_outside">
                    <div>
                    <h4>請選擇你的身份</h4>
                    </div>
                    <div className="register_btn_top">
                    <button type="submit"  className="btn"><Link to={`${this.props.match.url}/CompanyRegister`}>我是廠商</Link></button>
                    <button type="submit" className="btn"><Link to={`${this.props.match.url}/ICRegister`}>我是網紅</Link></button>
                    </div>
                </form>
                </div>
                <hr/>
                <switch>
                    <Route path={`${this.props.match.url}/CompanyRegister`} component={CompanyRegister}/>
                    <Route path={`${this.props.match.url}/ICRegister`} component={ICRegister} />
                </switch>
            </React.Fragment>
        )
    }
}


export default Register;