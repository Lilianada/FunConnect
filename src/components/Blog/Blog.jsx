/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"; 
import BlogImage from "../../assets/images/Blog-Image.png"
import { BlogArticles } from "../Data";
import "./Blog.scss";

export default function Blog() {
  return (
    <section className="blogSection">
      <div className="blogContent">
        <h2 className="blogTitle">Our Latest Blog Posts</h2>
        <p className="blogSubtitle">
          Explore amazing places in your neighbourhood Lorem ipsum dolor sit
          amet, consectetur
        </p>
        <div className="blogArticle_wrap">
          {BlogArticles.map((article)  => {
              return (
                <div className="blogArticle" key={article.id}>
                  <div className="articleImage">
                    <img src={BlogImage} alt="Blog Image"  />
                  </div>
                  <div className="articleContent">
                    <p className="articleSubtitle"> Category </p>
                    <h3 className="articleTitle"> {article.title} </h3>
                    <div className="articleDescription">
                      <img src={BlogImage} alt="Profile Picture" />
                      <div className="articleTimeline">
                        <p>{article.writer}</p>
                        <p> {article.date} . {article.time} min read </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              );
            })
          }
        </div>
        <a href="/" className="viewMore">View all</a>
      </div>
    </section>
  );
}
