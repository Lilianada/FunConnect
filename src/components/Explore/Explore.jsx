import React from "react";
import { ExploreCards } from "../Data";
import "./Explore.scss";

export default function Explore() {
  return (
    <section className="exploreSection">
        <div className="exploreContent">
            <h2 className="exploreTitle">Explore Exciting Destinations</h2>
            <p className="exploreSubtitle">Explore amazing places in your neighbourhood Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl faucibus enim, mauris </p>

            <div className="exploreCard_wrap">
              {
                ExploreCards.map((card) => {
                return(
                  <div className="exploreCard" key={card.id}>
                  <img src={card.image} alt="Location Pic" />
                  <div className="exploreCard_content">
                    <h3 className="exploreCard_title">{card.place}</h3>
                    <p className="exploreCard_subtitle">{card.location}</p>
                  </div>
                </div>
                )
                })
              }
            </div>
        </div>
    </section>
  );
}
