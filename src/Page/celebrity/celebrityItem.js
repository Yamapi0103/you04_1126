import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookies from 'react-cookies'
import swal from 'sweetalert';

class CelebrityItem extends Component {
  constructor(props) {
    super(props);

    this.celebrity = this.props.celebrity;
    this.BS_favor = {}
    // console.log("CelebrityItem:"+this.celebrity)
    this.state = {
      saved: false,
      // BS_sid:"",
      // IC_sid:""
    }

    //解決setState會去render的問題
    this.BS_case = {
      BS_sid: cookies.load('userId')[0].BS_sid,
      IC_sid: this.celebrity.IC_sid
    }
    this.savedOrNot()
    // console.log(this.state)
    // console.log(cookies.load('userId')[0].BS_sid)
  }

  Favorite = (evt) => {
    // console.log(this.state.saved);
    // console.log(evt.target.id);

    this.setState({
      saved: !(this.state.saved),
      // BS_sid:cookies.load('userId')[0].BS_sid,
      // IC_sid:this.celebrity.IC_sid
    })

    console.log(this.state);
    // this.BS_favor = Object.assign({},this.state)
    // delete this.BS_favor.saved
    // if(this.state.BS_sid!=="" && this.state.IC_sid!=="")

    //
    if (!this.state.saved)
      this.addHandler();
    else
      this.delHandler()
    evt.preventDefault();
  }


  addHandler = (evt) => {
    fetch('http://localhost:3000/api/BSAddFavor', {
      method: 'POST',
      body: JSON.stringify(this.BS_case),
      headers: new Headers({
        'content-type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(data => {
        // alert(data.message)
        // swal(data.message,"可到我的收藏查看");
      })
  }

  
  delHandler = () => {
    console.log(this.BS_case.BS_sid, this.BS_case.IC_sid)

    fetch('http://localhost:3000/api/BSGetFavor/' + this.BS_case.BS_sid + '/' + this.BS_case.IC_sid, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        // alert(data.message)
        swal(data.message, "已移除");
      })
  }

  savedOrNot = () => {
    fetch("http://localhost:3000/api/BSGetFavor/" + this.BS_case.BS_sid + "/" + this.BS_case.IC_sid)
      .then(res => res.json())
      .then(result => {
        if (result.length == 1)
          this.setState({
            saved: true
          })
      })
  }

  render() {

    // var imgSrc = "/images/"+(this.state.saved?"heart-solid.png":"heart-regular.png");
    return (
      <React.Fragment>
        <div className="card radius-border card_shadow">
          <header className="banner">
          {this.celebrity['IC_photo']===""?
            <img id="user_solid" src={"/images/user-solid.svg"} alt="" />:
            <img src={`http://localhost:3000/info/${this.celebrity['IC_photo']}`} alt=""/>
          }
            <div className="middle">
              <Link to={`/celebrityInfo/${this.celebrity.IC_sid}`}>
                <div className="text">詳細資料</div>
              </Link>
            </div>
          </header>
          <div className="card_body">
            <div className="celebrity_name_box">
              <p className="text_cuthead" >
                {this.celebrity.IC_name}
              </p>
            </div>
            <div className="text_align">
              <p><span>性別: </span>{this.celebrity.IC_gender}</p>
              <p><span>類型: </span>{this.celebrity.IC_media}</p>
              <p><span>最低接案金: </span>{this.celebrity.IC_price},000</p>
              <p><span>經手業配數: </span>{this.celebrity.IC_case}</p>
              {/* <button className="" onClick={this.Favorite}>{this.state.save}</button> */}
            </div>
            {this.state.saved ? <h5 id="saved">已收藏</h5> : null}
            <a onClick={this.Favorite}><img id={this.celebrity['IC_photo']} className="heart" src={this.state.saved ? "/images/heart-solid.png" : "/images/heart-regular.png"} /></a>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // componentDidUpdate = ()=>{

  // }
}

export default CelebrityItem;
