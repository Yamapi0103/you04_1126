import React, { Component } from 'react';
import './BSMyBilling.scss';

class BSMyBilling extends Component {
    constructor(props) {
        super([props]);
    }

    render() {
        return (
            <React.Fragment>
                <div class="member_form_box">
                    <div class="member_form_content">

                        <form class="form-basic" method="post" action="#">

                            <div className="form-title-row">
                                <h1>訂單管理</h1>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Full name</span>
                                    <input type="text" name="name" />
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Email</span>
                                    <input type="email" name="email" />
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Dropdown</span>
                                    <select name="dropdown">
                                        <option>Option One</option>
                                        <option>Option Two</option>
                                        <option>Option Three</option>
                                        <option>Option Four</option>
                                    </select>
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Textarea</span>
                                    <textarea name="textarea"></textarea>
                                </label>
                            </div>

                            <div className="form-row">
                                <label>
                                    <span>Checkbox</span>
                                    <input type="checkbox" name="checkbox" checked />
                                </label>
                            </div>

                            <div className="form-row">
                                <label><span>Radio</span></label>
                                <div className="form-radio-buttons">

                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Radio option 1</span>
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Radio option 2</span>
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Radio option 3</span>
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="form-row">
                                <button type="submit">Submit Form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BSMyBilling;