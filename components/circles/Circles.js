import React from "react";
import Image from "next/image";
import { conditionPath } from "@/utils/ConstantAll";

const Circles = () => {
  return (
    <div className="w-[300px] xl:w-[440px] absolute -right-16 -bottom-2 mix-blend-lighten animate-pulse duration-75 z-10">
      <Image src={`${conditionPath}/image/circles.png`} width={260} height={200} className="w-full h-full" alt="" />
    </div>
  );
};

export default Circles;
