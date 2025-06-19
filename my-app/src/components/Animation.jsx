import React from 'react';
import { motion } from 'framer-motion';

const text = "Done ✔️ (by Ken Kiragu - KenTech Softwares)";

// Parent animation to control staggering + looping
const container = {
  animate: {
    transition: {
      staggerChildren: 0.05, // each letter shows 0.05s after the previous
      repeat: Infinity,
      repeatDelay: 1, // 1 second delay before repeating
    },
  },
};

const child = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } }, // letter fade-in
};

// Fade out the whole text after all letters are shown
const fadeOut = {
  initial: { opacity: 1 },
  animate: { 
    opacity: [1, 0], 
    transition: { 
      delay: text.length * 0.05 + 1, // wait for text to finish typing + stay
      duration: 1, // fade out duration
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0,
    } 
  }
};

function DoneAnimation() {
  return (
    <motion.div
      className="text-center mt-8 text-green-500 text-2xl font-bold"
      variants={fadeOut}
      initial="initial"
      animate="animate"
    >
      <motion.span
        variants={container}
        initial="initial"
        animate="animate"
        className="inline-block"
      >
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
}

export default DoneAnimation;
