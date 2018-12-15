import React, { Component } from "react";
import "./company.scss";
// import cookies from 'react-cookies';


class company extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
          company: []
      }
      this.BS = {
        // ICmember_sid: cookies.load('userId')[0].IC_sid,
        BS_sid: props.match.params.BSsid
      }
      console.log(this.stateBSsid)
  }

componentDidMount = () => {
  let bssid = this.props.match.params.bssid;
  this.getMembers(bssid);
}


goBack=()=>{
    this.props.history.goBack();
}



getMembers(bssid) {
  console.log(bssid)
  fetch("http://localhost:3000/info/bsmemberinfo/" + bssid)
      .then(res => res.json())
      .then(member => {
        let Member = member[0]
          this.setState({
              company: Member
          })
          console.log(member)
      })
}


  

  render() {
    return (
      
      <React.Fragment>
                <div className="Total_wrap">
                    <div className="Upper_wrap">
                        <figure>
                        <img src={`http://localhost:3000/info/${this.state.company['BS_photo']}`} alt=""/>
                        </figure>

                        <div className="bsinfo_block">
                            <div className="bsinfo_title">
                                <div className="bsinfo_name">
                                    {this.state.company['BS_name']}
                                </div>
                                
                            </div>

                            <div className="bsinfo_content">
                                <p><span>‧ 產業類型：</span>{this.state.company['BS_type']}</p>
                                <p><span>‧ 連絡電話：</span>{this.state.company['BS_phone']}</p>
                                <p>
                                  <span>‧ 網站/社群：</span>
                                <a href={this.state.company['BS_link']}>{this.state.company['BS_link']}
                                </a>
                                </p>
                                <hr />

                                <p><span></span>{this.state.company['BS_info']}</p>
                            </div>
                            <div className="bsinfo_back">
                                <a className="bsinfo_back_btn" href="javascript:history.back()">上一頁</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    );
  }
}

export default company;
