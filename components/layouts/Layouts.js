import React from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import { Poppins } from "next/font/google";
import TopLeftImg from "../image/topleftimg/TopLeftImg";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layouts = ({ children }) => {
  return (
    <div
      className={`page bg-site bg-[#08171E] text-white bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      <Suspense fallback={<p>Loading ....</p>}>
        <main>{children}</main>
      </Suspense>
    </div>
  );
};

export default Layouts;
