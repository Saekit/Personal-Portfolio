import React, { Component } from 'react';
import { changeProject } from '../actions/projectActions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class ProjectCard extends Component {
  render(){
    const {project} = this.props
    return(
      <div className='project-card' onClick={()=>this.props.changeProject(project)}>

        <Link to='/projectinfo'>

          <img
            className="preview-pic"
            src={project.preview}
            alt="project-preview-image"

          />

          <div className="middle" >
            <div className="text">
              {project.project_name}
            </div>
          </div>

        </Link>
        <br/>
      </div>
    )
  }
}
export default connect(null, {changeProject})(ProjectCard);

        // <h1 className='project-name'>{project.project_name}</h1>
        //
        // <div className='about-vid'>
        // <h2 className='project-about'>{project.about}</h2>
        //
        // <iframe
        //   className="project-video"
        //   src={project.video}
        //   frameborder="0"
        //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        //   allowfullscreen>
        // </iframe>
        // </div>
        // <br />
        //
        // <div className='proj-links'>
        // <a href={project.live}>
        //   Live Demo Link ||
        // </a>
        // <a href={project.github}>
        //   GitHub Link
        // </a>
        // </div>
