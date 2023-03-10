/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { RxDotFilled } from "react-icons/rx";
import BlogImage from "../../assets/images/Funconnect-Logo-lg.jpeg";
import useFetch from "../../hooks/wordpressApi";
import "./style.scss";

export default function Blog() {
  const url = "https://funconnect.app/wp-json/wp/v2/posts";
  const data = useFetch(url).posts;

  return (
    <>
      {data.length === 0 ? (
        <section className="blogSection">
          <div className="blogContent">
            <h2 className="blogTitle">Our Latest Blog Posts</h2>
            <p className="blogSubtitle">
              Hey, we're Funconnect. See our thoughts, stories, and ideas.
            </p>
            <a href="/" className="viewMore">
              No posts to show
            </a>
          </div>
        </section>
      ) : (
        <section className="blogSection">
          <div className="blogContent">
            <h2 className="blogTitle">Our Latest Blog Posts</h2>
            <p className="blogSubtitle">
              Hey, we're Funconnect. See our thoughts, stories, and ideas.
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
                      <h3 className="articleTitle"> {post.title.rendered} </h3>
                      <div className="articleDescription">
                        <img src={BlogImage} alt="Profile Picture" />
                        <div className="articleTimeline">
                          <p>{post.yoast_head_json.author}</p>
                          <p style={{ display: "block" }}>
                            {new Date(post.date).toDateString()} .
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
                      <h3 className="articleTitle"> {post.title.rendered} </h3>
                      <div className="articleDescription">
                        <img src={BlogImage} alt="Profile Picture" />
                        <div className="articleTimeline">
                          <p>{post.yoast_head_json.author}</p>
                          <p style={{ display: "block" }}>
                            {new Date(post.date).toDateString().slice(4, 15)}
                            <span style={{ lineHeight: "0" }}>
                              {" "}
                              <RxDotFilled />{" "}
                            </span>
                            {Object.keys(post.yoast_head_json.twitter_misc)
                              .slice(1, 2)
                              .map((key) => (
                                <span key={key}>
                                  {post.yoast_head_json.twitter_misc[key]} read
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
            <a href="https://funconnect.app/blog/" className="viewMore">
              View all
            </a>
          </div>
        </section>
      )}
    </>
  );
}
