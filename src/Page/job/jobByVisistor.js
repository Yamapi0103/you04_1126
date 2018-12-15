import React, { Component } from "react";
import "./job.scss";
import swal from 'sweetalert';
import SearchBar from '../home/SearchBar';
import { Link } from 'react-router-dom';

class JobByVisistor extends Component {
  constructor(props) {
    super(props);
    //設定初始值
    this.state = {
      BScase_name: '',
      BScase_ask_people: '',
      BScase_pay: '',
      BScase_location: '',
      // BScase_time_limit:dateNow,
      BScase_fans:'',
      BScase_active:'',
      BScase_contact:'',
      BScase_info:'',
      industry_name:'',
      active_name:'',
      active:'',
      industry_id:'',
      industry:'',
      BScase_Photo:'',
      //發布廠商
      BS_sid:'',
      BS_name:''
    }
    this.BScase = {
      BScase_sid:this.props.match.params.category

  }
  
  // console.log(this.favor_case)
  
  }
  setBS_name =()=>{
    fetch('http://localhost:3000/you04/updateBSmember/'+this.state.BS_sid)
    .then(res => res.json())
      .then(result => {
        if (result.length == 1){
            this.setState({
                BS_name : result[0].BS_name
            })
        }
        
      })
}
  
  getMembers(Bscase_sid) {

    fetch("http://localhost:3000/api/publish/" + Bscase_sid)
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
            industry_name:Data['industry_name'],
            BScase_Photo:Data['BScase_photo'],
            BS_sid:Data['BS_sid']
          })
          this.getIndustry();
          this.getActive();
          this.setBS_name()
        })
  }



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
 //網紅收藏專案
 addfavor = (evt) => {
  // alert(evt.target);
  this.setState({
      saved: !(this.state.saved),
  })
  
  let addfavor = {
      BScase_sid: evt.target.dataset.save,
      ICmember_sid:this.BScase.ICmember_sid
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

  componentDidMount = () => {
    // console.log(this.props.match.params);
    let category = this.props.match.params.category
    this.getMembers(category);
  }

  render() {
    return (
      <React.Fragment>
        <div className="list_section1">
            <div className="list_section1_searchbar_container">
                <SearchBar />
            </div>
        </div>
        
        <div className="job_wrap">
        
          <header className="job_upper">
            <figure className="upper_left">
              <img className="photo" src={(`http://localhost:3000/info/${this.state.BScase_Photo}`)} />
            </figure>
            <aside className="upper_right">

              <p><b>專案名稱: </b>{this.state.BScase_name}</p>
              <p><b>廠商名稱：</b><Link to={`/company/${this.state.BS_sid}`}>{this.state.BS_name}</Link></p>
              <p>(需以網紅身分登入才可應徵或收藏專案)</p>
            </aside>
          </header>
          <section className="job_lower">
              <article className="job_content">
                  <h3 className="text_align_center ">工作內容</h3>
                <div className="container720">
                
                <p><b>產業類別：</b>{this.state.industry}</p>
                <p><b>期限要求：</b> {this.state.BScase_time_limit}</p>
                <p><b>薪資待遇：</b>{this.state.BScase_pay}</p>
                
                </div>
              </article>
              <article className="job_content">
                <h3 className="text_align_center ">條件內容</h3>
              <div className="container720">
                <p><b>地點：</b> {this.state.BScase_location}</p>
                <p><b>人氣：</b> {this.state.BScase_fans}</p>
                <p><b>專案形式：</b>{this.state.active}</p>
                </div>
              </article>
              <article className="job_content">
                <h3 className="text_align_center ">補充說明</h3>
                <div className="container720">
                <p>{this.state.BScase_info}
                </p></div>
              </article>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default JobByVisistor;
