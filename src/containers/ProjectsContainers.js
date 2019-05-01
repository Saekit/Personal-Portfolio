import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";

class ProjectsContainer extends Component {
  render() {
    return (
      <div className="project-container">
        {this.props.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }
}
export default ProjectsContainer;
