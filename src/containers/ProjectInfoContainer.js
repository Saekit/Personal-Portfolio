import React, { Component } from 'react';
import ProjectInfo from '../components/ProjectInfo'
import {connect} from 'react-redux'

class ProjectInfoContainer extends Component {

  render(){
    let {chosenProject} = this.props
    return(
      <div>
        <ProjectInfo project={chosenProject} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    chosenProject: state.chosenProject
  }
}
export default connect(mapStateToProps)(ProjectInfoContainer)
