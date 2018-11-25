import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class CelebrityItem extends Component {
  constructor(props) {
    super(props);

    this.celebrity = this.props.celebrity;
    
    // console.log("CelebrityItem:"+this.celebrity)
    this.state={
      saved:false
    }
  }
  
  Favorite = (evt)=>{
      this.setState({
      saved:!(this.state.saved)      
    })
    console.log(this.state.saved);
    console.log(evt.target.id)
    let imgId = evt.target.id;
    $('#'+imgId).toggleClass('animated bounce');
  }
  render() {
    var imgSrc = "/images/"+(this.state.saved?"heart-solid.png":"heart-regular.png");
    return (
      <React.Fragment>
        <div className="card radius-border card_shadow">
          <header className="banner">
            <img src={"/images/" + this.celebrity['fileName'] + ".jpg"} alt="e0 " />
            <div className="middle">
              <Link to={`/celebrityInfo/${this.celebrity.name}`}>
                <div className="text">查看詳細資料</div>
              </Link>
            </div>
          </header>   
          <div className="card_body">
            <div className="celebrity_name_box">
              <h2 className="text_cut" >
                姓名:{this.celebrity.name}
              </h2>
            </div>
            <div className="text_align">
              <p><span>年紀: </span>{this.celebrity['age']}</p>
              <p><span>類型: </span>{this.celebrity['type']}</p>
              <p><span>粉絲數: </span>{this.celebrity['fans']}</p>

              {/* <button className="" onClick={this.Favorite}>{this.state.save}</button> */}
            </div>  
              {this.state.saved?<h5 id="saved">已收藏</h5>:null }
              <a onClick={this.Favorite}><img id={this.celebrity['fileName']} className="heart" src={imgSrc} /></a>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // componentDidUpdate = ()=>{
   
  // }
}

export default CelebrityItem;
