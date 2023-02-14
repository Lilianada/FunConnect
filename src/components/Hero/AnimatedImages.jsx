import React, { useEffect, useRef } from "react";
import "./style.scss";
import BigStar from "../../assets/images/heroImages/BigStar.png";
import SmallStar from "../../assets/images/heroImages/SmallStar.png";
import PhoneFrame from "../../assets/images/heroImages/PhoneFrame.png";
import Frame from "../../assets/images/heroImages/Frame.png";

export default function AnimatedImages({ timeline, ease }) {
  // let image1 = useRef(null);
  // let image2 = useRef(null);
  // let image3 = useRef(null);
  // let image4 = useRef(null);
  // useEffect(() => {
  //   timeline
  //     .from(
  //       image1,
  //       1.2,
  //       {
  //         y: 1000,
  //         ease: ease,
  //         opacity: 0,
  //       },
  //       "-=1"
  //     )
  //     .from(
  //       image1,
  //       2,
  //       {
  //         scale: 1.6,
  //         ease: ease,
  //       },
  //       "-=1"
  //     );
  //   timeline
  //     .from(
  //       image2,
  //       1.2,
  //       {
  //         y: 1000,
  //         ease: ease,
  //         opacity: 0,
  //       },
  //       "-=1"
  //     )
  //     .from(
  //       image2,
  //       2,
  //       {
  //         scale: 1.6,
  //         ease: ease,
  //       },
  //       "-=1"
  //     );
  //   timeline
  //     .from(
  //       image3,
  //       1.2,
  //       {
  //         y: 1000,
  //         ease: ease,
  //         opacity: 0,
  //       },
  //       "-=1"
  //     )
  //     .from(
  //       image3,
  //       2,
  //       {
  //         scale: 1.6,
  //         ease: ease,
  //       },
  //       "-=1"
  //     );
  //   timeline
  //     .from(
  //       image4,
  //       1.2,
  //       {
  //         y: 800,
  //         ease: ease,
  //         opacity: 0,
  //       },
  //       "-=1"
  //     )
  //     .from(
  //       image4,
  //       2,
  //       {
  //         scale: 1.6,
  //         ease: ease,
  //       },
  //       "-=1.2"
  //     );
  // });
  return (
    <div className="animatedImages_wrap">
      <div className="animatedImages_content">
        <img
          src={SmallStar}
          alt="Animation"
          // ref={(el) => (image1 = el)}
          className="animatedImage_one"
        />
        <img
          src={BigStar}
          alt="Animation"
          // ref={(el) => (image2 = el)}
          className="animatedImage_two"
        />
        <img
          src={PhoneFrame}
          alt="Animation"
          // ref={(el) => (image3 = el)}
          className="animatedImage_three"
        />
        <img
          src={Frame}
          alt="Animation"
          // ref={(el) => (image4 = el)}
          className="animatedImage_four"
        />
      </div>
    </div>
  );
}
