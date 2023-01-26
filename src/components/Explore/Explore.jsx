import React, { useState } from "react";
import { ExploreCards } from "../Data";
import "./Explore.scss";

export default function Explore() {
  const [hover, setHover] = useState(false);
  // const [hoverId, setHoverId] = useState(ExploreCards[0].id);

  const isHover = () => {

    setHover(!hover);
  };

  return (
    <section className="exploreSection">
      <div className="exploreContent">
        <h2 className="exploreTitle">Explore Exciting Destinations</h2>
        <p className="exploreSubtitle">
          Explore amazing places in your neighbourhood Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vel nisl faucibus enim, mauris{" "}
        </p>

        <div className="exploreCard_wrap">
          {ExploreCards.map((card) => {
            return (
              <div key={card.id}>
                <div className="exploreCard"  onClick={isHover} >
                  <div className="exploreImage">
                    <img src={card.image} alt="Location Pic" />
                  </div>
                  <div className="exploreCard_content">
                    <h6 className="exploreCard_title">{card.place}</h6>
                    <p className="exploreCard_subtitle">{card.location}</p>
                    <div className="logosWrap">
                      <div className="whiteLogo"></div>
                      <div className="orangeLogo"></div>
                    </div>
                  </div>
                </div>
                {
                  hover && (
                <span className="hoverContent">
                  <div className="exploreImage">
                    <img src={card.image} alt="Location Pic" />
                  </div>
                  <div className="exploreCard_content">
                    <h6 className="exploreCard_title">{card.place}</h6>
                    <p className="exploreCard_subtitle">{card.location}</p>
                  </div>
                </span>
                  )
                }
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
