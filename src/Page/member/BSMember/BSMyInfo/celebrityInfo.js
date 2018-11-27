import React, { Component } from "react";
import celebrityAll from './celebrity.json';
import './celebrityInfo.scss';

class CelebrityInfo extends Component {
  constructor(props) {
    super(props);
    this.cname = props.match.params.cname;
    // console.log(this.cname)
    this.celebrity = celebrityAll.filter(c=>c.name===this.cname)[0]; //用名字從json挑出該筆資料
    this.info = this.celebrity.details;
    console.log(this.info)
    // this.info.map((v,k)=>
    //     console.log(v,k)
    // )
  }

  render() {
    return (
      <React.Fragment>
          <h2>Celebrity Info</h2>
          <div className="Total_wrap">
            <div className="Upper_wrap">
            <figure>
                <img src={"/images/" + this.celebrity['fileName'] + ".jpg"}  />
            </figure>   

                <div className="formalInfo">
                    <h3>
                        姓名:{this.celebrity.name}
                    </h3>            
                    <div className="">
                    <p><span>年紀: </span>{this.celebrity['age']}</p>
                    <p><span>類型: </span>{this.celebrity['type']}</p>
                    <p><span>粉絲數: </span>{this.celebrity['fans']}</p>
                    </div>             
                </div>
            </div>

            <div className="Lower_wrap">
                <p>詳細的內容</p>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default CelebrityInfo;
