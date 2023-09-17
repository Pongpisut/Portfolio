import React from "react";
import Image from "next/image";
import { conditionPath } from "@/utils/ConstantAll";
const Blub = () => {
  return (
    <div className="absolute -left-32 -bottom-36 rotate-12 mix-blend-lighten animate-pulse duration-75 z-0 w-[200px] xl:w-[220px]">
      {/* <Image src={`${conditionPath}/image/bulb.png`} width={260} height={200} className="w-full h-full" alt="" /> */}
    </div>
  );
};

export default Blub;
