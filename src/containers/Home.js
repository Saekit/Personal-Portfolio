import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectsContainers from './ProjectsContainers'

class Home extends Component {
  render() {
    return(
      <div className='home-container'>
        <div className='name'>
          <h1>Raquel Randall</h1>
        </div>
        <div className='home-bio'>
          <h2>Full Stack Web Developer</h2>
          <p>I'm a full stack web developer with a liberal arts, health science, and education background. I love all things cute. I'm currently searching for a team where I can learn and grow as a programmer.</p>
        </div>

        <div className="home-projects-container">
          <h1><u>My Projects</u></h1>
          <ProjectsContainers projects={this.props.projects} />
        </div>

        <div className='home-about'>
          <h1><u>About Me</u></h1>
          <img className="selfie" src="/images/portfolio-pic.jpg" alt="selfie" />
          <p>I am a Flatiron School coding bootcamp alumna! There I learned Ruby and JavaScript programming languages and how to work with others on a team to complete large projects.</p>
          <h3>Life Before Coding:</h3>
          <p>I was working full time and taking classes to attend a master’s program for nutrition. After two years, I took a break for family reasons and moved back home for a few months. Back home I wanted to try something new so I opened a pop-up restaurant with a friend and the two of us ran the business everyday, 12 hours a day, for almost 6 months. It was exhausting, but a great experience that helped me realize that I can really do anything with the right amount of effort, dedication, and enthusiasm.</p>
          <p> It was after this experience that I went back to what I used to like doing as a child, coding. So I started to teach myself how to code using online and offline resources and found that coding felt so right to me. I moved back to Brooklyn and attended the coding bootcamp where I was able to focus on coding, grasp more programming concepts and dive further into my creative abilities while learning to work with others through pair programming.</p>
          <h3>Life Now:</h3>
          <p>I'm still living in NYC where I am studying programming on my own, coding everyday, and loving every learning moment. I frequently get together with my fellow Flatiron alumni to pair program and study algorithms together.</p>
          <p>Live, Love, Code</p>
        </div>

      </div>
    )
  }
}
export default Home;
// <div>
//   <br />
//   <p>What I used to do:</p>
//   <ul>
//     <li>Manage and co-owned a restaurant business</li>
//     <li>Was a health science student</li>
//     <li>Sold vitamins</li>
//     <li>Taught English in Tokyo, Japan to small children</li>
//     <li>Went to a university in California</li>
//     <li>Grew up on Oahu, Hawaii</li>
//   </ul>
// </div>
