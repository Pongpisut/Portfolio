import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { workSlides } from "./utils/Constant";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorksSlider = () => {
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
                  <Link href="" key={idx}>
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className=" flex items-center justify-center relative overflow-hidden group">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}${image?.path}`}
                          width={500}
                          height={300}
                          alt=""
                        />
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
                      </div>
                    </div>
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
