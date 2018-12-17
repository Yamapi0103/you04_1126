
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';
import swal from 'sweetalert';


class ListCaseCardItem extends Component {
    constructor(props) {
        super(props);

        // this.bscase = this.props.bscase;
        // this.ic_favor = {}
        this.state = {
            saved: false,
            BS_name: ""
        }
        this.cases = this.props.cases;
        // console.log(this.cases)
        this.BScase = {
            ICmember_sid: cookies.load('userId')[0].IC_sid,
            BScase_sid: this.cases.BScase_sid
        }
        // console.log(this.favor_case)
        this.savedOrNot()
        this.setBS_name()

    }

    //get BS_name by BS_sid
    setBS_name = () => {
        fetch('http://localhost:3000/you04/updateBSmember/' + this.cases.BS_sid)
            .then(res => res.json())
            .then(result => {
                if (result.length == 1) {
                    this.setState({
                        BS_name: result[0].BS_name
                    })
                }

            })
    }
    savedOrNot = () => {
        fetch("http://localhost:3000/api/ICGetFavor/" + this.BScase.ICmember_sid + "/" + this.BScase.BScase_sid)
            .then(res => res.json())
            .then(result => {
                if (result.length == 1)
                    this.setState({
                        saved: true
                    })
            })
    }
    //網紅收藏專案
    addfavor = (evt) => {
        // alert(evt.target);
        this.setState({
            saved: !(this.state.saved),
        })

        let addfavor = {
            BScase_sid: evt.target.dataset.save,
            ICmember_sid: this.BScase.ICmember_sid
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

    delfavor = () => {
        this.setState({
            saved: !(this.state.saved),
        })

        fetch('http://localhost:3000/api/ICGetFavor/' + this.BScase.ICmember_sid + '/' + this.BScase.BScase_sid, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // alert(data.message)
                swal(data.message, "已移除");
            })
    }

    savedOrNot = () => {
        fetch("http://localhost:3000/api/ICGetFavor/" + this.BScase.ICmember_sid + "/" + this.BScase.BScase_sid)
            .then(res => res.json())
            .then(result => {
                if (result.length == 1)
                    this.setState({
                        saved: true
                    })
            })
    }

    scrollTOP = () => {
        window.scrollTo(0, 0);
    }

    render() {
        let ct = this.props.cases;
        return (

            <React.Fragment>
                {

                    <div className="list_case_card_container" people-value={ct.BScase_ask_people} fans-value={ct.BScase_fans} pay-value={ct.BScase_pay} >
                        <Link onClick={this.scrollTOP} to={`/publish_content/${ct.BScase_sid}`} className="list_case_card_container_left">
                            <img  src={(`http://localhost:3000/info/${ct.BScase_photo}`)}  />
                        </Link>
                        <div className="list_case_card_container_right">
                            <div className="text_container">
                                <Link to={`/publish_content/${ct.BScase_sid}`}><h5>{ct.BScase_name}</h5></Link>
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
                                <Link className="list_case_ctn_apply" onClick={this.scrollTOP} to={`/publish_content/${ct.BScase_sid}`}>查看</Link>

                                {this.state.saved ?
                                    <button onClick={this.delfavor} className=" list_case_ctn_save" data-save={ct.BScase_sid}>已收藏</button>
                                    :
                                    <button onClick={this.addfavor} className=" list_case_ctn_save" data-save={ct.BScase_sid}>收藏</button>
                                }
                            </div>
                        </div>
                    </div>

                }

            </React.Fragment>
        );
    }
}


export default ListCaseCardItem;