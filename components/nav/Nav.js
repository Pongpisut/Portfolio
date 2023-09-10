import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navData } from "./utils/Constant";
import _ from "lodash";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed  h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[40px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-xl xl:text-xl xl:rounded-full">
        {_.map(navData, (item, idx) => {
          const isActive = pathname === item?.path;
          return (
            <Link
              className={`${
                item?.path === isActive && "text-active"
              } relative flex items-center group hover:text-active transition-all duration-300`}
              key={idx}
              href={item?.path}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">{item?.name}</div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div> {item?.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
