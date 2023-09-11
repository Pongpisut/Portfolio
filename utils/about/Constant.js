import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { FaBootstrap, FaGit, FaSass } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiNestjs,
  SiNuxtdotjs,
  SiAntdesign,
  SiTailwindcss,
  SiAdobeillustrator,
} from "react-icons/si";

export const aboutData = [
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 />, name: "Html5" },
          { icon: <FaCss3 />, name: "Css3" },
          { icon: <FaSass />, name: "Sass/Scss" },
          { icon: <RiJavascriptLine />, name: "Javascript" },
          { icon: <SiNestjs />, name: "NestJs" },
          { icon: <FaReact />, name: "ReactJs" },
          { icon: <SiNuxtdotjs />, name: "NuxtJs" },
          { icon: <FaBootstrap />, name: "Boostrap" },
          { icon: <SiAntdesign />, name: "Ant Design" },
          { icon: <SiTailwindcss />, name: "Tailwindcss" },
          { icon: <FaGit />, name: "Git" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma />, name: "Figma" },
          { icon: <SiAdobexd />, name: "Adobe Xd" },
          { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
          { icon: <SiAdobeillustrator />, name: "Adobe illustrator" },
        ],
      },
    ],
  },
];
