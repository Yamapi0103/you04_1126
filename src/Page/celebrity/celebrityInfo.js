import React, { Component } from "react";
import './celebrityInfo.scss';

class CelebrityInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        celebrity: [],
        // celebrity: this.initState,
    }
    this.IC_sid = props.match.params.icsid;

    console.log(this.IC_sid)

  }
  componentDidMount() {
    this.getMembers();
}
getMembers() {
    fetch("http://localhost:3000/api2/icmembers/"+this.IC_sid)
        .then(res => res.json())
        .then(member =>{
            this.setState({ 
                celebrity: member[0]
            })
            console.log(this.state.celebrity)
        } )
}
  render() {
    return (
      <React.Fragment>
          <h2>Celebrity Info</h2>
          <div className="Total_wrap">
            <div className="Upper_wrap">
            <figure>
                <img src={"/images/" + this.state.celebrity['IC_photo'] + ".jpg"}  />
            </figure>   

                <div className="formalInfo">
                    <h3>
                        姓名:{this.state.celebrity['IC_name']}
                    </h3>            
                    <div>
                        <p><span>類型: </span>{this.state.celebrity['IC_media']}</p>
                    </div>             
                </div>
            </div>

            <p>詳細的內容</p>
            <div className="Lower_wrap">
                {/* 顯示 this.state.celebrity裡的資訊 */}
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default CelebrityInfo;
