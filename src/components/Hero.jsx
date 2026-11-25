import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary overflow-hidden">

      {/* Hero text */}
      <div
        className={`
          absolute inset-x-0
          top-[100px] sm:top-[120px] lg:top-[150px]
          max-w-7xl mx-auto
          ${styles.paddingX}
          flex flex-row items-start gap-3 sm:gap-5
          z-10
        `}
      >
        <div className="flex flex-col justify-center items-center mt-2 sm:mt-5 shrink-0">
          <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-32 sm:h-60 md:h-80 violet-gradient" />
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="font-black text-white text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px] leading-tight">
            Hi, I'm <span className="text-[#915eff]">Abigail</span>
          </h1>

          <p className="text-white-100 font-medium text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-relaxed mt-2 max-w-2xl">
            Former Scientist, current Software Engineer fighting bot traffic at Yelp
          </p>
        </div>
      </div>

      {/* Computer Canvas */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute bottom-5 sm:bottom-10 w-full flex justify-center items-center z-20">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[28px] h-[48px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;