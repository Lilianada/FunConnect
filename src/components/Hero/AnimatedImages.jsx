import React from "react";
import "./style.scss";
import BigStar from "../../assets/images/heroImages/BigStar.png";
import SmallStar from "../../assets/images/heroImages/SmallStar.png";
import PhoneFrame from "../../assets/images/heroImages/PhoneFrame.png";
import Frame from "../../assets/images/heroImages/Frame.png";

export default function AnimatedImages() {
  return <div>
    <div className="animatedImages_wrap">
          <div className="animatedImages_content">
            <img src={SmallStar} alt="Animated Image" className="animatedImage_one" />
            <img src={BigStar} alt="Animated Image"className="animatedImage_two"  />
            <img src={PhoneFrame} alt="Animated Image" className="animatedImage_three" />
            <img src={Frame} alt="Animated Image" className="animatedImage_four"  />
            </div>
        </div>
  </div>;
}
