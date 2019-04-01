import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div className='home-container'>
        <div className='home-items'>
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
      </div>
    )
  }
}
export default Home;
