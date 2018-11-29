import React, { Component } from 'react';
import './BillingCard.scss';
import {Link} from 'react-router-dom';

class BillingCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.bills);
    }

    fixDate = (v) => {
        if(!v){
            return '未設定'
        } else {
            return v.replace(/\D[.:\d]*\D$/,'');
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.bills.map(bill =>
                        <div className="billing_card_container">
                            <div className="billing_card_container_left billing_card_container_box">
                                <span>付款金額：${bill.BO_amount}</span>
                                <span>付款方式：{bill.BO_method}</span>
                            </div>
                            <div className="billing_card_container_right billing_card_container_box">
                                <span>付款日 {this.fixDate(bill.BO_date)}</span>
                                <Link to="#">查看發票</Link>
                            </div>
                        </div>
                    )
                }
                        {/* <div className="billing_card_container">
                            <div className="billing_card_container_left billing_card_container_box">
                                <span>付款金額：$</span>
                                <span>付款方式：</span>
                            </div>
                            <div className="billing_card_container_right billing_card_container_box">
                                <span>付款日 </span>
                                <Link to="#">查看發票</Link>
                            </div>
                        </div> */}
            </React.Fragment>
        )
    }
}

export default BillingCard;