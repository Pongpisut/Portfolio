import React from "react";
import Image from "next/image";

const Blub = () => {
  return (
    <div className="absolute -left-32 bottom-0 rotate-12 mix-blend-lighten animate-pulse duration-75 z-0 w-[200px] xl:w-[260px]">
      <Image src={`/Portfolio/image/bulb.png`} width={260} height={200} className="w-full h-full" alt="" />
    </div>
  );
};

export default Blub;
