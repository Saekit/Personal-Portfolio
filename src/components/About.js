import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return(
    <div>
      <h1>About Me</h1>
      <h2>Bio:</h2>
      <p>Full stack web developer with a passion for combining technology and education. Experience in JavaScript, Ruby on Rails, React and Redux, and a background in education and management. I discovered web development through my desire to learn a skill that motivates me to excel and where I can create something impactful and visually appealing. I bring strong skills in project management, creativity, and design.</p>
      <h2>Technical Skills:</h2>
      <ul>
        <li>JavaScript</li>
        <li>Ruby</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Redux</li>
        <li>Rails</li>
        <li>SQLite</li>
        <li>Bootstrap</li>
        <li>Semantic UI React</li>
      </ul>

      <Link to='/projects'><h2>View Projects</h2></Link>

      <h2>Employment History</h2>

      <h3>Banzai Phresh, Honolulu, HI</h3>
      <p>Co-Owner, Jan 2018 - June 2018</p>
      <p>Managed and operated a 6-month pop-up restaurant in Ala Moana Mall, Hawaii.</p>
      <p>Created food menu, designed menu signs and outer decor of restaurant.</p>
      <p>Responsible for financials, bookkeeping, and logistical operation of the business.</p>

      <h3>The Vitamin Shoppe, New York, NY</h3>
      <p>Assistant Store Manager, June 2014 - Sept 2017</p>
      <p>Managed multiple teams in Brooklyn and Manhattan Vitamin Shoppe locations.</p>
      <p>Addressed employee complaints and communicated targets while maintaining employee satisfaction.</p>
      <p>Trained employees on vitamin knowledge and general store etiquette, including dress code and company policies.</p>
      <p>Designed and ran promotional in-store events.</p>

      <h3>Kids Duo, Tokyo, Japan</h3>
      <p>ESL English Teacher, Feb 2013 - Feb 2014</p>
      <p>Created interactive activities for up to 15 preschool and kindergarten age students that taught them English while they had fun. Activities included dance, crafts, reading, writing, and social skills.</p>
      <p>Constructed educational activities and daily plans for students to follow from 9am to 6pm every weekday.</p>

      <h2>Education</h2>

      <h3>Flatiron School - 2019</h3>
      <p>Full Stack Web Development, JavaScript, Ruby on Rails, SQL, and React</p>

      <h3>Soka University of America - Aliso Viejo, CA - 2012</h3>
      <p>Bachelor of Arts: Social and Behavioral Sciences: 3.8 GPA, Magna Cum Laude</p>





    </div>
  )
}
export default About;
