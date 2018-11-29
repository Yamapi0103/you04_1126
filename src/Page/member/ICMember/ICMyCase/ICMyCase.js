import React, { Component } from 'react';
import './ICMyCase.scss';
import { Link, Route } from 'react-router-dom';
import ICMyCase_Open from './ICMyCase_Open'
import ICMyCase_Close from './ICMyCase_Close'

class ICMyCase extends Component {
    constructor(props) {
        super([props]);
    }

    render() {
        return (
            <React.Fragment>
                <div class="member_form_box">

                    <div className="register_container">
                        <form className="register_outside">

                            <div>
                                <Link to={`${this.props.match.url}/ICMyCase_Open`}>發布中</Link>
                                <Link to={`${this.props.match.url}/ICMyCase_Close`}>已關閉</Link>
                            </div>
                        </form>
                    </div>
                    <hr />
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