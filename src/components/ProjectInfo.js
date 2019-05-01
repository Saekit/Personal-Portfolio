import React, { Component } from "react";
import { changeProject } from "../actions/projectActions";
import { connect } from "react-redux";

class ProjectCard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { project } = this.props;
    return (
      <div className="project-info">
        <h1 className="project-name">{project.project_name}</h1>

        <div className="about-vid">
          <iframe
            className="project-video"
            src={project.video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <p className="project-about">{project.about}</p>
        </div>

        <div className="proj-links">
          {project.live !== null ? <a href={project.live}>Live Demo</a> : null}
          <a href={project.github}>Code</a>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { changeProject }
)(ProjectCard);
