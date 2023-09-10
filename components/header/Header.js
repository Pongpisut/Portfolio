import React from "react";
import Head from "next/head";
import Link from "next/link";
import Social from "../social/Social";

const Header = () => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_FULLNAME_PAGE}</title>
        <meta name="description" content={process.env.NEXT_DESCRIPTION_PAGE} />
      </Head>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
            <Link href="/">
              <h1 className="text-2xl">Pppsr.</h1>
            </Link>
            <Social />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
