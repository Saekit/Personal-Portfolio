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
          <p>I am a full stack web developer with experience using JavaScript and Ruby programming languages. I love creativity with style, so making apps look as good as they work is my passion.</p>
        </div>

        <div className="home-projects-container">
          <h1><u>My Projects</u></h1>
          <ProjectsContainers projects={this.props.projects} />
        </div>

        <div className='home-about'>
          <h1><u>About Me</u></h1>
          <img className="selfie" src="/images/portfolio-pic.jpg" alt="selfie" />
          <p>I recently graduated from Flatiron School’s coding bootcamp where I learned Ruby and JavaScript programming languages, but also how to work with others to create amazing projects. Before attending Flatiron, I was working full time and taking classes to attend a master’s program for nutrition. I was very close to getting into the program, but then took a break for family reasons and moved back home for a few months. Back home I wanted to try something new so I opened a pop-up restaurant with a friend and the two of us ran the business everyday, 12 hours a day, for almost 6 months. It was exhausting, but a great experience that helped me realize that I can really do anything with the right amount of effort and dedication.</p>
          <p> It was after this experience that I started to teach myself how to code using online and offline resources and found that coding felt so right to me. I then moved back to Brooklyn and attended Flatiron School’s bootcamp where I was able to focus on coding, grasp more programming concepts and dive further into my creative abilities while learning to work with others to create large projects.</p>
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
