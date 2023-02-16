import React from "react";
import './style.scss';
import { motion } from "framer-motion";

function Backdrop({ children, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="dialogWrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
