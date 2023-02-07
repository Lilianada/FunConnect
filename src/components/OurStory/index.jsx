import React from "react";
import Bg from '../../assets/images/ourStoryImages/videoBg.png';
import "./style.scss";

export default function OurStory() {
  return (
    <section className="ourStory_section">
      <div className="ourStory_content">
        <div className="ourStory_bodyVideo">
          <div className="videoPlayer"></div>
            <img src={Bg} alt="Background" className="background"/>
        </div>
        <div className="ourStory_bodyText">
          <h2 className="ourStory_title">
            <span className="primaryText">Our </span>
            Story
          </h2>
          <p className="ourStory_text">
            Our journey began with a simple idea: to create a platform that
            would make it easy for people to discover new and exciting
            experiences. We wanted to help people escape the everyday routine
            and explore the world in new and exciting ways.
            <br />
            <br />
            We started by researching the best recreational centers, bars and
            pubs, and other fun activities around the world. We then carefully
            curated a selection of the best experiences and destinations and
            made them available in one convenient app.
            <br />
            <br />
            We're proud of what we've accomplished, but we're not done yet.
            We're constantly working to improve our app and add even more
            exciting experiences to it. So join us on this journey of adventure
            and discovery and let's make memories together."
          </p>
        </div>
      </div>
    </section>
  );
}
