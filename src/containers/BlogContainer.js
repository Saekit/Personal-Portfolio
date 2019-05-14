import React, { Component } from "react";
import Blog from "../components/Blog";

class BlogContainer extends Component {
  render() {
    const articles = this.props.articles.reverse();
    return (
      <div className="blog-container">
        <h1>
          <u>My Blog Posts</u>
        </h1>

        {articles.map(article => (
          <Blog key={article.id} article={article} />
        ))}
      </div>
    );
  }
}
export default BlogContainer;
