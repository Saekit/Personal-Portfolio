import React from "react";

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="about-section">
        <div className="about-container">
          <div className="selfie-container">
            <img
              className="selfie"
              src="/images/portfolio-pic.jpg"
              alt="selfie"
            />
          </div>
          <div className="home-about">
            <p>
              I am a Flatiron School coding bootcamp alumna! There I learned
              Ruby and JavaScript programming languages and how to work with
              others on a team to complete large projects.
            </p>
            <h3>Life Before Coding:</h3>
            <p>
              I was working full time and taking classes to attend a master’s
              program for nutrition. After two years, I took a break for family
              reasons and moved back home for a few months. Back home I wanted
              to try something new so I opened a pop-up restaurant with a friend
              and the two of us ran the business everyday, 12 hours a day, for
              almost 6 months. It was exhausting, but a great experience that
              helped me realize that I can really do anything with the right
              amount of effort, dedication, and enthusiasm.
            </p>
            <p>
              {" "}
              It was after this experience that I went back to what I used to
              like doing as a child, coding. So I started to teach myself how to
              code using online and offline resources and found that coding felt
              so right to me. I moved back to Brooklyn and attended the coding
              bootcamp where I was able to focus on coding, grasp more
              programming concepts and dive further into my creative abilities
              while learning to work with others through pair programming.
            </p>
            <h3>Life Now:</h3>
            <p>
              I'm still living in NYC where I am working hard to continue to
              improve and grow as a programmer, coding everyday, and loving
              every learning moment.
            </p>
            <p>Live, Love, Code</p>
          </div>
        </div>
        <div className="about-tech">
          <h3>Technologies</h3>
          <ul style={{ padding: 0 }}>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Redux</li>
            <li>SWR</li>
            <li>Formik</li>
            <li>Typescript</li>
            <li>Flow</li>
            <li>Bootstrap</li>
            <li>Semantic UI</li>
            <li>Material UI</li>
            <li>Storybook</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>Pytest</li>
            <li>Django</li>
            <li>Git</li>
            <li>Documentation</li>
            <li>Debugging</li>
            <li>Cypress</li>
            <li>Jest</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
