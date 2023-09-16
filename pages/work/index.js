import React from "react";
import { WorksSlider, Circles, Blub } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const index = () => {
  return (
    <div className="h-full bg-primary/30 py-60 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My <span className="text-active">work</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Over the past 3+ years, I have worked on web design and web development projects in various industries.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorksSlider />
          </motion.div>
        </div>
      </div>
      <Blub />
    </div>
  );
};

export default index;
