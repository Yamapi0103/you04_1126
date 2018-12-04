
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListCaseCard.scss';
import cookies from 'react-cookies';
import swal from 'sweetalert';


class ListCaseCard extends Component {
    constructor(props) {
        super(props);

        // this.bscase = this.props.bscase;
        // this.ic_favor = {}
        this.state = {
            saved: false,
        }

        // this.favor_case = {
        //     ic_sid: cookies.load('userId')[0].ic_sid,
        //     bscase_sid: this.bscase_sid
        // }
        // this.savedOrNot()

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


    Favorite = (evt) => {
        console.log(this.state.saved);
        console.log(evt.target.id);
        this.setState({
            saved: !(this.state.saved),
        })

        console.log(this.state);

        if (!this.state.saved)
            this.addHandler();
        else
            this.delHandler()
    }







    addHandler = (evt) => {
        fetch('http://localhost:3000/api/ICAddFavor', {
            method: 'POST',
            body: JSON.stringify(this.favor_case),
            headers: new Headers({
                'content-type': 'application/json'
            })
        })
            .then(res => res.json())
            .then(data => {
                swal(data.message, "已加入收藏");
            })
    }

    savedOrNot = () => {
        fetch("http://localhost:3000/api/ICGetFavor/" + this.favor_case.ic_sid + "/" + this.favor_case.bscase_sid)
            .then(res => res.json())
            .then(result => {
                if (result.length == 1)
                    this.setState({
                        saved: true
                    })
            })
    }


    render() {
        return (
            <React.Fragment>
                {
                    this.props.cases.map(ct =>
                        <div className="list_case_card_container" people-value={ct.BScase_ask_people} fans-value={ct.BScase_fans} pay-value={ct.BScase_pay} >
                            <Link to="" className="list_case_card_container_left">
                                <img src={(`http://localhost:3000/api/${ct.BScase_photo}`)} /> 
                            </Link>
                            <div className="list_case_card_container_right">
                                <div className="text_container">
                                    <Link to=""><h5>{ct.BScase_name}</h5></Link>
                                    <div className="line"></div>
                                    {/* <span>{ct.case_company}</span> */}
                                    <span>需求人數：{ct.BScase_ask_people}人</span>
                                    <span>薪資待遇：{ct.BScase_pay}</span>
                                    <span>粉絲要求：{ct.BScase_fans}</span>
                                    {/* <span>產業類型：{ct.industry_name}</span>
                                    <span>活動方式：{ct.BScase_active}</span> */}
                                </div>
                                <div className="button_container">
                                    <Link className="list_case_ctn_btn list_case_ctn_apply" to={`/publish_content/${ct.BScase_sid}`}>查看</Link>

                                    <Link onClick={this.addfavor}  className="list_case_ctn_btn list_case_ctn_save" to="">儲存</Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </React.Fragment>
        );
    }
}


export default ListCaseCard;