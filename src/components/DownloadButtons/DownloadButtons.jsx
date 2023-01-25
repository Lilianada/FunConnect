import React from "react";
import AppStore from "../../assets/images/AppleVector-colored.svg";
import GooglePlay from "../../assets/images/GoogleVector-colored.svg";
import "./DownloadButtons.scss";

export default function DownloadButtons() {
  return (
    <div className="downloadApp_btns">
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
          <p className="downloadText">Det it on</p>
          <h5 className="appText">Google Play</h5>
        </div>
      </a>
    </div>
  );
}
