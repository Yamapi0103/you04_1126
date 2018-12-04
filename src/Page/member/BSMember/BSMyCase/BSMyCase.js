import React, { Component } from 'react';
import './BSMyCase.scss';
import { Link, Route } from 'react-router-dom';
import BSMyCase_Open from './BSMyCase_Open'
import BSMyCase_Close from './BSMyCase_Close'
import $ from 'jquery'

class BSMyCase extends Component {
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
                        <Link className="OpenOrClose OpenOrClose1 active" to={`${this.props.match.url}/BSMyCase_Open`}>發布中</Link>
                        <Link className="OpenOrClose OpenOrClose2" to={`${this.props.match.url}/BSMyCase_Close`}>已關閉</Link>
                    </div>
                </div>
                <switch>
                    <Route path={`${this.props.match.url}/BSMyCase_Open`} component={BSMyCase_Open} />
                    <Route path={`${this.props.match.url}/BSMyCase_Close`} component={BSMyCase_Close} />

                </switch>

            </React.Fragment>
        )
    }
}

export default BSMyCase;