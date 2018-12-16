import React, { Component } from 'react';
import './ICMyCase.scss';
// import '../../BSMember/BSMyCase/BSMyCase_Open.scss';
import { Link, Route } from 'react-router-dom';
import ICMyCase_Open from './ICMyCase_Open'
import ICMyCase_Close from './ICMyCase_Close'
import $ from 'jquery'

class ICMyCase extends Component {
    constructor(props) {
        super([props]);
    }

    componentDidMount = () => {
        $(".OpenOrClose1").click(function(){
            $(this).addClass("active").next().removeClass('active')
        })
        $(".OpenOrClose2").click(function(){
            $(this).addClass("active").prev().removeClass('active')
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="bscase_container">
                    <div className="register_outside">
                        <Link className="OpenOrClose OpenOrClose1 active" to={`${this.props.match.url}/ICMyCase_Open`}>應徵中</Link>
                        <Link className="OpenOrClose OpenOrClose2" to={`${this.props.match.url}/ICMyCase_Close`}>已關閉</Link>
                    </div>
                </div>
                <switch>
                    <Route path={`${this.props.match.url}/ICMyCase_Open`} component={ICMyCase_Open} />
                    <Route path={`${this.props.match.url}/ICMyCase_Close`} component={ICMyCase_Close} />

                </switch>

            </React.Fragment>
        )
    }
}

export default ICMyCase;