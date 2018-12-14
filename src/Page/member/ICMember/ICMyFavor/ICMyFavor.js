import React, { Component } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import '../../BSMember/BSMyCase/BSMyCase_Open.scss';
import '../../BSMember/BSMyCase/BSMyCase.scss';
import './ICMyFavor';
import swal from 'sweetalert';
import {Link} from  'react-router-dom';

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

    unSaved=(evt)=>{
        evt.preventDefault();
        let BScase_sid = evt.target.id
        let BScase_name = evt.target.name
        swal({
            title: "確定要將"+BScase_name+"移除收藏嗎?",
            // text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("已移除收藏", {
                icon: "success",
              });
              fetch('http://localhost:3000/api/ICGetFavor/'+this.sid+'/'+BScase_sid,{
                method:'DELETE'})      
            .then(res => res.json())
            .then(data => {
                    // swal(data.message,"已從我的收藏移除");
                    this.showCase()
                })
            } else {
            //   swal("Your imaginary file is safe!");
            }
          });
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
                                                    <div className="imco_card_right_btn_container">
                                                        <Link className="case_open_button mt-3" to={`/publish_content/${v.BScase_sid}`}>查看</Link>
                                                        <Link className="case_open_button mt-3" to="" id={v.BScase_sid} name={v.BScase_name} onClick={this.unSaved}>移除</Link>
                                                    </div>
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