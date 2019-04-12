import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import ProjectsContainer from './containers/ProjectsContainers'
import Home from './containers/Home'
// import { getProjects } from './actions/projectActions'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Resume from './components/Resume'
import Contact from './components/Contact'
import About from './components/About'
import ProjectInfoContainer from './containers/ProjectInfoContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projects = [{
      "id": 1,
      "project_name": "Biome Atlas",
      "about": "Biome Atlas began as a desire to get more people to care about their environment by being able to see all the interesting forms of life that live on Earth. I believe that learning empathy at a young age is the best approach. I designed Biome Atlas to teach children about the seven environmental biomes on Earth, including the animals and vegetation that inhabit them. Utilizing a custom Rails json API, the backend database was built to securely store and send information of biomes, animals, and plants. Implementing React and Redux to handle over 10 states, created 8 routes, and passed information between over 25 components. Designed user interface, slider, and forms with Semantic UI React, custom CSS, and React Transition Group. Used react library Strider to create an interactive quiz.",
      "video": "https://www.youtube.com/embed/0NBABLy1rEE",
      "live": "https://biome-atlas.netlify.com",
      "github": "https://github.com/Saekit/Mod-5-Project-Biome-Atlas-Frontend",
      "preview": "/images/biome-atlas-pic.png"
    },
    {
      "id": 2,
      "project_name": "Playlister",
      "about": "I created Playlister to learn how to use Spotify's API. I also chose to implement Auth in this project to allow users to login and create custom playlists. The backend database was built using Ruby Spotify API wrapper to enable use of songs on frontend. I used React to show the searchable songs, create a playlist, and add songs to the playlist. Songs added to the playlist were then automatically appended to the database in the backend. I designed the sidebar, forms, and user interface with BootStrap and CSS and implemented Authorization to utilize JSON web tokens, and local storage to store encrypted user info client-side.",
      "video": "https://www.youtube.com/embed/xh2VugsQukk",
      "live": null,
      "github": "https://github.com/Saekit/Mod-4-Project-Music-App",
      "preview": "/images/playlister-pic.png"
    },
    {
      "id": 3,
      "project_name": "StoryBook Maker",
      "about": "Storybook Maker is one of my favorite sindle page apps. I create this app because I wanted to be able to easily make fun stories/book pages that friends could add to. This app employs JavaScript and Rails for users to create their own custom stories with pictures. I developed a Rails backend database to store book data submitted by the user and built the frontend using JavaScript DOM manipulation and HTML. I implemented full CRUD for interacting with the books. It was designed with BootStrap and CSS to show modal pop-ups, the navbar, and other user interface features.",
      "video": "https://www.youtube.com/embed/ciGhzl1E2-Y",
      "live": null,
      "github": "https://github.com/Saekit/Mod-3-Project-Storybook-Maker",
      "preview": "/images/storybook-pic.png"
    },
    {
      "id": 4,
      "project_name": "Dog Walker",
      "about": "I originally wasn't too happy making a copy of the popular dog walking app, Wag, but after working on it for so many hours I grew to love it. In this app, users can create themselves as a dog walker or a dog owner and then choose to take care of a dog or to create an appointment for their own dog. It was created using Ruby on Rails MVC and Postgres. This was the second project that I created with a partner during my Flatiron School experience. Bootstrap was implemented for styling. Sessions and bCrypt was used to keep users logged in and secure.",
      "video": "https://www.youtube.com/embed/bqGjV5hzfRQ",
      "live": null,
      "github": "https://github.com/Saekit/Dog-Walking-App",
      "preview": "/images/dogwalker-pic.png"
    },
    {
      "id": 5,
      "project_name": "What Should I Wear Today",
      "about": "What Should I Wear Today was created to fix the issue of not knowing what to wear based on the weather outside. This project logs the clothing the user owns into the database and returns the appropriate clothing based on the weather of the location the user would like to visit. The user must first enter their name, then create a closet; if the user already created a closet, the user can edit the clothing in their closet or go straight to the 'What should I wear?' choice. Enter a location and watch it go! Created using the Ruby command line. Implemented Geocoder, TTYPrompt, Colorize, and the Dark Sky API.",
      "video": "https://www.youtube.com/embed/zUZNdd8Qd8g",
      "live": null,
      "github": "https://github.com/Saekit/module-one-final-project-guidelines-dumbo-web-102918",
      "preview": "/images/weather-pic.png"
    }
  ]


class App extends Component {

  // componentDidMount(){
  //   this.props.getProjects()
  // }
  state = {
    projects: projects
  }


  render() {
    console.log(this.state.projects)
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
                    projects={this.state.projects}
                  />}
              />
              <Route
                path='/resume'
                component={Resume}
              />
              <Route
                path='/about'
                component={About}
              />
              <Route
                path="/"
                render={()=><Home projects={this.state.projects} />}
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
    // getProjects: bindActionCreators(getProjects, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
