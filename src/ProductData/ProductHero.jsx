import React from "react";
import { motion } from "framer-motion";

export const ProductHero = ({ title, bgImage }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="relative h-[500px] flex items-center justify-center text-center text-white w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-10 text-5xl md:text-6xl font-bold px-4 text-center"
      >
        {title}
      </motion.h1>
    </section>
  );
};
