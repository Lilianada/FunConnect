/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import BlogImage from "../../assets/images/Blog-Image.png";
import useFetch from "../../hooks/wordpressApi";
import "./style.scss";

export default function Blog() {
  const url = "https://funconnect.app/wp-json/wp/v2/posts";
  const data = useFetch(url).posts;
  
  return (
    <section className="blogSection">
      <div className="blogContent">
        <h2 className="blogTitle">Our Latest Blog Posts</h2>
        <p className="blogSubtitle">
          Explore amazing places in your neighbourhood Lorem ipsum dolor sit
          amet, consectetur
        </p>
        <div className="blogArticle_wrapMobile">
          {data.slice(0, 3).map((post) => {
            return (
              <a href={post.link} className="blogArticle" key={post.id}>
                <div className="articleImage">
                  <img
                    src={post.yoast_head_json.og_image[0].url}
                    alt="Blog Image"
                  />
                </div>
                <div className="articleContent">
                  <p className="articleSubtitle"> {post.categories[0]} </p>
                  <h3 className="articleTitle"> {post.title.rendered} </h3>
                  <div className="articleDescription">
                    <img src={BlogImage} alt="Profile Picture" />
                    <div className="articleTimeline">
                      <p>{post.yoast_head_json.author}</p>
                      <p>
                        {/* {post.date.toLocaleString()} . */}
                        {post.date.toLocaleDateString()} .
                        {/* {post.date.toString()} . */}
                        {Object.keys(post.yoast_head_json.twitter_misc)
                          .slice(1, 2)
                          .map((key) => (
                            <span key={key}>
                              {post.yoast_head_json.twitter_misc[key]}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="blogArticle_wrapDesktop">
          {data.map((post) => {
            return (
              <a href={post.link} className="blogArticle" key={post.id}>
                <div className="articleImage">
                  <img
                    src={post.yoast_head_json.og_image[0].url}
                    alt="Blog Image"
                  />
                </div>
                <div className="articleContent">
                  <p className="articleSubtitle"> {post.categories[0]} </p>
                  <h3 className="articleTitle"> {post.title.rendered} </h3>
                  <div className="articleDescription">
                    <img src={BlogImage} alt="Profile Picture" />
                    <div className="articleTimeline">
                      <p>{post.yoast_head_json.author}</p>
                      <p style={{display: "inline"}}>
                        {post.date.slice(0, 10).replace(/-/g, " ")} 
                        <span> . </span> 
                        {Object.keys(post.yoast_head_json.twitter_misc)
                          .slice(1, 2)
                          .map((key) => (
                            <span key={key}>
                              {post.yoast_head_json.twitter_misc[key]}
                            </span>
                          ))}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <a href="/" className="viewMore">
          View all
        </a>
      </div>
    </section>
  );
}
