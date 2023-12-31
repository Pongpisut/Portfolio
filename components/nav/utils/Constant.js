import React from "react";
import { FaHouse, FaUserTie } from "react-icons/fa6";
import { HiRectangleGroup, HiEnvelope } from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", icon: <FaHouse /> },
  { name: "about", path: "/about", icon: <FaUserTie /> },
  { name: "work", path: "/work", icon: <HiRectangleGroup /> },
  {
    name: "contact",
    path: `mailto:pongpisut1997@gmail.com`,
    icon: <HiEnvelope />,
  },
];
