import React from "react";
import { FaGlobe } from "react-icons/fa";
import "./style.scss";

export default function ContactInfo() {
  return (
    <section className="contactInfo_section">
      <div className="contactInfo_wrap">
        <div className="contactInfo_content">
          <h5 className="contactInfo_title">Contact Information</h5>
          <p className="contactInfo_text">
            Any questions or remarks? Just write us a message at{" "}
            <a href="mailto:Info@funconnect.app" className="mailTo">Info@funconnect.app</a>
          </p>

          <p className="contactInfo_text">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="contactInfo_icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9901 2.75C13.8509 2.75 14.2319 2.75076 14.5461 2.77889C18.0394 3.09165 20.808 5.86017 21.1207 9.35348C21.1489 9.66768 21.1496 10.0487 21.1496 10.9095V11.8995C21.1496 12.3137 21.4854 12.6495 21.8996 12.6495C22.3138 12.6495 22.6496 12.3137 22.6496 11.8995V10.8591C22.6496 10.0622 22.6496 9.60934 22.6147 9.21971C22.2373 5.00365 18.896 1.66234 14.6799 1.28486C14.2902 1.24998 13.8374 1.24999 13.0404 1.25H12.0001C11.5859 1.25 11.2501 1.58579 11.2501 2C11.2501 2.41422 11.5859 2.75 12.0001 2.75L12.9901 2.75Z"
                fill="#1E1E1E"
              />
              <path
                d="M7.11183 4.0253C6.05974 3.05857 4.44259 3.05857 3.3905 4.0253C3.34742 4.06489 3.30142 4.11089 3.2417 4.17063L2.34419 5.06813C1.44108 5.97125 1.06196 7.27317 1.33902 8.51995C2.91099 15.5938 8.43553 21.1183 15.5094 22.6903C16.7562 22.9674 18.0581 22.5883 18.9612 21.6851L19.8586 20.7877C19.9184 20.728 19.9644 20.6819 20.004 20.6388C20.9708 19.5867 20.9708 17.9696 20.004 16.9175C19.9644 16.8744 19.9184 16.8284 19.8586 16.7686L18.3894 15.2993C17.3693 14.2792 15.8287 13.9875 14.5063 14.564C13.7492 14.894 12.8672 14.7269 12.2832 14.1429L9.88639 11.7461C9.30239 11.1621 9.13536 10.2802 9.46538 9.52308C10.0418 8.20062 9.75009 6.66009 8.72999 5.63999L7.26066 4.17065C7.20092 4.1109 7.15492 4.06489 7.11183 4.0253Z"
                fill="#1E1E1E"
              />
              <path
                d="M12.7071 4.78554C12.2929 4.78554 11.9571 5.12132 11.9571 5.53553C11.9571 5.94975 12.2929 6.28553 12.7071 6.28553H13.2728C13.36 6.28553 13.3957 6.28555 13.4248 6.28597C15.7244 6.3189 17.5806 8.1751 17.6135 10.4747C17.6139 10.5037 17.614 10.5395 17.614 10.6267V11.1924C17.614 11.6066 17.9497 11.9424 18.364 11.9424C18.7782 11.9424 19.114 11.6066 19.114 11.1924V10.6194C19.114 10.5417 19.114 10.4944 19.1134 10.4532C19.0688 7.342 16.5575 4.83068 13.4463 4.78612C13.405 4.78553 13.3577 4.78553 13.28 4.78554H12.7071Z"
                fill="#1E1E1E"
              />
            </svg>
            +234 810 399 7299 
          </p>
          <p className="contactInfo_text">
            <FaGlobe size={24} className="contactInfo_icon" />
            Lagos, Nigeria
          </p>
        </div>

        <div className="contactInfo_content">
          <h5 className="contactInfo_title">Work at Funconnect</h5>
        </div>
      </div>
    </section>
  );
}
