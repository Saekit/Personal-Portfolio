import React, { Component } from 'react';

class ProjectCard extends Component {
  render(){
    const {project} = this.props
    return(
      <div>
        <h1>{project.project_name}</h1>
        <h2>{project.about}</h2>
        <iframe width="560" height="315" src={project.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
