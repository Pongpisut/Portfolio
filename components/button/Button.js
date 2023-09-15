import React from "react";
import { conditionPath } from "@/utils/ConstantAll";

const Button = () => {
  return (
    <>
      <div className="rounded-full border-2 border-sky-500 px-5 py-2 bg-transparent  hover:bg-sky-400 transition-all duration-300 ease-in-out ">
        <a download href={`${conditionPath}/file/cv_pongpisut.pdf`}>
          Download CV (PDF.)
        </a>
      </div>
      <div className="rounded-full border-2 border-sky-500 px-5 py-2 bg-transparent  hover:bg-sky-400 transition-all duration-300 ease-in-out ">
        <a download href={`${conditionPath}/file/cv_pongpisut.jpg`}>
          Download CV (JPG.)
        </a>
      </div>
    </>
  );
};

export default Button;
