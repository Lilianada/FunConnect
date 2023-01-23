import React, { useState } from "react";

export default function FAQAccordion() {
    const [isActive, setIsActive] = useState(false);

  return (
    
<div
            className="accordion"
            key={id}
        >
                <motion.div
                    className="accordionHeader"
                    initial={false}
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    <div className="faqContent_item">
                        <p className="faqContent_text">Title</p>
                        <AnimatePresence>
                            <motion.div
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "auto" },
                                    collapsed: { opacity: 0, height: 0 }
                                }}
                                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                    <button className="openBtn">
                                <BsPlusLg size={24} fill="#202020"/>
                        </button>
                                </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="accordionBody"
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="description">
                            <p> {description} </p>
                        </div>
                        <div className="selectWrap">
                            <div className="selectList">
                                {variant.map((opt, idx) => (
                                    <select key={idx} className="variantaccordion">
                                        <option value="" defaultValue={true}>
                                            {opt.type}
                                        </option>
                                        {opt.options.map((arr, index) => (
                                            <option value="index" key={index}>
                                                {arr}
                                            </option>
                                        ))}
                                    </select>
                                ))}
                            </div>
                            <div className="servicePrice">
                                <p className="price"> ${total} </p>{" "}
                                <button className="selected">Selected</button>
                            </div>
                        </div>
                    </motion.div>
                )}
             </AnimatePresence>
        </div>
  );
}
