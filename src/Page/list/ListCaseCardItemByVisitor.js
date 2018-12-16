
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import swal from 'sweetalert';


class ListCaseCardItemByVisitor extends Component {
    constructor(props) {
        super(props);

        // this.bscase = this.props.bscase;
        // this.ic_favor = {}
        this.state = {
            BS_name:""
        }
        this.cases = this.props.cases;
        // console.log(this.cases)
        this.BScase = {
            BScase_sid: this.cases.BScase_sid
        }
        console.log("visistor")

        this.setBS_name()
   
    }

    //get BS_name by BS_sid
    setBS_name =()=>{
        fetch('http://localhost:3000/you04/updateBSmember/'+this.cases.BS_sid)
        .then(res => res.json())
          .then(result => {
            if (result.length == 1){
                this.setState({
                    BS_name : result[0].BS_name
                })
            }
            
          })
    }

    LoginAlert =()=>{
        swal("請先以網紅身分登入")
        console.log(this.props.history)

    }

    render() {
        let ct = this.props.cases;
        return (
            
            <React.Fragment>
                {
                    
                        <div className="list_case_card_container" people-value={ct.BScase_ask_people} fans-value={ct.BScase_fans} pay-value={ct.BScase_pay} >
                            <Link to={`/publish_connect_visistor/${ct.BScase_sid}`} className="list_case_card_container_left">
                                <img src={(`http://localhost:3000/info/${ct.BScase_photo}`)} /> 
                            </Link> 
                            <div className="list_case_card_container_right">
                                <div className="text_container">
                                    <Link to={`/publish_connect_visistor/${ct.BScase_sid}`}><h5>{ct.BScase_name}</h5></Link>
                                    <div className="line"></div>
                                    {/* <span>{ct.case_company}</span> */}
                                    <span>需求人數：{ct.BScase_ask_people}人</span>
                                    <span>薪資待遇：{ct.BScase_pay}</span>
                                    <span>粉絲要求：{ct.BScase_fans}</span>
                                    <span>廠商名稱：{this.state.BS_name}</span>
                                    {/* <span>產業類型：{ct.industry_name}</span>
                                    <span>活動方式：{ct.BScase_active}</span> */}
                                </div>
                                <div className="button_container">
                                <Link to={`/publish_connect_visistor/${ct.BScase_sid}`} className="list_case_ctn_apply">查看</Link>
                                <button onClick={this.LoginAlert} className=" list_case_ctn_save" >收藏</button>
                                     
                                </div>
                            </div>
                        </div>
                    
                }

            </React.Fragment>
        );
    }
}


export default ListCaseCardItemByVisitor;