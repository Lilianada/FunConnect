import React from 'react';
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";
import "./style.scss";

export default function HoverContent({ popId, popImg, popPlace, popLoc}) {
  return (
    <Backdrop>
              <motion.span 
                className="hoverContent"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                exit="exit"
              >
            <div className="exploreImage" key={popId}>
              <img
                src={require("../../assets/images/exploreImages/" + popImg + ".png")}
                alt="Location Pic"
              />
            </div>
            <div className="exploreCard_content">
              <h6 className="exploreCard_title">{popPlace}</h6>
              <p className="exploreCard_subtitle">{popLoc}</p>
              <div className="logosWrap">
                <div className="whiteLogo"></div>
                <div className="orangeLogo"></div>
              </div>
            </div>
          </motion.span>
          </Backdrop>
  )
}
