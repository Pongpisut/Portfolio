import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <>
      <div className="rounded-full border-2 border-sky-500 px-5 py-2 bg-transparent  hover:bg-sky-400 transition-all duration-300 ease-in-out ">
        <Link href={""}>Download CV (PDF.)</Link>
      </div>
      <div className="rounded-full border-2 border-sky-500 px-5 py-2 bg-transparent  hover:bg-sky-400 transition-all duration-300 ease-in-out ">
        <Link href={""}>Download CV (JPG.)</Link>
      </div>
    </>
  );
};

export default Button;
