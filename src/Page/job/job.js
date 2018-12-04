import React, { Component } from "react";
import "./job.scss";
import cookie from 'react-cookies';
import swal from 'sweetalert';

class Job extends Component {
  constructor(props) {
    super(props);
    //設定初始值
    this.state = {
      BScase_name: '',
      BScase_ask_people: '',
      BScase_pay: '',
      BScase_location: '',
      // BScase_time_limit:dateNow,
      BScase_experience: '',
      BScase_fans: '',
      BScase_active: '',
      BScase_contact: '',
      BScase_info: '',
      industry_name: '',
      active_name: '',
      active: '',
      industry_id: '',
      industry: '',
      source: 'http://localhost:3000/api/pair/'
    }
  }

  //   getSearchIndustry(){
  //     fetch("http://localhost:3000/api/searchIndustry/")
  //         .then(res =>res.json())
  //         .then(data=>{  
  //             let Data = data[0]
  //             this.setState({
  //             industry_name:Data['industry_name']
  //         })
  //     })      
  // }
  // getSearchActive(){
  //     fetch("http://localhost:3000/api/searchActive/")
  //         .then(res =>res.json())
  //         .then(data=>{ 
  //             let Data=data[0]
  //             this.setState({
  //             active_name:Data['active_name']
  //         })
  //     })      
  // }


  getMembers(Bscase_sid) {

    fetch("http://localhost:3000/api/publish/" + Bscase_sid)
      .then(res => res.json())
      .then(data => {
        let Data = data[0];
        console.log(Data)
        let str = Data['BScase_time_limit'];
        let time = str.replace(/\D*[0-9:\s.]*\D*$/, '');
        this.setState({
          BScase_sid: Data['BScase_sid'],
          BScase_name: Data['BScase_name'],
          BScase_ask_people: Data['BScase_ask_people'],
          BScase_time_limit: time,
          BScase_location: Data['BScase_location'],
          BScase_pay: Data['BScase_pay'],
          BScase_experience: Data['BScase_experience'],
          BScase_fans: Data['BScase_fans'],
          BScase_active: Data['BScase_active'],
          BScase_contact: Data['BScase_contact'],
          BScase_info: Data['BScase_info'],
          industry_name: Data['industry_name']
        })
        this.getIndustry();
        this.getActive();
      })
  }


  //網紅應徵
  hire = (evt) => {
    // alert(evt.target);
    let ICmember_sid = cookie.load('userId')[0]['IC_sid'];
    let hire = {
      BScase_sid: this.state.BScase_sid,
      ICmember_sid: ICmember_sid,
    };
    //先確認之前有沒有應徵
    //之前沒應徵 => 可以應徵
    fetch('http://localhost:3000/hire/IC_hire', {
      method: 'POST',
      body: JSON.stringify(hire),
      headers: new Headers({
        'content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(data => {
        swal(data.message);
      })
  };


  //網紅收藏專案
  addfavor = (evt) => {
    // alert(evt.target);
    let ICmember_sid = cookie.load('userId')[0]['IC_sid'];
    let addfavor = {
      BScase_sid: this.state.BScase_sid,
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


  getIndustry = () => {
    fetch("http://localhost:3000/api/pairIndustry/" + this.state.industry_name, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let Data = data[0]
        console.log(Data);
        this.setState({
          industry: Data['industry_name']
        })
        console.log(this.state.industry)

      })
  }


  getActive = () => {
    fetch("http://localhost:3000/api/pairActive/" + this.state.BScase_active, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let Data = data[0]
        console.log(Data);
        this.setState({
          active: Data['active_name']
        })
      })
  }


  componentDidMount = () => {
    // console.log(this.props.match.params);
    let category = this.props.match.params.category
    this.getMembers(category);
  }

  render() {
    return (
      <React.Fragment>
        {/* <h2>Job introduction</h2> */}
        <div className="job_wrap">
          <header className="job_upper">
            <figure className="upper_left">
              <img className="photo" src="images/project1.jpg" />
            </figure>
            <aside className="upper_right">

              <p><b>產品名稱: </b>{this.state.BScase_name}</p>
              <p><b>薪資待遇: </b>{this.state.BScase_pay}</p>

              <div className="btn_wrap">
                <a onClick={this.hire} id='hire' class="job_btn" role="button">應徵</a>
                <a onClick={this.addfavor} id='addfavor' class="job_btn" role="button">收藏</a>
              </div>
            </aside>
          </header>
          <section className="job_lower">
            <article className="job_content">
              <h2 className="text_align_center ">工作內容</h2>
              <div className="container720">
                <p><b>產業類別: </b>{this.state.industry}</p>
                <p><b>工作形式: </b>{this.state.active}</p>
                <p><b>期限要求: </b> {this.state.BScase_time_limit}</p>
                <p><b>地點: </b> {this.state.BScase_location}</p>
              </div>
            </article>
            <article className="job_content">
              <h2 className="text_align_center ">條件內容</h2>
              <div className="container720">
                <p><b>經驗:</b> {this.state.BScase_experience}</p>
                <p><b>人氣:</b> {this.state.BScase_fans}</p>
                <p><b>技能要求:</b> {this.state.active_name}</p>
              </div>
            </article>
            <article className="job_content">
              <h2 className="text_align_center ">聯絡人資訊</h2>
              <div className="container720">
                <p><b>聯絡人</b> {this.state.BScase_contact}</p>

              </div>


            </article>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Job;
