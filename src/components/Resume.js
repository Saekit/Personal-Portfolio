import React, { Component } from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume">
        <h1>Resume</h1>
        <p>
          Full stack web developer with a passion for combining technology and
          education. Experience in JavaScript, Ruby on Rails, React and Redux,
          and a background in education and management. I discovered web
          development through my desire to learn a skill that motivates me to
          excel and where I can create something impactful and visually
          appealing. I bring strong skills in project management, creativity,
          and design.
        </p>
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

        <Link to="/projects">
          <h2>View Projects</h2>
        </Link>

        <h2>Employment History</h2>

        <h3>Banzai Phresh, Honolulu, HI</h3>
        <p>Co-Owner, Jan 2018 - June 2018</p>
        <ul>
          <li>
            Managed and operated a 6-month pop-up restaurant in Ala Moana Mall,
            Hawaii.
          </li>
          <li>
            Created food menu, designed menu signs and outer decor of
            restaurant.
          </li>
          <li>
            Responsible for financials, bookkeeping, and logistical operation of
            the business.
          </li>
        </ul>

        <h3>The Vitamin Shoppe, New York, NY</h3>
        <p>Assistant Store Manager, June 2014 - Sept 2017</p>
        <ul>
          <li>
            Managed multiple teams in Brooklyn and Manhattan Vitamin Shoppe
            locations.
          </li>
          <li>
            Addressed employee complaints and communicated targets while
            maintaining employee satisfaction.
          </li>
          <li>
            Trained employees on vitamin knowledge and general store etiquette,
            including dress code and company policies.
          </li>
          <li>Designed and ran promotional in-store events.</li>
        </ul>

        <h3>HIES Inc.</h3>
        <p>
          GIS, AutoCAD, Administrative Assistant, Summer Job 2008-2012, Mar 2014
          - May 2014
        </p>
        <ul>
          <li>
            Used Environmental Engineering, GIS and AutoCAD technology under the
            tech lead.
          </li>
          <li>
            Administrative assistant responsibilities, such as organizing,
            binding, scanning, and copying files and documents, making
            reservations for car rentals and flights, and other duties presented
            upon request.
          </li>
        </ul>

        <h3>Kids Duo, Tokyo, Japan</h3>
        <p>ESL English Teacher, Feb 2013 - Feb 2014</p>
        <ul>
          <li>
            Created interactive activities for up to 15 preschool and
            kindergarten age students that taught them English while they had
            fun. Activities included dance, crafts, reading, writing, and social
            skills.
          </li>
          <li>
            Constructed educational activities and daily plans for students to
            follow from 9am to 6pm every weekday.
          </li>
        </ul>

        <h2>Education</h2>

        <h3>Flatiron School - 2019</h3>
        <p>
          Full Stack Web Development, JavaScript, Ruby on Rails, SQL, and React
        </p>

        <h3>Hunter College - 2017</h3>
        <p>Health Sciences, Nutrition, Chemistry</p>

        <h3>Soka University of America - Aliso Viejo, CA - 2012</h3>
        <p>
          Bachelor of Arts: Social and Behavioral Sciences: 3.8 GPA, Magna Cum
          Laude
        </p>
        <br />
        <a href="https://www.linkedin.com/in/raquel-randall/">
          <h2>Visit my Linkedin for more details</h2>
        </a>
      </div>
    </div>
  );
};
export default Resume;
