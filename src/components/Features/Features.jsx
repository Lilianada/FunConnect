import React from "react";
import "./Features.scss";

export default function Features() {
  return (
    <section className="featureSection">
        <div className="featureContent">
            <h5 className="featuresTitle">What can you do with funconnect?</h5>

            <ul className="featuresList">
                <li className="featuresItem">
                    <h4 className="feature">Beach Houses</h4>
                </li>
                <li className="featuresItem">
                    <h4 className="feature">Fusion Spots</h4>
                </li>
                <li className="featuresItem">
                    <h4 className="feature">Plan meetups</h4>
                </li>
                <li className="featuresItem">
                    <h4 className="feature">Exquisite Parks</h4>
                </li>
                <li className="featuresItem">
                    <h4 className="feature">Cocktail & Mocktails Spots </h4>
                </li>
            </ul>
        </div>
    </section>
  );
}
