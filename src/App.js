import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import ProjectsContainer from './containers/ProjectsContainers'
import HobbiesContainer from './containers/HobbiesContainer'
import Home from './containers/Home'
import { getProjects } from './actions/projectActions'
import { getHobbies } from './actions/hobbiesActions'

class App extends Component {

  componentDidMount(){
    this.props.getProjects()
    this.props.getHobbies()
  }


  render() {
    console.log(this.props.hobbies);
    return (
      <div className="App">
        <Switch>
          <Route
            path="/projects"
            render={() =>
              <ProjectsContainer
                projects={this.props.projects}
              />}
          />
          <Route
            path="/hobbies"
            render={() =>
              <HobbiesContainer
                hobbies={this.props.hobbies}
              />}
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
    projects: state.projects,
    hobbies: state.hobbies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProjects: bindActionCreators(getProjects, dispatch),
    getHobbies: bindActionCreators(getHobbies, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
