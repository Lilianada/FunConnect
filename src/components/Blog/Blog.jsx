import React from "react"; 
import BlogImage from "../../assets/images/Blog-Image.png"
import { BlogArticles } from "../Data";
import "./Blog.scss";

export default function Blog() {
  return (
    <section className="blogSection">
      <div className="blogContent">
        <h3 className="blogTitle">Our Latest Blog Posts</h3>
        <p className="blogSubtitle">
          Explore amazing places in your neighbourhood Lorem ipsum dolor sit
          amet, consectetur
        </p>
        <div className="blogArticle_wrap">
          {BlogArticles.map((article)  => {
              return (
                <div className="blogArticle" key={article.id}>
                  <div className="articleImage">
                    <img src={BlogImage} alt="" />
                  </div>
                  <h3 className="articleTitle"> {article.title} </h3>
                  <p className="articleContent"> {article.content} </p>
                  <a href="/" className="readMore">
                    Read more
                  </a>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}
