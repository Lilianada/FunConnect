import { AnimatePresence, motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import React, { useState } from "react";
import "./FAQ.scss";

export default function FAQAccordion({ id, title, description }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="faqContent_body" key={id}>
      <motion.div
        className="faqContent_item"
        initial={false}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <p className="faqContent_text">{title}</p>
        <AnimatePresence>
          <motion.button
            className="openBtn"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <BsPlusLg size={24} fill="#202020" />
          </motion.button>
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="faqContent_body"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="description">
              <p> {description} </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
