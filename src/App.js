import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import ProjectsContainer from './containers/ProjectsContainers'
import Home from './containers/Home'
import { getProjects } from './actions/projectActions'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import ProjectInfoContainer from './containers/ProjectInfoContainer'


class App extends Component {

  componentDidMount(){
    this.props.getProjects()
  }


  render() {
    return (
      <div className="App">
        <div className="Content">
          <div className="Header">
            <NavBar />
          </div>
          <div className="main">
            <Switch>
              <Route
                path='/projectinfo'
                component={ProjectInfoContainer}
              />
              <Route
                path="/projects"
                render={() =>
                  <ProjectsContainer
                    projects={this.props.projects}
                  />}
              />
              <Route
                path="/contact"
                component={Contact}
              />
              <Route
                path='/about'
                component={About}
              />
              <Route
                path="/"
                component={Home}
              />
            </Switch>
          </div>
        </div>

      <Footer />

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
