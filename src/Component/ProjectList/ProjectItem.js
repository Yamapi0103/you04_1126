import React, { Component } from "react";

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.imgName = this.props.project["fileName"];
    this.projectName = this.props.project["name"];
    this.detail = this.props.project["detail"];
    console.log(this.imgName, this.projectName);
  }

  render() {
    return (
      <React.Fragment className="project_list">
        <div className="card radius-border shadow">
          <header className="banner">
            <img src={"images/" + this.imgName + ".jpg"} alt="" />
          </header>
          <div className="card_body">
            <div className="project_name_box">
              <h2 className="text_cut" title={this.projectName}>
                {this.projectName}
              </h2>
            </div>
            <div className="text_align">
              <p>{this.detail[0]}</p>
              <p>{this.detail[1]}</p>
              <p>{this.detail[2]}</p>
            </div>
            <a className="btn" role="button">
              應徵
            </a>
            <a className="btn" role="button">
              儲存
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectItem;
