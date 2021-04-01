import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Blog(props) {
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }

  const { article } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={3}>
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
        {/* <CardActions>
              <a target="_blank" rel="noopener noreferrer" href={article.link}>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </a>
            </CardActions> */}
      </Card>
    </Grid>
  );
}

export default Blog;
