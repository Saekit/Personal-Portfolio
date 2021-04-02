import React from "react";
import ProjectCard from "../components/ProjectCard";
import About from "../components/About";
import Blog from "../components/Blog";
import Resume from "../components/Resume";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Home({ articles, projects }) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className="name">
        <h1>Raquel Randall</h1>
      </div>
      <div className="home-bio">
        <h2>Full Stack Web Developer</h2>
        <p>
          I'm a full stack web developer with a liberal arts, health science,
          and education background. I love traveling, reading, eating good food,
          watching movies, and all things cute. Currently, I'm working as a
          software engineer at Blink Health.
        </p>
      </div>

      <div className="home-projects-container" id="projects">
        <h1 className="section-title">
          <u>My Projects</u>
        </h1>
        <div className="project-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div id="about">
        <h1 className="section-title">
          <u>About Me</u>
        </h1>
        <About />
      </div>

      <div id="experience">
        <h1 className="section-title">
          <u>Experience</u>
        </h1>
        <Resume />
      </div>

      <div className="home-blog-container" id="blog">
        <h1 className="section-title">
          <u>My Blog Posts</u>
        </h1>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {articles.map((article) => (
              <Blog key={article.id} article={article} />
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
}
export default Home;
