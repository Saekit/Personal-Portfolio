import React, { Component } from 'react';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <div>
          <div>
            <h1>Raquel Randall</h1>
            <img className="selfie" src="/images/portfolio-pic.jpg" alt="selfie" />
            <h2>Full Stack Web Developer</h2>
            <p>I am a full stack web developer with experience using JavaScript and Ruby programming languages. I love creativity with style, so making apps look as good as they work is my passion.</p>
            <br />
            <p>What I used to do:</p>
            <ul>
              <li>Manage and co-owned a restaurant business</li>
              <li>Was a health science student</li>
              <li>Sold vitamins</li>
              <li>Taught English in Tokyo, Japan to small children</li>
              <li>Went to a university in California</li>
              <li>Grew up on Oahu, Hawaii</li>
            </ul>
          </div>
          <div>
            <br />
            <Link to={'/projects'}>
              <button>Check out my projects</button>
            </Link>
            <Link to={'/hobbies'}>
              <button>Check out my hobbies</button>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
export default Home;
