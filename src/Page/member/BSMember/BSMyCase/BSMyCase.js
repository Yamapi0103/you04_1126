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
                <div class="member_form_box">

                    <div className="register_container">
                        <form className="register_outside">

                            <div>
                                <button type="submit" className="btn" ><Link to={`${this.props.match.url}/BSMyCase_Open`}>發布中</Link></button>
                                <button type="submit" className="btn"><Link to={`${this.props.match.url}/BSMyCase_Close`}>已關閉</Link></button>
                            </div>
                        </form>
                    </div>
                    <hr />
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