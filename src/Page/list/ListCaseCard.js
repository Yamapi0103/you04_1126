import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ListCaseCard.scss';

class ListCaseCard extends Component{
    constructor(props){
        super(props)
        // console.log(this.props.cases);
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.props.cases.map(ct => 
                        <div className="list_case_card_container">
                            <Link to="" className="list_case_card_container_left">
                                
                            </Link>
                            <div className="list_case_card_container_right">
                                <div className="text_container">
                                    <Link to=""><h5>{ct.BScase_name}</h5></Link>
                                    <div className="line"></div>
                                    {/* <span>{ct.case_company}</span> */}
                                    <span>需求人數：{ct.BScase_ask_people}人</span>
                                    <span>薪資待遇：{ct.BScase_pay}</span>
                                </div>
                                <div className="button_container">
                                    <Link className="list_case_ctn_btn list_case_ctn_apply" to={`/job/${ct.BScase_sid}`}>應徵</Link>
                                    <Link className="list_case_ctn_btn list_case_ctn_save" to="">儲存</Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </React.Fragment>
        )
    }
}


export default ListCaseCard;