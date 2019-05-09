import React, { Component } from "react";
import Blog from "../components/Blog";

class BlogContainer extends Component {
  render() {
    let articles = this.props.articles.reverse();
    return (
      <div className="blog-container">
        <h1>Blog Posts</h1>
        <div>
          {articles.map(article => (
            <Blog key={article.id} article={article} />
          ))}
        </div>
      </div>
    );
  }
}
export default BlogContainer;
