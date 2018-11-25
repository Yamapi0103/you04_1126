import React, { Component } from "react";
import "./ProjectList.scss";
import ProjectItem from "./ProjectItem.js";
import Project from "./project.json";
class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.project = Project;
    console.log(this.project);
  }
  render() {
    return (
      <React.Fragment>
        <section>
          <h2 className="">Project List</h2>
        </section>
        <section className="project_container project_wrap">
          <ProjectItem project={this.project[0]} />
          <ProjectItem project={this.project[1]} />
          <ProjectItem project={this.project[2]} />
          <ProjectItem project={this.project[3]} />
        </section>
      </React.Fragment>
    );
  }
}

export default ProjectList;
