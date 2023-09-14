import React from "react";
import Link from "next/link";
import { RiInstagramLine, RiFacebookLine, RiLineLine, RiLinkedinLine, RiPhoneLine, RiMailLine } from "react-icons/ri";

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={`mailto:${process.env.NEXT_PUBLIC_GMAIL_URL}`}
        className="hover:text-active transition-all duration-300"
        passHref={true}
      >
        <RiMailLine />
      </Link>

      <Link
        href={`${process.env.NEXT_PUBLIC_INSTRAGRAM_URL}`}
        target="_blank"
        className="hover:text-active transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>

      <Link
        href={`${process.env.NEXT_PUBLIC_INSTRAGRAM_URL}`}
        target="_blank"
        className="hover:text-active transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>

      <Link
        href={`${process.env.NEXT_PUBLIC_LINE_URL}`}
        target="_blank"
        className="hover:text-active transition-all duration-300
      "
      >
        <RiLineLine />
      </Link>

      <Link
        href={`${process.NEXT_PUBLIC_LINKIN_URL}`}
        target="_blank"
        className="hover:text-active transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>

      <Link
        href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
        className="hover:text-active transition-all duration-300"
        passHref={true}
      >
        <RiPhoneLine />
      </Link>
    </div>
  );
};

export default Social;
