import React from 'react';
import AppStore from "../../assets/images/AppleVector.svg";
import GooglePlay from "../../assets/images/GoogleVector.svg";
import "./DownloadButtons.scss";

export default function DownloadButtons() {
  return (
    <div className="downloadApp">
            <a href="/" className="appStore">
              <img src={AppStore} alt="Apple Logo" className="appleLogo" />
              <div className="textWrap">
                <p className="downloadText">Download on the</p>
                <h5 className="appText">App Store</h5>
              </div>
            </a>
            <a href="/" className="googlePlay">
              <img src={GooglePlay} alt="Google Logo" className="appleLogo" />
              <div className="textWrap">
                <p className="downloadText">Download on the</p>
                <h5 className="appText">Google Play</h5>
              </div>
            </a>
          </div>
  )
}
