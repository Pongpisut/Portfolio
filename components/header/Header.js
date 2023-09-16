import React from "react";
import Head from "next/head";
import Link from "next/link";
import Social from "../social/Social";
import Image from "next/image";
import { conditionPath } from "@/utils/ConstantAll";

const Header = () => {
  return (
    <>
      <Head>
        <title>{`Pongpisut Suayroop`}</title>
        <meta name="description" content={`Pongpisut Suayroop`} />
        <link rel="icon" href="/image/favicon.ico" sizes="any" />
      </Head>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
            <Link href="/">
              <h1 className="text-2xl">
                <Image src={`${conditionPath}/image/logo.png`} alt="" width={50} height={50} />
              </h1>
            </Link>
            <Social />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
