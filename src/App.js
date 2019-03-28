import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProjectsContainer from './containers/ProjectsContainers'
import HobbiesContainer from './containers/HobbiesContainer'
import Home from './containers/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/projects"
            component={ProjectsContainer}
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

export default withRouter(App);
