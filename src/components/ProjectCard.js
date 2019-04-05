import React, { Component } from 'react';

class ProjectCard extends Component {
  render(){
    const {project} = this.props
    return(
      <div className='project-card'>
        <a href={project.live}>
          <h1>{project.project_name}</h1>
        </a>
        <div className='about-vid'>
        <h2 className='project-about'>{project.about}</h2>

        <iframe
          className="project-video"
          src={project.video}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        </div>
        <br />

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
