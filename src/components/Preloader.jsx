import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Preloader = () => {
  const name = "Ayan Magardey";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl md:text-6xl font-serif font-semibold text-white tracking-widest flex overflow-hidden">
        {name.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;