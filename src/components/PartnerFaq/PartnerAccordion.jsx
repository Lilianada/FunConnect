import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import './style.scss';

export default function PartnerAccordion({ id, title, description, onToggle, isActive }) {
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
            onClick={onToggle}
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
      <p className={`faqContent_description ${isActive ? "open" : ""}`}>
        {description}
      </p>
    </motion.div>
  )
}
