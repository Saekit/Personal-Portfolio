import React from "react";

class Blog extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { article } = this.props;
    return (
      <div className="blogcard-container">
        <div className="blog-header">
          <h2>
            <a target="_blank" rel="noopener noreferrer" href={article.link}>
              {article.article_name}
            </a>
          </h2>
          <p>{article.date}</p>
        </div>
        <div className="blog-content-img">
          <div className="blog-content">
            <p>{article.content}</p>
            <a target="_blank" rel="noopener noreferrer" href={article.link}>
              Read More
            </a>
          </div>
          <div className="blog-img">
            <a target="_blank" rel="noopener noreferrer" href={article.link}>
              <img src={article.image} alt="article" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
