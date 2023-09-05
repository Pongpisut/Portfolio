import React from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import { Sora } from "@next/font/google";

const Layouts = ({ children }) => {
  const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  });
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layouts;
