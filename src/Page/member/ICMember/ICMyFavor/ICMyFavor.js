import React, { Component } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import '../../BSMember/BSMyCase/BSMyCase_Open.scss';
import '../../BSMember/BSMyCase/BSMyCase.scss';

class ICMyFavor extends Component {
    constructor(props) {
        super([props]);
        this.state = {
            bsCaseArray: [],
        };
        this.sid = cookie.load('userId')[0]['IC_sid'];  //網紅id
    }

    //顯示收藏的專案列表
    showCase = () => {
        fetch('http://localhost:3000/api/ICAddFavor/' + this.sid)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    bsCaseArray: data
                })

            })
    }
    //修改日期
    fixDate = (v) => {
        if (!v) {
            return '未設定'
        }
        else {
            return v.replace(/\D[.:\d]*\D$/, '');
        }
    }
    componentDidMount = () => {
        this.showCase();
    }

    render() {
        return (
            <React.Fragment>
                <div class="member_form_box">
                    <div class="member_form_content">

                        <form>
                            <div>
                                {
                                    this.state.bsCaseArray.map((v, idx) => {
                                        return (
                                            <div key={v.BScase_sid} className="imco_card">
                                                <div className='imco_card_left'>
                                                    <h6>{v.BScase_name}</h6>
                                                    <hr />
                                                    <p>地點: {v.BScase_location}</p>
                                                    <p>預算: {v.BScase_pay}</p>
                                                </div>
                                                <div className='imco_card_right'>
                                                    <p>發佈日期:{this.fixDate(v.BScase_publish_at)}</p>
                                                    <p>截止日期:{this.fixDate(v.BScase_time_limit)}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ICMyFavor;