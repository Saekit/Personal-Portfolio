import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import ProjectsContainer from './containers/ProjectsContainers'
import HobbiesContainer from './containers/HobbiesContainer'
import Home from './containers/Home'
import { getProjects } from './actions/projectActions'


class App extends Component {

  componentDidMount(){
    this.props.getProjects()
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/projects"
            render={() => <ProjectsContainer projects={this.props.projects}/>}
          />
          <Route
            path="/hobbies"
            component={HobbiesContainer}
          />
          <Route
            path="/"
            component={Home}
          />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProjects: bindActionCreators(getProjects, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
