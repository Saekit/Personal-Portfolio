import React, { Component } from 'react';

class ProjectCard extends Component {
  render(){
    const {project} = this.props
    return(
      <div className='project-card'>

        <h1 className='project-name'>{project.project_name}</h1>

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

        <div className='proj-links'>
        <a href={project.live}>
          Live Demo Link ||
        </a>
        <a href={project.github}>
          GitHub Link
        </a>
        </div>

      </div>
    )
  }
}
export default ProjectCard;
