import React, { Component } from 'react';
import swal from 'sweetalert';
// import { Link } from 'react-router-dom';
import './contact_us.scss';


class contact_us extends Component {
    constructor(props) {
        super(props);
        var a = new Date();
        var dateTimeNow = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate() + " " + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
        this.state = {
            cu_name: '',
            cu_usertype: '',
            cu_content: '',
            cu_email: '',
            cu_time: dateTimeNow,
        }
    }

    change = (evt) => {
        const key = evt.target.id;
        const data = evt.target.value;
        this.setState({
            [key]: data
        })
    }

    addHandler = (evt) => {
        fetch('http://localhost:3000/api/contact_us', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'content-type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(data => {
                swal(data.message, "成功送出");
            })
            this.props.history.push("/");
    }


    // componentDidMount() {
    //     this.show();
    // }


    render() {
        return (
            <React.Fragment>
                <div className="form">
                <div className="form_container">
                    <h3>聯絡我們</h3>
                    <br />
                    <div className="form-group">
                        <label>如何稱呼您：</label>
                        <input type="text" id="cu_name" value={this.state.cu_name} onChange={this.change} className="form-control" />
                    </div>
                    {/* <div className="form-group">
                        <label>您是網紅 / 廠商？</label>
                        <input type="text" id="cu_usertype" value={this.state.cu_usertype} onChange={this.change} className="form-control" />
                    </div> */}
                    <div className="form-group">
                    <label>您的身分是？</label>
                    <select className="form-control" id="cu_usertype" value={this.state.cu_usertype} onChange={this.change}>
                        <option>網紅</option>
                        <option>廠商</option>
                        <option>其他</option>
                    </select>
                    </div>
                    <div className="form-group">
                        <label>您的問題/建議：</label>
                        <textarea type="textarea" id="cu_content" value={this.state.cu_content} onChange={this.change} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>您的聯絡 Email：</label>
                        <input type="email" id="cu_email" value={this.state.cu_email} onChange={this.change} className="form-control" />
                    </div>
                    <br />
                    <div className="cu_btn">
                        <button className="btn"
                            onClick={this.addHandler}>送出
                        </button>
                    </div>

                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default contact_us;