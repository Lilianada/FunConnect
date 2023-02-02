import React from "react";
import "./style.scss";

export default function OurStory() {
  return (
    <section className="ourStory_section">
      <div className="ourStory_content">
        <div className="ourStory_text">
          <h2>Our Story</h2>
          <p>
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
        <div className="ourStory_video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9bZkp7q19f0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="video"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
