import React, { Component } from 'react';
import './BSMyBilling.scss';
import BillingCard from './BillingCard';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';

class BSMyBilling extends Component {
    constructor(props) {
        super([props]);
        this.state = {
            bills: [],
            bs_email:cookie.load('userId')[0].BS_email,
            point: []
        }
    }
    
    getBill(bs_email) {   //這個的res是totalpage+商品資料(datas)，所以需要cases:後面需要指定到.datas
        fetch("http://localhost:3000/bsbilling_api/" + bs_email)
            .then(res => res.json())
            .then(bill => {
                this.setState({ 
                bills: bill
            })
        })
    }

    getPoint(bs_email) {
        fetch("http://localhost:3000/bsbilling_api/point/" + bs_email)
            .then(res => res.json())
            .then(point => {
                this.setState({ 
                point: point[0].BS_point
            })
        })
    }


    componentDidMount() {
        this.getBill(this.state.bs_email);
        this.getPoint(this.state.bs_email);
    }
    cc = () => {
        console.log(this.state.bs_email);
        console.log(this.state.bills);
        console.log(this.state.point);
    }

    render() {
        return (
            <React.Fragment>
                <div className="member_form_box">
                    <div className="member_form_billing_container">
                        <div className="mfb_container_top">
                            <div className="mfb_container_top_credit mfb_container_top_box">
                                <span>信用卡資訊</span>
                                <span>4822-XXXX-XXXX-XXXX</span>
                                <div className="credit_button_container">
                                    <Link to="#">新增</Link>
                                    <Link to="#">編輯</Link>
                                </div>
                            </div>
                            <div className="mfb_container_top_point mfb_container_top_box">
                                <span>剩餘點數：</span>
                                <span><strong>{this.state.point}點</strong></span>
                                <Link to="../../../plan">購買方案</Link>
                            </div>
                        </div>
                        <div className="mfb_container_bottom">
                            <BillingCard bills={this.state.bills}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BSMyBilling;