import React from "react";
import Link from "next/link";
import { RiInstagramLine, RiFacebookLine, RiLineLine, RiLinkedinLine, RiPhoneLine, RiMailLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={`https://github.com/Pongpisut`}
        className="hover:text-active transition-all duration-300"
        passHref={true}
      >
        <BsGithub />
      </Link>
      <Link
        href={`mailto:pongpisut1997@gmail.com`}
        className="hover:text-active transition-all duration-300"
        passHref={true}
      >
        <RiMailLine />
      </Link>

      <Link
        href={`https://www.instagram.com/ihakeesuimaks15`}
        target="_blank"
        className="hover:text-active transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>

      <Link
        href={`https://www.facebook.com/Functionsz/`}
        target="_blank"
        className="hover:text-active transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>

      <Link
        href={`https://line.me/ti/p/~ihakeesuimaks`}
        target="_blank"
        className="hover:text-active transition-all duration-300
      "
      >
        <RiLineLine />
      </Link>

      <Link
        href={`www.linkedin.com/in/pongpisut-suayroop-41987728b`}
        target="_blank"
        className="hover:text-active transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>

      <Link href={`tel:+6619194753`} className="hover:text-active transition-all duration-300" passHref={true}>
        <RiPhoneLine />
      </Link>
    </div>
  );
};

export default Social;
