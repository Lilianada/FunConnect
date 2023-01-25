import React, { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import "./BackToTop.scss";

export default function BackToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
  return (
    <div className="backToTop">
        <BsArrowUpShort className="iconPosition iconStyle" onClick={goToTop} />
    </div>
  );
}
