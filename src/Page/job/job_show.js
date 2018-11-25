import React, { Component } from "react";
import "./job.scss";

class Job extends Component {
  constructor(props) {
    super(props);
    //設定初始值
    this.initState = {
      name: "",
      email: "",
      age: "",
      id: ""
  }

    this.state ={
     
    }
  }

  getMembers() {
    fetch("http://localhost:3000/api/publish")
        .then(res => res.json())
        .then(members => this.setState({ 
            members: members,
            member:this.initState,
            type:'add'
        }))
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
              <h3 Bscase_name={this.state}>11</h3>
              <p><b>產品名稱</b> 抗老凝膠</p>
              <p><b>薪資待遇</b> 4,000 - 10,000元</p>
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
                <p><b>工作形式:</b> 部落格</p>
                <p><b>期限要求:</b> 3個月內</p>
                <p><b>地點:</b> 不限</p>
                </div>
              </article>
              <article className="job_content">
              <h2 className="text_align_center ">條件內容</h2>
              <div className="container720">
                <p><b>經驗:</b> 無經驗可</p>
                <p><b>人氣:</b> 至少5000人粉絲</p>
                <p><b>技能要求:</b> 文章</p>
                </div>
              </article>
              <article className="job_content">
              <h2 className="text_align_center ">聯絡人資訊</h2>
              <div className="container720">
                <p><b>聯絡人</b> 張先生</p>

                </div>
              </article>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Job;
