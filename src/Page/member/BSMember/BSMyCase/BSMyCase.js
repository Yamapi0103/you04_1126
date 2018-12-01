import React, { Component } from 'react';
import './BSMyCase.scss';
import { Link, Route } from 'react-router-dom';
import BSMyCase_Open from './BSMyCase_Open'
import BSMyCase_Close from './BSMyCase_Close'

class BSMyCase extends Component {
    constructor(props) {
        super([props]);
    }

    render() {
        return (
            <React.Fragment>
                <div class="member_form_box_top">

                    <div className="register_container1">
                        <div className="register_outside">
                            <Link className="OpenOrClose OpenOrClose1" to={`${this.props.match.url}/BSMyCase_Open`}>發布中</Link>
                            <Link className="OpenOrClose OpenOrClose2" to={`${this.props.match.url}/BSMyCase_Close`}>已關閉</Link>
                        </div>
                    </div>
                    {/* <hr /> */}
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