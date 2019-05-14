import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectsContainers from "./ProjectsContainers";
import About from "../components/About";
import BlogContainer from "./BlogContainer";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="name">
          <h1>Raquel Randall</h1>
        </div>
        <div className="home-bio">
          <h2>Full Stack Web Developer</h2>
          <p>
            I'm a full stack web developer with a liberal arts, health science,
            and education background. I love all things cute. I'm currently
            searching for a team where I can learn and grow as a programmer.
          </p>
        </div>

        <div className="home-projects-container">
          <h1>
            <u>My Projects</u>
          </h1>
          <ProjectsContainers projects={this.props.projects} />
        </div>
        <h1>
          <u>About Me</u>
        </h1>
        <About />

        <div className="home-blog-container">
          <BlogContainer articles={this.props.articles} />
        </div>
      </div>
    );
  }
}
export default Home;
