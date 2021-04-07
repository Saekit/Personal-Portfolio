import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    minHeight: 300,
    maxHeight: 400,
  },
  media: {
    height: 160,
  },
});

function Blog({ article }) {
  const classes = useStyles();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Grid item xs={12} sm={6} lg={3} ref={ref}>
      <Div animate={inView} id={article.id}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={article.link}
          style={{ textDecoration: "none" }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={article.image}
                title={article.id}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.article_name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h3">
                  {article.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {article.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      </Div>
    </Grid>
  );
}

export default Blog;

const Div = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform ${({ id }) => id}s;
`;
