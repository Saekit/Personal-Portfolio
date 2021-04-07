import React from "react";
import ProjectCard from "../components/ProjectCard";
import About from "../components/About";
import Blog from "../components/Blog";
import Resume from "../components/Resume";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ProjectsContainer = ({ projects }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="home-projects-container" id="projects" ref={ref}>
      <H1 className="section-title" animate={inView}>
        <u>My Projects</u>
      </H1>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const AboutContainer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div id="about" ref={ref}>
      <H1 className="section-title" animate={inView}>
        <u>About Me</u>
      </H1>
      <About />
    </div>
  );
};

const ExpContainer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div id="experience" ref={ref}>
      <H1 className="section-title" animate={inView}>
        <u>Experience</u>
      </H1>
      <Resume />
    </div>
  );
};

const BlogContainer = ({ articles }) => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="home-blog-container" id="blog" ref={ref}>
      <H1 className="section-title" animate={inView}>
        <u>My Blog Posts</u>
      </H1>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {articles.map((article) => (
            <Blog key={article.id} article={article} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

function Home({ articles, projects }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Container maxWidth="lg">
      <div className="name">
        <H1 animate={inView}>Raquel Randall</H1>
      </div>
      <div className="home-bio" ref={ref}>
        <H2 animate={inView}>Full Stack Web Developer</H2>
        <AboutP animate={inView}>
          I'm a full stack web developer with a liberal arts, health science,
          and education background. I love traveling, reading, eating good food,
          watching movies, and all things cute. Currently, I'm working as a
          software engineer at Blink Health.
        </AboutP>
      </div>
      <ProjectsContainer projects={projects} />
      <AboutContainer />
      <ExpContainer />
      <BlogContainer articles={articles} />
    </Container>
  );
}
export default Home;

const H1 = styled.h1`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
`;

const H2 = styled.h2`
  transform: translateY(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 2s;
`;

const AboutP = styled.p`
  transform: translateY(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 3s;
`;
