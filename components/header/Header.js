import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>{process.env.FULLNAME_PAGE}</title>
        <meta name="description" content={process.env.DESCRIPTION_PAGE} />
      </Head>
    </>
  );
};

export default Header;
