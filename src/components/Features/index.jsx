/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import BeachHouse from "../../assets/images/featuresImage/BEACH CLUBS.png";
import FusionSpots from "../../assets/images/featuresImage/FUSION SPOTS.png";
import Cocktail from "../../assets/images/featuresImage/Cocktail and Mocktail.png";
import Park from "../../assets/images/featuresImage/Parks in lagos.png";
import PlanMeet from "../../assets/images/featuresImage/hANGOUT SPOTS IN IBADAN.png";
import "./style.scss";

export default function Features() {
  return (
    <section className="featureSection">
        <div className="featureContent">
            <h5 className="featuresTitle">What can you do with funconnect?</h5>
            <div className="featureFlex">
                <ul className="featuresList">
                    <li className="featuresItem">
                        <h3 className="feature">Beach Houses</h3>
                        <img src={BeachHouse} alt="Featured Image" />
                    </li>
                    <li className="featuresItem">
                        <h3 className="feature">Fusion Spots</h3>
                        <img src={FusionSpots} alt="Featured Image" />
                    </li>
                    <li className="featuresItem">
                        <h3 className="feature">Plan meetups</h3>
                        <img src={PlanMeet} alt="Featured Image" />
                    </li>
                    <li className="featuresItem">
                        <h3 className="feature">Exquisite Parks</h3>
                        <img src={Park} alt="Featured Image" />
                    </li>
                    <li className="featuresItem">
                        <h3 className="feature">Cocktail & Mocktails Spots </h3>
                        <img src={Cocktail} alt="Featured Image" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
  );
}
