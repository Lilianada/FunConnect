import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import "./style.scss";

export default function Community() {
  return (
    <section className="communitySection">
      <div className="communitySection_content">
        <div className="communitySection_image">
            
        </div>
        <div className="communitySection_texts">
          <h3 className="communitySection_title">
            Join our community
          </h3>
          <p className="communitySection_subtitle">
            Join a community of diverse individuals who share the same interest
            and passion for adventure and discovery. Meet new people, share
            experiences and make lasting friendships with like-minded
            individuals.
          </p>
          <button className="btnPrimary">
            You're Sweet <HiArrowUpRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
