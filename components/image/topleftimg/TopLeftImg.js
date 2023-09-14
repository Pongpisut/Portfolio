import React from "react";
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <>
      <div className="absolute left-0 top-0 mix-blend-lighten z-1 w-[200px] xl:w-[400px] opacity-50">
        <Image src={`${process.env.NEXT_BASE_PATH}/image/top-left-img.png`} width={400} height={400} alt="" />
      </div>
    </>
  );
};

export default TopLeftImg;
