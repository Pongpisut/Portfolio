import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";
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
  SiMysql,
  SiTypeform,
} from "react-icons/si";

export const aboutData = [
  {
    title: "experience",
    info: [
      {
        title: "Junior Full Stack Developer",
        company: "INNOVISOR TECH COMPANY LIMITED",
        stage: "September 2022 - Present",
        position: [
          {
            subPostion: "Full Stack developer NestJS,ReactJS",
            title: [
              { content: "Create a central component for the project." },
              { content: "Convert design figma to ReactJS and call api Graphql and Restful Api." },
              { content: "Create an Api using NestJS as per the instructions of System Analyst." },
            ],
          },
        ],
      },
      {
        title: "Front-End Web Developer / Web Design",
        company: "ORANGE TECHNOLOGY SOLUTION COMPANY LIMITED",
        stage: "September 2020 - September 2022",
        position: [
          {
            subPostion: "Web Design (Adobe XD / Photoshop / Figma)",
            title: [
              { content: "Design logo / banner / mobile website  / rich menu / website coporate e-commerce etc." },
              { content: "Convert figma design and responsive website using Html/Css/Scss" },
              { content: "Control freelance work to be completed on time." },
              { content: "Get website requirements from customers." },
            ],
          },
          {
            subPostion: "Front-end web developer (NuxtJS)",
            title: [{ content: "Convert figma design and responsive website using NuxtJS." }],
          },
          {
            subPostion: "Front-end / Back-end web developer Wordpress",
            title: [{ content: "Convert figma design to wordpress and develop a backend system using php." }],
          },
        ],
      },
      {
        title: "Front-End Web Developer (Internship)",
        company: "BANGKOK WEB SOLUTION CO., LTD",
        stage: "June 2019 - Octorber 2019",
        position: [
          {
            subPostion: "",
            title: [
              { content: "Design website using Adobe XD and Photoshop." },
              { content: "Front-end web developer (Html/Css/Scss editor)" },
            ],
          },
        ],
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
          { icon: <SiMysql />, name: "MySql" },
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
