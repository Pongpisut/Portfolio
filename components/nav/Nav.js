import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navData } from "./utils/Constant";
import _ from "lodash";

const Nav = () => {
  return (
    <nav>
      <div>
        {_.map(navData, (item, idx) => {
          return (
            <Link key={idx} href={item?.path}>
              {item?.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
