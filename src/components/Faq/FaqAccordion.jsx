import { AnimatePresence, motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import React, { useState } from "react";
import "./style.scss";

export default function FAQAccordion({ id, title, description }) {
  const [isActive, setIsActive] = useState(false);
  const openAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.div
      className="faqContent_item"
      key={id}
      initial={false}
    >
      <div className="faqContent_header">
        <p className="faqContent_text">{title}</p>
        <AnimatePresence>
          <motion.button
            className="openBtn"
            onClick={openAccordion}
            animate="open"
            variants={{
              open: { opacity: 1, height: "auto" },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {isActive ? (<HiMinus size={24} fill="#202020" />) : (<BsPlusLg size={20} fill="#202020" />)}
          </motion.button>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.p
            className="faqContent_description"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", paddingTop: "1rem" },
              collapsed: { opacity: 0, height: 0, paddingTop: "0rem" },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {description} 
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
