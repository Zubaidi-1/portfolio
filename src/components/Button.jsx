import { motion } from "motion/react";

export default function Button({ text, color, shadow, scrollIntoSection }) {
  console.log("btn", shadow);

  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      className={` p-2 `}
      style={{
        backgroundColor: `#${color}`,
        boxShadow: `0 0 10px 5px #${shadow}`,
      }}
      onClick={() => scrollIntoSection("section-2")}
    >
      {text}
    </motion.button>
  );
}
