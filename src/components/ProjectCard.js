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
      </div>
    )
  }
}
export default connect(null, {changeProject})(ProjectCard);
