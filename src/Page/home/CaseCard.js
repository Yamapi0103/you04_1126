import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CaseCard.scss';

class CaseCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <div className="home_section2_case">
                    <Link to="" className="home_section2_case_top">
                        
                    </Link>
                    <div className="home_section2_case_bottom">
                        <Link to=""><h5>雅詩蘭黛抗老凝膠</h5></Link>
                        <div className="line"></div>
                        <span>雅詩蘭黛股份有限公司</span>
                        <span>需求人數：3人</span>
                        <span>薪資待遇：10000-12000元</span>
                        <div className="home_section2_case_bottom_btnctn">
                            <Link className="btnctn_btn btnctn_btn_left" to="">應徵</Link>
                            <Link className="btnctn_btn btnctn_btn_right" to="">儲存</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default CaseCard;