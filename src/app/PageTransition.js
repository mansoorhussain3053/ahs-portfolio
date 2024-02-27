"use client";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
