import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  variants,
  viewportAmount = 0.5,
  delay = 0,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
