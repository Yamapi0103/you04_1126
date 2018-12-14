import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CaseCard.scss';
import cookies from 'react-cookies';
import swal from 'sweetalert';
import $ from 'jquery';

class NewCaseCard extends Component{
    constructor(props){
        super(props)
    }

    //網紅收藏專案
    addfavor = (evt) => {
        // alert(evt.target);
        let ICmember_sid = cookies.load('userId')[0]['IC_sid'];
        
        let addfavor = {
            BScase_sid: evt.target.dataset.save,
            ICmember_sid: ICmember_sid,
        };
        console.log(addfavor)
        //先確認之前有沒有收藏
        //之前沒收藏 => 可以收藏
        fetch('http://localhost:3000/api/ICAddFavor', {
            method: 'POST',
            body: JSON.stringify(addfavor),
            headers: new Headers({
                'content-Type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(data => {
                swal(data.message);
            })
    };

    toTop = () => {
        $("body, html").animate({   //要讓他可以上去一定要設置body, html window會有問題
            scrollTop: 0
        }, 0);
    }


    render(){
        return(
            <React.Fragment>
                {
                    this.props.cases.map(ct =>
                    <div className="home_section2_case">
                        <Link to="" className="home_section2_case_top">
                            <img src={(`http://localhost:3000/info/${ct.BScase_photo}`)} /> 
                        </Link>
                        <div className="home_section2_case_bottom">
                            <Link to=""><h5>{ct.BScase_name}</h5></Link>
                            <div className="line"></div>
                            <span>需求人數：{ct.BScase_ask_people}人</span>
                            <span>薪資待遇：{ct.BScase_pay}</span>
                            <span>粉絲要求：{ct.BScase_fans}</span>
                            <div className="home_section2_case_bottom_btnctn">
                                <Link className="btnctn_btn btnctn_btn_left" to={`/publish_content/${ct.BScase_sid}`} onClick={this.toTop}>查看</Link>
                                {/* <Link className="btnctn_btn btnctn_btn_right" to="" data-save={ct.BScase_sid} onClick={this.addfavor}>儲存</Link> */}
                            </div>
                        </div>
                    </div>
                    )
                }
            </React.Fragment>
        )
    }
}


export default NewCaseCard;