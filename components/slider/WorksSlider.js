import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { workSlides } from "./utils/Constant";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { conditionPath } from "@/utils/ConstantAll";
import _ from "lodash";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorksSlider = () => {
  const [isHovered, setHovered] = useState(false);
  //----> Function <----//

  const handleHoverStart = () => {
    setHovered(true);
  };

  const handleHoverEnd = () => {
    setHovered(false);
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides?.slides?.map((item, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {item?.images?.map((image, idx) => {
                return (
                  <Link href={image?.link} target="_blank" passHref={true} key={idx}>
                    <motion.div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      initial="initial"
                      whileHover="whileHover"
                      whileTap="whileTap"
                      onHoverStart={handleHoverStart}
                      onHoverEnd={handleHoverEnd}
                    >
                      <div className=" flex items-center justify-center relative overflow-hidden group">
                        <div className={`inset-0 bg-gradient-to-r from-transparent via-[#4465E8] to-[#4a22bd]`}>
                          <Image src={`${conditionPath}${image?.path}`} width={500} height={300} alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100"> LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0  transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-[10px] left-[5px] invisible md:visible">
                          <motion.div
                            style={{ backgroundColor: "#000" }}
                            animate={{
                              boxShadow: isHovered
                                ? ["0px 0px 0px 0px rgba(0,0,0,0)", `-5px 0px 20px 5px #000`, `-20px 0 100px 16px #000`]
                                : "0px 0px 0px rgba(0,0,0,0)",
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className=" pl-5 pr-5 rounded-full ease-out duration-300"
                          >
                            <small style={{ color: "#fff" }}>{image?.type}</small>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorksSlider;
