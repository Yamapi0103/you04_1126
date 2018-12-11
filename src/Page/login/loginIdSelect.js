import React, {Component} from 'react';
import '../register/Register.scss'
import {Link} from 'react-router-dom';


class loginIdSelect extends Component{

    componentDidMount = () => {
        // console.log(this.props.match.url);
    }

    render(){
        return(
            <React.Fragment>
                <div className="register_background">
                    <div className="register_container_a"> 
                        <div className="register_container_a_text">
                            <h4>會員登入</h4>
                        </div>
                        <div className="register_container_a_btn">
                            <Link to="/login/bs">我是廠商</Link>
                            <div className="line"></div>
                            <Link to="/login/ic">我是網紅</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default loginIdSelect;