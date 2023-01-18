import React from "react";
import "./Features.scss";

export default function Features() {
  return (
    <section className="featureSection">
        <div className="featureContent">
            <h5 className="featuresTitle">What can you do with funconnect?</h5>

            <ul className="featuresList">
                <li className="featuresItem">
                    <h3 className="feature">Beach Houses</h3>
                </li>
                <li className="featuresItem">
                    <h3 className="feature">Fusion Spots</h3>
                </li>
                <li className="featuresItem">
                    <h3 className="feature">Plan meetups</h3>
                </li>
                <li className="featuresItem">
                    <h3 className="feature">Exquisite Parks</h3>
                </li>
                <li className="featuresItem">
                    <h3 className="feature">Cocktail & Mocktails Spots </h3>
                </li>
            </ul>
        </div>
    </section>
  );
}
