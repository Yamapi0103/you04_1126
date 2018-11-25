import React, { Component } from "react";
import "./job.scss";

class Job extends Component {
  constructor(props) {
    super(props);
    //設定初始值

    this.state ={
      BScase_name:'',
      BScase_ask_people:'',
      BScase_pay:'',
      BScase_location:'',
      // BScase_time_limit:dateNow,
      BScase_experience:'',
      BScase_fans:'',
      BScase_active:'',
      BScase_contact:'',
      BScase_info:'',
    }
  }

  


  getMembers(Bscase_sid) {
    fetch("http://localhost:3000/api/publish/")
        .then(res => res.json())
        .then(data => {
          let Data = data[0];
          console.log(Data)
          let str = Data['BScase_time_limit'];
          let time = str.replace(/\D*[0-9:\s.]*\D*$/,'');
          this.setState({
            BScase_sid:Data['BScase_sid'],
            BScase_name:Data['BScase_name'],
            BScase_ask_people:Data['BScase_ask_people'],
            BScase_time_limit:time,
            BScase_location:Data['BScase_location'],
            BScase_pay:Data['BScase_pay'],
            BScase_experience:Data['BScase_experience'],
            BScase_fans:Data['BScase_fans'],
            BScase_active:Data['BScase_active'],
            BScase_contact:Data['BScase_contact'],
            BScase_info:Data['BScase_info'],
          })
        })
  }

  componentDidMount = () =>{
    console.log(this.props.match.params);
    // let BScaselist = this.props.match.params.BScaselist;

    this.getMembers();
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
              <h3 Bscase_name={this.state}>{this.state.BScase_sid}</h3>
              <p><b>產品名稱</b>{this.state.BScase_name}</p>
              <p><b>薪資待遇</b>{this.state.BScase_pay}</p>
              <div className="btn_wrap">
                <a class="job_btn" role="button">應徵</a>
                <a class="job_btn" role="button">收藏</a>
              </div>
            </aside>
          </header>
          <section className="job_lower">
              <article className="job_content">
                <h2 className="text_align_center ">工作內容</h2>
                <div className="container720">
                <p><b>工作形式:</b>{this.state.BScase_active}</p>
                <p><b>期限要求:</b> {this.state.BScase_time_limit}</p>
                <p><b>地點:</b> {this.state.BScase_location}</p>
                </div>
              </article>
              <article className="job_content">
              <h2 className="text_align_center ">條件內容</h2>
              <div className="container720">
                <p><b>經驗:</b> {this.state.BScase_experience}</p>
                <p><b>人氣:</b> {this.state.BScase_fans}</p>
                <p><b>技能要求:</b> {this.state.BScase_active}</p>
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
