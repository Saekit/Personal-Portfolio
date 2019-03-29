import React, { Component } from 'react';

class ProjectCard extends Component {
  render(){
    const {project} = this.props
    return(
      <div>
        <h1>{project.project_name}</h1>
        <h2>{project.about}</h2>
        <video>
          <source src={project.video} type="video/mp4" />
        </video>
        <a href={project.live}>
          Live Demo Link ||
        </a>
        <a href={project.github}>
          GitHub Link
        </a>
      </div>
    )
  }
}
export default ProjectCard;
