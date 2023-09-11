import React, { useState } from "react";
import { Avatar, Circles } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { aboutData } from "../../utils/about/Constant";
import { BiSolidBadgeCheck } from "react-icons/bi";

const index = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-44 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden xl:flex absolute bottom-0 -left-[290px] h-[550px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            My <span className="text-active">Experience & Skill</span>
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere id ipsa, deserunt minima ab velit molestiae
            molestias totam neque perspiciatis?
          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] align-center z-10">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, idx) => {
              const isActive =
                index === idx && "text-active after:w-[100%] after:bg-active after:trasition-all after:duration-300";
              return (
                <div
                  key={idx}
                  className={`${isActive} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(idx)}
                >
                  {item?.title}
                </div>
              );
            })}
          </div>

          <div className="bg-[rgba(65,47,123,0.15)] p-4 py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start rounded-xl">
            {aboutData[index]?.info.map((item, idx) => {
              return (
                <div key={idx} className="max-w-max gap-x-2  text-white/60">
                  <div className="font-medium mb-2 md:mb-0">
                    <div className="flex flex-row items-center">
                      <BiSolidBadgeCheck className="text-active mr-2" />
                      {item?.title}
                    </div>
                  </div>
                  <div>{item?.stage}</div>
                  <div className="flex flex-row flex-wrap gap-x-4 mt-3">
                    {item?.icons?.map((icon, idx) => {
                      return (
                        <div className="text-2xl flex flex-col items-center py-4" key={idx}>
                          {icon?.icon}
                          <div className="text-sm mt-1">{icon?.name} </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="gradient-03 z-0"></div>
    </div>
  );
};

export default index;
